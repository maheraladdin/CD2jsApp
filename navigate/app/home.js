import React, { useState } from "react";
import {Platform, StyleSheet, View} from "react-native";
import { Camera } from "expo-camera";
import Gallery from "../components/gallery";
import TakePhoto from "../components/takePhoto";
import MyCamera from "../components/camera";
import Colors from "../data/colorMode";


export default function Home() {

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
                <MyCamera setUseCamera={setUseCamera} />
            </>
            ) : (
            <>
                {/* home view */}
                <View style={styles.container}>

                        {/* gallery part */}
                        <Gallery style={styles.gallery} />

                        {/* takePhoto part */}
                        {Platform.OS !== "web" &&
                            <TakePhoto
                                style={styles.takePhoto}
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
    },
    gallery: {
      marginTop: Platform.OS !== "web" && 126,
    },
    takePhoto: {
        marginBottom: 126,
    }
});
