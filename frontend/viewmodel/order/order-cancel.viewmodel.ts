import { Bill } from "@/model/bill.model"
import SeviceBill from "@/service/bill.service";
import { useEffect, useState } from "react"

const ViewModelOrderCancel = () => {
    const [dataOrder, setDataOrder] = useState<Bill[]>([]);

    const getAllBillByStatus = async () => {
        const reponse = await SeviceBill.getAllBillByStatus('Đã hủy');
        setDataOrder(reponse);
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return{
        dataOrder, getAllBillByStatus,
    }
}

export default ViewModelOrderCancel;