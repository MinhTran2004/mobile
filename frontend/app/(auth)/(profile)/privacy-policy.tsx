import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '@/components/AppHeader'; // Header tái sử dụng từ dự án của bạn

const PrivacyPolicy = ({ navigation }: any) => {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        iconLeft="left"
        title="Chính Sách & Quyền Riêng Tư"
        iconRight="none"
        onPressIconLeft={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.text,{fontWeight: 500}]}>
            Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và tôn trọng quyền riêng tư của mọi người dùng. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân khi bạn sử dụng ứng dụng của chúng tôi.
          </Text>

          <Text style={styles.sectionTitle}>1. Thông Tin Chúng Tôi Thu Thập</Text>
          <Text style={styles.text}>• Thông tin cá nhân: Tên, địa chỉ email, số điện thoại, địa chỉ giao hàng, và thông tin thanh toán.</Text>
          <Text style={styles.text}>• Thông tin giao dịch: Chi tiết đơn hàng, lịch sử giao dịch, và các yêu cầu hỗ trợ.</Text>
          <Text style={styles.text}>• Thông tin thiết bị: Dữ liệu từ thiết bị bạn sử dụng để truy cập ứng dụng, bao gồm loại thiết bị, hệ điều hành, và địa chỉ IP.</Text>

          <Text style={styles.sectionTitle}>2. Cách Chúng Tôi Sử Dụng Thông Tin</Text>
          <Text style={styles.text}>• Xử lý đơn đặt hàng, giao hàng và cung cấp dịch vụ khách hàng.</Text>
          <Text style={styles.text}>• Gửi thông báo liên quan đến đơn hàng hoặc chương trình khuyến mãi.</Text>
          <Text style={styles.text}>• Cải thiện ứng dụng, tối ưu hóa trải nghiệm người dùng và thực hiện nghiên cứu nội bộ.</Text>

          <Text style={styles.sectionTitle}>3. Bảo Mật Thông Tin</Text>
          <Text style={styles.text}>
            Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin cá nhân của bạn khỏi mất mát, truy cập trái phép hoặc tiết lộ. Dữ liệu của bạn sẽ được mã hóa trong quá trình truyền và lưu trữ.
          </Text>

          <Text style={styles.sectionTitle}>4. Chia Sẻ Thông Tin</Text>
          <Text style={styles.text}>
            Chúng tôi không bán, trao đổi hoặc tiết lộ thông tin cá nhân của bạn cho bên thứ ba, ngoại trừ:
          </Text>
          <Text style={styles.text}>• Các nhà cung cấp dịch vụ bên thứ ba hỗ trợ giao hàng và thanh toán.</Text>
          <Text style={styles.text}>
            • Tuân thủ pháp luật, yêu cầu từ cơ quan chức năng hoặc để bảo vệ quyền lợi hợp pháp của chúng tôi.
          </Text>

          <Text style={styles.sectionTitle}>5. Quyền Lợi Của Người Dùng</Text>
          <Text style={styles.text}>
            • Bạn có quyền truy cập, chỉnh sửa, hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào.
          </Text>
          <Text style={styles.text}>
            • Bạn có thể từ chối nhận thông báo tiếp thị bằng cách hủy đăng ký qua email hoặc cài đặt ứng dụng.
          </Text>

          <Text style={styles.sectionTitle}>6. Thời Gian Lưu Trữ Thông Tin</Text>
          <Text style={styles.text}>
            Thông tin cá nhân sẽ được lưu trữ trong thời gian cần thiết để thực hiện các mục đích nêu trên hoặc theo yêu cầu của pháp luật.
          </Text>

          <Text style={styles.sectionTitle}>7. Sửa Đổi Chính Sách</Text>
          <Text style={styles.text}>
            Chính sách này có thể được cập nhật để phản ánh những thay đổi về dịch vụ hoặc quy định pháp luật. Chúng tôi sẽ thông báo cho bạn qua email hoặc thông báo trong ứng dụng trước khi áp dụng thay đổi.
          </Text>

          <Text style={styles.sectionTitle}>8. Liên Hệ Với Chúng Tôi</Text>
          <Text style={styles.text}>• Email: fpolylaso1@fpt.edu.vn</Text>
          <Text style={styles.text}>• Hotline: +84123456789</Text>
          <Text style={styles.text}>Chúng tôi luôn sẵn sàng hỗ trợ bạn!</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 5,
  },
});

export default PrivacyPolicy;
