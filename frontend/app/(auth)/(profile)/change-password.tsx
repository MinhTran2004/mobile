import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import AppHeader from '@/components/AppHeader';
import PrimaryButton from '@/components/PrimaryButton';
import InputEditText from '@/components/InputEditText';
import { useSelector } from 'react-redux';
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import StatusModal from '@/components/StatusModal';

const ChangePassword = ({ navigation }: any) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [dialogError, setDialogError] = useState(false);
  const [dialogSuccess, setDialogSuccess] = useState(false);

  const [errorcurrentPassword, setErrorCurrentPassword] = useState('');
  const [errornewPassword, setErrorNewPassword] = useState('');
  const [errorconfirmPassword, setErrorConfirmPassword] = useState('');

  const select = useSelector((state: any) => state?.auth?.account.account)

  const handleSave = async () => {
    setErrorCurrentPassword('');
    setErrorNewPassword('');
    setErrorConfirmPassword('');
    if (currentPassword.length === 0) setErrorCurrentPassword('Không để trống ô nhập');
    if (newPassword.length === 0) setErrorNewPassword('Không để trống ô nhập');
    if (confirmPassword.length === 0) setErrorConfirmPassword('Không để trống ô nhập');

    if (currentPassword.length > 0 && newPassword.length > 0 && confirmPassword.length > 0) {
      if (newPassword === confirmPassword) {
        try {
          const reponse: any = (await signInWithEmailAndPassword(auth, select, currentPassword)).user;
          try {
            await updatePassword(reponse, newPassword);
            setDialogSuccess(true);
          } catch (e) {
            setDialogError(true);
          }
        } catch (e: any) {
          if (e.code === "auth/invalid-credential") {
            setErrorCurrentPassword('Mật khẩu không chính xác');
          } else if (e.code) {
            console.log(e);
          }
        }
      } else {
        setErrorConfirmPassword('Mật khẩu không giống nhau');
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <AppHeader
        iconLeft="left"
        title="Thông Tin Cá Nhân"
        iconRight="none"
        onPressIconLeft={() => navigation.goBack()}
      />

      <View style={{ gap: 15, padding: 10 }}>
        <InputEditText
          placeholder={"Mật khẩu hiện tại"}
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
          iconRight={true}
          textError={errorcurrentPassword}
        />

        <InputEditText
          placeholder={"Mật khẩu mới"}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          iconRight={true}
          textError={errornewPassword}
        />

        <InputEditText
          placeholder={"Nhập lại mật khẩu"}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          iconRight={true}
          textError={errorconfirmPassword}
        />
      </View>

      <PrimaryButton
        styleButton={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        label="Thanh toán"
        onPress={handleSave} />

      <StatusModal
        isActive={dialogError}
        onClose={() => setDialogError(false)}
        statusLayoutButton="single"
        title="Thông báo"
        label="Đổi mật khẩu thất bại"
        primaryButton={{
          label: "OK",
          onPress: () => {
            setDialogError(false);
          }
        }}
      />

      <StatusModal
        isActive={dialogSuccess}
        onClose={() => setDialogSuccess(false)}
        statusLayoutButton="single"
        title="Thông báo"
        label="Đổi mật khẩu thành công"
        primaryButton={{
          label: "OK",
          onPress: () => {
            setDialogSuccess(false);
            navigation.goBack();
          }
        }}
      />


    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    gap: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 32,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButtonText: {
    fontSize: 14,
    color: '#ccc',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#8B0000',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
