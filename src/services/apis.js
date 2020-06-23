import axios from "axios";

export const getProducts = () => {
    return axios.get("products.json").then(res=>{
        console.log("res", res.data);
        return res;
    }).catch(err=>{
        console.error("Error:", err);
    });
}