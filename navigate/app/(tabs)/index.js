import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import {useEffect} from 'react';
import Svg, { Circle, Text, TSpan } from "react-native-svg";
import {getNetworkStateAsync} from 'expo-network';
import { useState } from "react";


export default function Home(props) {

  const router = useRouter();
  const [isConnected, setIsConnected] = useState(null);


    // after 2 seconds redirect to profile page if connected to internet else redirect to wifiOff page
  useEffect(() => {
    setTimeout(() => {
        // check if connected to internet
        (async () => await getNetworkStateAsync())().then((result) => setIsConnected(result.isConnected));
        if (isConnected === false) {
          router.push("/wifiOff");
        }
        else if (isConnected === true) {
          router.push("/profile");
        }
    },2000);
  }, [isConnected]);


  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:  "#F8F9FA",
  }
});
