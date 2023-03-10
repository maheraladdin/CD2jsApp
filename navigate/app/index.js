import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import {useEffect} from 'react';
import {getNetworkStateAsync} from 'expo-network';
import { useState } from "react";
import Logo from "../components/logo";


export default function index() {

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
          router.push("/home");
        }
    },2000);
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
    backgroundColor:  "#F8F9FA",
  }
});
