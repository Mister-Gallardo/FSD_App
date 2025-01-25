import axios from "axios";

export const addToCart = async (productId: string) => {
  const { data } = await axios.post(`/api/cart/add`, productId);
  return data;
};
