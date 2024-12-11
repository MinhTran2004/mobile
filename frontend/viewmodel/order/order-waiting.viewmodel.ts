import { Bill } from "@/model/bill.model"
import SeviceBill from "@/service/bill.service";
import { useEffect, useState } from "react"

const ViewModelOrderWaiting = () => {

    const [dataOrder, setDataOrder] = useState<Bill[]>([]);

    const getAllBillByStatus = async () => {
        const reponse = await SeviceBill.getAllBillByStatus("Chờ xác nhận");
        setDataOrder(reponse);
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return{
        dataOrder, getAllBillByStatus,
    }
}

export default ViewModelOrderWaiting;