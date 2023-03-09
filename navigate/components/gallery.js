import Svg, {Circle, G, Path} from "react-native-svg";
import React from "react";
import {Platform, TouchableOpacity, View} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Gallery = (props) => {


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: Platform.OS === "android" && true,
            quality: 1,
        });

        if (!result.canceled) {
            props.setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={pickImage}>
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
        </View>
    )
}

export default Gallery;