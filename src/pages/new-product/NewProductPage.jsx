import cl from './NewProductPage.module.scss';
import {useEffect, useState} from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../fb"
import {addProduct} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";
import ChooseSize from "../../components/option-product/ChooseSize";
import ChooseCategories from "../../components/option-product/ChooseCategories";
import ChooseColor from "../../components/option-product/ChooseColor";
import { useLocation, useNavigate } from "react-router-dom";

const NewProductPage = () => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [imgPrc, setImgPrc] = useState(0);
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    }

    const handleClick = async (e) => {
        e.preventDefault();
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
                // Handle unsuccessful uploads
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                   const product = { ...inputs, img: downloadURL, categories, sizes };
                   addProduct(product, dispatch);
                   navigate("/products");
                });
            }
        );
    }

    return (
        <div className={cl.newProduct}>
            <h1 className={cl.newProduct__title}>New Product</h1>
            <form className={cl.newProduct__form}>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Title</label>
                        <input
                        onChange={ handleChange }
                        name="title"
                        placeholder="Woman`s warm jacket"
                        type="text"
                        className={ cl.newProduct__formInput }
                        />

                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Add Photo</label>
                    {imgPrc > 0
                        ?`Uploading: ${imgPrc}%`
                        : <input
                        onChange={ e => setFile(e.target?.files[0]) }
                        type="file"
                    /> }
                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Description</label>
                    <textarea
                        onChange={handleChange}
                        name="desc"
                        cols="60"
                        rows="5"
                        placeholder="Some desc"
                        className={cl.newProduct__formTextarea}
                    />
                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Price</label>
                    <input
                        onChange={handleChange}
                        name="price"
                        placeholder="$ 20"
                        type="number"
                        className={cl.newProduct__formInput}
                    />
                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Categories</label>
                    <ChooseCategories categories={categories} setCategories={setCategories}/>
                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Stock</label>
                    <select
                        onChange={handleChange}
                        name="inStock"
                        className={cl.newProduct__formSelect}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Size</label>
                    <ChooseSize sizes={sizes} setSizes={setSizes}/>
                </div>
                <div className={cl.newProduct__formItem}>
                    <label className={cl.newProduct__formLabel}>Color</label>
                    <ChooseColor setInputs={setInputs} />
                </div>
                <button
                    onClick={handleClick}
                    className={cl.newProduct__btn}
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default NewProductPage;