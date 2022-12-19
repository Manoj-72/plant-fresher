import "./App.css";
import {
  CartPage,
  Homepage,
  ResetPwd,
  TablePage,
  VegePage,
  Verification,
} from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loginpage } from "./containers";
import { ForegetPage } from "./containers";
import { Loaderdesign } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/forget-password" element={<ForegetPage />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset-password" element={<ResetPwd />} />
        <Route path="/vegetables" element={<VegePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/loader" element={<Loaderdesign />} />
      </Routes>
    </Router>
  );
}

export default App;

/* <Login
        title="Login"
        des="Sign in and start managing your candidates!"
        placeholder="Mobile no"
        forget="Forget password?"
      /> */
