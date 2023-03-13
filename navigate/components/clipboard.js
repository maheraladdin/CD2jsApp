import {View} from "react-native";
import Svg, {Circle, G, Path} from "react-native-svg";
import React from "react";

const ClipboardIcon = (props) => {
    return (
        <View>
            {/* save to clipboard icon in zresult activity */}
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
        </View>
    )
}

export default ClipboardIcon;