import { useColorScheme } from "react-native";

const Colors = {
    main: useColorScheme() === "dark" ? "#212529" : "#F8F9FA",
    border:  useColorScheme() === "dark" ? "#707070"  : "#909090",
    output: useColorScheme() === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
    text: useColorScheme() === "dark" ? "#F8F9FA" : "#212529",
}

export default Colors;