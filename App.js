import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
// import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Appbar />
//         {/* <MemoListScreen /> */}
//         {/* <MemoDetailScreen /> */}
//         {/* <MemoEditScreen /> */}
//         {/* <LoginScreen /> */}
//         <SignupScreen />
//       </View>
//     );
//   }
// }
// Initialize Firebase
const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator(
  {
    MemoLogin: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
  },
  {
    navigationOptions: {
      headerTitle: 'Memot',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerBackTitle: null,
    },
  },
);


export default App;
