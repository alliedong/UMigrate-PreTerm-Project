import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {
  const [catFact, showCatFact] = useState();

  const loadCatFact = async () => {
    const fact = await fetch("https://cat-fact.herokuapp.com/facts");
    const data = await fact.json();
    showCatFact(data);
  }

  useEffect(() => {
    loadCatFact();
  },[])

  if (!catFact) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>{pet.name} - {pet.category}</Text>
      <Text style={styles.button}>Next Fact</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center"
  }
});
