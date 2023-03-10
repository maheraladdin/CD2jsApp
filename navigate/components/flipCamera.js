import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {View} from "react-native";

function FlipCamera(props) {
    return (
        <View>
            {/* flip camera icon in camera view */}
            <Svg fill="white" xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
                <Path d="M32.85 21.05L27.9 26l1.8 1.75 2-2q-.35 3.6-2.5 5.85-2.15 2.25-5.2 2.25-.85 0-1.475-.125-.625-.125-1.175-.375l-1.85 1.8q1.05.65 2.125.925T24 36.35q4.25 0 7.075-2.95t3.075-7.55l1.9 1.9 1.8-1.75zM15.25 31.3l4.95-4.95-1.8-1.75-2 2q.35-3.6 2.5-5.85 2.15-2.25 5.2-2.25.85 0 1.475.125.625.125 1.175.375l1.85-1.8q-1.05-.65-2.125-.925T24.1 16q-4.25 0-7.075 2.95T13.95 26.5l-1.9-1.9-1.8 1.75zM7 42q-1.2 0-2.1-.9Q4 40.2 4 39V13.35q0-1.15.9-2.075.9-.925 2.1-.925h7.35L18 6h12l3.65 4.35H41q1.15 0 2.075.925Q44 12.2 44 13.35V39q0 1.2-.925 2.1-.925.9-2.075.9zm34-3V13.35h-8.75L28.6 9h-9.2l-3.65 4.35H7V39zM24 24z" />
            </Svg>
        </View>
    )
}

export default FlipCamera;
