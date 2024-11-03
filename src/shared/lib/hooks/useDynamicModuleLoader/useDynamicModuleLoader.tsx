import { type Reducer } from "@reduxjs/toolkit";
import { type ReduxStoreWithManager } from "app/providers/StoreProvider";
import { type StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

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
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = Boolean(mountedReducers[name as StateSchemaKey]);
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      Object.entries(reducers).forEach(([name]) => {
        if (removeAfterUnMount) {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
