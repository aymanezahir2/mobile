import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
interface nameType {
    name: React.ComponentProps<typeof FontAwesome>['name'];
}
export default function Icons({name}: nameType){
    const colorsheme = useColorScheme();
    const textColor = Colors[colorsheme ?? 'light'].text

    return <FontAwesome name={name} size={25} color={textColor}/>

}