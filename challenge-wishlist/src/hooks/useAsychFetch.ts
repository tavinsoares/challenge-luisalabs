import { useCallback, useReducer } from "react";

export enum EnumActionReducer {
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected",
  IDLE = "idle",
}

export interface ReducerAction {
  type: EnumActionReducer;
  data?: any;
  error?: any;
}

export interface IState {
  status: EnumActionReducer;
  data: any;
  error: any;
}

const asyncReducer = (state: IState, action: ReducerAction) => {
  switch (action.type) {
    case EnumActionReducer.PENDING: {
      return { ...state, status: EnumActionReducer.PENDING };
    }
    case EnumActionReducer.RESOLVED: {
      return { ...state, status: EnumActionReducer.RESOLVED, data: action.data };
    }
    case EnumActionReducer.REJECTED: {
      return {
        ...state,
        status: EnumActionReducer.REJECTED,
        error: action.error,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useFetchAsync = (initialState: IState) => {
  const [state, dispatch] = useReducer(asyncReducer, initialState);

  const run = useCallback((promise: Promise<IState>) => {
    if (!promise) {
      return;
    }

    dispatch({ type: EnumActionReducer.PENDING });

    promise.then(
      (data) => {
        console.log("🚀 ~ run ~ data:", data)
        dispatch({ type: EnumActionReducer.RESOLVED, data });
      },
      (error) => {
        console.log("🚀 ~ run ~ error:", error)
        dispatch({ type: EnumActionReducer.REJECTED, error });
      }
    );
  }, []);

  return { ...state, run };
};
