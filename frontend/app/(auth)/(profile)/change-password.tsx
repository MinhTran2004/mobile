import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppHeader from '@/components/AppHeader';
import PrimaryButton from '@/components/PrimaryButton';

const ChangePassword = ({ navigation }: any) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSave = () => {
    console.log('Mật khẩu hiện tại:', currentPassword);
    console.log('Mật khẩu mới:', newPassword);
    console.log('Xác nhận mật khẩu:', confirmPassword);
    // Logic xử lý mật khẩu
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <AppHeader
        iconLeft="left"
        title="Thông Tin Cá Nhân"
        iconRight="none"
        onPressIconLeft={() => navigation.goBack()}
      />

      <View style={styles.inputContainer}>
        {/* Ô nhập mật khẩu hiện tại */}
        <View style={styles.inputWrapper}>
          {/* <Icon name="lock" size={20} color="#ccc" style={styles.icon} /> */}
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu hiện tại"
            secureTextEntry={!showCurrentPassword}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TouchableOpacity
            style={styles.eyeButtonWrapper}
            onPress={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            <Icon
              name={showCurrentPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="#ccc"
            />
            <Text style={styles.eyeButtonText}>
              {showCurrentPassword ? '' : ''}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ô nhập mật khẩu mới */}
        <View style={styles.inputWrapper}>
          {/* <Icon name="lock" size={20} color="#ccc" style={styles.icon} /> */}
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu mới"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity
            style={styles.eyeButtonWrapper}
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Icon
              name={showNewPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="#ccc"
            />
            <Text style={styles.eyeButtonText}>
              {showNewPassword ? '' : ''}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ô nhập lại mật khẩu mới */}
        <View style={styles.inputWrapper}>
          {/* <Icon name="lock" size={20} color="#ccc" style={styles.icon} /> */}
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu mới"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeButtonWrapper}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon
              name={showConfirmPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="#ccc"
            />
            <Text style={styles.eyeButtonText}>
              {showConfirmPassword ? '' : ''}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Lưu</Text>
      </TouchableOpacity> */}
       <PrimaryButton
            styleButton={{position: 'fixed', bottom: 0}}
                label="Thanh toán"
                onPress={handleSave} />


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
