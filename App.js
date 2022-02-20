import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Metrix } from "@metrixorg/react-native-plugin";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            attribution: "",
            sessionNumber: "",
            deeplink: "",
            userId: "",
            sessionId: ""
        };

        // iOS only
        Metrix.initialize('zcmwmxbkmuodelu')

        // Optional
        Metrix.setOnAttributionChangedListener((attributionData) => {
            this.setState({
              attribution: JSON.stringify(attributionData)
            });
        });

        // Optional
        Metrix.setPushToken('pushToken');
        
        // Optional
        Metrix.addUserAttributes({
            "name": "hisName"
        });

        // Optional
        Metrix.setSessionNumberListener((sessionNum) => {
            this.setState({
                sessionNumber: sessionNum
            });
        });

        // Optional
        Metrix.setSessionIdListener((id) => {
            this.setState({
                sessionId: id
            });
        });
        
        // Optional
        Metrix.shouldLaunchDeeplink = true;
        Metrix.setOnDeeplinkResponseListener((deeplinkUri) => {
            this.setState({
                deeplink: deeplinkUri
            });
        });
        
        // Optional
        Metrix.setUserIdListener((userIdValue) => {
            this.setState({
                userId: userIdValue
            });
        });
    }

    sendEvent = () => {
        Metrix.newEvent('lbuoa', {
            "name": "hisName"
        });
    };

    sendRevenue = () => {
        Metrix.newRevenue('ykwyp', 2500.5, 1);
    };

    render() {
        return (
           <View style={styles.container}>
               <Button
                   onPress = {this.sendEvent}
                   title = "sendEvent"
                   color = "red"
               />
               <Text/>
               <Button
                    onPress = {this.sendRevenue}
                    title = "revenue"
                    color = "red"
               />
               <Text/>
               <Text>sessionNumber: {this.state.sessionNumber}</Text>
               <Text/>
               <Text>sessionId: {this.state.sessionId}</Text>
               <Text/>
               <Text>deeplink: {this.state.deeplink}</Text>
               <Text/>
               <Text>userId: {this.state.userId}</Text>
               <Text/>
               <Text>userAttributesData: {this.state.attribution}</Text>
           </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
   }
});

export default App