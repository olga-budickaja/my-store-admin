import cl from './UsersPage.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import {Delete} from "@mui/icons-material";
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";

const UsersPage = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className={cl.user__avatar}>
                        <img src={params.row.avatar} alt="user" />
                        {params.row.username}
                    </div>
                )
            }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className={cl.user__btn}>Edit</button>
                        </Link>

                        <Delete
                            onClick={() => handleDelete(params.row.id)}
                            sx={{ fill: "#A60321", cursor: "pointer" }} />
                    </>
                )
            }
        },
    ];
    return (
        <div className={cl.user}>
            <Link to="/new-user">
                <button
                    className={`${cl.user__btn} ${cl.user__btnTop}`}
                >
                    Add User
                </button>
            </Link>

            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default UsersPage;