import { categoryData } from "data/data";

import CategoryCard from "components/categoryCard";

const Dashboard = () => {
  return (
    <section>
      <div className="flex flex-col mt-[20px] items-center w-full h-screen text-white  bg-white py-10">
        {categoryData.map((category) => (
          <CategoryCard
            key={category.id}
            color={category.color}
            icon={category.icon}
            title={category.title}
            subtitle={category.subtitle}
            category={category.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
