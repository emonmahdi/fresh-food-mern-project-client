import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import Review from "./Pages/Dashboard/Review/Review";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute> 
                  <Dashboard /> 
                </PrivateRoute>
              }
            >
              <Route path="addproducts" element={<AddProducts />} />
              <Route path="myorder" element={<MyOrder />} />
              <Route path="manageorder" element={<ManageOrder />} />
              <Route path="review" element={<Review />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
            </Route>

            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/service/:Id"
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Outlet />
    </div>
  );
}

export default App;
