import React, { useState, useEffect, useRef } from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image, Platform} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Svg, { Circle, G, Path } from "react-native-svg";
import {useRouter} from "expo-router";


export default function Profile(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [useCamera, setUseCamera] = useState(false);
    const cameraRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const router = useRouter();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestMicrophonePermissionsAsync();
            setHasPermission(status === "granted");
        })();
        console.log(image);
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePicture = async () => {
        if (cameraRef) {
            try {
                let photo = await cameraRef.current.takePictureAsync({
                    allowsEditing: Platform.OS === "android" && true,
                    quality: 1,
                });
                router.push('zresult');
            } catch (e) {
                console.error(e);
            }
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: Platform.OS === "android" && true,
            quality: 1,
        });

        if (!result.canceled) {
            router.push('zresult');
        }
    };

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {useCamera ? (
                <View>
                    <Camera style={styles.camera} type={type} ref={cameraRef}>
                        <View style={{ flex: 9 }}></View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setUseCamera(false);
                                }}
                            >
                                <Text style={styles.text}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}
                            >
                                <Text style={styles.text}>Flip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={async () => {
                                    console.log("in take pic");
                                    const r = await takePicture();
                                    setUseCamera(false);
                                    if (!r.canceled) {
                                        setImage(r.uri);
                                    }
                                    console.log("response", JSON.stringify(r));
                                }}
                            >
                                <Text style={styles.text}>PICTURE</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            ) : (
                <>
                    <View style={{ width: "100%" }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 150,
                            }}
                        >
                            <TouchableOpacity
                                style={[styles.button1]}
                                onPress={async () => {
                                    console.log("in pick photo");
                                    const r = await pickImage();
                                    if (!r.canceled) {
                                        setImage(r.uri);
                                    }
                                    console.log("response", JSON.stringify(r));
                                }}
                            >
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={126}
                                    height={126}
                                    viewBox="0 0 126 126"
                                    {...props}
                                >
                                    <Circle
                                        data-name="Ellipse 3"
                                        cx={63}
                                        cy={63}
                                        r={63}
                                        fill="#e4a11b"
                                    />
                                    <G data-name="images" fill="#f8f9fa">
                                        <Path
                                            data-name="Path 3"
                                            d="M9.977 19.951A6.975 6.975 0 103 12.975a6.975 6.975 0 006.977 6.976z"
                                            transform="translate(25.801 29.449) translate(10.951 18.251)"
                                        />
                                        <Path
                                            data-name="Path 4"
                                            d="M65.1 56.8a9.3 9.3 0 01-9.3 9.3H9.3A9.3 9.3 0 010 56.8V19.6a9.3 9.3 0 019.291-9.3 9.3 9.3 0 019.3-9.3H65.1a9.3 9.3 0 019.3 9.3v37.2a9.3 9.3 0 01-9.3 9.3zm0-51.15H18.6a4.65 4.65 0 00-4.65 4.65H55.8a9.3 9.3 0 019.3 9.3v32.552a4.65 4.65 0 004.641-4.65V10.3A4.65 4.65 0 0065.1 5.65zM9.3 14.951a4.65 4.65 0 00-4.65 4.65V56.8l12.3-10.946a2.325 2.325 0 012.93-.288l12.369 8.245L49.508 36.56a2.325 2.325 0 012.683-.437l8.263 9.054V19.6a4.65 4.65 0 00-4.65-4.65H9.3z"
                                            transform="translate(25.801 29.449)"
                                        />
                                    </G>
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button2]}
                                onPress={async () => {
                                    console.log("in pick camera");
                                    setUseCamera(true);
                                }}
                            >
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={126}
                                    height={126}
                                    viewBox="0 0 126 126"
                                    {...props}
                                >
                                    <Circle
                                        data-name="Ellipse 2"
                                        cx={63}
                                        cy={63}
                                        r={63}
                                        fill="#e4a11b"
                                    />
                                    <G data-name="camera" fill="#f8f9fa">
                                        <Path
                                            data-name="Path 1"
                                            d="M69.51 48.34a4.634 4.634 0 01-4.634 4.634H9.268a4.634 4.634 0 01-4.634-4.634v-27.8a4.634 4.634 0 014.634-4.64H14.7a13.9 13.9 0 009.824-4.073L28.37 7.99a4.634 4.634 0 013.267-1.358H42.5a4.633 4.633 0 013.276 1.357l3.838 3.838a13.9 13.9 0 009.831 4.073h5.431a4.634 4.634 0 014.634 4.634zM9.268 11.268A9.268 9.268 0 000 20.536v27.8a9.268 9.268 0 009.268 9.268h55.608a9.268 9.268 0 009.268-9.268v-27.8a9.268 9.268 0 00-9.268-9.268h-5.431a9.267 9.267 0 01-6.551-2.714l-3.838-3.838A9.268 9.268 0 0042.5 2H31.641a9.267 9.267 0 00-6.551 2.714l-3.838 3.839a9.268 9.268 0 01-6.552 2.715z"
                                            transform="translate(25.928 33.196)"
                                        />
                                        <Path
                                            data-name="Path 2"
                                            d="M29.8 32.8a11.585 11.585 0 1111.589-11.581A11.585 11.585 0 0129.8 32.8zm0 4.634a16.219 16.219 0 10-16.215-16.215A16.219 16.219 0 0029.8 37.438zM6.634 11.951a2.317 2.317 0 11-2.317-2.317 2.317 2.317 0 012.317 2.317z"
                                            transform="translate(25.928 33.196) translate(7.268 10.902)"
                                        />
                                    </G>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                        {/* <View
							style={{ width: "100%", alignItems: "center", marginTop: 80 }}
						>
							{true && (
								<Image
									source={{ uri: image }}
									style={{ width: 200, height: 200, backgroundColor: "black" }}
								/>
							)}
						</View> */}
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        flex: 1,
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 40,
        margin: 10,
    },
    button1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 40,
        marginTop: 100,
    },
    button2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 40,
        margin: 10,
    },
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});
