import {View} from "react-native";
import Svg, {Circle, Path} from "react-native-svg";
import React from "react";

const Share = (props) => {

    return (
        <View>
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
        </View>
    )
}

export default Share;