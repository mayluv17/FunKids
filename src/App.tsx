import { Route, Routes, Outlet } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "pages/login/Login";
import Dashboard from "pages/dashboard/Dashboard";
import { useState } from "react";
import NavBar from "components/NavBar";
import SharedHeader from "components/SharedRoute";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <main className="relative flex w-full">
      {isMenuOpen && <NavBar />}

      <section className=" w-full transition duration-500 ease-in-out">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route element={<SharedHeader toggleMenu={toggleMenu} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </section>
    </main>
  );
};

export default App;
