import { Bill } from "@/model/bill.model";
import SeviceBill from "@/service/bill.service";
import { useState } from "react";

const ViewModelOrderDetail = () => {
    const [dialogDelete, setDialogDelete] = useState(false);
    const [dialogError, setDialogError] = useState(false);
    const [dialogSuccess, setDialogSuccess] = useState(false);

    const [dialogRelay, setDialogRelay] = useState(false);
    const [itemData, setItemData] = useState<Bill>();

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

    const calculate = (reponse: any) => {
        return reponse.reduce((sum: any, item: any) => {
            return sum + (Number(item.quantityCart) * Number(item.price));
        }, 0)
    }

    return {
        dialogDelete, dialogError, dialogSuccess, dialogRelay, itemData,
        setDialogDelete, setDialogError, setDialogSuccess, setDialogRelay, setItemData,
        deleteBillById, calculate,
    }

}

export default ViewModelOrderDetail;