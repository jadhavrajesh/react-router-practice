import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Admin from "./components/Admin";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import { AuthProvider } from "./utils/auth";
// dynamic import using React.lazy
const LayAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              {/* show fallback UI */}
              <LayAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          {/* when you have a nested routes & you want to a route to be rendered at the parent url make use of index route */}
          <Route index element={<FeaturedProducts />} />
          {/* nested routes - portion of the ui changes based on the routes */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          {/* dynamic routes */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* auth protected route */}
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
