import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import React from "react";
import { flexStyle } from "@/constants/styleTW";
import { URL_CLIENT } from "@/constants/env";
import Icons from "../Icon";
import Colors from "@/constants/Colors";

interface cardProps {
    title: string ,
    imageURL: string,
    type: string,
}

export default function CardSearch({title , imageURL , type} : cardProps) {
    const colorSheme = useColorScheme();
    return (
        <View style={{ ...style[colorSheme === "light" ? 'borderColorBlack' : "borderColorWhite"], ...style.container }} className="border-b-2 py-2">
            <View className={`px-6 py-2 ${flexStyle.flexBetween}`}>
                <View className={`flex flex-row`}>
                    <Image
                        source={{ uri: URL_CLIENT + imageURL }}
                        alt="photo"
                        className="rounded-lg"
                        width={80}
                        height={80}
                    />
                    <View style={{paddingHorizontal: 12}} className=" block">
                        <Text style={{color: Colors[colorSheme ?? "light"].text , fontFamily: "CairoBold"}} className="">{title}</Text>
                        <Text style={{color: Colors[colorSheme ?? "light"].tint , fontFamily: "CairoLight"}} className="">{type}</Text>
                        
                    </View>
                </View>
                <TouchableOpacity>
                    <Icons name="pencil" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    borderColorWhite: {
        borderBottomColor: "#fff",
    },
    borderColorBlack: {
        borderBottomColor: "#000",
    },
    ColorWhite: {
        color: "#fff",
    },
    ColorBlack: {
        color: "#000",
    },
    container: {
        borderWidth: 1,
        paddingVertical: 10
    }

})