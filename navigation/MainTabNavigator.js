import { createStackNavigator } from 'react-navigation';

import CameraScreen from '../screens/CameraScreen';
import CaptionScreen from '../screens/CaptionScreen';


const CameraStack = createStackNavigator({
  Caption: CaptionScreen,
  Camera: CameraScreen,
},
{
  headerMode: 'none',
  mode: 'modal',
});

export default CameraStack;