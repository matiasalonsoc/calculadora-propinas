import { Dispatch } from "react";
import { OrderActionsTypes } from "../reducers/order-reducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActionsTypes>;
};

export const MyItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
      className='border-2 hover:bg-teal-500 border-teal-400 w-full p-3 flex justify-between'
    >
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </button>
  );
};
