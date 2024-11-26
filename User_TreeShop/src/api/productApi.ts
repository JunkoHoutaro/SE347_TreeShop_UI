// import { ResponeData } from "../redux/product/saga";

export const getListProduct = async () => {
    const respone = await fetch('http://localhost:5000/api/product')
            .then((res) => res.json());
    return respone;
}