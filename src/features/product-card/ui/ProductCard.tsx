import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => (
  <div>
    <h3>{name}</h3>
    <p>{price}</p>
  </div>
);
