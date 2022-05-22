import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
// import AppNavigator from './src/navigation';
import HomeScreen from './src/containers/Home';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { watchAddNote } from './src/redux/sagas';
import reducers from './src/redux/reducers';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import createSagaMiddleware from 'redux-saga';
import AppNavigator from './src/navigation';
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';

const App = () => {
  GoogleSignin.configure({
    webClientId: "10381853266-uimturbvhmslqkvr2dinpvg0irkq938q.apps.googleusercontent.com",
    androidClientId: "10381853266-418d05l8lu5v2ndd8e2d8mfnd0lv2d75.apps.googleusercontent.com"
  });
  let store = null;
  const sagaMiddleware = createSagaMiddleware();

  store = compose(applyMiddleware(sagaMiddleware))(createStore)(reducers);
  const persistor = persistStore(store);
  sagaMiddleware.run(watchAddNote);

  return (
   <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
