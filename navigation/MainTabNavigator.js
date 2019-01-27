import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import CaptionScreen from '../screens/CaptionScreen';
import ReactionCaptureScreen from '../screens/ReactionCaptureScreen';
import ReactionSentScreen from '../screens/ReactionSentScreen';


const CameraStack = createStackNavigator({
  Home: HomeScreen,
  ReactionSent: ReactionSentScreen,
  ReactionCapture: ReactionCaptureScreen,
  Caption: CaptionScreen,
  Camera: CameraScreen,
},
{
  headerMode: 'none',
  mode: 'modal',
});

export default CameraStack;