import { Bill } from "@/model/bill.model"
import SeviceBill from "@/service/bill.service";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ViewModelOrderCompleted = () => {
    const [dataOrder, setDataOrder] = useState<Bill[]>([]);
    const [dialog, setDialog] = useState(false);
    const [itemData, setItemData] = useState<Bill>();

    const userId = useSelector((state: any) => state?.auth?.account?._id);

    const getAllBillByStatus = async () => {
        const reponse = await SeviceBill.getAllBillByStatus(userId, 'Hoàn thành');
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