
import pixelfood from "../assets/pixelfood.png";
import heroBg from "../assets/hero.jpg";

const Hero = ({fetchRandomRecipe}) => {

    return(

        <section className=" relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-16" style={{ backgroundImage: `url(${heroBg})` }}> 
            
        

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:gap-24 w-full max-w-7xl">

                <div className="w-full md:w-1/2 flex-justify-center mb-8 md:mb-0">

                    <img src={pixelfood} alt="Pixelated Food" className="w-72 md:w-96 lg:w-[28rem] animate-[float_6s_ease-in-out_infinite]" />

                </div>

                <div className="w-full md:w-1/2 text-center md:text-left text-white">
                    
                    <p className="text-pink-400 font-bold uppercase tracking-wide text-xl md:text-base">Dont Be Shy</p>

                    <h1 className="font-pixel text-4xl md:text-5xl leading-relaxed mt-2">Explore Easy <br /> & Fun Recipes</h1>

                    <p className="font-sans text-gray-400 mt-4 text-lg md:text-base">
                        Dive into a world of delicious pixelated delights! Our recipes are
                        designed to be as fun to make as they are to eat. Whether you're a
                        seasoned chef or a kitchen newbie, we've got something for everyone</p>
                    <button onClick={fetchRandomRecipe} className="mt-6 bg-pink-500 hover:bg-pink-600 focus:outline-2 focus:outline-offset-2 focus:outline-pink-500 active:bg-pink-700 px-6 py-3 rounded-lg font-pixel text-sm transition"> Generate Recipe</button>
                </div>
            </div>

        </section>


    

    );
};
export default Hero;