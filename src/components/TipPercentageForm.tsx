import { OrderActionsTypes } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  dispatch: React.Dispatch<OrderActionsTypes>;
  tip: number | undefined;
};

export const TipPercentageForm = ({ dispatch }: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className='font-black text-2xl'>Propina</h3>

      <form action=''>
        {tipOptions.map((tip) => (
          <div key={tip.id}>
            <label htmlFor={tip.id}> {tip.label} </label>
            <input
              onClick={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +(e.target as HTMLInputElement).value },
                })
              }
              type='radio'
              name='tip'
              id={tip.id}
              value={tip.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
