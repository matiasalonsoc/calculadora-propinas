import { Dispatch } from "react";
import { OrderActionsTypes } from "../reducers/order-reducer";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[] | undefined;
  dispatch: Dispatch<OrderActionsTypes>;
};

export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className='font-black text-4xl'>Orden</h2>

      <div className='space-y-3 mt-5'>
        {order?.length === 0 ? (
          <p className='text-center text-xl font-medium text-red-300'>
            No existen ordenes...
          </p>
        ) : (
          order?.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center border p-3'
            >
              <div>
                <p>
                  {item.name} -
                  <span className='font-black'> ${item.price}</span>
                </p>
                <p className='font-black'>
                  Cantidad: {item.quantity} - ${item.quantity * item.price}
                </p>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "remove-item", payload: { id: item.id } })
                }
                className='rounded-full bg-red-500 w-6 h-6 text-center'
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
