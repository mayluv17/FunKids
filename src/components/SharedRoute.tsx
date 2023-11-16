import { Outlet } from "react-router-dom";
import Header from "./Header";

interface toggleMenuProps {
  toggleMenu: () => void;
}
const SharedHeader = ({ toggleMenu }: toggleMenuProps) => {
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Outlet />
    </>
  );
};

export default SharedHeader;
