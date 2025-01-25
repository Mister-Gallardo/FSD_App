import React from "react";

interface AddToCartButtonProps {
  onAdd: () => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAdd }) => (
  <button onClick={onAdd}>Add to Cart</button>
);
