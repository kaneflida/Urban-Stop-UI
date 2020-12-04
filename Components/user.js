import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const user = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileImage}>
                <Image
                    source={require("../Data/Images/profile.jpg")}
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                    }}
                />
            </View>
            <View style={styles.profileTextContainer}>
                <Text style={styles.profileName} numberOfLines={1}>
                    {props.comment.user.username}
                </Text>
                <Text style={styles.comment} numberOfLines={1}>
                    {props.comment.comment}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
        margin: 10,
    },
    profileTextContainer: {},
    profileName: {
        fontSize: 15,
        color: "white",
    },
    comment: {
        fontSize: 16,
        maxWidth: 180,
        color: "white",
    },
});

export default user;
