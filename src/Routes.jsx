import StudentList from "./Components/StudentList";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

let routes = [
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/studentlist', element: <StudentList /> },
]




export default routes ;