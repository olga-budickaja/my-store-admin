import cl from './Choose.module.scss';
import {sizesChoose} from "../../dummyData";
import ChooseSizeItem from "./ChooseSizeItem";
const ChooseSize = ({sizes, setSizes}) => {
    return (
        <div className={cl.check}>
            <div className={cl.checkWrapp}>
                {sizesChoose.map(size =>
                    size.type === "EU" &&
                    <ChooseSizeItem
                        sizes={sizes}
                        setSizes={setSizes}
                        size={size}
                        key={size.id}
                    />
                )}
            </div>
            <div className={cl.checkWrapp}>
                {sizesChoose.map(size =>
                    size.type === "UK" &&
                    <ChooseSizeItem
                        sizes={sizes}
                        setSizes={setSizes}
                        size={size}
                        key={size.id}
                    />
                )}
            </div>
        </div>
    );
};

export default ChooseSize;