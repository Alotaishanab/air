import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { styles } from './Styles';
import Images from '../../../Styles/Images'; // Correct path to your Images
import useThemeContext from '../../../Util/useThemeContext';

const TermsConditions = ({ visible, onAccept, onClose }) => {
  const {Colors} = useThemeContext();
  const [showTcModal, setShowTcModal] = useState(visible);

  const handleAcceptTc = () => {
    if (onAccept) {
      onAccept();
    }
    setShowTcModal(false);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setShowTcModal(false);
  };

  return (
    <Modal
      visible={showTcModal}
      animationType="slide"
      onRequestClose={handleClose}
      transparent={true}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.tcModal}>
          <View style={styles.tcModalHeader}>
            <Text style={[styles.tcModalTitle, {color: Colors.authTitleColor}]}>Terms and Conditions</Text>
            <TouchableOpacity onPress={handleClose} style={styles.tcCloseButton}>
              <Image source={Images.cross} style={styles.tcCloseIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.tcModal}>
  <Text style={styles.tcModalTitle}>Terms and Conditions for AIRA</Text>

  {/* List of Terms */}
  <Text style={styles.tcSectionTitle}>1. Acceptance of Terms</Text>
  <Text style={styles.tcContent}>
    By accessing or using the AIRA app, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
  </Text>

  {/* Other sections will follow the same pattern */}
  <Text style={styles.tcSectionTitle}>2. Use License</Text>
  <Text style={styles.tcContent}>
    Permission is granted to temporarily download one copy of AIRA per device for personal, non-commercial transitory use only. This is the grant of a license, not a transfer of title, and under this license, you may not:
    {'\n'}* Modify or copy the materials;
    {'\n'}* Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
    {'\n'}* Attempt to decompile or reverse engineer any software contained in AIRA;
    {'\n'}* Remove any copyright or other proprietary notations from the materials; or
    {'\n'}* Transfer the materials to another person or 'mirror' the materials on any other server.
  </Text>

  <Text style={styles.tcSectionTitle}>3. Disclaimer</Text>
<Text style={styles.tcContent}>
  The materials within AIRA are provided on an 'as is' basis. The app makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
</Text>

<Text style={styles.tcSectionTitle}>4. Limitations</Text>
<Text style={styles.tcContent}>
  In no event shall AIRA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use AIRA, even if AIRA or an authorized representative has been notified orally or in writing of the possibility of such damage.
</Text>

<Text style={styles.tcSectionTitle}>5. Accuracy of Materials</Text>
<Text style={styles.tcContent}>
  The materials appearing in AIRA could include technical, typographical, or photographic errors. AIRA does not warrant that any of the materials on its app are accurate, complete, or current. AIRA may make changes to the materials contained in its app at any time without notice. However, AIRA does not make any commitment to update the materials.
</Text>

<Text style={styles.tcSectionTitle}>6. Links</Text>
<Text style={styles.tcContent}>
  AIRA has not reviewed all of the sites linked to its app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AIRA of the site. Use of any such linked website is at the user's own risk.
</Text>

<Text style={styles.tcSectionTitle}>7. Modifications</Text>
<Text style={styles.tcContent}>
  AIRA may revise these Terms and Conditions for its app at any time without notice. By using this app, you are agreeing to be bound by the then-current version of these Terms and Conditions.
</Text>

<Text style={styles.tcSectionTitle}>8. Governing Law</Text>
<Text style={styles.tcContent}>
  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where AIRA is based, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
</Text>

<Text style={styles.tcSectionTitle}>9. User Conduct</Text>
<Text style={styles.tcContent}>
  Users of AIRA agree not to use the app for any purpose that is unlawful or prohibited by these Terms. You may not use AIRA in any manner that could damage, disable, overburden, or impair the app or interfere with any other party's use of the app.
</Text>

<Text style={styles.tcSectionTitle}>10. User Data and Privacy</Text>
<Text style={styles.tcContent}>
  AIRA is committed to protecting your privacy and data. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
</Text>

  
  <TouchableOpacity onPress={handleAcceptTc} style={styles.tcAcceptButton}>
    <Text style={styles.tcAcceptButtonText}>I Agree</Text>
  </TouchableOpacity>
</ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default TermsConditions;
