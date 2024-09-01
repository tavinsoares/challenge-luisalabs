import _map from "lodash/map";
import _find from "lodash/find";

import Skeleton from "../components/Skeleton";
import ListProductsSkeleton from "../components/Skeleton/ListProductsSkeleton";
import ListProducts from "../components/ListProducts";
import Layout from "../components/Layout";

import { useProducts } from "../hooks/useProducts";
import { EnumActionReducer } from "../hooks/useAsychFetch";
import { KEY_STORAGE_WISH_LIST } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";
import Typography from "../components/Typograph";

const Home = () => {
  const [wishList, setWishList] = useLocalStorage({
    initialValue: [],
    propStorage: KEY_STORAGE_WISH_LIST,
  });
  const state = useProducts();
  const { data, status } = state;
  const isLoading = status === EnumActionReducer.PENDING;
  const hasError = status === EnumActionReducer.REJECTED;

  const products = _map(data, (product) => {
    product.alreadyWishList = !!_find(
      wishList,
      (wishProd) => wishProd.id === product.id
    );

    return product;
  });

  return (
    <Layout>
      <Skeleton
        isChildrenReady={!isLoading}
        fallback={<ListProductsSkeleton />}
      >
        {hasError && (
          <Typography preset="h3" color="black" htmlTag="span" weight="bold">
            Ops! Tente novamente mais tarde
          </Typography>
        )}
        <ListProducts
          products={products}
          handleItemCard={(product) => {
            if (product.alreadyWishList) {
              return;
            }

            setWishList([...wishList, product]);
            console.log(product);
          }}
        />
      </Skeleton>
    </Layout>
  );
};

export default Home;
