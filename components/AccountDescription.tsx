import { Text, Button, View, StyleSheet } from "react-native";

export function AccountDescription () {
  return (
    <View> 
      <Text style={styles.bio}>
        A blog devoted to anti-capitalist, anti-authoritarian and anti-colonial graffiti from around the world.
      </Text>
      <Button
        onPress={() => console.log("Yay button works")}
        title="Ask me anything"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  bio: {
    marginTop: 5,
    marginBottom: 40,
    color: '#cc3434',
    textAlign: 'center',
    fontSize: 17,
    marginHorizontal: 15,
  },
});