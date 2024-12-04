import { Address, AddressModel } from "@/model/address.model";
import AddressService from "@/service/address.service";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ViewModelEditAddress = (props: Address) => {
    const naviagtion = useNavigation();

    const [name, setName] = useState(props.name);
    const [phone, setPhone] = useState(props.phone);
    const [province, setProvince] = useState(props.province);
    const [district, setDistrict] = useState('');
    const [commune, setCommune] = useState('');
    const [detailAddress, setDetailAddress] = useState(props.detailAddress);
    const [toogle, setToogle] = useState(props.status);
    const [errorName, setErrorName] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorProvince, setErrorProvince] = useState('');
    const [errorDistrict, setErrorDistrict] = useState('');
    const [errorCommune, setErrorCommune] = useState('');
    const [errorDetailAddress, setErrorDetailAddress] = useState('');


    const [dialog, setDialog] = useState(false);

    // modal
    const [modalProvince, setModalProvince] = useState(false);
    const [modalDistrict, setModalDistrict] = useState(false);
    const [modalCommune, setModalCommune] = useState(false);

    // api address
    const [dataProvince, setDataProvince] = useState();
    const [dataDistrict, setDataDistrict] = useState();
    const [dataCommune, setDataCommune] = useState();

    const updateAddressById = async () => {
        const data: Address = { _id: props._id, idAccount: props.idAccount, name: name, phone: phone, province: province, district: district, commune: commune, detailAddress: detailAddress, status: toogle }
        const check = AddressModel.checkNullData(name, phone, province, district, commune, detailAddress, setErrorName, setErrorPhone, setErrorProvince, setErrorDistrict, setErrorCommune, setErrorDetailAddress);

        if (check) {
            const reponse = await AddressService.updateAddressById(data);
            if (reponse) {
                naviagtion.navigate('address');
            }
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
        name, phone, province, district, commune, detailAddress, errorName, errorPhone, errorProvince, errorDistrict, errorCommune, errorDetailAddress, toogle,
        // modal
        modalProvince, modalDistrict, modalCommune, dialog,
        // data Address
        dataProvince, dataDistrict, dataCommune,
        setName, setPhone, setProvince, setDistrict, setCommune, setErrorName, setErrorPhone, setErrorProvince, setErrorDistrict, setErrorCommune, setErrorDetailAddress, setToogle,
        // modal
        setModalProvince, setModalDistrict, setModalCommune, setDetailAddress, setDialog,
        updateAddressById,
    }
}

export default ViewModelEditAddress;