import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const handleRemove = (id: MenuItem["id"]) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };

  const handleTip = (tip: number) => {
    setTip(tip);
  };

  const handleSend = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    handleRemove,
    handleTip,
    tip,
    handleSend,
  };
};
