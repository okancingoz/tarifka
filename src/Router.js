import React from 'react';
import {Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from './pages/Category';
import Product from './pages/Product';
import Detail from './pages/Detail';
import CustomBackButton from './components/CustomBackButton';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#220f03'} barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerBackVisible: false,
          headerRight: () => (
            <Image
              source={require('./assets/images/logo.png')}
              style={{width: 75, height: 75}}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#220f03',
          },
          title: 'Categories',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 16,
            color: '#fff',
            fontWeight: '400',
          },
        }}>
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen
          name="Product"
          component={Product}
          options={({navigation}) => ({
            headerLeft: () => (
              <CustomBackButton onPress={() => navigation.goBack()} />
            ),
            title: 'Products',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              color: '#fff',
              fontWeight: '400',
            },
          })}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({navigation}) => ({
            headerLeft: () => (
              <CustomBackButton onPress={() => navigation.goBack()} />
            ),
            title: 'Product Details',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              color: '#fff',
              fontWeight: '400',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
