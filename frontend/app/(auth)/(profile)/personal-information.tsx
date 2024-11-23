import AppHeader from '@/components/AppHeader';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PersonalInformation = ({navigation}:any) => {
  return (
    <View style={styles.container}>
          <AppHeader iconLeft='left' title='Thông Tin Cá Nhân ' iconRight='none'
          onPressIconLeft={()=> navigation.goBack()}/>  
      
      {/* Main Content with Rounded Borders */}
      <View style={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://shopgarena.net/wp-content/uploads/2022/08/Hinh-tuong-QI-ngau-moi-nhat.jpg',
            }} // URL hình ảnh của bạn
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <Text>📷</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Họ và tên</Text>
            <TextInput
              style={styles.input}
              value="Nguyễn Công Thương" // Dữ liệu thực tế
              editable={false} // Không chỉnh sửa
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value="ncthuong123@gmail.com"
              editable={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              style={styles.input}
              value="0325232004"
              editable={false}
            />
          </View>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <View style={styles.saveButtonWrapper}>
          <Text style={styles.saveButtonText}>Lưu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 120,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  saveButtonWrapper: {
    backgroundColor: '#800000',
    padding: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalInformation;
