import React from "react";
import DishesCard from "../layouts/DishesCard";
import img7 from "../assets/TacoTallerken.jpg";
import img9 from "../assets/Reker-med-Sitron.jpg";

const SpicyDishes = () => {
  return (
    <div className="w-full p-10 shadow-emerald-400 shadow rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Spicy Dishes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DishesCard
          img={img7}
          title="Taco Tallerken"
          price="199kr"
          description="Ingredienser: Kjøttdeig, mais, ost, guacamole, jalapeños"
        />
        <DishesCard
          img={img9}
          title="Reker med Sitron"
          price="149kr"
          description="Ingredienser: Reker, sitron, dill, brød, chili flakes"
        />
      </div>
    </div>
  );
};

export default SpicyDishes;
