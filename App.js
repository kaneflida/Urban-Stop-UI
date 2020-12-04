import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import Reel from "./Screens/Reel";
import VideoData from "./Data/Dummy";

export default function App() {
    const ViewableItemsChange = (itemchange, changed) => {
        console.log(itemchange);
    };
    return (
        <FlatList
            style={styles.container}
            data={VideoData}
            onViewableItemsChanged={ViewableItemsChange}
            renderItem={(itemData) => {
                return (
                    <View
                        style={{
                            height: Dimensions.get("screen").height,
                            width: Dimensions.get("screen").width,
                        }}>
                        <Reel VideoData={itemData.item} />
                    </View>
                );
            }}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
    },
});
