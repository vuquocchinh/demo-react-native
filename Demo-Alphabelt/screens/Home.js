import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Hira from "./Hira";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/Home.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 10,
              marginTop: 45,
              backgroundColor: "#d1a0a7",
            }}
          >
            <Image
              source={require("../assets/hum.png")}
              style={{ height: 15, width: 20 }}
            />
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 45,
            paddingTop: 80,
            fontWeight: 800,
            color: "#FFF",
          }}
        >
          Chào Mừng Trở Lại !
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFF",
            padding: 15,
            borderRadius: 14,
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Tìm kiếm kiến thức mới"
            placeholderTextColor="#345c74"
            style={{
              fontWeight: '700',
              fontSize: 12,
              width: 280,
              paddingHorizontal: 12,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFF2F2",
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}
        >
          <View>
            <Text
              style={{
                color: "#345c74",
                fontSize: 26,
                fontWeight: 600,
                width: 250,
                paddingRight: 100,
              }}
            >
              Danh mục khóa học:
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Welcome")}
              style={{
                flexDirection: "row",
                backgroundColor: "#f58084",
                alignItems: "center",
                marginTop: 20,
                width: 130,
                paddingVertical: 15,
                borderRadius: 14,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: '700',
                  fontSize: 14,
                }}
              >
                Danh mục
              </Text>
              <Image
                source={require("../assets/a3.png")}
                style={{ marginLeft: 20, width: 8, height: 8 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../assets/undraw.png")}
            style={{ marginLeft: -80, marginTop: 35 }}
          />
        </View>
        <Text
          style={{
            color: "#345c74",
            fontWeight: 600,
            fontSize: 24,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Bảng chữ cái
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Hira")}
          style={{
            flexDirection: "row",
            backgroundColor: "#f799ef",
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 20,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/hira.png")}
            style={{ width: 40, height: 40 }}
          />
          <View>
            <Text
              style={{
                color: "#345c74",
                fontWeight: 600,
                fontSize: 16,
                paddingHorizontal: 20,
                width: 170,
              }}
            >
              Bảng Hiragana
            </Text>
            <Text
              style={{
                color: "#345c74",
                fontWeight: 600,
                fontSize: 12,
                paddingHorizontal: 20,
              }}
            >
              Nhấn để tiếp tục
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome")}
          style={{
            flexDirection: "row",
            backgroundColor: "#fa8c32",
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 20,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/kata.png")}
            style={{ width: 40, height: 40 }}
          />
          <View>
            <Text
              style={{
                color: "#345c74",
                fontWeight: 600,
                fontSize: 16,
                paddingHorizontal: 20,
                width: 170,
              }}
            >
              Bảng Katakana
            </Text>
            <Text
              style={{
                color: "#345c74",
                fontWeight: 600,
                fontSize: 12,
                paddingHorizontal: 20,
              }}
            >
              Nhấn để tiếp tục
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome")}
          style={{
            flexDirection: "row",
            backgroundColor: "#32f0fa",
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 20,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/kanji.png")}
            style={{ width: 40, height: 40 }}
          />
          <View>
            <Text
              style={{
                color: "#345c74",
                fontWeight: 600,
                fontSize: 16,
                paddingHorizontal: 20,
                width: 170,
              }}
            >
              Bảng Kanji
            </Text>
            <Text
              style={{
                color: "#345c74",
                fontWeight: 600,
                fontSize: 12,
                paddingHorizontal: 20,
              }}
            >
              Nhấn để tiếp tục
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: "#345c74",
            fontWeight: 600,
            fontSize: 24,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Các đoạn hội thoại
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
