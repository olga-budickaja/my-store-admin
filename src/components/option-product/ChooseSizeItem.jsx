import cl from './Choose.module.scss';

const ChooseSizeItem = ({sizes, setSizes, size}) => {
    const handleCheck = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setSizes([...sizes, value])
        } else {
            setSizes(sizes.filter((e) => (e !== value)))
        }
    }
    return (
        <div className={cl.checkItem}>
            <input
                onChange={handleCheck}
                type="checkbox"
                name="size"
                value={size.value}
            />
            <label>{size.value}</label>
        </div>
    );
};

export default ChooseSizeItem;