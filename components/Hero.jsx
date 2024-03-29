import Image from "next/image";
import hero from "../public/images/hero.webp";

const Hero = () => {
    return (
        <div className={"relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"}>
            <Image alt={""} src={hero} objectFit={"cover"} layout={"fill"} />

            <div className={"absolute top-1/2 w-full text-center"}>
                <p className={"text-sm sm:text-large md:text-3xl md:font-bold"}>Not sure where to go? Perfect.</p>
                <button className={"text-purple-500 bg-white px-10 py-4  shadow-md rounded-full font-bold my-3 " +
                "hover:shadow-xl active:scale-90 transition duration-150"}>I am flexible</button>
            </div>
        </div>
    );
};

export default Hero;