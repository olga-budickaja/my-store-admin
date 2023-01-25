import cl from "./Sidebar.module.scss";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutlined,
    StorefrontOutlined,
    AttachMoneyOutlined,
    SignalCellularAltOutlined,
    EmailOutlined,
    DynamicFeedOutlined,
    ChatBubbleOutlineOutlined,
    WorkOutlineOutlined,
    ReportGmailerrorredOutlined

} from "@mui/icons-material";
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className={cl.sidebar}>
            <div className={cl.sidebar__wrapper}>
                <div className={cl.sidebar__menu}>
                    <h2 className={cl.sidebar__title}>Dashboard</h2>
                    <ul className={cl.sidebar__list}>
                        <li className={`${cl.sidebar__item} active`}>
                            <Link to="/">
                                <LineStyle className="active" sx={{ fill: "DimGray", marginRight: "10px" }}/>
                                Home
                            </Link>
                        </li>
                        <li className={cl.sidebar__item}>
                            <Timeline sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Analytics
                        </li>
                        <li className={cl.sidebar__item}>
                            <TrendingUp sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Sales
                        </li>
                    </ul>
                    <h2 className={cl.sidebar__title}>Quick menu</h2>
                    <ul className={cl.sidebar__list}>
                        <li className={`${cl.sidebar__item}`}>
                            <Link to="/users">
                                <PersonOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                                Users
                            </Link>
                        </li>
                        <li className={cl.sidebar__item}>
                            <Link to="/products">
                                <StorefrontOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                                Products
                            </Link>
                        </li>
                        <li className={cl.sidebar__item}>
                            <AttachMoneyOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Transaction
                        </li>
                        <li className={cl.sidebar__item}>
                            <SignalCellularAltOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Reports
                        </li>
                    </ul>
                    <h2 className={cl.sidebar__title}>Notifications</h2>
                    <ul className={cl.sidebar__list}>
                        <li className={`${cl.sidebar__item}`}>
                            <EmailOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Mail
                        </li>
                        <li className={cl.sidebar__item}>
                            <DynamicFeedOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Feedback
                        </li>
                        <li className={cl.sidebar__item}>
                            <ChatBubbleOutlineOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Messages
                        </li>
                    </ul>
                    <h2 className={cl.sidebar__title}>Staff</h2>
                    <ul className={cl.sidebar__list}>
                        <li className={`${cl.sidebar__item}`}>
                            <WorkOutlineOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Manage
                        </li>
                        <li className={cl.sidebar__item}>
                            <Timeline sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Analytics
                        </li>
                        <li className={cl.sidebar__item}>
                            <ReportGmailerrorredOutlined sx={{ fill: "DimGray", marginRight: "10px" }}/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;