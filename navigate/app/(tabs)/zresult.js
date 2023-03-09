import React,{useEffect} from "react";
import { View, TextInput} from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Share from "../../components/share";
import Home from "../../components/Home";
import ClipboardIcon from "../../components/clipboard";

const ZResult = () => {

    useEffect(() => {
        // Clipboard.setStringAsync("Hello world");
    }, []);

    return (
        <>
            <View style={styles.textInputContainer}>
                <TextInput
                    multiline={true}
                    scrollEnabled={true}
                    editable={false}
                    style={styles.textInput}
                />
            </View>

            <SafeAreaView style={styles.contain}>
                {/* share icon */}
                <Share />
                {/* Home icon */}
                <Home />
                {/* clipboard icon */}
                <ClipboardIcon />
            </SafeAreaView>
        </>
    );
};

export default ZResult;

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
        padding: 20,
    },
    textInputContainer: {
        alignSelf: "center",
        marginTop: 20,
    },
    textInput: {
        // borderRadius: 10,
        height: 320,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        fontWeight: "600",
        borderColor: "#909090",
        borderStyle: "solid",
        borderWidth: 1,
        color: "#000",
        padding: 10,
    },
});
