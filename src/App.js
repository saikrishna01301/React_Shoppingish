import Home from "./Routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/Navigation";
import Authentication from "./Routes/auth/Authentication";

const Shop = () => {
  return (
    <div>
      <h1>This is shop</h1>
    </div>
  );
};

// " Index Routes are just another child of a route, except their path is / "
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
