import React, { useState, useEffect } from 'react'
import { View, useColorScheme, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import  { flexStyle } from "@/constants/styleTW";
import Icons from "../Icon";
import { Link } from "expo-router";

export default function Seach_Header({onChanges}:{onChanges:(text:string)=>void}) {
    const { top } = useSafeAreaInsets()
    const colorsheme = useColorScheme();
    const headerColor = colorsheme === 'light' ? "bg-[#cecece]" : "bg-mainColor"
    const TextColor = colorsheme === 'light' ? "text-black" : "text-white"

    const [search, setSearch] = useState<string>('')
    useEffect(() => {

        console.log(search)

    }, [search])

    return (
        <View style={{ paddingTop: top + 16,  }} className={`  ${headerColor} gap-5 container px-6 pb-4 ${flexStyle.flexBetween} `}>
            <Link href={".."} >
                <Icons name={"arrow-left"} />
            </Link>
            <Text className={`${TextColor} font-boldMain text-2xl m-0`}>البحث</Text>
            <TouchableOpacity  >
                <Icons name={"filter"} />
            </TouchableOpacity>
            {/* <TextInput
                onChangeText={i => onChanges(i)}
                value={search}
                placeholder={"اكتب شيئا لا يقل عن 3 أحرف ..."}
                className="bg-white flex-1 rounded-lg focus:border-mainColor focus:border-2 h-12 px-4"
            /> */}
          
        </View>
    )
}

