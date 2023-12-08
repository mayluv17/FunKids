// import { categoryData } from "data/data";

// import CategoryCard from "components/categoryCard";
import cameraIcon from "assets/Icons/camera.svg";
import sendIcon from "assets/Icons/Vector.svg";
import { BsCheck } from "react-icons/bs";
import Button from "components/ui/Button";
import bikeBoy from "assets/bike-boy.jpg";

const SingleTask = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between h-screen text-white  bg-white py-4">
        <div className="w-[333px]">
          <h5 className=" font-bold text-purple text-lg">
            Some heading for our task title
          </h5>
          <p className=" text-black/25 font-Questrial text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
        <div className="action-wrap h-auto w-[333px] flex flex-col items-end gap-2">
          <div className="message-wrap rounded-md bg-purple w-[80%] h-auto p-3">
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has
            </p>
          </div>
          <div className="w-[200px] h-auto flex justify-end">
            <img className="w-fit" src={bikeBoy} alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-between w-[333px] gap-2">
          <div className="flex gap-3">
            <div className="action-area w-[80%]">
              <input type="textarea" className="border-2 w-full h-[98px]" />
            </div>

            <div className="action-area flex-1 flex flex-col gap-2">
              <button className="tiny-action h-10 w-10 flex items-center justify-center rounded-md bg-onion">
                <img src={cameraIcon} alt="camera_icon" />
              </button>
              <button className="tiny-action h-10 w-10 flex items-center justify-center rounded-md bg-onion">
                <img src={sendIcon} alt="camera_icon" />
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col">
            <Button
            className=" bg-onion border-onionDeep" //render this dynamically 
              icon={BsCheck} //change this on submit
              fullWidth={true}
              label="Complete Task" //change this 
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTask;
