import Svg, {Circle, G, Path} from "react-native-svg";
import React from "react";
import {TouchableOpacity, View} from "react-native";

const TakePhoto = (props) => {
    return (
        <View
            style={{
                height: 252,
                }}
        >
            <TouchableOpacity
                onPress={async () => {
                    // request camera permission
                    if (!props.permission.granted) {
                        props.requestPermission();
                    }
                    // start camera
                    if(props.permission.granted) {
                        props.setUseCamera(true);
                    }
                }}
            >
                {/* camera icon in home activity*/}
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={126}
                    height={126}
                    viewBox="0 0 126 126"
                    {...props}
                >
                    <Circle
                        data-name="Ellipse 2"
                        cx={63}
                        cy={63}
                        r={63}
                        fill="#e4a11b"
                    />
                    <G data-name="camera" fill="#f8f9fa">
                        <Path
                            data-name="Path 1"
                            d="M69.51 48.34a4.634 4.634 0 01-4.634 4.634H9.268a4.634 4.634 0 01-4.634-4.634v-27.8a4.634 4.634 0 014.634-4.64H14.7a13.9 13.9 0 009.824-4.073L28.37 7.99a4.634 4.634 0 013.267-1.358H42.5a4.633 4.633 0 013.276 1.357l3.838 3.838a13.9 13.9 0 009.831 4.073h5.431a4.634 4.634 0 014.634 4.634zM9.268 11.268A9.268 9.268 0 000 20.536v27.8a9.268 9.268 0 009.268 9.268h55.608a9.268 9.268 0 009.268-9.268v-27.8a9.268 9.268 0 00-9.268-9.268h-5.431a9.267 9.267 0 01-6.551-2.714l-3.838-3.838A9.268 9.268 0 0042.5 2H31.641a9.267 9.267 0 00-6.551 2.714l-3.838 3.839a9.268 9.268 0 01-6.552 2.715z"
                            transform="translate(25.928 33.196)"
                        />
                        <Path
                            data-name="Path 2"
                            d="M29.8 32.8a11.585 11.585 0 1111.589-11.581A11.585 11.585 0 0129.8 32.8zm0 4.634a16.219 16.219 0 10-16.215-16.215A16.219 16.219 0 0029.8 37.438zM6.634 11.951a2.317 2.317 0 11-2.317-2.317 2.317 2.317 0 012.317 2.317z"
                            transform="translate(25.928 33.196) translate(7.268 10.902)"
                        />
                    </G>
                </Svg>
            </TouchableOpacity>
        </View>
    )
}

export default TakePhoto;