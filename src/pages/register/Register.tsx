import Logo from "assets/logo.svg";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import { LuLoader2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full h-screen text-white  bg-lemon py-10">
        <img src={Logo} />
        <h1 className="text-xl font-bold mt-4">Create an account</h1>
        <form className="flex flex-col text-left h-[400px] w-[330px] justify-center items-center gap-[16px]">
          <Input
            className="indent-4 text-slate-500"
            type="email"
            label="Email"
            placeholder="examemial@email.com"
          />
          <Input
            className="indent-4 text-slate-500"
            type="paswword"
            label="Password"
            placeholder="********"
          />
          <Input
            className="indent-4 text-slate-500"
            label="Retype Password"
            placeholder="********"
          />
          <Button
            icon={LuLoader2}
            className=""
            label={"Register"}
            fullWidth={true}
            isLoading={true}
            textColor="brown"
          />
        </form>
        <p>
          Do you have an account? <Link to={"login"}>Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
