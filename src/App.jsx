import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import CityList from "./components/CityList";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<Layout />}>
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<p>Counter list</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
