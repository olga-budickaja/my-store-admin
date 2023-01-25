import cl from './UserPage.module.scss';
import img from "../../assets/users/user6.jpg";
import {
    PersonOutlineOutlined,
    CalendarTodayOutlined,
    PhoneIphoneOutlined,
    EmailOutlined,
    GpsNotFixedOutlined,
    Publish
} from "@mui/icons-material";
import {Link} from "react-router-dom";
const UserPage = () => {
    return (
        <div className={cl.user}>
            <div className={cl.user__titleContainer}>
                <h1 className={cl.user__title}>Edit user</h1>
                <Link to="/new-user">
                    <button className={cl.user__btnAddUser}>Create</button>
                </Link>
            </div>
            <div className={cl.user__container}>
                <div className={cl.user__show}>
                    <div className={cl.user__showTop}>
                        <img className={cl.user__showImg} src={img} alt="user"/>
                        <div className={cl.user__showTitle}>
                            <span className={cl.user__showUsername}>Alice Booking</span>
                            <span className={cl.user__showUserTitle}>Software Engineer</span>
                        </div>
                    </div>
                    <div className={cl.user__showBottom}>
                        <span className={cl.user__showBottomTitle}>Account Details</span>
                        <div className={cl.user__showBottomInfo}>
                            <PersonOutlineOutlined sx={{ fill: "222223FF", marginRight: "10px", width: "16px" }}/>
                            <span className={cl.user__showBottomInfoTitle}>aliceboking66</span>
                        </div>
                        <div className={cl.user__showBottomInfo}>
                            <CalendarTodayOutlined sx={{ fill: "222223FF", marginRight: "10px", width: "16px" }}/>
                            <span className={cl.user__showBottomInfoTitle}>05.01.2023</span>
                        </div>
                        <span className={cl.user__showBottomTitle}>Contact Details</span>
                        <div className={cl.user__showBottomInfo}>
                            <PhoneIphoneOutlined sx={{ fill: "222223FF", marginRight: "10px", width: "16px" }}/>
                            <span className={cl.user__showBottomInfoTitle}>+38 096 23 44 56</span>
                        </div>
                        <div className={cl.user__showBottomInfo}>
                            <EmailOutlined sx={{ fill: "222223FF", marginRight: "10px", width: "16px" }}/>
                            <span className={cl.user__showBottomInfoTitle}>booking@gmail.com</span>
                        </div>
                        <div className={cl.user__showBottomInfo}>
                            <GpsNotFixedOutlined sx={{ fill: "222223FF", marginRight: "10px", width: "16px" }}/>
                            <span className={cl.user__showBottomInfoTitle}>Kiev | Obolon, 13/5</span>
                        </div>
                    </div>
                </div>
                <div className={cl.user__update}>
                    <span className={cl.user__updateTitle}>Edit</span>
                    <form className={cl.user__updateForm}>
                        <div className={cl.user__updateLeft}>
                            <div className={cl.user__updateItem}>
                                <label className={cl.user__updateLabel}>Username</label>
                                <input
                                    placeholder="aliceboking66"
                                    className={cl.user__updateInput}
                                    type="text"
                                />
                            </div>
                            <div className={cl.user__updateItem}>
                                <label className={cl.user__updateLabel}>Full Name</label>
                                <input
                                    placeholder="Alice Booking"
                                    className={cl.user__updateInput}
                                    type="text"
                                />
                            </div>
                            <div className={cl.user__updateItem}>
                                <label className={cl.user__updateLabel}>Email</label>
                                <input
                                    placeholder="booking@gmail.com"
                                    className={cl.user__updateInput}
                                    type="text"
                                />
                            </div>
                            <div className={cl.user__updateItem}>
                                <label className={cl.user__updateLabel}>Phone</label>
                                <input
                                    placeholder="+38 096 23 44 56"
                                    className={cl.user__updateInput}
                                    type="text"
                                />
                            </div>
                            <div className={cl.user__updateItem}>
                                <label className={cl.user__updateLabel}>Address</label>
                                <input
                                    placeholder="Kiev | Obolon, 13/5"
                                    className={cl.user__updateInput}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className={cl.user__updateRight}>
                            <div className={cl.user__updateRightUpload}>
                                <img className={cl.user__updateRightImg} src={img} alt="user"/>
                                <label htmlFor="file" className={cl.user__updateRightLabel}>
                                    <Publish sx={{ cursor: "pointer", fill: "#A60321FF" }}/>
                                </label>
                                <input
                                    id="file"
                                    className={cl.user__updateRightInput}
                                    type="file"
                                />
                            </div>
                            <button className={cl.user__updateRightBtn}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserPage;