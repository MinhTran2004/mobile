import BillModel from "@/model/bill.model";
import axios from "axios";


class SeviceBill {
    static url = "http://172.20.10.3:5000/bill";

    static getAllBillByStatus = async (idAccount:string, status: string) => {
        try {
            const reponse = await axios.get(`${this.url}/getAllBillByStatus`, {
                params: {
                    idAccount:idAccount,
                    status: status,
                }
            })

            if (reponse.data.status) {
                return reponse.data.data;
            }else{
                return [];
            }

        } catch (err) {
            console.log(err);
        }
    }

    static deteleBillById = async (id: string) => {
        try {
            const reponse = await (await axios.delete(`${this.url}/deleteBillById/${id}`)).data;
            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

    static createOrderDirect = async (data:BillModel) => {
        try{
            const reponse = (await axios.post(`${this.url}/`, data)).data;
            return reponse.status;
        }catch(err){
            console.log(err);
        }
    }

    static createPaymentURL = async (data: BillModel) => {
        try {
            const reponse = (await axios.post(`${this.url}/create_payment_url`, data)).data;

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