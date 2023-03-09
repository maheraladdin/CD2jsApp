import Svg, {Circle, Text, TSpan} from "react-native-svg";
import {View} from "react-native";
const Logo = (props) => {

    return (
        <View>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={228}
                height={228}
                viewBox="0 0 228 228"
                {...props}
            >
                <Circle
                    data-name="Ellipse 1"
                    cx={114}
                    cy={114}
                    r={114}
                    fill="#e4a11b"
                />
                <Text
                    transform="translate(50 131)"
                    fill="#f8f9fa"
                    fontSize={45}
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontWeight={700}
                >
                    <TSpan x={0} y={0}>
                        {"CD2js"}
                    </TSpan>
                </Text>
            </Svg>
        </View>
    )
}

export default Logo;