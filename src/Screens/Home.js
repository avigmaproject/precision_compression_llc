import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import RNFetchBlob from "rn-fetch-blob";
import { WebView } from "react-native-webview";

const Home = ({ navigation, ...props }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View
        style={{ alignItems: "center", justifyContent: "center", flex: 1 / 9 }}
      >
        <Image
          source={require("../Assets/Logo.png")}
          resizeMode="contain"
          style={{ width: "90%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 1 / 2 }}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("UnitPage_1")}
        >
          <View style={{ marginTop: 20, position: "absolute" }}>
            <Text style={styles.text}>PC 50-1</Text>
          </View>
          <Image
            source={require("../Assets/PC_50-1.png")}
            style={{ width: "100%", height: "80%" }}
          />
          <View style={{ width: "80%" }}>
            <Text style={styles.text}>
              Precision Compression PC 50-1 Single Stage Unit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 / 2 }}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("UnitPage_2")}
        >
          <View style={{ marginTop: 20, position: "absolute" }}>
            <Text style={styles.text}>PC 50</Text>
          </View>
          <Image
            source={require("../Assets/PC_50.png")}
            style={{ width: "100%", height: "80%" }}
          />
          <View style={{ width: "75%" }}>
            <Text style={styles.text}>
              Precision Compression PC 50 2 Stage Unit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          flex: 1 / 9,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("PdfView")}
          style={styles.button}
        >
          <Text style={styles.text1}>DOWNLOAD BROCHURE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: "700",
    color: "red",
    textAlign: "center",
  },
  button: {
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "red",
  },
  text1: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
