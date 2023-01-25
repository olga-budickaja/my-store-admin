import cl from "./styles/App.module.scss"
import AppRouter from "./components/AppRouter";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
    const userId = useSelector(state => state.user.currentUser?._id);
  return (
    <div className={cl.App}>
        {!userId
            ? <Login/>
            : <>
                <Topbar/>
                <div className={cl.container}>
                    <Sidebar/>
                    <AppRouter />
                </div>
            </>
        }
    </div>
  );
}

export default App;
