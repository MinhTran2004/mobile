import axios from "axios";


class FavoriteService {
    static url = "http://172.20.10.3:5000/favorite";

    static getFavorite = async (userId:string) => {
        try {
            const reponse = (await axios.get(`${this.url}/${userId}`)).data;
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static addFavorite = async (data:any) => {
        try {
            const reponse = (await axios.post(`${this.url}`,data)).data;
            if (reponse) {
                return reponse.products;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

    static deleteFavorite = async (userId?: string, productId?: string) => {
        try {
            const reponse = (await axios.delete(`${this.url}`, {
                data: {
                    userId, productId
                }
            })).data;
            if (reponse) {
                return reponse.products;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

}

export default FavoriteService;