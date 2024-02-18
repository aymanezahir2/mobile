import MainHeader from "@/components/components-search/main-header";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1">
      <MainHeader title={"الصفحة الرئيسية"} />
    </View>
  );
}


