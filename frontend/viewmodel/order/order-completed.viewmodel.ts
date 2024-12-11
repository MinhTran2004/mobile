import { Bill } from "@/model/bill.model"
import SeviceBill from "@/service/bill.service";
import { useEffect, useState } from "react"

const ViewModelOrderCompleted = () => {
    const [dataOrder, setDataOrder] = useState<Bill[]>([]);
    const [dialog, setDialog] = useState(false);
    const [itemData, setItemData] = useState<Bill>();

    const getAllBillByStatus = async () => {
        const reponse = await SeviceBill.getAllBillByStatus('Hoàn thành');
        setDataOrder(reponse);
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder, dialog, itemData,
        setDialog, setItemData,
        getAllBillByStatus,
    }
}

export default ViewModelOrderCompleted;