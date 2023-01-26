import {loginFailure, loginStart, loginSuccess} from "./userRedux";
import {publicRequest, userRequest} from "../RequestMethods";
import {
    addProductFailure,
    addProductStart, addProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    getProductFailure,
    getProductStart,
    getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess
} from "./productRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user, { withCredentials: true, });
        dispatch(loginSuccess(res.data));
    } catch (e) {
        dispatch(loginFailure());
    }
};
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products", { withCredentials: true, });
        dispatch(getProductSuccess(res.data));
    } catch (e) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        // dispatch(deleteProductSuccess(res.data));
        dispatch(deleteProductSuccess(id));
    } catch (e) {
        dispatch(deleteProductFailure());
    }
};
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`, product, { withCredentials: true, })
        dispatch(updateProductSuccess(res.data));
    } catch (e) {
        dispatch(updateProductFailure());
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post("/products", product, { withCredentials: true, });
        dispatch(addProductSuccess(res.data));
    } catch (e) {
        dispatch(addProductFailure());
    }
};