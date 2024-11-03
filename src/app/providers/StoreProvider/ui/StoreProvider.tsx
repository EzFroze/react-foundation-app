import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type FC, type ReactNode } from "react";
import { Provider } from "react-redux";
import { type StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  // const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
    // navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
