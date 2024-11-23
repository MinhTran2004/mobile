import axios from "axios";

class ProductService {
    static url = "http://192.168.5.26:5000/product";

    static getAllProductByLimit = async () => {
        try {
            const reponse = (await axios(`${this.url}/getAllProductByLimit?limit=${20}`)).data;
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
}

export default ProductService;