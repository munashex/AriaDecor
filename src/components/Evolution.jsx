import { evolutionData } from "../data/evolution";
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";
import { FaRegCircleDot } from "react-icons/fa6";

const Evolution = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-y-5">
            <div>
                <h1 className="inline-flex gap-1 items-center font-semibold text-sm">
                    <FaRegCircleDot size={16}/> OUR HISTORY
                </h1>
                <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">The Evolution of Ariadeco</h1>
            </div>

            <div className="space-y-9">
                {evolutionData.map((item) => (
                    <div key={item.year} className={`space-y-3 ${theme === 'light' ? 'bg-[#EDECEC] p-2 rounded-md md:p-4 lg:p-5' : 'bg-[#242323] p-2 rounded-md md:p-4 lg:p-5'}`}>
                        <div className="relative">
                            <h1 className="text-8xl font-bold">{item.year}</h1>
                            <h1 className={`absolute top-1/2 font-semibold -translate-y-1/2 px-2 ${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#1B1B1B]'}`}>
                                {item.name}
                            </h1>
                        </div>
                        <h1>{item.description}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evolution;
