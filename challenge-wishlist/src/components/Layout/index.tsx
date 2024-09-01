import { PropsWithChildren } from "react";
import Header from "../Header";
import BreadCrumb from "../BreadCrumb";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="tw-mt-4 tw-mx-auto tw-pb-8 tw-max-w-screen-sm md:tw-max-w-screen-md lg:tw-max-w-screen-lg xl:tw-max-w-screen-lg">
        <BreadCrumb />
        {children}
      </section>
    </>
  );
};

export default Layout;
