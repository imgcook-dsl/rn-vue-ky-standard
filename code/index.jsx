import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Page } from '@ky/ui/es/page';
import { Text } from '@ky/ui/es/text';
import { Image } from '@ky/ui/es/image';
import open from '@ky/sdk/dist/open';
import Home from './home';

const print = function(value) {
  console.log(value);
};
const Index = () => {
  return (
    <Page
      underStatusBar
      titleBarFixed
      centerLoading
      getData={async () => {
        return {};
      }}
    >
      {(data, paddingTop) => {
        return <Home paddingTop={paddingTop} {...data} />;
      }}
    </Page>
  );
};

const styles = StyleSheet.create({});
export default Index;
