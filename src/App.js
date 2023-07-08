import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// Publicly available pages
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";

// Protected user pages
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import UserCartDetailsPage from "./pages/User/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/User/UserOrderDetailsPage";
import USerOrdersPage from "./pages/User/USerOrdersPage";
import USerProfilePage from "./pages/User/USerProfilePage";

// protected admin pages
import AdminUsersPage from "./pages/Admin/AdminUsersPage";
import AdminEditUserPage from "./pages/Admin/AdminEditUserPage";
import AdminProductsPage from "./pages/Admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/Admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/Admin/AdminOrdersPage";
import AdminChatsPage from "./pages/Admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/Admin/AdminAnalyticsPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product-list" element={<ProductListPage />}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetailsPage />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>

        {/* user protected routes */}

        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<USerProfilePage />}></Route>
          <Route path="/user/my-orders" element={<USerOrdersPage />}></Route>
          <Route
            path="/user/cart-details"
            element={<UserCartDetailsPage />}
          ></Route>
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          ></Route>
        </Route>

        {/* admin protected routes */}

        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />}></Route>
          <Route
            path="/admin/edit-user/:id"
            element={<AdminEditUserPage />}
          ></Route>
          <Route path="/admin/products" element={<AdminProductsPage />}></Route>
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          ></Route>
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProductPage />}
          ></Route>
          <Route path="/admin/orders" element={<AdminOrdersPage />}></Route>
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          ></Route>
          <Route path="/admin/chats" element={<AdminChatsPage />}></Route>
          <Route
            path="/admin/analytics"
            element={<AdminAnalyticsPage />}
          ></Route>
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
