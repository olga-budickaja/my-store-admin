import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import UsersPage from "../pages/users-page/UsersPage";
import UserPage from "../pages/user-page/UserPage";
import NewUserPage from "../pages/new-user-page/NewUserPage";
import ProductsPage from "../pages/products/ProductsPage";
import ProductPage from "../pages/product-page/ProductPage";
import NewProductPage from "../pages/new-product/NewProductPage";
import Login from "../pages/login/Login";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const userId = useSelector(state => state.user.currentUser?._id);
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={ userId === null ? <Navigate replace to="/" /> : <Login/>} />
                <Route path="users" element={<UsersPage/>} />
                <Route path="user/:userId" element={<UserPage/>} />
                <Route path="new-user" element={<NewUserPage/>} />
                <Route path="products" element={<ProductsPage/>} />
                <Route path="product/:productId" element={<ProductPage/>} />
                <Route path="new-product" element={<NewProductPage/>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;