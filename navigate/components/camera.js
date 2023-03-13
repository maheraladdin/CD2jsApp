import {Camera, CameraType} from "expo-camera";
import {TouchableOpacity, View, StyleSheet, Platform} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import cd2js from "../logic/CD2JS";
import ArrowBack from "./arrowBack";
import FlipCamera from "./flipCamera";
import Lens from "./lens";


const MyCamera = (props) => {

    // camera back/front state
    const [type, setType] = React.useState(CameraType.back);

    // router used to navigate to another page
    const router = useRouter();

    // camera reference
    const cameraRef = React.useRef(null);

    // flip camera form back to front and vice versa
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    // take a picture
    const takePicture = async () => {
        if (cameraRef) {
            try {
                // take a picture
                let photo = await cameraRef.current.takePictureAsync({
                    allowsEditing: Platform.OS === "android" && true,
                    quality: 0,
                    base64: true,
                });
                // close camera view
                props.setUseCamera(false);
                // start generating javascript code form image
                await cd2js(`data:image/jpeg;base64,${photo.base64}`);
                // go to zresult activity
                router.push('zresult');
            } catch (e) {
                console.error(e);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>

                    {/* cancel button in camera view */}

                    <TouchableOpacity
                        onPress={() =>
                            // close camera view
                            props.setUseCamera(false)
                        }
                    >
                        <ArrowBack />
                    </TouchableOpacity>

                    {/*take picture button in camera view */}

                    <TouchableOpacity onPress={takePicture}>
                        <Lens />
                    </TouchableOpacity>

                    {/* flip button in camera view */}

                    <TouchableOpacity onPress={toggleCameraType}>
                        <FlipCamera />
                    </TouchableOpacity>

                </View>
            </Camera>
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
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        margin: 30,
    },
});

export default MyCamera;