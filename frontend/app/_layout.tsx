import { Slot } from "expo-router";
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "@/redux/store";
import { Image, View } from "react-native";

export default function RootLayout() {

  const LayoutLoading = () => {
    const selecter = useSelector((state: any) => state.loading);
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', position: 'absolute', zIndex: 999, justifyContent: 'center', alignItems: 'center' }} >
        <Image source={require('@/assets/images/icon-loading.gif')} style={{width: 200, height: 200}}/>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <Slot />
          <LayoutLoading />
        </View>
        <LayoutLoading />
      </PersistGate>
    </Provider>
  );
}
