import { getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {ScreensPrep} from '../screens/';

// let name = user.fullname;
export function getHeaderTitle(route,username) {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  
  

  switch (routeName) {

    case ScreensPrep.Home.name:
      return ScreensPrep.Home.title;

    case ScreensPrep.AddLink.name:
      return ScreensPrep.AddLink.title;

    case ScreensPrep.Profile.name:
      return username;
      
  }
}