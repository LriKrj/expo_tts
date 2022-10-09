
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState("")

  const speak = () => {
    Speech.speak(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(input) => setInput(input)}
        value={input}
      />
      <Button title='Speak' onPress={speak}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 5,
    width: 250,
    borderColor: "black",
    borderWidth: 1
  }
});
