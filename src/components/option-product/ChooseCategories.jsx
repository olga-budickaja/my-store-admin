import cl from './Choose.module.scss';
import { catsData } from "../../dummyData";
import ChooseCategoriesItem from "./ChooseCategoriesItem";

const ChooseCategories = ({categories, setCategories}) => {
    return (
        <div className={cl.check}>
            <div className={cl.checkWrappWrapp}>
                {catsData.map(cat =>
                    <ChooseCategoriesItem
                        categories={categories}
                        setCategories={setCategories}
                        cat={cat}
                        key={cat.id}
                    />
                )}
            </div>
        </div>
    );
};

export default ChooseCategories;