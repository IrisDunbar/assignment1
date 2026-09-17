import { Image, Text, View, StyleSheet } from "react-native";

export function AccountNecessities () {
  return (
    <View> 
      <Image
        source={require('../assets/radGrafIcon.jpg')} 
        style={styles.iconImage}
        resizeMode="contain"
      />
      <Text style={styles.name}>Radical Graffiti</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  iconImage: {
    alignSelf: "center",
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
});