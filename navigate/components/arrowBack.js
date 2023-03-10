import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {View} from "react-native";

function ArrowBack(props) {
    return (
        <View>
            <Svg fill="white" xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
                <Path d="M32.75 44l-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15z" />
            </Svg>
        </View>
    )
}

export default ArrowBack;
