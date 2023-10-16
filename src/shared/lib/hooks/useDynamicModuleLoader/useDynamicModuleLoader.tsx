import { type Reducer } from "@reduxjs/toolkit";
import { type ReduxStoreWithManager } from "app/providers/StoreProvider";
import { type StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnMount?: boolean;
}

export const useDynamicModuleLoader = ({
  reducers,
  removeAfterUnMount = true,
}: DynamicModuleLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
        if (removeAfterUnMount) {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
