import { Routes, Route, BrowserRouter } from "react-router-dom";
import Comics from "./pages/comics";
import Heroes from "./pages/heroes";
import Main from "./pages/main";
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/heroes" element={<Heroes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
