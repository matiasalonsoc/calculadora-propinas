import { MenuItem, OrderItem } from "../types";

export type InitialStateType = {
  order: OrderItem[];
  tip: number;
};

export const initialState = {
  order: [],
  tip: 0,
};

export type OrderActionsTypes =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

export const orderReducer = (
  state: InitialStateType = initialState,
  action: OrderActionsTypes
) => {
  if (action.type === "add-item") {
    const verifyIncludes = state.order.find(
      (food) => food.id === action.payload.item.id
    );

    let order: OrderItem[] = [];

    if (verifyIncludes) {
      order = state.order.map((food) =>
        food.id === action.payload.item.id
          ? { ...food, quantity: food.quantity + 1 }
          : food
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      order = [...state.order, newItem];
    }

    return {
      ...state,
      order,
    };
  }

  if (action.type === "remove-item") {
    const newOrder = state.order.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      order: newOrder,
    };
  }

  if (action.type === "place-order") {
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }

  if (action.type === "add-tip") {
    return {
      ...state,
      tip: action.payload.value,
    };
  }
};
