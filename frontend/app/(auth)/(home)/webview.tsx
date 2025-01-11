import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ScreenWebView({ route, navigation }: any) {
    const { url } = route?.params;

    const handleNavigationStateChange = (navState: any) => {

        const currentUrl = navState.url;

        if (currentUrl.includes("vnp_SecureHash")) {
            setTimeout(() => {
                const stackRoutes = navigation.getState()?.routeNames || [];
                if (stackRoutes.includes('LayoutBottomTabs')) {
                    navigation.navigate('LayoutBottomTabs');
                } else {
                    navigation.navigate('index');
                }
            }, 3000);
        }
    };
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: url }}
                startInLoadingState={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
