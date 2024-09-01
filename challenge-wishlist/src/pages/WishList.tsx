import _filter from "lodash/filter"

import WishList from "../components/ListProducts/WishList";
import Layout from "../components/Layout";

import useLocalStorage from "../hooks/useLocalStorage";
import { KEY_STORAGE_WISH_LIST } from "../constants";

const WishListPage = () => {
  const [wishList, setWishList] = useLocalStorage({
    initialValue: [],
    propStorage: KEY_STORAGE_WISH_LIST
  })
  return (
    <Layout>
      <WishList
        wishList={wishList}
        handleItemCard={(product) => {
          setWishList(_filter(wishList, item => item.id !== product.id))
          console.log(product);
        }}
      />
    </Layout>
  );
};

export default WishListPage;
