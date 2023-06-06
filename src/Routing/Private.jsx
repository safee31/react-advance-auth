import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateLayout from "../Components/PrivateLayot";
import { useReadUser } from "../APIs/auth";

const Dashboard = lazy(() => import("../Pages/Private/Dashboard"));
const ProductsListing = lazy(() => import("../Pages/Private/Products/Listing"));
const OrdersListing = lazy(() => import("../Pages/Private/Orders/Linting"));
const FulfillmentListing = lazy(() =>
  import("../Pages/Private/Fulfillments/Listing")
);
const CustomersListing = lazy(() =>
  import("../Pages/Private/Customers/Listing")
);
// const Setings = lazy(() => import("../Pages/Private/Settings"));

const PrivateRoutes = () => {
  const { isLoading } = useReadUser();
  const validUser = useSelector((state) => state.user);

  if (isLoading) {
    return <div className="loading"></div>;
  } else {
    return validUser ? (
      <PrivateLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsListing />} />
          <Route path="/orders" element={<OrdersListing />} />
          <Route path="/fulfillments" element={<FulfillmentListing />} />
          <Route path="/customers" element={<CustomersListing />} />
          {/* <Route path="/settings" element={<Dashboard />} /> */}

          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace={true} />}
          />
        </Routes>
      </PrivateLayout>
    ) : (
      <Navigate to="/auth/login" replace={true} />
    );
  }
};

export default PrivateRoutes;
