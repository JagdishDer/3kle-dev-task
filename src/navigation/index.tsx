import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {HomeScreen, IntroScreen} from '../screens';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'IntroScreen'}
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
            presentation: 'transparentModal',
            gestureDirection: 'horizontal',
          }}>
          <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={({}) => ({
              headerShown: false,
              gestureEnabled: false,
            })}
          />
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
