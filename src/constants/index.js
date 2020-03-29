import AdminHomePage from "../containers/AdminHomePage";
import Taskboard from "../containers/Taskboard";
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";

export const API_URL = "http://localhost:3000";
export const STATUSES = [
    {
        value: 0,
        label: "Ready"
    },
    {
        value: 1,
        label: "In Processing"
    },
    {
        value: 2,
        label: "Complete"
    }
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
};

export const ADMIN_ROUTES = [
    {
        path: "/admin/task",
        name: "Manage Tasks",
        component: Taskboard
    },
    {
        path: "/admin",
        name: "Admin Home",
        exact: true,
        component: AdminHomePage
    }
];

export const ROUTES = [
    {
        path: "/login",
        component: LoginPage,
        name: "Login"
    },
    {
        path: "/signup",
        component: SignUpPage,
        name: "Sign Up"
    }
];
