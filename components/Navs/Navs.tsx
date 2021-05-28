import { withRouter } from "next/dist/client/router";
import { navData, InavObj } from "../../utils/constants";
import Link from "next/link";
import { WithRouterProps } from "next/dist/client/with-router";
const Navs = (props: WithRouterProps) => {
  let selectedNav = {} as InavObj;
  const navView = navData.map(navItem => {
    if (
      props.router.pathname &&
      props.router.pathname.indexOf(navItem.basePath) >= 0
    ) {
      selectedNav = { ...navItem };
    }
    return (
      <div
        className={
          props.router.pathname &&
          props.router.pathname.indexOf(navItem.basePath) >= 0
            ? "each-nav selected-nav"
            : "each-nav"
        }
      >
        <Link href={navItem.path}>{navItem.displayName}</Link>
      </div>
    );
  });
  const tabView =
    selectedNav.subTab &&
    selectedNav.subTab.map(item => {
      return (
        <div
          className={
            props.router.pathname &&
            props.router.pathname.indexOf(item.basePath) >= 0
              ? "each-tab selected-tab"
              : "each-tab"
          }
        >
          <Link href={item.path}>{item.displayName}</Link>
        </div>
      );
    });
  return (
    <div>
      <div className="nav-view">{navView}</div>
      <div className="tab-view">{tabView}</div>
    </div>
  );
};
export default withRouter(Navs);
