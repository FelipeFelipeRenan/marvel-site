import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Heroes from "./pages/heroes";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/heroes" element={<Heroes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
