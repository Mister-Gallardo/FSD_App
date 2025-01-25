export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const fetchCartItems = async (): Promise<CartItem[]> => {
  const response = await fetch("/api/cart");
  if (!response.ok) {
    throw new Error("Failed to fetch cart items");
  }
  return response.json();
};
