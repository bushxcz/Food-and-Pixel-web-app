import react from "react";

const tips = [
  {
    id: 1,
    title: "Use Fresh Ingredients",
    description:
      "Fresh ingredients can significantly enhance the flavor of your dishes. Visit local farmers' markets for the best produce.",
  },
  {
    id: 2,
    title: "Master Basic Techniques",
    description:
      "Learning fundamental cooking techniques like chopping, sautéing, and roasting can improve your culinary skills.",
  },
  {
    id: 3,
    title: "Season Properly",
    description:
      "Don't be afraid to use herbs and spices. Proper seasoning can elevate a simple dish to something extraordinary.",
  }
]

const TipSection = () =>{

  return (

    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-10 font-pixel">Cooking Tips</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tips.map((tip)=>(

            <div key={tip.id} className="bg-white/10 backdrop-blur-lg border border-pink-500/30 rounded-2xl shadow-lg p-6 hover:scale-[1.05] hover:shadow-pink-500/50 transition-transform duration-300">
              <h3 className="text-lg  font-pixel text-yellow-400 mb-3">{tip.title}</h3>
              <p className="text-gray-300 text-sm">{tip.description}</p>
            </div>

          )) }
        </div>
      </div>
    </section>
  );
}

export default TipSection;