import React, { useState } from "react";
import {Platform, StyleSheet, View} from "react-native";
import { Camera } from "expo-camera";
import Gallery from "../components/gallery";
import TakePhoto from "../components/takePhoto";
import MyCamera from "../components/camera";
import Colors from "../data/colorMode";
import {useRouter} from "expo-router";


export default function Home() {

    // router used to navigate to another page
    const router = useRouter();

    // camera permission handler
    const [permission, requestPermission] = Camera.useCameraPermissions();

    // camera state
    const [useCamera, setUseCamera] = useState(false);

    if (!permission) {
    // Camera permissions are still loading
        return <View />;
    }

    return (
        <View style={styles.container}>
            {/* camera view */}
            {useCamera ? (
            <>
                <MyCamera router={router} setUseCamera={setUseCamera} />
            </>
            ) : (
            <>
                {/* home view */}
                <View style={styles.container}>

                        {/* gallery part */}
                        <Gallery />

                        {/* takePhoto part */}
                        {Platform.OS !== "web" &&
                            <TakePhoto
                                permission={permission}
                                requestPermission={requestPermission}
                                setUseCamera={setUseCamera}
                            />
                        }

                </View>
            </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: Colors.main,
    }
});
