import React from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Homee = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Phần Hồ Sơ */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://shopgarena.net/wp-content/uploads/2022/08/Hinh-tuong-QI-ngau-moi-nhat.jpg' }} // Thay bằng ảnh thật
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Tên người dùng</Text>
        </View>

        {/* Phần Nội Dung Bo Tròn */}
        <View style={styles.card}>
          {/* Phần Tài Khoản */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tài khoản</Text>
            {[
              { icon: 'person', label: 'Thông tin tài khoản' },
              { icon: 'location', label: 'Địa chỉ' },
              { icon: 'key', label: 'Đổi mật khẩu' },
              { icon: 'pricetag', label: 'Phiếu giảm giá' },
              { icon: 'heart', label: 'Sản phẩm yêu thích' },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.row}>
                <Icon name={item.icon} size={24} color="#000" />
                <Text style={styles.rowText}>{item.label}</Text>
                <Icon name="chevron-forward" size={24} color="#000" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Phần Ứng Dụng */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ứng dụng</Text>
            <View style={styles.row}>
              <Icon name="notifications" size={24} color="#000" />
              <Text style={styles.rowText}>Bật thông báo</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={toggleNotifications}
              />
            </View>
            <View style={styles.row}>
              <Icon name="moon" size={24} color="#000" />
              <Text style={styles.rowText}>Chế độ tối</Text>
              <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
            </View>
          </View>

          {/* Phần Cài Đặt */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cài đặt</Text>
            {[
              { icon: 'book', label: 'Chính sách và quyền riêng tư' },
              { icon: 'log-out', label: 'Đăng xuất' },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.row}>
                <Icon name={item.icon} size={24} color="#000" />
                <Text style={styles.rowText}>{item.label}</Text>
                <Icon name="chevron-forward" size={24} color="#000" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Thay nền để làm nổi bật card
  },
  scrollContent: {
    paddingBottom: 20, // Tránh tràn nội dung ở cuối
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16, // Bo góc tròn
    shadowColor: '#000', // Tạo bóng
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4, // Tạo bóng trên Android
    marginHorizontal: 16, // Cách mép màn hình
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rowText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Homee;
