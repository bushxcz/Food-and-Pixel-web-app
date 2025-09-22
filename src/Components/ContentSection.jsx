import React from "react";

const ContentSection = ({ recipes }) => {
  return (
    <main className="w-full max-w-7xl mx-auto p-6 md:p-12 font-inter">
      <section id="recipes" className="py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-pink-400 font-pixel">Our Latest Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-neutral-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:z-10 cursor-pointer">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-auto object-contain rounded-t-lg bg-neutral-900"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/e879f9/ffffff?text=Image+Failed" }} 
              />
              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-2 text-yellow-400 font-sans">{recipe.title}</h3>
                <p className="text-gray-400  text-center mb-4 text-sm">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ContentSection;
