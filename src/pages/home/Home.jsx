import cl from "./Home.module.scss";
import Fitchers from "../../components/fitchers/Fitchers";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widget-sm/WidgetSm";
import WidgetLg from "../../components/widget-lg/WidgetLg";
import {useEffect, useMemo, useState} from "react";
import {userRequest} from "../../RequestMethods";

const Home = () => {
    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ], []);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("users/stats");
                res.data.map(item => {
                    setUserStats(prev => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total }
                    ])
                });
            } catch (e) {
                console.log(e)
            }
        }
        getStats();
    }, [MONTHS]);

    return (
        <div className={cl.home}>
            <Fitchers />
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
            <div className={cl.home__widgets}>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>

    );
};

export default Home;