import React from "react";
import { StyleSheet } from "react-native";
import Reel from "./Screens/Reel";

export default function App() {
    return <Reel/>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
