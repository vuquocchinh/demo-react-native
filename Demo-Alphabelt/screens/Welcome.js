import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ( {navigation} ) => {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/logo4.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            marginTop: 50,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/logo3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            marginTop: 20,
                            marginLeft: 130,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/logo2.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            marginTop: 200,
                            left: -20,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: '15deg' }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/logo1.jpg")}
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 20,
                            position: 'absolute',
                            marginTop: 120,
                            marginLeft: 120,
                            transform: [
                                { translateX: 30 },
                                { translateY: 100 },
                                { rotate: '-5deg' }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/logo5.jpg")}
                        style={{
                            width: 230,
                            height: 230,
                            position: 'absolute',
                            borderRadius: 20,
                            marginTop: 435,
                            marginLeft: 280,
                            transform: [{rotate: '5deg'}]
                        }}
                    />
                </View>

                <View style={{
                    paddingHorizontal: 22,
                    position: 'absolute',
                    marginTop: 470,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 48,
                        fontWeight: 800,
                        color: '#fff'
                    }}
                    >BẮT ĐẦU</Text>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: '#fff',
                        marginTop: -5,
                    }}>NÀO !!</Text>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 500,
                            color : '#fff'
                        }}>日本語学習アプリへようこそ</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 500,
                            color : '#fff'
                        }}>一緒に日本語を学びましょう</Text>

                    </View>
                    <Button 
                        title= "BẮT ĐẦU"
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            marginTop: 40,
                            with : "100%",
                        }}
                    />

                    <View>

                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};


export default Welcome;
