import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import User from "../Components/user";
import CustomButtons from "../Components/buttons";
import CustomButton from "../Components/button";
import { Video } from "expo-av";

import VideoData from "../Data/Dummy";

const Reel = (props) => {
    return (
        <View style={styles.screen}>
            <Video
                source={props.VideoData.uri}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                isLooping
                shouldPlay={false}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "stretch",
                }}
            />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            {props.VideoData.title}
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>
                            {props.VideoData.description}
                        </Text>
                    </View>
                    <View style={styles.comment}>
                        <User comment={props.VideoData.comments[0]} />
                        <User comment={props.VideoData.comments[1]} />
                    </View>
                    <View style={styles.Input}>
                        <TextInput
                            placeholder="Type here ..."
                            placeholderTextColor={"grey"}
                            textAlignVertical="center"
                            style={styles.InputText}
                            multiline={true}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Image
                            source={props.VideoData.user.picture}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                        />
                        <CustomButtons />
                    </View>
                    <CustomButton style={styles.sendButton}>
                        <Ionicons name="md-send" size={25} color="white" />
                    </CustomButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
    },
    container: {
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        height: "65%",
        bottom: 0,
    },
    subContainer: {
        width: "80%",
        height: "100%",
        justifyContent: "flex-end",
    },
    title: {
        // backgroundColor: "blue",
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginLeft: 15,
    },
    description: {
        marginBottom: 5,
        maxWidth: 260,
    },
    descriptionText: {
        fontSize: 25,
        color: "white",
        marginLeft: 15,
    },
    comment: {},
    Input: {},
    InputText: {
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "flex-end",
    },
    button: {
        alignItems: "center",
        width: "20%",
        paddingTop: 10,
        marginBottom: 150,
    },
    sendButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        paddingLeft: 15,
        backgroundColor: "green",
    },
});

export default Reel;
