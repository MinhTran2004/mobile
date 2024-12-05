import ItemProfile from '@/components/profile/ItemProfile';
import StatusModal from '@/components/StatusModal';
import { Logout } from '@/redux/action/login';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronRight, IconHeart } from 'tabler-icons-react-native';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [dialog, setDialog] = useState(false);

  const logout = () => {
    dispatch(Logout());
    navigation.navigate('login');
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: 'https://shopgarena.net/wp-content/uploads/2022/08/Hinh-tuong-QI-ngau-moi-nhat.jpg' }} // Thay bằng ảnh thật
          style={styles.image}
        />
        <Text style={styles.name}>Tên người dùng</Text>
      </View>

      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Thông tin cá nhân' iconRight={<IconChevronRight/>}/>
      <ItemProfile iconLeft={<IconHeart />} title='Đăng xuất' iconRight={<IconChevronRight/>} onPress={() => setDialog(true)} />

      <StatusModal
        isActive={dialog}
        title="Thông báo"
        label="Bạn có muốn đăng xuất không?"
        icon="none"
        statusLayoutButton="row"
        secondaryButton={{
          label: 'Có', onPress() {
            {logout()}
            setDialog(false)
          }, }}
        primaryButton={{
          label: 'Không', onPress() {
            setDialog(false)
          }, }}
        onClose={() => setDialog(false)}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  containerImage:{
    alignItems: 'center'
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  name:{
    fontSize: 20,
    fontWeight: 500,
  }
});

export default Profile;
