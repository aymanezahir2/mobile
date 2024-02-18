import Seach_Header from "@/components/components-search/search-header";
import { ScrollView, Text, View, useColorScheme } from "react-native";
import React, { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchingGet from "@/api";
import Colors from "@/constants/Colors";
import CardSearch from "@/components/components-search/cardsearch";




export default function Page() {
    const colorsheme = useColorScheme();

    const [inputHandler, setInputHandler] = useState<string>('');
    const handlerSearch = useCallback((text: string): void => {
        setInputHandler(text);

    }, [inputHandler])

    const [search, setSearch] = useState<searchProps>({ type: "all", name: "" });
    const { data , isLoading} = useQuery({ queryKey: ['product'], queryFn: () => fetchingGet("bijoux") })
    return (
        <ScrollView >
            <Seach_Header onChanges={handlerSearch} />
            {/* <View className=" absolute bg-black w-full h-full inset-0 ">
                <View className="bg-black w-full h-full absolute inset-0" />
            </View> */}
            <View className="">
                {isLoading ? <Text>"loading" </Text>: data.map((e: type)=> <CardSearch imageURL={e.imageURL} key={e.title} title={e.title} type={e.type} />)}
            </View>
        </ScrollView>
    )
}