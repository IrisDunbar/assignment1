import { Pressable, Text, StyleSheet } from "react-native"

export function PressableButton() {
  return (
    <>
      <Pressable
        style={styles.button}
        onPress={() => console.log("Yay button works")}
      >
        <Text style={styles.buttonTitle}>Ask me anything</Text>
      </Pressable>
    </>
  )
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: '#0d8bf3',
    padding: 5,
    alignSelf: 'center'
  },
  buttonTitle: {
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 5,
  }
});