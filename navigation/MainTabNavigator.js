import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import CaptionScreen from '../screens/CaptionScreen';
import ReactionCaptureScreen from '../screens/ReactionCaptureScreen';
import ReactionSentScreen from '../screens/ReactionSentScreen';
import ReactionFinal from '../screens/ReactionFinal';


const CameraStack = createStackNavigator({
  Home: HomeScreen,
  ReactionSent: ReactionSentScreen,
  ReactionCapture: ReactionCaptureScreen,
  Caption: CaptionScreen,
  Camera: CameraScreen,
  ReactionFinal: ReactionFinal,
},
{
  headerMode: 'none',
  mode: 'modal',
});

export default CameraStack;