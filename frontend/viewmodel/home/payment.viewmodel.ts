import { Address } from "@/model/address.model"
import AddressService from "@/service/address.service";
import SeviceBill from "@/service/bill.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ViewModelPayment = () => {
    const [address, setAddress] = useState<Address[]>([]);
    const [detailAddress, setDetailAddress] = useState("")
    const [checkBox, setCheckBox] = useState(true);
    const [dialog, setDialog] = useState(false);

    const idAccount = useSelector((state: any) => state.auth.account._id)

    const getAddressByIdAccount = async () => {
        const reponse = await AddressService.getAddressByIdAccount(idAccount);
        if (reponse.length != 0) {
            setDetailAddress(reponse[0].province + ", " + reponse[0].district + ", " + reponse[0].commune + "," + reponse[0].detailAddress);
            setAddress(reponse);
        }else{
            setAddress(reponse);
        }

    }

    useEffect(() => {
        getAddressByIdAccount();
    }, [detailAddress])


    return {
        address, detailAddress, checkBox, dialog,
        setCheckBox, setDialog,
    }
}

export default ViewModelPayment;