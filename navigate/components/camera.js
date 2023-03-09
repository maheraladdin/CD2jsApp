import {Camera, CameraType} from "expo-camera";
import {Text, TouchableOpacity, View, StyleSheet, Platform} from "react-native";
import React from "react";
import {useRouter} from "expo-router";

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
                    quality: 1,
                });
                props.setImage(photo.uri);
                router.push('zresult');
                props.setUseCamera(false);
                return photo;
            } catch (e) {
                console.error(e);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>

                    {/* flip button */}

                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip</Text>
                    </TouchableOpacity>

                    {/* cancel button */}

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.setUseCamera(false);
                        }}
                    >
                        <Text style={styles.text}>CANCEL</Text>
                    </TouchableOpacity>

                     {/*take picture button*/}

                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={takePicture}
                    >
                        <Text style={styles.text}>PICTURE</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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

export default MyCamera;