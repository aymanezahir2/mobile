import { SafeAreaView, Text, View, StatusBar, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import styleTW, { flexStyle } from "@/constants/styleTW";
import Icons from "../Icon";
import { Link } from "expo-router";
export default function MainHeader({title}: {title : string}){
    const {top} = useSafeAreaInsets()
    const colorsheme = useColorScheme();
    console.log(colorsheme);
    const textColor = Colors[colorsheme ?? 'light'].text
    const headerColor = colorsheme === 'light' ? "bg-[#cecece]" : "bg-mainColor"
    
    return (
        <View style={{paddingTop:top + 16}} className={`  ${headerColor} container px-6 pb-4 ${flexStyle.flexBetween} `}>
            <Icons name={"bars"} />
            <Text style={{color: textColor , fontFamily: "CairoBold"}}>{title}</Text>
            <Link href={'/search'}><Icons name="search"/></Link>
        </View>
    )
}