import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import fitness from "../data/fitness";

export default function FitnessCards() {
  const fitnessData = fitness;

  console.log({...fitnessData})

  return (
    <View>
      {fitnessData.map((item, key) => {
        <Pressable key={key} style={styles.pressable}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
        </Pressable>;
      })}

      <Text>FitnessCards00000000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  cardImage: {
    width: "95%",
    height: 140,
    borderRadius: 7,
  },
});
