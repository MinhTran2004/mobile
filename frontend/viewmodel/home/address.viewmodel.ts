import { Address } from "@/model/address.model";
import AddressService from "@/service/address.service";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ViewModelAddress = () => {
    const [dataAddress, setDataAddress] = useState<Address[]>([]);
    const selector = useSelector((state:any) => state.auth.account._id);
    
    const getAllAddressById = async() => {
        const reponse = await AddressService.getAllAdressById(selector);
        setDataAddress(reponse);
    }

    useEffect(() => {
        getAllAddressById();
    }, [])
    return {
        dataAddress,
    }
}

export default ViewModelAddress;