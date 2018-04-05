import React from 'react';
import { Button, DrawerLayoutAndroid, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <View style={{flex: 1, paddingTop: 24}}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          ref={el => this.drawer = el}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, marginBottom: 15}}>
              &lt;DrawerLayoutAndroid /&gt;
            </Text>
            <Text style={{fontSize: 16, marginBottom: 25}}>
              Swipe right, to open the drawer. Or...
            </Text>
            <Button title='Open with a Button' onPress={() => this.drawer.openDrawer()} />
          </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}
