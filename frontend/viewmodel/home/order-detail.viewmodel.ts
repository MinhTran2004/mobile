import SeviceBill from "@/service/bill.service";
import { useState } from "react";

const ViewModelOrderDetail = () => {
    const [dialogDelete, setDialogDelete] = useState(false);
    const [dialogError, setDialogError] = useState(false);
    const [dialogSuccess, setDialogSuccess] = useState(false);
    
    const deleteBillById = async (id:string) => {
        const reponse = await SeviceBill.deteleBillById(id);
        
        if (reponse) {
            setDialogDelete(false);
            setDialogSuccess(true);
        }else{
            setDialogDelete(false);
            setDialogError(true);
        }
    }

    return{
        dialogDelete, dialogError, dialogSuccess,
        setDialogDelete, setDialogError, setDialogSuccess,
        deleteBillById,
    }

}

export default ViewModelOrderDetail;