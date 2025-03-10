import React from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/SpaghettiBolognese.jpg";
import img2 from "../assets/KremetKyllingsuppe.jpg";
import img3 from "../assets/MargarittaPizza.jpg";
import img4 from "../assets/SushiMix.jpg";
import img5 from "../assets/Cæsarsalat.jpg";
import img10 from "../assets/Entrecote-med-Grønnsaker.jpg";

const SavouryDishes = () => {
  return (
    <div className="w-full p-10 shadow-emerald-400 shadow rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Savoury Dishes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DishesCard
          img={img1}
          title="Spaghetti Bolognese"
          price="159kr"
          description="Ingredienser: Spaghetti, kjøttsaus, parmesan"
        />
        <DishesCard
          img={img2}
          title="Kremet Kyllingsuppe"
          price="129kr"
          description="Ingredienser: Kylling, fløte, gulrøtter, selleri"
        />
        <DishesCard
          img={img3}
          title="Margaritta Pizza"
          price="169kr"
          description="Ingredienser: Tomatsaus, mozzarella, basilikum"
        />
        <DishesCard
          img={img4}
          title="Sushi Mix"
          price="229kr"
          description="Ingredienser: Laks, tunfisk, reker, ris"
        />
        <DishesCard
          img={img5}
          title="Cæsarsalat"
          price="139kr"
          description="Ingredienser: Romanosalat, kylling, parmesan, dressing"
        />
        <DishesCard
          img={img10}
          title="Entrecote med Grønnsaker"
          price="289kr"
          description="Ingredienser: Entrecôte, asparges, poteter, peppersaus"
        />
      </div>
    </div>
  );
};

export default SavouryDishes;
