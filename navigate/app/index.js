import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import {useEffect} from 'react';
import {getNetworkStateAsync} from 'expo-network';
import { useState } from "react";
import Logo from "../components/logo";
import Colors from "../data/colorMode";


export default function index() {

    // router to navigate between pages
    const router = useRouter();

    // store state of connection
    const [isConnected, setIsConnected] = useState(null);


    // after 2 seconds redirect to profile page if connected to internet else redirect to wifiOff page
    useEffect(() => {
        // wait one second then go to next page
    setTimeout(() => {

        // check if connected to internet
        (() => getNetworkStateAsync())().then((result) => setIsConnected(result.isConnected));

        // if no connection go wifiOff activity
        if (isConnected === false) {
          router.push("/wifiOff");
        }
        // if connection exist go home activity
        else if (isConnected === true) {
          router.push("/home");
        }

    },1000);

    }, [isConnected]);


  return (
    <View style={styles.container}>
        <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:  Colors.main,
  }
});
