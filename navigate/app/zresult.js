import React,{useEffect} from "react";
import {View, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView, StyleSheet,Dimensions } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Share from "../components/share";
import Home from "../components/Home";
import ClipboardIcon from "../components/clipboard";
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';


const ZResult = () => {

    const [copiedText, setCopiedText] = React.useState('');

    useEffect(() => {
        (async () => {
            const text = await Clipboard.getStringAsync();
            setCopiedText(text);
        })();
    }, [copiedText]);

    const ShareFile = async () => {
        try {
            let fileUri = FileSystem.documentDirectory + "output.js";
            await FileSystem.writeAsStringAsync(fileUri, copiedText, { encoding: FileSystem.EncodingType.UTF8 });
            await Sharing.shareAsync( fileUri);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
            <View style={styles.textInputContainer}>
                <TextInput
                    value={copiedText}
                    multiline={true}
                    scrollEnabled={true}
                    editable={false}
                    style={styles.textInput}
                />
            </View>

            <SafeAreaView style={styles.contain}>
                {/* share icon */}
                <TouchableOpacity onPress={ShareFile}>
                    <Share />
                </TouchableOpacity>
                {/* Home icon */}
                <Home />
                {/* clipboard icon */}
                <TouchableOpacity onPress={() => Clipboard.setString(copiedText)}>
                    <ClipboardIcon />
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default ZResult;

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 20,
    },
    textInputContainer: {
        alignSelf: "center",
        margin: 20,
    },
    textInput: {
        borderRadius: 10,
        height: Dimensions.get("window").height - 140,
        width: Dimensions.get("window").width - 40,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        fontWeight: "600",
        borderColor: "#909090",
        borderStyle: "solid",
        borderWidth: 1,
        color: "#000",
        padding: 10,
    },
});
