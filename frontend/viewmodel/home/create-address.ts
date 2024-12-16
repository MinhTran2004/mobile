import { Address, AddressModel } from "@/model/address.model";
import AddressService from "@/service/address.service";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ViewModelCreateAddress = () => {
    const naviagtion = useNavigation();
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [commune, setCommune] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [toogle, setToogle] = useState(true);
    const [errorName, setErrorName] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorProvince, setErrorProvince] = useState('');
    const [errorDistrict, setErrorDistrict] = useState('');
    const [errorCommune, setErrorCommune] = useState('');
    const [errorDetailAddress, setErrorDetailAddress] = useState('');
    

    const [dialog, setDialog] = useState(false);
    const [dialogSuccess, setDialogSuccess] = useState(false);
    const [dialogError, setDialogError] = useState(false);

    const selector = useSelector((state: any) => state?.auth?.account?._id);

    // modal
    const [modalProvince, setModalProvince] = useState(false);
    const [modalDistrict, setModalDistrict] = useState(false);
    const [modalCommune, setModalCommune] = useState(false);

    // api address
    const [dataProvince, setDataProvince] = useState();
    const [dataDistrict, setDataDistrict] = useState();
    const [dataCommune, setDataCommune] = useState();

    const createAddress = async () => {
        const address = new AddressModel(selector, name.trim(), phone.trim(), province.trim(), district.trim(), commune.trim(), detailAddress.trim(), toogle);
        const check = AddressModel.checkNullData(name, phone, province, district, commune, detailAddress, setErrorName, setErrorPhone, setErrorProvince, setErrorDistrict, setErrorCommune, setErrorDetailAddress);
        
         if (check) {
            const reponse = await AddressService.createAddress(address);
            if(reponse){
                setDialog(false);
                setDialogSuccess(true);
            }else{
                setDialog(false);
                setDialogError(true);
            }
        } else {
            setDialog(true);
        }
    }

    // api address
    const getAPIAddressByProvince = async () => {
        const reponse = await AddressService.getAPIAddressByProvince();
        setDataProvince(reponse);
    }

    const getAPIAddressByDistrict = async () => {
        setDistrict('');
        const reponse = await AddressService.getAllAPIAdress(province);
        const data = await AddressService.getAPIAddressByDistrict(reponse);
        setDataDistrict(data);
    }

    const getAPIAddressByCommune = async () => {
        setCommune('');
        const reponse = await AddressService.getAPIAddressByCommune(dataDistrict, district);
        setDataCommune(reponse);
    }

    useEffect(() => {
        getAPIAddressByProvince()
    }, [])

    useEffect(() => {
        getAPIAddressByDistrict();
    }, [province])

    useEffect(() => {
        getAPIAddressByCommune();
    }, [district])

    return {
        name, phone, province, district, commune, detailAddress, errorName, errorPhone, errorProvince, 
        errorDistrict, errorCommune, errorDetailAddress, toogle,
        // modal
        modalProvince, modalDistrict, modalCommune, dialog, dialogError, dialogSuccess,
        // data Address
        dataProvince, dataDistrict, dataCommune,
        setName, setPhone, setProvince, setDistrict, setCommune, setErrorName,setErrorPhone, setErrorProvince, setErrorDistrict, setErrorCommune, setErrorDetailAddress, setToogle,
        // modal
        setModalProvince, setModalDistrict, setModalCommune, setDetailAddress, setDialog, setDialogError, setDialogSuccess,
        createAddress,
    }
}

export default ViewModelCreateAddress;