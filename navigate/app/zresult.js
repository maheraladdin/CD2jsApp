import React,{useEffect} from "react";
import {View, TextInput, TouchableOpacity, Platform ,SafeAreaView, StyleSheet,Dimensions} from "react-native";
import * as Clipboard from 'expo-clipboard';
import Share from "../components/share";
import Home from "../components/Home";
import ClipboardIcon from "../components/clipboard";
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import Colors from "../data/colorMode";


const ZResult = () => {

    // store text inside clipboard
    const [copiedText, setCopiedText] = React.useState('');

    useEffect(() => {
        // get text from clipboard ,then store it
        (async () => {
            const text = await Clipboard.getStringAsync();
            setCopiedText(text);
        })();
    }, [copiedText]);

    // store output javascript code inside output.js file ,then share it
    const ShareFile = async () => {
        try {
            let fileUri = FileSystem.documentDirectory + "output.js";
            await FileSystem.writeAsStringAsync(fileUri, copiedText, { encoding: FileSystem.EncodingType.UTF8 });
            await Sharing.shareAsync(fileUri);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <View style={styles.container}>
            {/* text input to preview generated javascript code */}
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
                {Platform.OS !== "web" &&
                <TouchableOpacity onPress={ShareFile}>
                    <Share/>
                </TouchableOpacity>}

                {/* Home icon */}
                <Home />

                {/* clipboard icon */}
                <TouchableOpacity onPress={() => Clipboard.setStringAsync(copiedText)}>
                    <ClipboardIcon />
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
};

export default ZResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.main,
    },
    contain: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: Platform.OS === "web" ? "center"  : "space-between",
        flexDirection: "row",
        margin: 20,
        gap: Platform.OS === "web" ? 40 : 0,
    },
    textInputContainer: {
        width: Dimensions.get("window").width,
        margin: 20,
        marginTop: Platform.OS === "android" ? 60 : 20,
    },
    textInput: {
        borderRadius: 10,
        height: Dimensions.get("window").height - 140,
        width: Dimensions.get("window").width - 40,
        backgroundColor: Colors.output,
        fontWeight: "600",
        borderColor: Colors.border,
        borderStyle: "solid",
        borderWidth: 1,
        color: Colors.text,
        padding: 10,
        fontSize: 16,
        textAlignVertical: "top",
    }
});
