import cl from './WidgetSm.module.scss';
import {VisibilityOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {userRequest} from "../../RequestMethods";
const WidgetSm = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true", { withCredentials: true, });
                setUsers(res.data);
            } catch (e) {
                console.log(e)
            }
        }
        getUsers();
    }, []);

    return (
        <div className={cl.widgetSm}>
            <span className={cl.widgetSm__title}>New Join Members</span>
            <ul className={cl.widgetSm__list}>
                {users.map(user => (
                    <li
                        key={user._id}
                        className={cl.widgetSm__item}
                    >
                        <div className={cl.widgetSm__image}>
                            <img
                                className={cl.widgetSm__img}
                                src={
                                    user.img ||
                                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                                alt="user1"
                            />
                        </div>
                        <div className={cl.widgetSm__info}>
                            <span className={cl.widgetSm__name}>{user.username}</span>
                        </div>
                        <button className={cl.widgetSm__button}>
                            <VisibilityOutlined sx={{ fill: "grey", width: "20px", marginRight: "10px" }}/>
                            Display
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default WidgetSm;