module.exports = {
  componentName: "Page",
  id: "Block_745855",
  rect: {
    x: 0,
    y: 0,
    width: 342,
    height: 534,
  },
  smart: {},
  props: {
    style: {
      display: "flex",
      position: "relative",
      alignItems: "flex-start",
      flexDirection: "column",
      width: "750px",
      height: "1624px",
    },
    className: "page",
  },
  children: [
    {
      componentName: "Block",
      id: "14fc5279-5da7-4ae7-a427-d824cff00cec",
      props: {
        style: {
          display: "flex",
          position: "absolute",
          top: "0px",
          alignItems: "flex-start",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
        },
        className: "long-banner-wrapper",
      },
      rect: {
        x: 0,
        y: 0,
        width: 750,
        height: 1624,
      },
      children: [
        {
          componentName: "Image",
          id: "fa4bb9b4-6bdb-11ed-82e5-f1f39d2b83b3",
          props: {
            style: {
              width: "750px",
              height: "1624px",
            },
            src:
              "https://static.imgcook.com/img/test/f544a5806bdb11edaa31b37c2481b79b.png",
            className: "long-banner",
          },
          rect: {
            x: 0,
            y: 0,
            width: 750,
            height: 1624,
          },
          selfId: "3E9BB510-C0E3-47BF-B426-1CBB330F19B1",
          nodeLayerName: "国庆中转页---",
          // condition: true,
        },
        {
          componentName: "Block",
          id: "3813adb4-6b01-49f6-8b77-304280652f57",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              alignSelf: "flex-end",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "29px",
              marginRight: "28px",
              width: "639px",
              marginBottom: "-58px",
            },
            className: "statusbar",
          },
          rect: {
            x: 83,
            y: 29,
            width: 639,
            height: 29,
          },
          fileName: "mod_0",
          children: [
            {
              componentName: "Text",
              id: "fa4b92a8-6bdb-11ed-82e5-f1f39d2b83b3",
              props: {
                style: {
                  lineHeight: "21px",
                  letterSpacing: "-0.3px",
                  whiteSpace: "nowrap",
                  color: "#ffffff",
                  fontFamily: "SFProText-Semibold",
                  fontSize: "15px",
                  fontWeight: 600,
                },
                text: "9:41",
                lines: 1,
                className: "time",
              },
              rect: {
                x: 83,
                y: 29,
                width: 26,
                height: 21,
              },
              selfId: "e288cf20-6bdb-11ed-9dd9-936a3c0898d3",
              nodeLayerName: "Time",
            },
            {
              componentName: "Div",
              id: "62b44bf8-555e-48a3-9f63-32929346f7f6",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "6px",
                },
                className: "primary",
              },
              rect: {
                x: 588,
                y: 35,
                width: 134,
                height: 23,
              },
              children: [
                {
                  componentName: "Image",
                  id: "fa4b92a9-6bdb-11ed-82e5-f1f39d2b83b3",
                  props: {
                    style: {
                      marginTop: "-2px",
                      marginRight: "10px",
                      width: "34px",
                      height: "21px",
                    },
                    src:
                      "https://static.imgcook.com/img/test/f69960106bdb11eda26cc17d643cbfe0.png",
                    className: "badge",
                  },
                  rect: {
                    x: 588,
                    y: 35,
                    width: 34,
                    height: 21,
                  },
                  selfId: "e0a20dc2-6bdb-11ed-9dd9-936a3c0898d3",
                  nodeLayerName: "Cellular Connection",
                  smart: {
                    layerProtocol: {
                      field: {
                        type: "signal",
                      },
                    },
                    nodeIdentification: {
                      fieldBind: ["signal"],
                    },
                    nodeCustom: {
                      fieldBind: {
                        confidential: 0.9999301433563232,
                        isConfident: true,
                        label: "signal",
                        type: "fieldBind",
                      },
                    },
                  },
                },
                {
                  componentName: "Image",
                  id: "fa4b92aa-6bdb-11ed-82e5-f1f39d2b83b3",
                  props: {
                    style: {
                      marginTop: "-1px",
                      marginRight: "10px",
                      width: "31px",
                      height: "22px",
                    },
                    src:
                      "https://static.imgcook.com/img/test/f673afa06bdb11edae424b94eb7f3cdd.png",
                    className: "icon-wifi",
                  },
                  rect: {
                    x: 632,
                    y: 35,
                    width: 31,
                    height: 22,
                  },
                  selfId: "e0a20dc7-6bdb-11ed-9dd9-936a3c0898d3",
                  nodeLayerName: "Wifi",
                  smart: {
                    layerProtocol: {
                      field: {
                        type: "wifi",
                      },
                    },
                    nodeIdentification: {
                      fieldBind: ["wifi"],
                    },
                    nodeCustom: {
                      fieldBind: {
                        confidential: 0.9987590312957764,
                        isConfident: true,
                        label: "wifi",
                        type: "fieldBind",
                      },
                    },
                  },
                },
                {
                  componentName: "Div",
                  id: "6c8ea679-a7e8-4815-b498-ef3c55a4742b",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginRight: "2px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderRadius: "2.66667px",
                      borderColor: "rgba(255,255,255,0.35)",
                      width: "44px",
                      height: "23px",
                    },
                    className: "view",
                  },
                  rect: {
                    x: 673,
                    y: 35,
                    width: 44,
                    height: 23,
                  },
                  selfId: "e0a20dce-6bdb-11ed-9dd9-936a3c0898d3",
                  nodeLayerName: "Border",
                  children: [
                    {
                      componentName: "Div",
                      id: "fa4b92ab-6bdb-11ed-82e5-f1f39d2b83b3",
                      props: {
                        style: {
                          borderRadius: "1.33333px",
                          backgroundColor: "#ffffff",
                          width: "36px",
                          height: "15px",
                        },
                        className: "mask",
                      },
                      rect: {
                        x: 677,
                        y: 39,
                        width: 36,
                        height: 15,
                      },
                      selfId: "e0a20dcc-6bdb-11ed-9dd9-936a3c0898d3",
                      nodeLayerName: "Capacity",
                    },
                  ],
                },
                {
                  componentName: "Image",
                  id: "fa4b92ac-6bdb-11ed-82e5-f1f39d2b83b3",
                  props: {
                    style: {
                      marginTop: "-1px",
                      width: "3px",
                      height: "8px",
                    },
                    src:
                      "https://static.imgcook.com/img/test/f650e5606bdb11eda085df741f3f9bcd.png",
                    className: "dot",
                  },
                  rect: {
                    x: 719,
                    y: 42,
                    width: 3,
                    height: 8,
                  },
                  selfId: "e0a20dcd-6bdb-11ed-9dd9-936a3c0898d3",
                  nodeLayerName: "Cap",
                  smart: {
                    layerProtocol: {
                      field: {
                        type: "play",
                      },
                    },
                    nodeIdentification: {
                      fieldBind: ["play"],
                    },
                    nodeCustom: {
                      fieldBind: {
                        confidential: 0.6214015483856201,
                        isConfident: true,
                        label: "play",
                        type: "fieldBind",
                      },
                    },
                  },
                },
              ],
            },
          ],
          smart: {
            layerProtocol: {
              component: {
                type: "statusbar",
              },
              module: {
                type: "statusbar",
                params: {
                  functions: ["statusbar"],
                  semantics: ["signal", "wifi", "play"],
                },
                name: "statusbar",
              },
            },
            nodeIdentification: {
              baseComponent: ["statusbar"],
            },
            nodeCustom: {
              baseComponent: {
                isConfident: true,
                label: "statusbar",
                score: 2.3887871999999994,
                origin_score: 2.3887871999999994,
                type: "baseComponent",
                meta: {
                  threshold: 0.95,
                },
                rect: {
                  x: 83,
                  y: 29,
                  width: 639,
                  height: 29,
                },
                id: "3813adb4-6b01-49f6-8b77-304280652f57",
                selfId: null,
              },
            },
          },
          condition: false,
        },
        {
          componentName: "Block",
          id: "53a5cdb5-c633-403b-9c77-f814f4883290",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "88px",
              backgroundColor: "rgba(216,216,216,0.00)",
              width: "750px",
              height: "88px",
            },
            className: "navbar",
          },
          rect: {
            x: 0,
            y: 88,
            width: 750,
            height: 88,
          },
          selfId: "255750F3-9D2A-4B16-BB0A-B03C065D4225",
          nodeLayerName: "矩形",
          fileName: "mod_1",
          children: [
            {
              componentName: "Image",
              id: "fa4b92a6-6bdb-11ed-82e5-f1f39d2b83b3",
              props: {
                style: {
                  marginTop: "-5px",
                  marginRight: "176px",
                  marginLeft: "36px",
                  width: "33px",
                  height: "33px",
                },
                src:
                  "https://static.imgcook.com/img/test/f6c1cfa06bdb11ed833b85770e10c6b3.png",
                className: "icon-left",
              },
              rect: {
                x: 36,
                y: 113,
                width: 33,
                height: 33,
              },
              selfId: "e0a234d1-6bdb-11ed-9dd9-936a3c0898d3",
              nodeLayerName: "路径",
              smart: {
                layerProtocol: {
                  field: {
                    type: "left",
                  },
                },
                nodeIdentification: {
                  fieldBind: ["left"],
                },
                nodeCustom: {
                  fieldBind: {
                    confidential: 0.9992817044258118,
                    isConfident: true,
                    label: "left",
                    type: "fieldBind",
                  },
                },
              },
            },
            {
              componentName: "Image",
              id: "fa4b4481-6bdb-11ed-82e5-f1f39d2b83b3",
              props: {
                style: {
                  marginTop: "-3px",
                  width: "280px",
                  height: "41px",
                },
                src:
                  "https://static.imgcook.com/img/test/f75313206bdb11edaa31b37c2481b79b.png",
                className: "bg",
              },
              rect: {
                x: 245,
                y: 110,
                width: 280,
                height: 41,
              },
              selfId: "18D827E9-D75B-42B8-82B5-4E4D68153FF6",
              nodeLayerName: "Logo",
            },
          ],
          smart: {
            layerProtocol: {
              component: {
                type: "navbar",
              },
              module: {
                type: "smartModule",
              },
            },
            nodeIdentification: {
              baseComponent: ["navbar"],
            },
            nodeCustom: {
              baseComponent: {
                isConfident: true,
                label: "navbar",
                score: 1,
                origin_score: 1,
                type: "baseComponent",
                meta: {
                  threshold: 0.95,
                },
                rect: {
                  x: 0,
                  y: 88,
                  width: 750,
                  height: 88,
                },
                id: "53a5cdb5-c633-403b-9c77-f814f4883290",
                selfId: "255750F3-9D2A-4B16-BB0A-B03C065D4225",
              },
            },
          },
        },
        {
          componentName: "Block",
          id: "7c5b2fa7-62e5-46df-954b-5e804b2bd0a8",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "19px",
              backgroundSize: "contain",
              backgroundImage:
                "url(https://static.imgcook.com/img/test/f59620e06bdb11eda8d1492a66f502f9.png)",
              overflow: "hidden",
            },
            src:
              "https://static.imgcook.com/img/test/f59620e06bdb11eda8d1492a66f502f9.png",
            className: "floor-bg-wrapper",
          },
          rect: {
            x: 102,
            y: 195,
            width: 545,
            height: 87,
          },
          selfId: "6742096E-5894-4D29-8522-C173980301B5",
          nodeLayerName: "Clip 2",
          smart: {
            layerProtocol: {
              field: {
                type: "pureBackground",
              },
              module: {
                type: "smartModule",
              },
            },
            nodeIdentification: {
              fieldBind: ["pureBackground"],
            },
            nodeCustom: {
              fieldBind: {
                confidential: 0.9999668598175049,
                isConfident: true,
                label: "pureBackground",
                type: "fieldBind",
              },
            },
          },
          children: [],
          condition: true,
        },
        {
          componentName: "Block",
          id: "723dab30-c326-47c5-b30f-7822e59b7ea4",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "30px",
              backgroundSize: "contain",
              backgroundImage:
                "url(https://static.imgcook.com/img/test/f5f0c4006bdb11edadec078b6b2645a4.png)",
              overflow: "hidden",
            },
            src:
              "https://static.imgcook.com/img/test/f5f0c4006bdb11edadec078b6b2645a4.png",
            className: "background-wrapper",
          },
          rect: {
            x: 241,
            y: 312,
            width: 269,
            height: 42,
          },
          selfId: "233B404B-F2D9-4189-ABCA-079E235CAD8E",
          nodeLayerName: "Clip 2",
          children: [],
          smart: {
            layerProtocol: {
              module: {
                type: "smartModule",
              },
            },
          },
          condition: true,
        },
        // {
        //   componentName: "Block",
        //   id: "e983e2cc-d7f3-4a23-991b-873919ac885f",
        //   props: {
        //     style: {
        //       display: "flex",
        //       position: "relative",
        //       alignItems: "center",
        //       flexDirection: "column",
        //       marginTop: "760px",
        //       backgroundColor: "#ffffff",
        //       width: "750px",
        //       height: "510px",
        //       whiteSpace: "nowrap",
        //     },
        //     className: "wrapper-1",
        //   },
        //   rect: {
        //     x: 0,
        //     y: 1114,
        //     width: 750,
        //     height: 510,
        //   },
        //   selfId: "842BC4FF-6547-4033-A516-97F9BF96DC60",
        //   nodeLayerName: "矩形",
        //   fileName: "mod_4",
        //   children: [
        //     {
        //       componentName: "Div",
        //       id: "5bd89f19-d700-4859-929c-33ab716bcbee",
        //       props: {
        //         style: {
        //           display: "flex",
        //           position: "relative",
        //           alignItems: "flex-start",
        //           flexDirection: "row",
        //           justifyContent: "center",
        //           marginTop: "43px",
        //           borderRadius: "21.73913px",
        //           backgroundColor: "#ffffff",
        //           overflow: "hidden",
        //           whiteSpace: "normal",
        //         },
        //         className: "body",
        //       },
        //       rect: {
        //         x: 317,
        //         y: 1157,
        //         width: 116,
        //         height: 116,
        //       },
        //       selfId: "C5FB6843-6E84-4EF4-9B98-D09495236F41",
        //       nodeLayerName: "蒙版",
        //       children: [
        //         {
        //           componentName: "Image",
        //           id: "fa4b92a3-6bdb-11ed-82e5-f1f39d2b83b3",
        //           props: {
        //             style: {
        //               position: "absolute",
        //               top: "2px",
        //               left: "2px",
        //               width: "112px",
        //               height: "112px",
        //             },
        //             src:
        //               "https://static.imgcook.com/img/test/f6eb9ec06bdb11edaa31b37c2481b79b.png",
        //             className: "picture",
        //           },
        //           rect: {
        //             x: 319,
        //             y: 1159,
        //             width: 112,
        //             height: 112,
        //           },
        //           selfId: "8ADBEA7C-ACAD-46CD-80B7-F379E17A1F6D",
        //           nodeLayerName: "位图",
        //           smart: {
        //             layerProtocol: {
        //               field: {
        //                 type: "logo",
        //               },
        //             },
        //             nodeIdentification: {
        //               fieldBind: ["logo"],
        //             },
        //             nodeCustom: {
        //               fieldBind: {
        //                 confidential: 0.7816705107688904,
        //                 isConfident: true,
        //                 label: "logo",
        //                 type: "fieldBind",
        //               },
        //             },
        //           },
        //           condition: false,
        //         },
        //         {
        //           componentName: "Image",
        //           id: "fa4b92a2-6bdb-11ed-82e5-f1f39d2b83b3",
        //           props: {
        //             style: {
        //               position: "relative",
        //               width: "116px",
        //               height: "116px",
        //             },
        //             src:
        //               "https://static.imgcook.com/img/test/f702d0406bdb11eda26cc17d643cbfe0.png",
        //             className: "image",
        //           },
        //           rect: {
        //             x: 317,
        //             y: 1157,
        //             width: 116,
        //             height: 116,
        //           },
        //           selfId: "8BCE81E5-BA46-418B-96F4-F3CBED7CEF31",
        //           nodeLayerName: "512直角",
        //           smart: {
        //             layerProtocol: {
        //               field: {
        //                 type: "icon",
        //               },
        //             },
        //             nodeIdentification: {
        //               fieldBind: ["icon"],
        //             },
        //             nodeCustom: {
        //               fieldBind: {
        //                 confidential: 0.876986563205719,
        //                 isConfident: true,
        //                 label: "icon",
        //                 type: "fieldBind",
        //               },
        //             },
        //           },
        //           condition: true,
        //         },
        //       ],
        //     },
        //     {
        //       componentName: "Text",
        //       id: "fa4b92a1-6bdb-11ed-82e5-f1f39d2b83b3",
        //       props: {
        //         style: {
        //           position: "relative",
        //           marginTop: "18px",
        //           maxWidth: "738px",
        //           height: "43px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //           lineHeight: "44px",
        //           whiteSpace: "pre",
        //           color: "#222222",
        //           fontFamily: "PingFangSC-Medium",
        //           fontSize: "37px",
        //           fontWeight: 500,
        //         },
        //         text: "快影 快手官方剪辑神器",
        //         lines: 1,
        //         className: "organization",
        //       },
        //       rect: {
        //         x: 189,
        //         y: 1291,
        //         width: 374,
        //         height: 43,
        //       },
        //       selfId: "e288cf21-6bdb-11ed-9dd9-936a3c0898d3",
        //       nodeLayerName: "快影 快手官方剪辑神器",
        //     },
        //     {
        //       componentName: "Text",
        //       id: "fa4b4484-6bdb-11ed-82e5-f1f39d2b83b3",
        //       props: {
        //         style: {
        //           position: "relative",
        //           marginTop: "12px",
        //           maxWidth: "738px",
        //           height: "32px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //           lineHeight: "33px",
        //           color: "#666666",
        //           fontFamily: "PingFangSC-Regular",
        //           fontSize: "26px",
        //           fontWeight: 400,
        //         },
        //         text: "10秒下载，快速做任务",
        //         lines: 1,
        //         className: "title",
        //       },
        //       rect: {
        //         x: 249,
        //         y: 1346,
        //         width: 253,
        //         height: 32,
        //       },
        //       selfId: "e288cf25-6bdb-11ed-9dd9-936a3c0898d3",
        //       nodeLayerName: "10秒下载，快速做任务",
        //     },
        //     {
        //       componentName: "Div",
        //       id: "1df0e1a1-f946-430d-99bc-092af7ca66bf",
        //       props: {
        //         style: {
        //           boxSizing: "border-box",
        //           display: "flex",
        //           position: "relative",
        //           alignItems: "center",
        //           flexDirection: "row",
        //           marginTop: "24px",
        //           paddingRight: "139px",
        //           backgroundSize: "contain",
        //           backgroundImage:
        //             "url(https://static.imgcook.com/img/test/f72b18c06bdb11eda085df741f3f9bcd.png)",
        //           paddingLeft: "140px",
        //           height: "112px",
        //           overflow: "hidden",
        //           fontWeight: 600,
        //           lineHeight: "33px",
        //         },
        //         src:
        //           "https://static.imgcook.com/img/test/f72b18c06bdb11eda085df741f3f9bcd.png",
        //         className: "footer",
        //       },
        //       rect: {
        //         x: 170,
        //         y: 1402,
        //         width: 409,
        //         height: 112,
        //       },
        //       selfId: "87E259B8-FA13-4F25-B18D-D317DE3943B6",
        //       nodeLayerName: "矩形备份 2",
        //       smart: {
        //         layerProtocol: {
        //           field: {
        //             type: "pureBackground",
        //           },
        //         },
        //         nodeIdentification: {
        //           fieldBind: ["pureBackground"],
        //         },
        //         nodeCustom: {
        //           fieldBind: {
        //             confidential: 0.9999984502792358,
        //             isConfident: true,
        //             label: "pureBackground",
        //             type: "fieldBind",
        //           },
        //         },
        //       },
        //       children: [
        //         {
        //           componentName: "Text",
        //           id: "fa4b4482-6bdb-11ed-82e5-f1f39d2b83b3",
        //           props: {
        //             style: {
        //               marginTop: "-1px",
        //               color: "#ffffff",
        //               fontFamily: "PingFangSC-Semibold",
        //               fontSize: "33px",
        //             },
        //             text: "立即下载",
        //             lines: 1,
        //             className: "download",
        //           },
        //           rect: {
        //             x: 310,
        //             y: 1438,
        //             width: 130,
        //             height: 39,
        //           },
        //           selfId: "e288cf26-6bdb-11ed-9dd9-936a3c0898d3",
        //           nodeLayerName: "立即下载",
        //         },
        //       ],
        //       condition: true,
        //     },
        //     {
        //       componentName: "Text",
        //       id: "fa4b92a0-6bdb-11ed-82e5-f1f39d2b83b3",
        //       props: {
        //         style: {
        //           position: "relative",
        //           marginTop: "18px",
        //           maxWidth: "738px",
        //           height: "21px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //           lineHeight: "23px",
        //           color: "rgba(102,102,102,0.50)",
        //           fontFamily: "PingFangSC-Regular",
        //           fontSize: "19px",
        //           fontWeight: 400,
        //         },
        //         text:
        //           "如有问题请添加快影官方微信号：17301393758，备注：国庆活动。",
        //         lines: 1,
        //         className: "desc",
        //       },
        //       rect: {
        //         x: 103,
        //         y: 1532,
        //         width: 545,
        //         height: 21,
        //       },
        //       selfId: "e288cf22-6bdb-11ed-9dd9-936a3c0898d3",
        //       nodeLayerName: "如有问题请添加快影官方微信号：17301",
        //     },
        //     {
        //       componentName: "Text",
        //       id: "fa4b6b91-6bdb-11ed-82e5-f1f39d2b83b3",
        //       props: {
        //         style: {
        //           position: "relative",
        //           marginTop: "1px",
        //           maxWidth: "738px",
        //           height: "21px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //           lineHeight: "23px",
        //           color: "rgba(102,102,102,0.50)",
        //           fontFamily: "PingFangSC-Regular",
        //           fontSize: "19px",
        //           fontWeight: 400,
        //         },
        //         text:
        //           "应用名：快影；开发者信息：北京快手科技有限公司。活动所需最低版本：",
        //         lines: 1,
        //         className: "company",
        //       },
        //       rect: {
        //         x: 77,
        //         y: 1554,
        //         width: 597,
        //         height: 21,
        //       },
        //       selfId: "e288cf23-6bdb-11ed-9dd9-936a3c0898d3",
        //       nodeLayerName: "如有问题请添加快影官方微信号：17301",
        //     },
        //     {
        //       componentName: "Text",
        //       id: "fa4b6b90-6bdb-11ed-82e5-f1f39d2b83b3",
        //       props: {
        //         style: {
        //           position: "relative",
        //           marginTop: "1px",
        //           maxWidth: "738px",
        //           height: "21px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //           lineHeight: "23px",
        //           whiteSpace: "pre",
        //           color: "rgba(102,102,102,0.50)",
        //           fontFamily: "PingFangSC-Regular",
        //           fontSize: "19px",
        //           fontWeight: 400,
        //         },
        //         text:
        //           "快手 9.0.10；快手极速版 9.0.10；快影 5.32.0（Android）5.38.0（iOS）",
        //         lines: 1,
        //         className: "info",
        //       },
        //       rect: {
        //         x: 81,
        //         y: 1576,
        //         width: 589,
        //         height: 21,
        //       },
        //       selfId: "e288cf24-6bdb-11ed-9dd9-936a3c0898d3",
        //       nodeLayerName: "如有问题请添加快影官方微信号：17301",
        //     },
        //   ],
        //   smart: {
        //     layerProtocol: {
        //       module: {
        //         type: "smartModule",
        //       },
        //     },
        //   },
        // },
      ],
      smart: {
        layerProtocol: {
          module: {
            type: "smartModule",
          },
        },
      },
    },
  ],
  fileName: "index",
  methods: {
    onButtonPress: function onButtonPress() {
      open("kwaiying://mv");
    },
  },
  lifeCycles: {
    _constructor: function constructor(props, context) {
      console.log("super props");
    },
    componentDidUpdate: (prevProps, prevState, snapshot) => {},
  },
  dataSource: {
    // list: [
    //   {
    //     id: "fetch_example",
    //     isInit: true,
    //     type: "fetch",
    //     options: {
    //       method: "GET",
    //       uri: "https://jsonplaceholder.typicode.com/todos/1",
    //       headers: {
    //         "Content-Type": "json",
    //       },
    //     },
    //     dataHandler: function dataHandler(data, error) {
    //       console.log("fetch example: ", data, error);
    //       return data;
    //     },
    //   },
    //   {
    //     id: "jsonp_example",
    //     isInit: true,
    //     type: "jsonp",
    //     options: {
    //       method: "GET",
    //       params: {},
    //       uri: "https://assets.airbnb.com/frontend/search_results.js",
    //       jsonpCallbackFunction: "search_results",
    //     },
    //     dataHandler: function dataHandler(data, error) {
    //       console.log("jsonp example: ", data, error);
    //       return data;
    //     },
    //   },
    // ],
  },
  state: {
    // data: [
    //   {
    //     title: "小户型卫浴怎样才能装得高大上？",
    //     coverImage:
    //       "https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png",
    //     readCount: 200,
    //     user: {
    //       userImage:
    //         "https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png",
    //       userName: "时尚家居",
    //     },
    //     url: "https://www.imgcook.com",
    //   },
    //   {
    //     title: "拥有超多功能的40平米简约小公寓了解一下",
    //     coverImage:
    //       "https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png",
    //     readCount: 500,
    //     user: {
    //       userImage:
    //         "https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png",
    //       userName: "花花设计工作",
    //     },
    //     url: "https://www.imgcook.com/docs",
    //   },
    // ],
  },
};
