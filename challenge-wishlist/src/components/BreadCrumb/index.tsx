import { useLocation } from "react-router";
import _split from "lodash/split";
import _map from "lodash/map";
import _capitalize from "lodash/capitalize"
import Typography from "../Typograph";

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;

  const breadcrumb = pathname !== "/" ? _split(pathname, "/") : [];
  breadcrumb[0] = "Home"
  
  return (
    <>
      {_map(breadcrumb, (item, index) => {
        const isCurrent = index + 1 === breadcrumb.length;
        return (
          <Typography
            key={item}
            preset="h5"
            htmlTag="span"
            color="purple"
            weight={isCurrent ? "bold" : "regular"}
          >
            {`${_capitalize(item)} / `}
          </Typography>
        );
      })}
      <hr className="tw-mt-6 tw-border-purple"></hr>
    </>
  );
};

export default BreadCrumb;
