import { OrderActionsTypes } from "../reducers/order-reducer";
import type { OrderItem } from "../types";

interface OrderTotalsProps {
  order: OrderItem[] | undefined;
  tip: number | undefined;
  dispatch: React.Dispatch<OrderActionsTypes>;
}

export const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  let total = 0;
  if (!order) return null;
  for (const element of order) {
    total += element.price * element.quantity;
  }

  return (
    <div className='space-y-3'>
      <h2 className='font-black text-2xl'> Totales y propina:</h2>
      <p>
        SubTotal a Pagar:
        <span className='font-bold'> ${total}</span>
      </p>
      <p>
        Propina:
        <span className='font-bold'> ${(tip ?? 0) * total}</span>
      </p>
      <p>
        Total a pagar:
        <span className='font-bold'> ${(tip ?? 0) * total + total}</span>
      </p>

      <button
        onClick={() => dispatch({ type: "place-order" })}
        className=' w-full bg-green-500 text-black py-3 disabled:opacity-10'
        disabled={total === 0}
      >
        Guardar Orden
      </button>
    </div>
  );
};
