import {View, BackHandler, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Images from '../../../Styles/Images';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

export default function Unity(): React.JSX.Element {
  // const {navigation} = props;
  const navigation = useNavigation();
  const unityRef = useRef<UnityView>(null);
  const [loading, setLoading] = useState(true);
  console.log(unityRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => {
      unityRef.current?.componentWillUnmount();
    };
  }, []);
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('BottomNavigation', {screen: 'HomeTab'});
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  return (
    // <ImageBackground
    //   style={styles.areaContainer}
    //   source={require('../../../Assets/Icons/faceIntercation.png')}>
    //   <StatusBar barStyle={'light-content'} />
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          zIndex: 1, 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <UnityView
          ref={unityRef}
          style={{height: '100%', width: '100%'}}
          androidKeepPlayerMounted={false}
          // onPlayerQuit={f => {console.log("onPlayerQuit")}}
          // onPlayerUnload={f => {console.log("onPlayerQuit")}}
          onUnityMessage={result => {
            console.log('data is received from unity');
            console.log('Message Here : ', result.nativeEvent.message);
            let d = JSON.stringify(result.nativeEvent.message);
            if (d.includes('home')) {
              navigation.navigate('BottomNavigation', {screen: 'HomeTab'});
            }
          }}
        />
      </View>
      {loading ? (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={50} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}