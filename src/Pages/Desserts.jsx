import React from "react";
import DishesCard from "../layouts/DishesCard";
import img6 from "../assets/Brownie.jpg";
import img8 from "../assets/Pannekaker-med-Syltetøy.jpg";

const Desserts = () => {
  return (
    <div className="w-full p-10 shadow-emerald-400 shadow rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DishesCard
          img={img6}
          title="Brownie med Is"
          price="89kr"
          description="Ingredienser: Brownie, vaniljeis, sjokoladesaus"
        />
        <DishesCard
          img={img8}
          title="Pannekaker med Syltetøy"
          price="99kr"
          description="Ingredienser: Pannekaker, jordbærsyltetøy, sukker"
        />
      </div>
    </div>
  );
};

export default Desserts;
