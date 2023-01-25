import cl from "./Topbar.module.scss";
import { Link } from "react-router-dom";
import {NotificationsOutlined, LanguageOutlined, Settings} from "@mui/icons-material";
import avatar from "../../assets/users/user2.jpg";
const Topbar = () => {
    return (
        <div className={cl.topbar}>
            <div className={cl.topbar__wrapper}>
                <div className={cl.topbar__left}>
                    <Link to="/" className={cl.topbar__linkLogo}>
                        <span className={cl.topbar__logo}>My store admin</span>
                    </Link>

                </div>
                <div className={cl.topbar__right}>
                    <div className={cl.topbar__iconContainer}>
                        <NotificationsOutlined sx={{ fill: "grey" }}/>
                        <span className={cl.topbar__topIconBadge}>2</span>
                    </div>
                    <div className={cl.topbar__iconContainer}>
                        <a href="https://boa-store.herokuapp.com" target="_blank">
                            <LanguageOutlined sx={{ fill: "grey" }}/>
                        </a>
                    </div>
                    <div className={cl.topbar__iconContainer}>
                        <Settings sx={{ fill: "grey" }}/>
                    </div>
                    <div className={cl.topbar__avatar}>
                        <img className={cl.topbar__img} src={avatar} alt="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;