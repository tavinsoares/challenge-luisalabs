import { useState } from "react";
import _map from "lodash/map";
import Button from "../Button";
import Icon from "../Icons";
import Typography from "../Typograph";
import Popover from "../Popover";
import { Link } from "react-router-dom";

const menuItems = ["Entrar", "Minha conta", "Endereços", "Minha Netshoes"];

const Header: React.FC = () => {
  const [isOpenPopover, setOpenPopover] = useState(false);

  return (
    <header className="tw-bg-purple tw-w-full tw-py-6 tw-px-3">
      <section className="tw-mx-auto tw-max-w-screen-sm md:tw-max-w-screen-md lg:tw-max-w-screen-lg xl:tw-max-w-screen-lg tw-flex tw-justify-between tw-items-center">
        <div>
          <Link to="/">
            <Icon name="logo" />
          </Link>
        </div>
        <div className="tw-flex md:tw-justify-between md:tw-w-1/4 tw-items-center">
          <Link
            to="/wishlist"
            className="tw-mr-3 md:tw-flex md:tw-items-center"
          >
            <Icon
              name="heartOutline"
              className="tw-w-6 tw-h-6 md:tw-w-8 md:tw-h-8"
            />
            <Typography
              preset="bodyText"
              color="white"
              weight="regular"
              htmlTag="span"
              classNames="tw-hidden md:tw-block md:tw-ml-1"
            >
              Wishlist
            </Typography>
          </Link>

          <Popover
            isOpen={isOpenPopover}
            trigger={() => {
              return (
                <Button
                  data-testid="button-header"
                  onClick={() => {
                    setOpenPopover((prevState) => !prevState);
                  }}
                >
                  <Icon
                    name="user"
                    className="tw-w-6 tw-h-6 md:tw-w-8 md:tw-h-8"
                  />
                </Button>
              );
            }}
            content={() => {
              return (
                <>
                  {_map(menuItems, (item) => {
                    return (
                      <Typography
                        key={item}
                        preset="bodyText"
                        htmlTag="span"
                        weight="regular"
                        color="black"
                        classNames="tw-block tw-py-1"
                      >
                        {item}
                      </Typography>
                    );
                  })}
                </>
              );
            }}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
