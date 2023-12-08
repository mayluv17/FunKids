import TaskCard from "components/TaskCard";
import { cn } from "lib/utils";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Params, useParams } from "react-router";

const percentage = 66;

const Category = () => {
  const { category } = useParams<Params<string>>();
  const globalColors = {
    purple: "#CE82FF",
    lemon: "#77C801",
    bluesky: "#1DB0F6",
    onion: "#43C6B4",
    onionDeep: "#24AF9B",
    chocolate: "#433636",
    yellow: "#FFC800",
    yellowDeep: "#FEB100",
  };
  return (
    <div className="flex flex-col items-center w-full h-screen text-white  bg-white py-4">
      {category}
      <div className="flex w-fit mb-4 gap-2 max-w-[333px] items-center justify-between">
        <div className="w-14 h-14">
          <CircularProgressbar
            value={percentage}
            strokeWidth={10}
            styles={buildStyles({
              textColor: globalColors.purple,
              pathColor: globalColors.purple,
            })}
            text={`${percentage}%`}
          />
        </div>
        <div className={cn(" flex-1 font-Itim leading-none", `text-purple`)}>
          You have completed 8/10 of your skating task
        </div>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default Category;
