import Login from '../Login/MainScreen' ;
import SignUp from '../Login/SignUp' ;

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Login: Login,
        SignUp: SignUp
    })
)

export default Routes ;