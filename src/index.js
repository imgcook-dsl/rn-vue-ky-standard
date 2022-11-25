module.exports = function(schema, option) {
  const { prettier } = option;

  // imports
  const imports = [];

  // inline style
  const style = {};

  // Global Public Functions
  const utils = [];

  // Classes
  const classes = [];

  // 1vw = width / 100
  const _w = option.responsive.width / 100;

  const isExpression = (value) => {
    return /^\{\{.*\}\}$/.test(value);
  };

  const toString = (value) => {
    if ({}.toString.call(value) === "[object Function]") {
      return value.toString();
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "object") {
      return JSON.stringify(value, (key, value) => {
        if (typeof value === "function") {
          return value.toString();
        } else {
          return value;
        }
      });
    }

    return String(value);
  };

  // convert to responsive unit, such as vw
  const parseStyle = (style, componentName) => {
    if (componentName === "text") {
      delete style.width;
      delete style.height;
      delete style.maxWidth;
      delete style.fontFamily;
    }
    if (componentName === "div" || componentName === "block") {
      delete style.backgroundImage; //div删除backgroundImage属性
      delete style.backgroundSize;
    }

    for (let key in style) {
      switch (key) {
        case "fontWeight":
          if (style[key] == 400) {
            delete style[key];
          } else {
            style[key] = String(style[key]);
          }
          break;
        case "fontSize":
          if (style[key] == 14) {
            delete style[key];
          } else {
            style[key] = parseFloat(style[key]);
          }
          break;
        case "color":
          if (style[key] === "#333333") {
            delete style[key];
          }
          break;
        case "display":
          if (style[key] === "flex") {
            delete style[key];
          }
          break;
        case "flexDirection":
          if (style[key] === "column") {
            delete style[key];
          }
          break;
        case "opacity":
          style[key] = Number(style[key]);
          break;
        case "boxSizing":
        case "boxShadow":
        case "overflow":
        case "textOverflow":
        case "whiteSpace":
          delete style[key];
          break;
        default:
          //宽、高、margin等距离相关的样式
          if (/[0-9]+px/.test(style[key])) {
            style[key] = parseFloat(style[key]) / 2;
          }
      }
    }

    console.log("====style", style, typeof style);
    return style;
  };

  // parse function, return params and content
  const parseFunction = (func) => {
    const funcString = func.toString();
    const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);
    const content = funcString.slice(
      funcString.indexOf("{") + 1,
      funcString.lastIndexOf("}")
    );
    return {
      params,
      content,
    };
  };

  // parse layer props(static values or expression)
  const parseProps = (value, isReactNode) => {
    if (typeof value === "string") {
      if (isExpression(value)) {
        if (isReactNode) {
          return value.slice(1, -1);
        } else {
          return value.slice(2, -2);
        }
      }

      if (isReactNode) {
        return value;
      } else {
        return `'${value}'`;
      }
    } else if (typeof value === "function") {
      const { params, content } = parseFunction(value);
      return `(${params}) => {${content}}`;
    }
  };

  // parse async dataSource
  const parseDataSource = (data) => {
    const name = data.id;
    const { uri, method, params } = data.options;
    const action = data.type;
    let payload = {};

    // switch (action) {
    //   case "fetch":
    //     if (imports.indexOf(`import {fetch} from whatwg-fetch`) === -1) {
    //       imports.push(`import {fetch} from 'whatwg-fetch'`);
    //     }
    //     payload = {
    //       method: method
    //     };
    //
    //     break;
    //   case "jsonp":
    //     if (imports.indexOf(`import {fetchJsonp} from fetch-jsonp`) === -1) {
    //       imports.push(`import jsonp from 'fetch-jsonp'`);
    //     }
    //     break;
    // }

    Object.keys(data.options).forEach((key) => {
      if (["uri", "method", "params"].indexOf(key) === -1) {
        payload[key] = toString(data.options[key]);
      }
    });

    // params parse should in string template
    if (params) {
      payload = `${toString(payload).slice(0, -1)} ,body: ${
        isExpression(params) ? parseProps(params) : toString(params)
      }}`;
    } else {
      payload = toString(payload);
    }

    let result = `{
      ${action}(${parseProps(uri)}, ${toString(payload)})
        .then((response) => response.json())
    `;

    if (data.dataHandler) {
      const { params, content } = parseFunction(data.dataHandler);
      result += `.then((${params}) => {${content}})
        .catch((e) => {
          console.log('error', e);
        })
      `;
    }

    result += "}";

    return `function ${name}() ${result}`;
  };

  // parse condition: whether render the layer
  const parseCondition = (condition, render) => {
    if (typeof condition === "boolean") {
      // console.log("parseCondition====", `${render}`);
      return `${render}`;

      // return `${condition} && ${render}`;
    } else if (typeof condition === "string") {
      return `${condition.slice(2, -2)} && ${render}`;
    }
  };

  // parse loop render
  const parseLoop = (loop, loopArg, render) => {
    let data;
    let loopArgItem = (loopArg && loopArg[0]) || "item";
    let loopArgIndex = (loopArg && loopArg[1]) || "index";

    if (Array.isArray(loop)) {
      data = toString(loop);
    } else if (isExpression(loop)) {
      data = loop.slice(2, -2);
    }

    // add loop key
    const tagEnd = render.match(/^<.+?\s/)[0].length;
    render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(
      tagEnd
    )}`;

    // remove `this`
    const re = new RegExp(`this.${loopArgItem}`, "g");
    render = render.replace(re, loopArgItem);

    return `${data}.map((${loopArgItem}, ${loopArgIndex}) => {
      return (${render});
    })`;
  };

  //转驼峰
  function toHump(name) {
    return name.replace(/\-(\w)/g, function(all, letter) {
      return letter.toUpperCase();
    });
  }

  // generate render xml
  const generateRender = (schema) => {
    const type = schema.componentName.toLowerCase();
    const className = schema.props && toHump(schema.props.className);
    // console.log("generateRender==", className);

    let classString = "";

    if (className) {
      classString = ` style={styles.${className}}`;
      style[className] = parseStyle(schema.props.style, type);
    } else if (schema.props.style) {
      classString = ` style={${toString(
        parseStyle(schema.props.style, type)
      )}}`;
    }
    // console.log("======className", className, style[className]);

    let xml;
    let props = "";

    //处理ReactElement相关的属性设置
    Object.keys(schema.props).forEach((key) => {
      if (key === "lines") {
        props += ` numberOfLines={1}`;
      } else if (["className", "style", "text", "src"].indexOf(key) === -1) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }
    });

    //html转ReactElement
    switch (type) {
      case "text":
        const innerText = parseProps(schema.props.text, true);
        // console.log("=====innerText", props);
        xml = `<Text${classString}${props}>${innerText}</Text>`;
        break;
      case "image":
        const source = parseProps(schema.props.src);
        xml = `<Image${classString}${props} source={{ uri: ${source} }} />`;
        break;
      case "div":
      // if (schema.props.src) {
      //   console.log("=======generateRender div");
      //   const imgSource = schema.props.src;
      //   xml = `<Image${classString}${props} source={{ uri: ${imgSource} }} />`;
      //   break;
      // }
      case "page":
      //     xml = `<Page
      //     underStatusBar
      //     titleBarFixed
      //     centerLoading
      //     getData={async () => {
      //         return {};
      //     }}
      // >
      //     {(data, paddingTop) => {
      //         return (
      //             <></>
      //         );
      //     }}
      // </Page>`;
      //     break;
      case "block":
        if (schema.children && schema.children.length) {
          xml = `<View${classString}${props}>${transform(
            schema.children
          )}</View>`;
        } else {
          xml = `<View${classString}${props} />`;
        }

        break;
    }

    if (schema.loop) {
      xml = parseLoop(schema.loop, schema.loopArgs, xml);
    }
    if (schema.condition) {
      xml = parseCondition(schema.condition, xml);
    }
    // if (schema.loop || schema.condition) {
    //   xml = `{${xml}}`;
    // }
    //先不考虑有condition的情况
    if (schema.loop) {
      xml = `{${xml}}`;
    }

    return xml;
  };

  // parse schema
  const transform = (schema) => {
    let result = "";

    if (Array.isArray(schema)) {
      schema.forEach((layer) => {
        // console.log("======transform2", layer);
        result += transform(layer);
      });
    } else {
      const type = schema.componentName.toLowerCase();

      if (["page"].indexOf(type) !== -1) {
        // 容器组件处理: state/method/dataSource/lifeCycle/render
        const states = [];
        const lifeCycles = [];
        const methods = [];
        const init = [];
        const render = [`return (`];
        let classData = [
          // `function ${schema.componentName}_${classes.length}() {`,
        ];

        if (schema.state) {
          Object.keys(schema.state).forEach((key) => {
            states.push(
              `const [${key}] = React.useState(${toString(schema.state[key])})`
            );
          });
        }

        if (schema.methods) {
          Object.keys(schema.methods).forEach((name) => {
            const { params, content } = parseFunction(schema.methods[name]);
            methods.push(`function ${name}(${params}) {${content}}`);
          });
        }

        if (schema.dataSource && Array.isArray(schema.dataSource.list)) {
          schema.dataSource.list.forEach((item) => {
            if (typeof item.isInit === "boolean" && item.isInit) {
              init.push(`this.${item.id}();`);
            } else if (typeof item.isInit === "string") {
              init.push(
                `if (${parseProps(item.isInit)}) { this.${item.id}(); }`
              );
            }
            methods.push(parseDataSource(item));
          });

          if (schema.dataSource.dataHandler) {
            const { params, content } = parseFunction(
              schema.dataSource.dataHandler
            );
            methods.push(`function dataHandler(${params}) {${content}}`);
            init.push(`dataHandler()`);
          }
        }

        // if (schema.lifeCycles) {
        //   if (!schema.lifeCycles["_constructor"]) {
        //     lifeCycles.push(`constructor(props, context) { super(); ${init.join("\n")}}`);
        //   }
        //
        //   Object.keys(schema.lifeCycles).forEach((name) => {
        //     const { params, content } = parseFunction(schema.lifeCycles[name]);
        //
        //     if (name === "_constructor") {
        //       lifeCycles.push(`constructor(${params}) { super(); ${content} ${init.join("\n")}}`);
        //     } else {
        //       lifeCycles.push(`${name}(${params}) {${content}}`);
        //     }
        //   });
        // }

        render.push(generateRender(schema));
        render.push(`)`);

        classData = classData
          .concat(states)
          .concat(methods)
          .concat(render);
        // classData.push("}");

        classes.push(classData.join("\n"));
      } else {
        result += generateRender(schema);
        // console.log("========111", result);
      }
    }

    return result;
  };

  //方法相关
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // start parse schema
  transform(schema);

  const prettierOpt = {
    parser: "babel",
    printWidth: 120,
    singleQuote: true,
  };

  return {
    panelDisplay: [
      {
        panelName: `index.jsx`,
        panelValue: prettier.format(
          `
          import React from 'react';
          import { View, StyleSheet } from 'react-native';
          import { Page } from '@ky/ui/es/page';
          import { Text } from '@ky/ui/es/text';
          import { Image } from '@ky/ui/es/image';
          import open from '@ky/sdk/dist/open';
          import Home from './home';

          ${imports.join("\n")}
          ${utils.join("\n")}
          const Index = () => { return (
            <Page
              underStatusBar
              titleBarFixed
              centerLoading
              getData={async () => {
                return {};
              }}
            >
              {(data, paddingTop) => {
                return <Home  paddingTop={paddingTop} {...data} />;
              }}
            </Page>
          ); }
          
          const styles = StyleSheet.create(${toString({})})
          export default Index;
        `,
          prettierOpt
        ),
        panelType: "js",
      },
      {
        panelName: `home.jsx`,
        panelValue: prettier.format(
          `
          import React from 'react';
          import { View, StyleSheet } from 'react-native';
          import { Text } from '@ky/ui/es/text';
          import { Image } from '@ky/ui/es/image';
          import open from '@ky/sdk/dist/open';

          ${imports.join("\n")}
          ${utils.join("\n")}
          const Index = () => { ${classes.join("\n")} }
          
          const styles = StyleSheet.create(${toString(style)})
          export default Index;
        `,
          prettierOpt
        ),
        panelType: "js",
      },
      // {
      //   panelName: `style.js`,
      //   panelValue: prettier.format(`export default ${toString(style)}`, prettierOpt),
      //   panelType: "js"
      // }
    ],
    noTemplate: true,
  };
};
