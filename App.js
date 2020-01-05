import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screen/Login/MainScreen';
import SignUpScreen from './screen/Login/SignUp';

const mainNavigation = createStackNavigator({
  Login,
  SignUpScreen,
});

export default createAppContainer(mainNavigation);