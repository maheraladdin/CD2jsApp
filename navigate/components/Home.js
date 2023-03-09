import {View,TouchableOpacity} from "react-native";
import Svg, {Circle, Path} from "react-native-svg";
import React from "react";
import {useRouter} from "expo-router";

const Home = (props) => {
    const router = useRouter();
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    router.push("/home");
                }}
            >
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    {...props}
                >
                    <Circle data-name="Ellipse 6" cx={40} cy={40} r={40} fill="#e4a11b" />
                    <Path
                        d="M18.2 46.829v-11.9a1.808 1.808 0 011.67-1.68h6.68a1.811 1.811 0 011.67 1.7v11.88a1.684 1.684 0 001.67 1.7h13.36a1.684 1.684 0 001.67-1.7V23.067a1.712 1.712 0 00-.488-1.2l-4.522-4.593V6.094a1.684 1.684 0 00-1.67-1.7H34.9a1.684 1.684 0 00-1.67 1.7v4.389L24.393 1.5a1.651 1.651 0 00-2.365 0L1.988 21.865a1.712 1.712 0 00-.488 1.2v23.764a1.684 1.684 0 001.67 1.7h13.36a1.684 1.684 0 001.67-1.7z"
                        transform="translate(16.79 15.237)"
                        fill="#fff"
                    />
                </Svg>
            </TouchableOpacity>
        </View>
    )

}

export default Home;