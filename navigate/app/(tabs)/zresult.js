import React,{useState,useEffect} from "react";
import { View, TextInput} from "react-native";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg";
import { useRouter } from "expo-router";
import { onShare } from "../../logic/useShare";

const Setting = (props) => {

    const router = useRouter();
    const [ClipboardData, setClipboardData] = useState("");

    useEffect(() => {
        setClipboardData("Hello world");
    }, []);

    return (
        <>
            <View style={styles.textInputContainer}>
                <TextInput
                    value={ClipboardData}
                    multiline={true}
                    scrollEnabled={true}
                    editable={false}
                    style={styles.textInput}
                />
            </View>

            <SafeAreaView style={styles.contain}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    {...props}
                >
                    <Circle data-name="Ellipse 4" cx={40} cy={40} r={40} fill="#e4a11b" />
                    <Path
                        d="M30.612 6.958a6.957 6.957 0 111.678 4.531l-18.7 8.683a6.954 6.954 0 010 4.185l18.7 8.683a6.957 6.957 0 11-1.358 2.438l-18.7-8.683a6.957 6.957 0 110-9.061l18.7-8.683a6.957 6.957 0 01-.32-2.093z"
                        transform="translate(17.403 18.069)"
                        fill="#fff"
                    />
                </Svg>

                <Svg
                    onPress={() => {
                        router.push("/profile");
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    {...props}
                >
                    <Circle data-name="Ellipse 6" cx={40} cy={40} r={40} fill="#e4a11b" />
                    <Path
                        d="M18.2 46.829v-11.9a1.808 1.808 0 011.67-1.68h6.68a1.811 1.811 0 011.67 1.7v11.88a1.684 1.684 0 001.67 1.7h13.36a1.684 1.684 0 001.67-1.7V23.067a1.712 1.712 0 00-.488-1.2l-4.522-4.593V6.094a1.684 1.684 0 00-1.67-1.7H34.9a1.684 1.684 0 00-1.67 1.7v4.389L24.393 1.5a1.651 1.651 0 00-2.365 0L1.988 21.865a1.712 1.712 0 00-.488 1.2v23.764a1.684 1.684 0 001.67 1.7h13.36a1.684 1.684 0 001.67-1.7z"
                        transform="translate(16.79 15.237)"
                        fill="#fff"
                    />
                </Svg>

                <TouchableOpacity
                >
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    {...props}
                >
                    <Circle data-name="Ellipse 5" cx={40} cy={40} r={40} fill="#e4a11b" />
                    <G fill="#fff">
                        <Path
                            data-name="Path 5"
                            d="M9.129 0A4.129 4.129 0 005 4.129v2.753a4.129 4.129 0 004.129 4.129h8.258a4.129 4.129 0 004.129-4.129V4.129A4.129 4.129 0 0017.388 0zm8.258 2.753a1.376 1.376 0 011.376 1.376v2.753a1.376 1.376 0 01-1.376 1.376H9.129a1.376 1.376 0 01-1.376-1.376V4.129a1.376 1.376 0 011.376-1.376z"
                            transform="translate(19.73 17.978) translate(7.011)"
                        />
                        <Path
                            data-name="Path 6"
                            d="M9.258 1.5H6.506A5.506 5.506 0 001 7.006v28.9a5.506 5.506 0 005.506 5.506h27.528a5.506 5.506 0 005.506-5.506v-28.9A5.506 5.506 0 0034.034 1.5h-2.753v2.753a6.882 6.882 0 01-6.881 6.882h-8.26a6.882 6.882 0 01-6.882-6.882zm18.868 20.244L19.868 30a1.376 1.376 0 01-1.949 0l-4.129-4.127a1.378 1.378 0 111.949-1.949l3.155 3.157 7.283-7.281a1.378 1.378 0 111.949 1.949z"
                            transform="translate(19.73 17.978) translate(0 2.629)"
                        />
                    </G>
                </Svg>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default Setting;

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },
    textInputContainer: {
        alignSelf: "center",
        marginTop: 20,
    },
    textInput: {
        // borderRadius: 10,
        height: 320,
        width: 300,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        fontWeight: "600",
        borderColor: "#909090",
        borderStyle: "solid",
        borderWidth: 1,
        color: "#000",
        padding: 10,
    },
});
