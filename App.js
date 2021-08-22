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
        Metrix.setOnAttributionChangedListener(this.callback);
        Metrix.setPushToken('pushToken');

        Metrix.addUserAttributes({
            "name": "hisName"
        });

        Metrix.getSessionNum(this.sessionNumberCallback);
        Metrix.getSessionId(this.sessionIdCallback);

        Metrix.shouldLaunchDeeplink = true;
        Metrix.setOnDeeplinkResponseListener(this.deeplinkCallback);
        Metrix.setUserIdListener(this.userIdCallback);
    }

    callback = (attributionData) => {
        this.setState({
          attribution: JSON.stringify(attributionData)
        });
    };

    sessionNumberCallback = (sessionNum) => {
        this.setState({
            sessionNumber: sessionNum
        });
    };

    sessionIdCallback = (id) => {
        this.setState({
            sessionId: id
        });
    };

    deeplinkCallback = (deeplinkUri) => {
        this.setState({
            deeplink: deeplinkUri
        });
    };

    userIdCallback = (userIdValue) => {
        this.setState({
            userId: userIdValue
        });
    };

    sendEvent = () => {
        Metrix.newEvent('perzu', {
            "name": "hisName"
        });
    };

    sendRevenue = () => {
        Metrix.newRevenue('perzu', 2500.5, 1);
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