import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import AppProvider from "./Context/AppContext"
import AuthProvider from "./Context/AuthContext";



const Home = lazy(() => import("../pages/Home"));
const CategoryPage = lazy(() =>
  import("./components/Category/CategoryPage/CategoryPage")
);
const SingleProduct = lazy(() =>
  import("./components/SingleProduct/SingleProduct")
);
const Success = lazy(() => import("./components/Success/Success"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const Newsletter = lazy(() => import("./components/Newsletter/Newsletter"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/Header/Header"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <AuthProvider>
        <AppProvider>
          <Suspense fallback={<Loader/>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Newsletter />
          <Footer />
          </Suspense>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
