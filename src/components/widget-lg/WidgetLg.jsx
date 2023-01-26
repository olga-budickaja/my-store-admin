import cl from './WidgetLg.module.scss';
import img from "../../assets/users/user2.jpg"
import {userRequest} from "../../RequestMethods";
import {useEffect, useState} from "react";
import {format} from "timeago.js";

const Button = ({type}) => {
    return <button className={`${cl.widgetLg__btn} ${type}`}>{type}</button>
}
const WidgetLg = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders", { withCredentials: true, });
                setOrders(res.data);
            } catch (e) {
                console.log(e)
            }
        }
        getOrders();
    }, []);
    return (
        <div className={cl.widgetLg}>
            <h3 className={cl.widgetLg__title}>Latest transactions</h3>
            <table className={cl.widgetLg__table}>
                <tr className={cl.widgetLg__tr}>
                    <th className={cl.widgetLg__th}>Customer</th>
                    <th className={cl.widgetLg__th}>Date</th>
                    <th className={cl.widgetLg__th}>Amount</th>
                    <th className={cl.widgetLg__th}>Status</th>
                </tr>
                {orders.map(order => (
                    <tr className={cl.widgetLg__tr} key={order._id}>
                        <td className={cl.widgetLg__user}>
                            <img
                                className={cl.widgetLg__img}
                                src={img}
                                alt="user"
                            />
                            <span className={cl.widgetLg__name}>{order.userId}</span>
                        </td>
                        <td className={cl.widgetLg__date}>{format(order.createdAt)}</td>
                        <td className={cl.widgetLg__amount}>${order.amount}</td>
                        <td className={cl.widgetLg__status}>
                            <Button type={order.status} />
                        </td>
                    </tr>
                ))}

            </table>
        </div>
    );
};

export default WidgetLg;