import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ky/ui/es/text';
import { Image } from '@ky/ui/es/image';
import open from '@ky/sdk/dist/open';

const print = function(value) {
  console.log(value);
};
const Index = () => {
  function onButtonPress() {
    open('kwaiying://mv');
  }
  return (
    <View style={styles.page}>
      <View style={styles.longBannerWrapper}>
        <Image
          style={styles.longBanner}
          source={{ uri: 'https://static.imgcook.com/img/test/f544a5806bdb11edaa31b37c2481b79b.png' }}
        />
        <View style={styles.statusbar}>
          <Text style={styles.time} numberOfLines={1}>
            9:41
          </Text>
          <View style={styles.primary}>
            <Image
              style={styles.badge}
              source={{ uri: 'https://static.imgcook.com/img/test/f69960106bdb11eda26cc17d643cbfe0.png' }}
            />
            <Image
              style={styles.iconWifi}
              source={{ uri: 'https://static.imgcook.com/img/test/f673afa06bdb11edae424b94eb7f3cdd.png' }}
            />
            <View style={styles.view}>
              <View style={styles.mask} />
            </View>
            <Image
              style={styles.dot}
              source={{ uri: 'https://static.imgcook.com/img/test/f650e5606bdb11eda085df741f3f9bcd.png' }}
            />
          </View>
        </View>
        <View style={styles.navbar}>
          <Image
            style={styles.iconLeft}
            source={{ uri: 'https://static.imgcook.com/img/test/f6c1cfa06bdb11ed833b85770e10c6b3.png' }}
          />
          <Image
            style={styles.bg}
            source={{ uri: 'https://static.imgcook.com/img/test/f75313206bdb11edaa31b37c2481b79b.png' }}
          />
        </View>
        <View style={styles.floorBgWrapper} />
        <View style={styles.backgroundWrapper} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { position: 'relative', alignItems: 'flex-start', width: 375, height: 812 },
  longBannerWrapper: {
    position: 'absolute',
    top: 0,
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  longBanner: { width: 375, height: 812 },
  statusbar: {
    position: 'relative',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14.5,
    marginRight: 14,
    width: 319.5,
    marginBottom: -29
  },
  time: { lineHeight: 10.5, letterSpacing: -0.15, color: '#ffffff', fontSize: 15, fontWeight: '600' },
  primary: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 3 },
  badge: { marginTop: -1, marginRight: 5, width: 17, height: 10.5 },
  iconWifi: { marginTop: -0.5, marginRight: 5, width: 15.5, height: 11 },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 1,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 1.333335,
    borderColor: 'rgba(255,255,255,0.35)',
    width: 22,
    height: 11.5
  },
  mask: { borderRadius: 0.666665, backgroundColor: '#ffffff', width: 18, height: 7.5 },
  dot: { marginTop: -0.5, width: 1.5, height: 4 },
  navbar: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 44,
    backgroundColor: 'rgba(216,216,216,0.00)',
    width: 375,
    height: 44
  },
  iconLeft: { marginTop: -2.5, marginRight: 88, marginLeft: 18, width: 16.5, height: 16.5 },
  bg: { marginTop: -1.5, width: 140, height: 20.5 },
  floorBgWrapper: {
    position: 'relative',
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 9.5
  },
  backgroundWrapper: {
    position: 'relative',
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  }
});
export default Index;
