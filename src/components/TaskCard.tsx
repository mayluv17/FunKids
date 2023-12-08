import star from "assets/star.svg";

const TaskCard = () => {
  return (
    <div className="p-4 mb-4 flex justtify-between items-center h-16 max-w-[333px] rounded-[14px] w-full border-4 border-purple">
      <p className="text-purple font-Questrial leading-4">
        Earn at least 20 point from skating today
      </p>
      <div className="flex">
        <p className="text-black/20 text-xl font-Itim mx-2">22</p>
        <img className="w-4" src={star} alt="star" />
      </div>
    </div>
  );
};

export default TaskCard;
