import { Address, AddressModel } from "@/model/address.model";
import axios from "axios";

export default class AddressService {
    static url = "http://192.168.5.26:5000/address";

    static createAddress = async (data: AddressModel) => {
        try {
            const reponse = (await axios.post(`${this.url}/createAddress`, data)).data;
            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

    static updateAddressById = async (data: Address) => {
        try {
            const reponse = (await axios.put(`${this.url}/updateAddressById`, data)).data;
            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

    static getAllAdress = async (idAccount: string) => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllAddress`, {
                params: {
                    idAccount: idAccount,
                }
            })).data;

            if (reponse.status) {
                return reponse.data;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

    static getAddressByIdAccount = async (idAccount:string) => {
        const reponse = await axios.get(`${this.url}/getAddressByIdAccount`, {
            params: {
                idAccount: idAccount,
            }
        })

        if (reponse.data.status) {
            return reponse.data.address[0];
        }else{
            return [];
        }

    }

    static getAllAPIAdress = async (name: string) => {
        try {
            const reponse = (await axios.get('https://provinces.open-api.vn/api/?depth=3')).data;
            const province = reponse.filter((item: any) => item.name === name);
            if (province.length != 0) {
                return province;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

    static getAPIAddressByProvince = async () => {
        try {
            const reponse = (await axios.get('https://provinces.open-api.vn/api')).data;
            if (reponse.length != 0) {
                return reponse;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

    static getAPIAddressByDistrict = async (reponse: any) => {
        try {
            const data = reponse[0].districts;

            if (data.length != 0) {
                return data;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

    static getAPIAddressByCommune = async (reponse: any, name: string) => {
        try {
            const province = reponse.filter((item: any) => item.name === name);
            if (province.length != 0) {
                return province[0].wards;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }
}