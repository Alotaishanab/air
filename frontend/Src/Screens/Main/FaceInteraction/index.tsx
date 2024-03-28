import {
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../../Styles/Images';
import styles from './Styles';

export default function FaceInteraction(): JSX.Element {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../Assets/Icons/faceIntercation.png')}>
      <StatusBar barStyle={'light-content'} />

      <TouchableOpacity>
        <Image
          style={styles.arrowBack}
          source={Images.arrowBack}
        />
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={Images.faceSwap} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={Images.voiceRecord}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={Images.Chat}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={Images.voiceRecord2}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
