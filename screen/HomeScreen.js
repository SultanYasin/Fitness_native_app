import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: "18" }}>
          HomeScreen
        </Text>
        <View style={styles.viewWrapper}>
          <View>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>WORKOUT</Text>
          </View>
          <View>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>KCAL</Text>
          </View>
          <View>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>MINS</Text>
          </View>
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/2.jpg")} />
        </View>
        <View style={{margin: 50}} >
            
        <FitnessCards />
        </View>
      </View>
    </SafeAreaView>
  );
};
/* https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png */
export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#CD853F",
    paddingTop: 10,
    paddingLeft: 20,
    height: 200,
    width: "100%",
  },

  viewWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  num: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  img: {
    width: "90%",
    height: 120,
    marginTop: 20,
    borderRadius: 7,
  },
});
