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
    const [dialogUpdate, setDialogUpdatde] = useState(false);
    const [dialogUpdateSusscess, setDialogUpdatdeSusscess] = useState(false);
    const [dialogUpdateError, setDialogUpdatdeError] = useState(false);

    const selector = useSelector((state: any) => state?.auth?.account?._id);

    const getAllAddress = async () => {
        const reponse = await AddressService.getAllAdress(selector);
        setDataAddress(reponse);
    }

    const updateStatusAddressById = async (id: string) => {
        const reponse = await AddressService.updateStatusAddressById(id, selector);
        if (reponse) {
            setDialogUpdatde(false);
            setDialogUpdatdeSusscess(true);
            await getAllAddress();
        } else {
            setDialogUpdatde(false);
            setDialogUpdatdeError(true);
        }
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
        dialogDelete, dialogError, dialogsuccess, dialogUpdateError, setDialogUpdatdeError,
        setDialogDelete, setDialogError, setDialogSuccess, dialogUpdateSusscess, setDialogUpdatdeSusscess,
        dataAddress, deleteAddressById, dialogUpdate, setDialogUpdatde, updateStatusAddressById,
    }
}

export default ViewModelAddress;