import { StyleSheet, Image, View } from "react-native";
import { TopPosts } from "./TopPosts";
import { AccountDescription } from "./AccountDescription";
import { AccountNecessities } from "./AccountNecessities";

export function PageHeader () {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/radGrafBackground.jpg')} 
        style={styles.headerImage}
        resizeMode="contain" 
      />
      <View style={styles.accountContainer}>
        <AccountNecessities />
        <AccountDescription />
        <TopPosts />
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
});