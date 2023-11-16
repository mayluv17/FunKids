import { categoryProp } from "data/data";
import { cn } from "lib/utils";

const CategoryCard = ({ icon, color, subtitle, title }: categoryProp) => {
  return (
    <>
      <div
        className={cn(
          "w-[333px] h-[156px flex rounded-[14px] items-center p-4 mb-4",
          color
        )}
      >
        <div>
          <img src={icon} />
        </div>
        <div className="items-center text-right">
          <h1 className=" font-Itim text-[44px]">{title}</h1>
          <p className=" leading-tight text-white font-Questrial">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
