import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './screens/Signup'
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Splash from './screens/Splash';
import { AuthContext } from './navigation/context';
import {appBottomTabsScreen,AboutStack,settingsStackScreen} from './navigation/Navigation';
import CustomDrawer from './common/CustomDrawer';

const AuthStack = createStackNavigator();
const drawerStack = createDrawerNavigator();
export default function App() {
  const [loggedInuser, setLoggedin] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoggedin(true),
          setisLoading(false);
      },
      signUp: () => {
        setLoggedin(true),
          setisLoading(false);
      },
      signOut: () => {
        setLoggedin(false),
          setisLoading(false);
      }

    };

  }
    , [])


  React.useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  })

if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loggedInuser ? (
          <drawerStack.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
            <drawerStack.Screen name="Home" component={appBottomTabsScreen} />
            <drawerStack.Screen name="About" component={AboutStack} />
            <drawerStack.Screen name="Logout"  component={Welcome}/>
            <drawerStack.Screen name="settings" component={settingsStackScreen}/>
          </drawerStack.Navigator>
        ):
      <AuthStack.Navigator>
            <AuthStack.Screen name="Greener" component={Welcome} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Signup" component={Signup} />
          </AuthStack.Navigator>}
      </NavigationContainer>
    </AuthContext.Provider>

  );

}

