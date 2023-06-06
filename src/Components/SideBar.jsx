import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setSubMenuToggle } from "../Redux/Slices/SidebarToggle";

const SideBar = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const path = location.pathname;
  const homeActive = path.endsWith("dashboard");
  const productActive = path.endsWith("products");
  const orderActive = path.endsWith("orders");
  const fulfillActive = path.endsWith("fulfillments");
  const customerActive = path.endsWith("customers");
  const settingActive = path.endsWith("settings");

  const [homeSubMenu, setHomeSubMenu] = useState(false);
  const [ProductSubMenu, setProductSubMenu] = useState(false);
  const [orderSubMenu, setOrderSubMenu] = useState(false);
  const [fulfillSubMenu, setFulfillSubMenu] = useState(false);
  const [customerSubMenu, setCustomerSubMenu] = useState(false);
  const [settingSubMenu, setSettingSubMenu] = useState(false);

  const hideAllsubmenu = () => {
    setHomeSubMenu(false);
    setProductSubMenu(false);
    setOrderSubMenu(false);
    setOrderSubMenu(false);
    setFulfillSubMenu(false);
    setCustomerSubMenu(false);
    setSettingSubMenu(false);
  };

  const handleToggleSubMenu = (flag) => {
    dispatch(setSubMenuToggle(flag));
  };

  return (
    <>
      <div
        // className={`menu ${toggleSidebar ? "showSidebar" : "hideSidebar"}`}
        className="menu"
        onMouseLeave={() => {
          handleToggleSubMenu(false);
          hideAllsubmenu();
        }}
      >
        <div className="main-menu default-transition">
          <div
            //  className="scroll ps ps--active-y"
            className="scrollbox scroll"
          >
            <ul className="list-unstyled">
              <li className={homeActive ? "active" : ""}>
                <Link to="/admin/dashboard">
                  <i className="iconsminds-monitor-analytics" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li
                className={productActive ? "active" : ""}
                onMouseEnter={() => {
                  handleToggleSubMenu(false);

                  setHomeSubMenu(false);
                  setProductSubMenu(true);
                  setOrderSubMenu(false);
                  setOrderSubMenu(false);
                  setFulfillSubMenu(false);
                  setCustomerSubMenu(false);
                  setSettingSubMenu(false);
                }}
              >
                <Link to="/admin/products">
                  <i className="iconsminds-financial" /> Products
                </Link>
              </li>
              <li
                className={orderActive ? "active" : ""}
                onMouseEnter={() => {
                  handleToggleSubMenu(false);

                  setHomeSubMenu(false);
                  setProductSubMenu(false);
                  setOrderSubMenu(true);
                  setOrderSubMenu(false);
                  setFulfillSubMenu(false);
                  setCustomerSubMenu(false);
                  setSettingSubMenu(false);
                }}
              >
                <Link to="/admin/orders">
                  <i className="iconsminds-shopping-cart" /> Orders
                </Link>
              </li>
              <li
                className={fulfillActive ? "active" : ""}
                onMouseEnter={() => {
                  handleToggleSubMenu(false);

                  setHomeSubMenu(false);
                  setProductSubMenu(false);
                  setOrderSubMenu(false);
                  setOrderSubMenu(false);
                  setFulfillSubMenu(true);
                  setCustomerSubMenu(false);
                  setSettingSubMenu(false);
                }}
              >
                <Link to="/admin/fulfillments">
                  <i className="iconsminds-scooter" /> Fulfillment
                </Link>
              </li>
              <li
                className={customerActive ? "active" : ""}
                onMouseEnter={() => {
                  handleToggleSubMenu(false);

                  setHomeSubMenu(false);
                  setProductSubMenu(false);
                  setOrderSubMenu(false);
                  setOrderSubMenu(false);
                  setFulfillSubMenu(false);
                  setCustomerSubMenu(true);
                  setSettingSubMenu(false);
                }}
              >
                <Link to="/admin/customers">
                  <i className="iconsminds-business-mens" /> Customers
                </Link>
              </li>
              <li
                className={settingActive ? "active" : ""}
                onMouseEnter={() => {
                  handleToggleSubMenu(false);

                  handleToggleSubMenu(true);
                  setHomeSubMenu(false);
                  setProductSubMenu(false);
                  setOrderSubMenu(false);
                  setOrderSubMenu(false);
                  setFulfillSubMenu(false);
                  setCustomerSubMenu(false);
                  setSettingSubMenu(true);
                }}
              >
                <Link to="#">
                  <i className="iconsminds-equalizer" /> Settings
                </Link>
              </li>
            </ul>
            {/* <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
              <div
                className="ps__thumb-x"
                tabIndex={0}
                style={{ left: "0px", width: "0px" }}
              />
            </div>
            <div
              className="ps__rail-y"
              style={{ top: "0px", height: "515px", right: "0px" }}
            >
              <div
                className="ps__thumb-y"
                tabIndex={0}
                style={{ top: "0px", height: "331px" }}
              />
            </div> */}
          </div>
        </div>

        <div className={"sub-menu default-transition"}>
          <div
            // className="scroll ps"
            className="scrollbox scroll"
          >
            {settingSubMenu && (
              <ul className="list-unstyled d-block">
                <li>
                  <Link to="/admin/stores">
                    <i className="iconsminds-shop-2" />{" "}
                    <span className="d-inline-block">Stores</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/couriers">
                    <i className="iconsminds-car" />{" "}
                    <span className="d-inline-block">Couriers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/inventory">
                    <i className="iconsminds-receipt-4" />{" "}
                    <span className="d-inline-block">Inventory</span>
                  </Link>
                </li>
                <li>
                  <Link to="sku-mapping">
                    <i className="iconsminds-edit-map" />{" "}
                    <span className="d-inline-block">SKU Mapping</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users-permissions">
                    <i className="iconsminds-finger-print" />{" "}
                    <span className="d-inline-block">Users & Permissions</span>
                  </Link>
                </li>
              </ul>
            )}
            {/* <ul
                className="list-unstyled d-block"
                data-link="layouts"
                id="layouts"
              >
                <li>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseAuthorization"
                    aria-expanded="true"
                    aria-controls="collapseAuthorization"
                    className="rotate-arrow-icon opacity-50"
                  >
                    <i className="simple-icon-arrow-down" />{" "}
                    <span className="d-inline-block">Authorization</span>
                  </a>
                  <div id="collapseAuthorization" className="collapse show">
                    <ul
                      className="list-unstyled inner-level-menu"
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="Pages.Auth.Login.html">
                          <i className="simple-icon-user-following" />{" "}
                          <span className="d-inline-block">Login</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Auth.Register.html">
                          <i className="simple-icon-user-follow" />{" "}
                          <span className="d-inline-block">Register</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Auth.ForgotPassword.html">
                          <i className="simple-icon-user-unfollow" />{" "}
                          <span className="d-inline-block">
                            Forgot Password
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseProduct"
                    aria-expanded="true"
                    aria-controls="collapseProduct"
                    className="rotate-arrow-icon opacity-50"
                  >
                    <i className="simple-icon-arrow-down" />{" "}
                    <span className="d-inline-block">Product</span>
                  </a>
                  <div id="collapseProduct" className="collapse show">
                    <ul
                      className="list-unstyled inner-level-menu"
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="Pages.Product.List.html">
                          <i className="simple-icon-credit-card" />{" "}
                          <span className="d-inline-block">Data List</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Product.Thumbs.html">
                          <i className="simple-icon-list" />{" "}
                          <span className="d-inline-block">Thumb List</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Product.Images.html">
                          <i className="simple-icon-grid" />{" "}
                          <span className="d-inline-block">Image List</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Product.Detail.html">
                          <i className="simple-icon-book-open" />{" "}
                          <span className="d-inline-block">Detail</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseProfile"
                    aria-expanded="true"
                    aria-controls="collapseProfile"
                    className="rotate-arrow-icon opacity-50"
                  >
                    <i className="simple-icon-arrow-down" />{" "}
                    <span className="d-inline-block">Profile</span>
                  </a>
                  <div id="collapseProfile" className="collapse show">
                    <ul
                      className="list-unstyled inner-level-menu"
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="Pages.Profile.Social.html">
                          <i className="simple-icon-share" />{" "}
                          <span className="d-inline-block">Social</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Profile.Portfolio.html">
                          <i className="simple-icon-link" />{" "}
                          <span className="d-inline-block">Portfolio</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseBlog"
                    aria-expanded="true"
                    aria-controls="collapseBlog"
                    className="rotate-arrow-icon opacity-50"
                  >
                    <i className="simple-icon-arrow-down" />{" "}
                    <span className="d-inline-block">Blog</span>
                  </a>
                  <div id="collapseBlog" className="collapse show">
                    <ul
                      className="list-unstyled inner-level-menu"
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="Pages.Blog.html">
                          <i className="simple-icon-list" />{" "}
                          <span className="d-inline-block">List</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Blog.Detail.html">
                          <i className="simple-icon-book-open" />{" "}
                          <span className="d-inline-block">Detail</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Blog.Detail.Alt.html">
                          <i className="simple-icon-picture" />{" "}
                          <span className="d-inline-block">Detail Alt</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseMisc"
                    aria-expanded="true"
                    aria-controls="collapseMisc"
                    className="rotate-arrow-icon opacity-50"
                  >
                    <i className="simple-icon-arrow-down" />{" "}
                    <span className="d-inline-block">Miscellaneous</span>
                  </a>
                  <div id="collapseMisc" className="collapse show">
                    <ul
                      className="list-unstyled inner-level-menu"
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="Pages.Misc.Coming.Soon.html">
                          <i className="simple-icon-hourglass" />{" "}
                          <span className="d-inline-block">Coming Soon</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Error.html">
                          <i className="simple-icon-exclamation" />{" "}
                          <span className="d-inline-block">Error</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Faq.html">
                          <i className="simple-icon-question" />{" "}
                          <span className="d-inline-block">Faq</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Invoice.html">
                          <i className="simple-icon-bag" />{" "}
                          <span className="d-inline-block">Invoice</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Knowledge.Base.html">
                          <i className="simple-icon-graduation" />{" "}
                          <span className="d-inline-block">Knowledge Base</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Mailing.html">
                          <i className="simple-icon-envelope-open" />{" "}
                          <span className="d-inline-block">Mailing</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Pricing.html">
                          <i className="simple-icon-diamond" />{" "}
                          <span className="d-inline-block">Pricing</span>
                        </a>
                      </li>
                      <li>
                        <a href="Pages.Misc.Search.html">
                          <i className="simple-icon-magnifier" />{" "}
                          <span className="d-inline-block">Search</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul> */}

            {/* <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
              <div
                className="ps__thumb-x"
                tabIndex={0}
                style={{ left: "0px", width: "0px" }}
              />
            </div>
            <div className="ps__rail-y" style={{ top: "0px", right: "0px" }}>
              <div
                className="ps__thumb-y"
                tabIndex={0}
                style={{ top: "0px", height: "0px" }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
