import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, EvilIcons, Entypo, Ionicons } from "@expo/vector-icons";
import CustomButton from "./button";

const buttons = (props) => {
    return (
        <View>
            <CustomButton>
                <AntDesign name="heart" size={20} color={"red"} />
            </CustomButton>
            <CustomButton>
                <EvilIcons name="comment" size={30} color={"white"} />
            </CustomButton>
            <CustomButton>
                <Entypo name="forward" size={30} color={"white"} />
            </CustomButton>
            <CustomButton>
                <Entypo name="plus" size={30} color={"white"} />
            </CustomButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default buttons;
