// import { ResponeData } from "../redux/product/saga";

export const getListProduct = async () => {
  const respone = await fetch("http://localhost:302/api/product").then((res) =>
    res.json()
  );
  return respone;
};
