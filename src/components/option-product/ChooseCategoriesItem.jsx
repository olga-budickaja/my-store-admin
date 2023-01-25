import cl from './Choose.module.scss';

const ChooseCategoriesItem = ({categories, setCategories, cat}) => {
    const handleCategories = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setCategories([...categories, value])
        } else {
            setCategories(categories.filter((e) => (e !== value)))
        }
    }
    return (
        <div className={cl.checkItem}>
            <input
                onChange={handleCategories}
                type="checkbox"
                name="size"
                value={cat.value}
            />
            <label htmlFor="">{cat.value}</label>
        </div>
    );
};

export default ChooseCategoriesItem;