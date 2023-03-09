import { StyleSheet, View } from "react-native";
import WifiOff from "../../components/offline";

export default function wifiOff() {


    return (
        <View style={styles.container}>
            <WifiOff />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8F9FA",
    }
});
