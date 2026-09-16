import { StyleSheet, Image, View, Text, Button } from "react-native";

export function PageHeader () {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/radGrafBackground.jpg')} 
        style={styles.headerImage}
        resizeMode="contain" 
      />
      <View style={styles.accountContainer}>
        <Image
          source={require('../assets/radGrafIcon.jpg')} 
          style={styles.iconImage}
          resizeMode="contain"
        />
        <Text style={styles.name}>Radical Graffiti</Text>
        <Text style={styles.bio}>
          A blog devoted to anti-capitalist, anti-authoritarian and anti-colonial graffiti from around the world.
        </Text>
        <Button
          onPress={() => console.log("Yay button works")}
          title="Ask me anything"
        />
        <View style={styles.topPosts}>
          <Image source={require('../assets/radGrafTopPost1.jpg')} style={styles.topPostThumbnails}/>
          <Image source={require('../assets/radGrafTopPost2.jpg')} style={styles.topPostThumbnails}/>
          <Image source={require('../assets/radGrafTopPost3.jpg')} style={styles.topPostThumbnails}/>
        </View>
      </View>
    </View>
  )   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    top: 0,
    height: 220
  },
  accountContainer: {
    flex: 2,
    top: -62,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  
  iconImage: {
    width: 82,
    height: 82,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    marginTop: 13,
    color: '#cc3434',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold'
  },
  bio: {
    marginTop: 5,
    marginBottom: 40,
    color: '#cc3434',
    textAlign: 'center',
    fontSize: 17,
    marginHorizontal: 15,
  },
  topPosts: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },
  topPostThumbnails: {
    height: 120,
    width: 90,
    margin: 1,
  }
});