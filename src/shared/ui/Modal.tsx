import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          margin: "10% auto",
          padding: "20px",
          background: "#fff",
          width: "300px",
          textAlign: "center",
        }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
