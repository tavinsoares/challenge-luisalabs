import { useEffect } from "react";
import { useFetchAsync, EnumActionReducer } from "./useAsychFetch";
import { getProducts } from "../services/products";

export const useProducts = () => {
  const state = useFetchAsync({
    status: EnumActionReducer.IDLE,
    data: [],
    error: null,
  });

  const { status, data, run } = state;

  useEffect(() => {
    const promise = getProducts();

    run(promise);
  }, []);

  return { status, data };
};
