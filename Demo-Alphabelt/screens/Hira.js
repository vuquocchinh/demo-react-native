import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Modalize } from "react-native-modalize";

const Hira = ({ navigation }) => {
  const [change, setChange] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "http://192.168.1.201:5000/api/v1/japanese/getwordtype/hiragana"
        );
        const data = await result.json();
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [change]);

  return (
    <ImageBackground
      source={require("../assets/hirabg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.backButton}
        >
          <Image
            source={require("../assets/a1.png")}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
        <View style={styles.profileButton}>
          <Image
            source={require("../assets/hum.png")}
            style={styles.profileButtonImage}
          />
        </View>
      </View>
      <Text style={styles.titleText}>Bảng Hiragana</Text>
      <Modalize
        handleStyle={styles.modalHandle}
        modalStyle={styles.modal}
        alwaysOpen={550}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={styles.modalContent}>
          {data.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View>
                <Text style={styles.cardText}>Phiên âm: {item.name}</Text>
                <Text style={styles.exampleText}>
                  Mẫu câu ví dụ: {item.example}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Modalize>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 39,
    paddingTop: 25,
  },
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#8bbcdb",
  },
  backButtonImage: {
    width: 20,
    height: 15,
  },
  profileButton: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#8bbcdb",
    marginLeft: "auto",
  },
  profileButtonImage: {
    height: 15,
    width: 20,
  },
  titleText: {
    color: "#FFF",
    fontSize: 38,
    fontWeight: "600",
    width: 200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 34,
  },
  modalHandle: {
    marginTop: 30,
    backgroundColor: "#e9e9e9",
    width: 80,
  },
  modal: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  modalContent: {
    marginTop: 35,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#c4c4c4",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardText: {
    color: "#345c74",
    fontWeight: "600",
    fontSize: 16,
    paddingHorizontal: 20,
    width: 170,
  },
  exampleText: {
    color: "#345c74",
    fontWeight: "600",
    fontSize: 12,
    paddingHorizontal: 20,
  },
});

export default Hira;
