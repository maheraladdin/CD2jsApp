import React, { useState } from "react";
import {StyleSheet, View} from "react-native";
import { Camera } from "expo-camera";
import Gallery from "../components/gallery";
import TakePhoto from "../components/takePhoto";
import MyCamera from "../components/camera";


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
            {/* camera part */}
            {useCamera ? (
                    <>
                        <MyCamera setUseCamera={setUseCamera} />
                    </>
            ) : (
                <>
                    <View style={styles.container}>
                            {/* gallery part */}
                            <Gallery style={styles.gallery} />
                            {/* takePhoto part */}
                            <TakePhoto style={styles.takePhoto} permission={permission} requestPermission={requestPermission} setUseCamera={setUseCamera}/>
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
    },
    gallery: {
      marginTop: 126,
    },
    takePhoto: {
        marginBottom: 126,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
