import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "./layout/Layout.jsx";
import { Overview } from "./pages/Overview.jsx";
import { TestPage } from "./pages/TestPage.jsx";
import { Income } from "./pages/Income.jsx";
import { Expenses } from "./pages/Expenses.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Overview /> },
            { path: "test", element: <TestPage /> },
            { path: "income", element: <Income /> },
            { path: "expenses", element: <Expenses /> },
        ],
    },
])