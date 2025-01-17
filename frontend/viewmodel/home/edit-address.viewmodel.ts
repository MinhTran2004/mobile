import { Address, AddressModel } from "@/model/address.model";
import AddressService from "@/service/address.service";
import { useEffect, useState } from "react"

const ViewModelEditAddress = (props: Address) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [commune, setCommune] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [toogle, setToogle] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorProvince, setErrorProvince] = useState('');
    const [errorDistrict, setErrorDistrict] = useState('');
    const [errorCommune, setErrorCommune] = useState('');
    const [errorDetailAddress, setErrorDetailAddress] = useState('');

    const [dialog, setDialog] = useState(false);
    const [dialogSuccess, setDialogSuccess] = useState(false);
    const [dialogError, setDialogError] = useState(false);
    const [dialogErrorFeild, setDialogErrorFeild] = useState(false);

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
                setDialog(false);
                setDialogSuccess(true);
            } else {
                setDialog(false);
                setDialogError(true);
            }
        }else{
            setDialog(false);
            setDialogErrorFeild(true);
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
        setName(props.name);
        setPhone(props.phone);
        setDetailAddress(props.detailAddress);
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
        modalProvince, modalDistrict, modalCommune, dialog, dialogSuccess, dialogError,
        // data Address
        dataProvince, dataDistrict, dataCommune,dialogErrorFeild, setDialogErrorFeild,
        setName, setPhone, setProvince, setDistrict, setCommune, setErrorName, setErrorPhone, setErrorProvince, setErrorDistrict, setErrorCommune, setErrorDetailAddress, setToogle,
        // modal
        setModalProvince, setModalDistrict, setModalCommune, setDetailAddress, setDialog, setDialogError, setDialogSuccess,
        updateAddressById,
    }
}

export default ViewModelEditAddress;