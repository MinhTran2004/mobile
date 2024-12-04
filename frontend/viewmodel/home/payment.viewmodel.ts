import { Address } from "@/model/address.model"
import AddressService from "@/service/address.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ViewModelPayment = () => {
    const [address, setAddress] = useState<Address>();
    const [detailAddress, setDetailAddress] = useState("")
    const selector = useSelector((state: any) => state.auth.account._id)

    const getAddressByIdAccount = async () => {
        const reponse = await AddressService.getAddressByIdAccount(selector);
        setAddress(reponse);
        setDetailAddress(address?.province + ", " + address?.district + ", " + address?.commune);
    }

    useEffect(() => {
        getAddressByIdAccount();
    },[])

    return {
        address, detailAddress
    }
}

export default ViewModelPayment;