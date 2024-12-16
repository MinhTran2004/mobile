import { Bill } from "@/model/bill.model"
import SeviceBill from "@/service/bill.service";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ViewModelOrderWaiting = () => {
    const [itemData, setItemData] = useState<Bill>();
    const [dataOrder, setDataOrder] = useState<Bill[]>([]);
    const [dialogDelete, setDialogDelete] = useState(false);
    const [dialogError, setDialogError] = useState(false);
    const [dialogSuccess, setDialogSuccess] = useState(false);

    const userId = useSelector((state: any) => state?.auth?.account?._id);

    const getAllBillByStatus = async () => {
        const reponse = await SeviceBill.getAllBillByStatus(userId, "Chờ xác nhận");
        setDataOrder(reponse);
    }

    const deleteBillById = async (id: string) => {
        const reponse = await SeviceBill.deteleBillById(id);

        if (reponse) {
            setDialogDelete(false);
            setDialogSuccess(true);
        } else {
            setDialogDelete(false);
            setDialogError(true);
        }
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder, dialogDelete, dialogError, dialogSuccess, itemData,
        setDialogDelete, setDialogSuccess, setDialogError, deleteBillById, getAllBillByStatus, setItemData,
    }
}

export default ViewModelOrderWaiting;