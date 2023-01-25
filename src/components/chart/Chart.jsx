import cl from "./Chart.module.scss";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <div className={cl.chart}>
            <h2 className={cl.chart__title}>{title}</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#8C583A" />
                    <Line type="monotone" dataKey={dataKey} stroke="#8C583A" />
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e5e7ea" strokeDasharray="5 5"/>}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;