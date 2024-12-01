export interface Notification {
    title: string;
    orderId: string;
    status: string;
}

export default class NotificationModel {
    title: string;
    orderId: string;
    status: string;

    constructor(title: string, orderId: string, status: string) {
        this.title = title;
        this.orderId = orderId;
        this.status = status;
    }
}
