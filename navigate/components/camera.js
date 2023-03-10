import {Camera, CameraType,ImageType} from "expo-camera";
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
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takePicture = async () => {
        if (cameraRef) {
            try {
                let photo = await cameraRef.current.takePictureAsync({
                    allowsEditing: Platform.OS === "android" && true,
                    quality: 0,
                    base64: true,
                    ImageType: ImageType.jpg,
                });
                props.setUseCamera(false);
                await cd2js(`data:image/jpg;base64,${photo.base64}`);
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

                    {/* cancel button */}

                    <TouchableOpacity
                        onPress={() => {
                            props.setUseCamera(false);
                        }}
                    >
                        <ArrowBack />
                    </TouchableOpacity>

                    {/*take picture button*/}

                    <TouchableOpacity
                        onPress={takePicture}
                    >
                        <Lens />
                    </TouchableOpacity>

                    {/* flip button */}

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