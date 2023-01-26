import React, {useEffect, useState} from 'react';
import cl from "./Fitchers.module.scss";
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from "@mui/icons-material";
import {userRequest} from "../../RequestMethods";
const Fitchers = () => {
    const [income, setIncome] = useState([]);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income", { withCredentials: true, });
                setIncome(res.data);
                setPercent((res.data[1].total * 100) / res.data[0].total - 100);
            } catch (e) {
                console.log(e)
            }
        }
        getIncome();
    }, []);

    return (
        <div className={cl.fitcher}>
            <div className={cl.fitcher__item}>
                <h2 className={cl.fitcher__title}>Revenue</h2>
                <div className={cl.fitcher__revenueContainer}>
                    <span className={cl.fitcher__revenue}>$ {income[1]?.total}</span>
                    <span className={cl.fitcher__rate}>
                        {Math.floor(percent)}
                        {percent <= 0 ? (
                            <ArrowDownwardOutlined sx={{ width: "18px", height: "18px", fill: "red" }}/>
                        ) :
                            <ArrowUpwardOutlined sx={{ width: "18px", height: "18px", fill: "green" }}/>
                        }

                    </span>
                </div>
                <span className={cl.fitcher__sub}>Compared to last month</span>
            </div>

            <div className={cl.fitcher__item}>
                <h2 className={cl.fitcher__title}>Sales</h2>
                <div className={cl.fitcher__revenueContainer}>
                    <span className={cl.fitcher__revenue}>$ 8,674</span>
                    <span className={cl.fitcher__rate}>
                        -3.3 <ArrowDownwardOutlined sx={{ width: "18px", height: "18px", fill: "red" }}/>
                    </span>
                </div>
                <span className={cl.fitcher__sub}>Compared to last month</span>
            </div>

            <div className={cl.fitcher__item}>
                <h2 className={cl.fitcher__title}>Cost</h2>
                <div className={cl.fitcher__revenueContainer}>
                    <span className={cl.fitcher__revenue}>$ 2,624</span>
                    <span className={cl.fitcher__rate}>
                        +2.3 <ArrowUpwardOutlined sx={{ width: "18px", height: "18px", fill: "green" }}/>
                    </span>
                </div>
                <span className={cl.fitcher__sub}>Compared to last month</span>
            </div>
        </div>
    );
};

export default Fitchers;