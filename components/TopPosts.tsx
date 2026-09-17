import { View, Image, StyleSheet } from "react-native"

export function TopPosts () {
  return (
    <View style={styles.topPosts}>
      <Image source={require('../assets/radGrafTopPost1.jpg')} style={styles.topPostThumbnails}/>
      <Image source={require('../assets/radGrafTopPost2.jpg')} style={styles.topPostThumbnails}/>
      <Image source={require('../assets/radGrafTopPost3.jpg')} style={styles.topPostThumbnails}/>
    </View>
  )
};

const styles = StyleSheet.create({
  topPosts: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },
  topPostThumbnails: {
    height: 120,
    width: 120,
    margin: 1,
  }
});