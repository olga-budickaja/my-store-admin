import cl from './Choose.module.scss';
import {colorsData} from "../../dummyData";

const ChooseColor = ({setInputs}) => {
    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    }
    return (
        <select
            onChange={handleChange}
            name="color"
            id="color"
            className={cl.select}
        >
            {colorsData.map(color =>
                <option
                    key={color.value}
                    value={color.value}
                    style={{ background: `${color.bg}`, color: `${color.color}` }}
                >
                    {color.name}
                </option>
            )}
            {/*<option value="white">White</option>*/}
            {/*<option style={{ background: "red", color: "white", opacity: "0.5" }} value="red">Red</option>*/}
            {/*<option style={{ background: "LightBlue" }} value="LightBlue">LightBlue</option>*/}
            {/*<option value="LightPink">LightPink</option>*/}
            {/*<option value="MediumAquaMarine">MediumAquaMarine</option>*/}
            {/*<option value="DarkSeaGreen">DarkSeaGreen</option>*/}
            {/*<option value="SeaShell">SeaShell</option>*/}
            {/*<option value="BurlyWood">BurlyWood</option>*/}
        </select>
    );
};

export default ChooseColor;