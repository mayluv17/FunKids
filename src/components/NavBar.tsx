import user_icon from "assets/Icons/user.svg";
import unlock from "assets/Icons/unlock.svg";

const NavBar = () => {
  return (
    <>
      <nav className="w-60">
        <div className="h-full text-white bg-lemon">
          <ul className="p-10">
            <li className="h-10 flex items-center">
              <img className="mr-2 w-4" src={user_icon} alt="profile_icon" />
              Profile
            </li>
            <li className="h-10 items-center flex">
              <img className="mr-2 w-4" src={unlock} alt="logout_icon" />
              Logout
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
