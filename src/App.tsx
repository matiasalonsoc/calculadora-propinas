import { useReducer } from "react";
import { MyItem } from "./components/MyItem.tsx";
import { OrderContents } from "./components/OrderContents.tsx";
import { OrderTotals } from "./components/OrderTotals.tsx";
import { TipPercentageForm } from "./components/TipPercentageForm.tsx";
import { menuItems } from "./data/db.ts";
import { initialState, orderReducer } from "./reducers/order-reducer.ts";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className=' max-w-7xl mx-auto my-20 px-10 grid md:grid-cols-2'>
        <div className='px-5'>
          <h2 className=' text-4xl font-black mb-2 '>Menú</h2>
          <div className=' space-y-3'>
            {menuItems.map((item) => (
              <MyItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          <OrderContents order={state?.order} dispatch={dispatch} />

          {state?.order.length === 0 ? (
            ""
          ) : (
            <>
              <TipPercentageForm tip={state?.tip} dispatch={dispatch} />

              <OrderTotals
                dispatch={dispatch}
                order={state?.order}
                tip={state?.tip}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
