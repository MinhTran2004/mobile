import axios from "axios";

class ProductService {
    static url = "http://192.168.1.10:5000/product";

    static getAllProductByLimit = async () => {
        try {
            const reponse = (await axios(`${this.url}/getAllProductByLimit?limit=${50}`)).data;
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static getProductById = async (idProduct:string) => {
        try{
            const reponse = (await axios.get(`${this.url}/getProductById?_id=${idProduct}`)).data;
            if(reponse){
                return reponse;
            }
        }catch(err){
            console.log(err);
        }
    }

    static getProductByName = async (name:string) => {
        try{
            const reponse = (await axios.get(`${this.url}/getProductByName?name=${name}`)).data;
            if(reponse){
                return reponse.products;
            }else{
                return [];
            }
        }catch(err){
            console.log(err);
        }
    }
    static getProductByCategory = async (idCategory:string) => {
        try {
            const response = (await axios.get(`${this.url}/getProductByCategory?idCategory=${idCategory}`)).data;
            if (response) {
                return response.products;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default ProductService;