import React from "react";
import { View, StyleSheet } from "react-native";

const button = (props) => {
    return <View style={{...styles.button,...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "rgba(0,0,0,0.5)",
        padding:10,
        margin:10,
    },
});

export default button;
