import React from "react";
import Button from "../../ui/Button";

export default function UpdateItemQuantity({ pizzaId }) {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}
