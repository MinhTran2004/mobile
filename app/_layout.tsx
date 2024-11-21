import { Slot } from "expo-router";
import React from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';  // Đảm bảo trạng thái Redux được khôi phục
// import { store, persistor } from './src/redux/store';
import { Text } from "react-native";
export default function RootLayout() {
  return (
    // <Provider store={store}> {/* Cung cấp Redux store cho toàn bộ ứng dụng */}
    //   <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Slot />
    //   {/* </PersistGate>
    // </Provider> */}
  );
}
