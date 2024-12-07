import BillModel from "@/model/bill.model";
import axios from "axios";

class SeviceBill {
    static url = "http://192.168.5.16:5000/bill";

    static createPaymentURL = async (data: BillModel) => {
        try {
            const reponse = (await axios.post(`${this.url}/create_payment_url`, data)).data;
            // console.log("data",data);

            return reponse ?? "Không có dữ liệu trả về từ server";
        } catch (err) {
            console.log(err);
        }
    }

    static directPayment = async (data: BillModel) => {
        try {
            const reponse = (await axios.post(`${this.url}`, data)).data;
            console.log("reponse directPayment", reponse);

            return reponse ?? "Không có dữ liệu trả về từ server";
        } catch (err) {
            console.log(err);
        }
    }

    static getBillStatus = async (idUser: String, status: String) => {
        try {
            const reponse = (await axios.get(`${this.url}/getbill/${idUser}?status=${status}`, {
                // params:{
                //     status
                // }
            })).data;
            // console.log("reponse getBillStatus",reponse);

            return reponse ?? "Không có dữ liệu trả về từ server";
        } catch (err) {
            console.log(err);
        }
    }

    static editStatusBill = async (idBill: String, status: String) => {
        try {
            const reponse = (await axios.put(`${this.url}/editStatusBill/${idBill}`, { status })).data;
            // console.log("data",data);
            return reponse ?? "Không có dữ liệu trả về từ server";
        } catch (err) {
            console.log(err);
        }
    }


}
export default SeviceBill;