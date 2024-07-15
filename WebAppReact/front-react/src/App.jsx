import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import LogoutPage from "./pages/LogoutPage";
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const SalesPage = lazy(() => import("./pages/SalesPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="container-loader">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/About" exact element={<AboutPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/logout" exact element={<LogoutPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Categories" exact element={<CategoriesPage />} />
            <Route path="/Customers" exact element={<CustomersPage />} />
            <Route path="/Sales" exact element={<SalesPage />} />
            <Route path="/Products" exact element={<ProductsPage />} />
            <Route path="/Users" exact element={<UsersPage />} />
            <Route path="/Reports" exact element={<ReportsPage />} />
          </Route>
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
