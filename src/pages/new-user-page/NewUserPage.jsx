import cl from './NewUserPage.module.scss';

const NewUserPage = () => {
    return (
        <div className={cl.newUser}>
            <h1 className={cl.newUser__title}>New User</h1>
            <form className={cl.newUser__form}>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Username</label>
                    <input
                        placeholder="john2000"
                        type="text"
                        className={cl.newUser__formInput}
                    />
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Full Name</label>
                    <input
                        placeholder="John Smith"
                        type="text"
                        className={cl.newUser__formInput}
                    />
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Email</label>
                    <input
                        placeholder="john@gmail.com"
                        type="text"
                        className={cl.newUser__formInput}
                    />
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Password</label>
                    <input
                        placeholder="• • • • • • •"
                        type="password"
                        className={cl.newUser__formInput}
                    />
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Phone</label>
                    <input
                        placeholder="+38 099 00 00 00"
                        type="text"
                        className={cl.newUser__formInput}
                    />
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Address</label>
                    <input
                        placeholder="Kyiv | Khreshchatyk St, 55"
                        type="text"
                        className={cl.newUser__formInput}
                    />
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Gender</label>
                    <div className={cl.newUser__formGender}>
                        <input
                            name="gender"
                            id="female"
                            value="female"
                            type="radio"
                            className={cl.newUser__formInput}
                        />
                        <label for="female">Female</label>
                        <input
                            name="gender"
                            id="male"
                            value="male"
                            type="radio"
                            className={cl.newUser__formInput}
                        />
                        <label for="male">Male</label>
                        <input
                            name="gender"
                            id="other"
                            value="other"
                            type="radio"
                            className={cl.newUser__formInput}
                        />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className={cl.newUser__formItem}>
                    <label className={cl.newUser__formLabel}>Active</label>
                    <select
                        name="active"
                        id="active"
                        className={cl.newUser__formSelect}
                    >
                        <option
                            value="yes"
                            className={cl.newUser__formOption}
                        >
                            Yes
                        </option>
                        <option
                            value="no"
                            className={cl.newUser__formOption}
                        >
                            No
                        </option>
                    </select>
                </div>
                <button className={cl.newUser__formBtn}>Create</button>
            </form>
        </div>
    );
};

export default NewUserPage;