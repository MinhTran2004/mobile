import ItemProfile from '@/components/profile/ItemProfile';
import StatusModal from '@/components/StatusModal';
import { Logout } from '@/redux/action/login';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronRight } from 'tabler-icons-react-native';

const Profile = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState(false);

  const selectUser = useSelector((state: any) => state?.auth?.account);

  const logout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'auth' }]
    });
    dispatch(Logout());
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', gap: 30, paddingTop: 30 }}>

      <View style={{ alignItems: 'center', gap: 5 }}>
        <View style={{ position: 'relative', backgroundColor: '#FF2C7D', padding: 3.5, borderRadius: 90 }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3_CIZoXtmgqFbnzzqmCu_SpJkJ-ZTzv2dLpdKDC3b02R1eh2u', // Thay bằng link ảnh avatar
              }}
              style={{ width: 110, height: 110, borderRadius: 90, borderWidth: 3, borderColor: '#fff' }}
            />
            <Image source={require('../../../assets/images/profile/ic_camera.png')} style={{ width: 28, height: 28, alignSelf: 'flex-end', position: 'absolute', bottom: 0, right: 5, }} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{selectUser.account}</Text>
      </View>


      <View style={{ gap: 15, paddingHorizontal: 20, }}>
        <Text style={styles.title}>Tài khoản</Text>

        <ItemProfile
          iconLeft={
            <Image source={require('@/assets/images/profile/ic_location.png')}
              style={styles.ic_profile} />
          }
          title='Địa chỉ'
          iconRight={<IconChevronRight />}
          onPress={() => { navigation.navigate('address', {screen: 'profile'}) }} />

        <ItemProfile
          iconLeft={<Image source={require('@/assets/images/profile/ic_discount.png')}
            style={styles.ic_profile} />}
          title='Mã giảm giá'
          iconRight={<IconChevronRight />}
          onPress={() => { navigation.navigate('coupon') }} />
        <ItemProfile
          iconLeft={<Image source={require('@/assets/images/profile/ic_heart.png')}
            style={styles.ic_profile} />} title='Đổi mật khẩu'
          iconRight={<IconChevronRight />}
          onPress={() => {
            navigation.navigate('change-password') 
          }} />
        <Text style={styles.title}>Cài đặt</Text>
        <ItemProfile
          iconLeft={<Image source={require('@/assets/images/profile/ic_book.png')}
            style={styles.ic_profile} />}
          title='Chính sách quyền riêng tư'
          iconRight={<IconChevronRight />}
          onPress={() => { navigation.navigate('privacy-policy') }} />

        <ItemProfile
          iconLeft={<Image source={require('@/assets/images/profile/ic_logout.png')}
            style={styles.ic_profile} />}
          title='Đăng xuất'
          iconRight={<IconChevronRight />}
          onPress={() => setDialog(true)} />

      </View>

      <StatusModal
        isActive={dialog}
        title="Thông báo"
        label="Bạn có muốn đăng xuất không?"
        icon="none"
        statusLayoutButton="row"
        secondaryButton={{
          label: 'Có', onPress() {
            logout();
            setDialog(false)
          },
        }}
        primaryButton={{
          label: 'Không', onPress() {
            setDialog(false)
          },
        }}
        onClose={() => setDialog(false)}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    marginTop: 30,
    gap: 5
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 90,
  },
  ic_profile: {
    width: 28,
    height: 28
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#909090'
  },
});

export default Profile;
