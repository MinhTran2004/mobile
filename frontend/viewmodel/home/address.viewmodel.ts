import AddressService from "@/service/address.service";
import { useEffect, useState } from "react"

const ViewModelEditAddress = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [commune, setCommune] = useState('');
    const [detail, setDetail] = useState('');
    const [modalProvince, setModalProvince] = useState(false);
    const [modalDistrict, setModalDistrict] = useState(false);
    const [modalCommune, setModalCommune] = useState(false);

    const [dataProvince, setDataProvince] = useState();
    const [dataDistrict, setDataDistrict] = useState();
    const [dataCommune, setDataCommune] = useState();

    const createAddress = async () => {

        // const reponse = await AddressService.createAddress();
    }

    const getAPIAddressByProvince = async() => {
        const reponse = await AddressService.getAPIAddressByProvince();
        setDataProvince(reponse);
    }

    const getAPIAddressByDistrict = async() => {
        const reponse = await AddressService.getAllAPIAdress(province);
        const data = await AddressService.getAPIAddressByDistrict(reponse);
        setDataDistrict(data);
    }

    const getAPIAddressByCommune = async() => {
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
        modalProvince, modalDistrict,modalCommune, name, phone, province, district, commune, detail, dataProvince, dataDistrict, dataCommune,
        setName, setPhone, setProvince, setDistrict, setCommune, setModalProvince,setModalDistrict, setModalCommune, setDetail,
        createAddress
    }
}

export default ViewModelEditAddress;