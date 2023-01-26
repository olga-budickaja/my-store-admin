import cl from './ProductPage.module.scss';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {Publish} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {userRequest} from "../../RequestMethods";
import ChooseCategories from "../../components/option-product/ChooseCategories";
import ChooseSize from "../../components/option-product/ChooseSize";
import ChooseColor from "../../components/option-product/ChooseColor";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "../../fb";
import { updateProduct } from "../../redux/apiCalls";

const ProductPage = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [imgPrc, setImgPrc] = useState(0);
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = useSelector(state =>
        state.product.products.find(product => product._id === productId)
    );

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    }

    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ], []);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("orders/income?pid=" + productId, { withCredentials: true, });
                const list = res.data.sort((a, b) => {
                    return a._id - b._id
                })
                list.map((item) => {
                    setPStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total }
                    ])
                });
            } catch (e) {
                console.log(e)
            }
        }
        getStats();
    }, [productId, MONTHS]);


    const handleClick = async (e) => {
        e.preventDefault();
        const id = await product._id
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImgPrc(Math.round(progress))
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL, categories, sizes };
                    updateProduct(id, product, dispatch);
                    navigate(`/products`)
                });
            }
        );
    }


    return (
        <div className={cl.product}>
            <div className={cl.product__titleContainer}>
                <h1 className={cl.product__title}>Product</h1>
                <Link to="/new-product">
                    <button className={cl.product__addBtn}>Create</button>
                </Link>
            </div>
            <div className={cl.product__top}>
                <div className={cl.product__topLeft}>
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className={cl.product__topRight}>
                    <div className={cl.product__topRightInfoTop}>
                        <img
                            src={product.img}
                            alt="product"
                            className={cl.product__topRightInfoTopImg}
                        />
                        <span className={cl.product__topRightInfoTopName}>{product.title}</span>
                    </div>
                    <div className={cl.product__topRightInfoBottom}>
                        <div className={cl.product__topRightInfoBottomItem}>
                            <span className={cl.product__topRightInfoBottomKey}>id:</span>
                            <span className={cl.product__topRightInfoBottomValue}>{product._id}</span>
                        </div>
                        <div className={cl.product__topRightInfoBottomItem}>
                            <span className={cl.product__topRightInfoBottomKey}>sales:</span>
                            <span className={cl.product__topRightInfoBottomValue}>5123</span>
                        </div>
                        <div className={cl.product__topRightInfoBottomItem}>
                            <span className={cl.product__topRightInfoBottomKey}>in stock:</span>
                            <span className={cl.product__topRightInfoBottomValue}>{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.product__bottom}>
                <form
                    className={cl.product__form}
                >
                    <div className={cl.product__formLeft}>
                        <label>Product Name</label>
                        <input
                            onChange={ handleChange }
                            name="title"
                            placeholder={product.title}
                            type="text"
                        />
                        <label>Product Description</label>
                        <textarea
                            onChange={ handleChange }
                            cols="60"
                            rows="5"
                            name="desc"
                            placeholder={product.desc}
                        />
                        <label>Product Price</label>
                        <input
                            onChange={ handleChange }
                            name="price"
                            placeholder={product.price}
                            type="text"
                        />
                        <label>Categories</label>
                        <ChooseCategories categories={categories} setCategories={setCategories}/>
                        <label>In Stock</label>
                        <select
                            onChange={ handleChange }
                            name="inStock"
                            id="inStock"
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <label>Size</label>
                        <ChooseSize sizes={sizes} setSizes={setSizes}/>

                        <label>Color</label>
                        <ChooseColor setInputs={setInputs} />
                    </div>
                    <div className={cl.product__formRight}>
                        <div className={cl.product__formUpload}>
                            <img src={product.img} alt="product" className={cl.product__formUploadImg}/>
                            <label for="file">
                                <Publish sx={{ fill: "#A60321" }}/>
                                <input
                                    onChange={ e => setFile(e.target?.files[0]) }
                                    type="file"
                                    id="file"
                                    className={cl.product__formUploadInputFile}
                                />
                            </label>
                        </div>
                        <button
                            onClick={handleClick}
                            className={cl.product__btn}
                        >
                            {imgPrc > 0
                                ?`Uploading: ${imgPrc}%`
                                : "Update"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductPage;