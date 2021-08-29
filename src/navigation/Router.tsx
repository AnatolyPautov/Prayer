import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './routes';
import {defaultOptions} from './options';
import MainStack from './MainStack/MainStack';
import AuthStack from './AuthStack/AuthStack';
import {useSelector} from 'react-redux';
import {getUser} from '../store/store';

const RootStack = createStackNavigator<RootStackParamList>();

const Router = () => {
  const user = useSelector(getUser);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {!user.isAuth ? (
          <RootStack.Screen
            name={Routes.AuthStack}
            component={AuthStack}
            options={defaultOptions}
          />
        ) : (
          <RootStack.Screen
            name={Routes.MainStack}
            component={MainStack}
            options={defaultOptions}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  [Routes.AuthStack]: undefined;
  [Routes.MainStack]: undefined;
};

export default Router;
