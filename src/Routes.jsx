import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import StudentList from "./Components/StudentList";
import Teachers from "./Components/Teachers";
import Classes from "./Components/Classes";
import Reports from "./Components/Reports";
import Calendar from "./Components/Calendar";
import Messages from "./Components/Messages";
import Settings from "./Components/Settings";


let routes = [
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/studentlist', element: <StudentList /> },
    { path: '/teachers', element: <Teachers /> },
    { path: '/classes', element: <Classes /> },
    { path: '/reports', element: <Reports /> },
    { path: '/calendar', element: <Calendar /> },
    { path: '/messages', element: <Messages /> },
    { path: '/settings', element: <Settings /> },
]




export default routes ;