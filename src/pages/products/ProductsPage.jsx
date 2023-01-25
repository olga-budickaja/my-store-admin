import cl from './ProductsPage.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import {Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, deleteProduct} from "../../redux/apiCalls";
const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    const handleDelete = async (id) => {
       await deleteProduct(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product', width: 400, renderCell: (params) => {
                return (
                    <div className={cl.products__listImg}>
                        <img src={params.row.img} alt="user" />
                        {params.row.title}
                    </div>
                )
            }},
        { field: 'inStock', headerName: 'Stock', width: 100 },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <button className={cl.products__listBtn}>Edit</button>
                        </Link>

                        <Delete
                            onClick={() => handleDelete(params.row._id)}
                            sx={{ fill: "#A60321", cursor: "pointer" }} />
                    </>
                )
            }
        },
    ];
    return (
        <div className={cl.products}>
            <Link to="/new-product">
                <button
                    className={`${cl.products__listBtn} ${cl.products__listBtnTop}`}
                >
                    Add Product
                </button>
            </Link>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={8}
                getRowId={row => row._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default ProductsPage;