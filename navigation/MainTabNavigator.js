import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import CaptionScreen from '../screens/CaptionScreen';
import ReactionCaptureScreen from '../screens/ReactionCaptureScreen';


const CameraStack = createStackNavigator({
  ReactionCapture: ReactionCaptureScreen,
  Home: HomeScreen,
  Caption: CaptionScreen,
  Camera: CameraScreen,
},
{
  headerMode: 'none',
  mode: 'modal',
});

export default CameraStack;