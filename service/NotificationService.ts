import { Notification } from '@model/Model_Notification';

// Hien tai thi cac tinh nang thanh toan, huy don chua co nen chua co xu ly sang backend
// don gian la set 1 array o ngay frontend de phuc vu hien thi
export class NotificationService {
    static url = 'http://192.168.88.137:5000/Cart';

    static localNotifications : Notification[] = [];

    // Sau nay cac hanh dong sinh ra Notification se dien ra o backend
    // Frontend se dinh ky (30s) gui truy van de lay du lieu hien thi
    static saveNotification(notification: Notification) {
        this.localNotifications.push(notification);
    }

    static getNotificaion() {
        return this.localNotifications;
    }

}
