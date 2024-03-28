import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  PermissionsAndroid,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType, AVEncodingOption, AudioEncoderAndroidType,
  AudioSet, AudioSourceAndroidType, RecordBackType
} from 'react-native-audio-recorder-player';

export type Props = {
  navigation: any;
};


const NewVoiceRecord = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const [time, setTime] = React.useState(500);
  const timerRef = React.useRef(time);
  const [play, setPlay] = useState(false)
  const [recordSecs, setrecordSecs] = useState(0)
  const [recordTime, setrecordTime] = useState("")
  const [submitRecord, setSubmitRecord] = useState(false)

  const onStartRecord = React.useCallback(async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        console.log('write external stroage', grants);
        if (grants['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED && grants['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED && grants['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.log("err----", err);
        return;
      }
    }
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2, AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    const uri = await audioRecorderPlayer?.startRecorder(undefined, audioSet);
    audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      console.log('record-back', e);
      setPlay(true);
      setrecordSecs(e.currentPosition);
      setrecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    });
    console.log(`uri: ${uri}`);
  }, []);

  const onStopRecord = React.useCallback(async () => {
    let result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setrecordSecs(0);
    setPlay(false);
    setSubmitRecord(true)
    console.log(result);
  }, []);


  console.log('setrecordSecs---->>', recordSecs, " <-----> ", "setrecordTime-----> ", recordTime);
  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />

      <View style={Styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>
            {/* Header */}
            <View style={Styles.headerWrapper}>
              <Text style={[Styles.headText, { color: Colors.authTitleColor }]}>{`Create new Clone`}</Text>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Ionic
                  name={"close"}
                  size={28}
                  style={{ color: Colors.headerColor }} />
              </TouchableOpacity>
            </View>
            {/* Header Ends */}
            <View style={Styles.dataContainer}>
              <Text style={[Styles.toddText, {
                color: Colors.pinColor
              }]}>{"Voice Recording"}</Text>
            </View>


            <View style={Styles.recordContainer}>
              <ImageBackground source={colorTheme === 'dark' ? Images.darkCircle : Images.lightCircle} style={Styles.recordBackground}>
                <View style={Styles.innerRecordView}>
                  <Image source={play == false ? Images.waveStop : Images.wave} style={Styles.waveIcon} />
                  <Text style={[Styles.titleTimer, { color: play == false ? "#EB4335" : "#2ECC71" }]}>{play == false ? `Stopped` : `In Progress`}</Text>
                  <Text style={Styles.timerText}>
                    <Text style={Styles.timerTextBold}>{recordTime == "" ? "00." : `${recordTime.slice(0, 2)}.`}</Text>
                    <Text style={Styles.timerTextSemi}>{recordTime == "" ? "00." : `${recordTime.slice(3, 5)}.`}</Text>
                    <Text style={Styles.timerTextLight}>{recordTime == "" ? "00" : `${recordTime.slice(6, 8)}`}</Text>
                  </Text>
                  {
                    play == false ?
                      <TouchableOpacity onPress={() => { onStartRecord() }}>
                        <Image source={Images.play} style={Styles.playIcon} />
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={() => { onStopRecord() }}>
                        <Image source={Images.stop} style={Styles.playIcon} />
                      </TouchableOpacity>
                  }

                </View>
              </ImageBackground>

              <View style={Styles.dataContainer}>
                <Text style={[Styles.desTimer, {
                  color: Colors.termsColor
                }]}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              </View>

              {
                submitRecord == true &&
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("NewVoiceRecord")
                  }}>
                  <LinearGradient colors={['#254A56', '#415F63']}
                    style={Styles.nextButton}>
                    <Text style={[Styles.nextText, { color: Colors.loginButtonColor }]}>{`Submit Recording`}</Text>
                  </LinearGradient>
                </TouchableOpacity>

              }

            </View>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default NewVoiceRecord;

