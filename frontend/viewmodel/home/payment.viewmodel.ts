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
        setAddress(reponse);
        setDetailAddress(address[0].province + ", " + address[0].district + ", " + address[0].commune + "," + address[0].detailAddress);
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