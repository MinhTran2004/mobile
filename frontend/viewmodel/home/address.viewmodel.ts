import { Address } from "@/model/address.model";
import AddressService from "@/service/address.service";
import { useFocusEffect } from "expo-router";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ViewModelAddress = () => {
    const [dataAddress, setDataAddress] = useState<Address[]>([]);
    const [dialogsuccess, setDialogSuccess] = useState(false);
    const [dialogDelete, setDialogDelete] = useState(false);
    const [dialogError, setDialogError] = useState(false);

    const selector = useSelector((state: any) => state.auth.account._id);

    const getAllAddress = async () => {
        const reponse = await AddressService.getAllAdress(selector);
        setDataAddress(reponse);
    }

    const deleteAddressById = async (idAddress: string) => {
        const reponse = await AddressService.deleteAddressById(idAddress);
            setDataAddress([])
        if (reponse) {
            getAllAddress();
            setDialogDelete(false);
            setDialogSuccess(true);
        } else {
            setDialogDelete(false);
            setDialogError(true);
        }

    }

    useFocusEffect(
        React.useCallback(() => {
            getAllAddress();
        }, [])
      );

    return {
        dialogDelete, dialogError, dialogsuccess,
        setDialogDelete, setDialogError, setDialogSuccess,
        dataAddress, deleteAddressById,
    }
}

export default ViewModelAddress;