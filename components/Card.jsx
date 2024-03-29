import Image from "next/image";

const Card = ({img, title, description, buttonText}) => {
    return (
        <section className={"py-16 relative cursor-pointer"}>
            <div className={"relative h-96 min-w-[300px]"}>
                <Image src={img} layout={"fill"} objectFit={"cover"} className={"rounded-2xl"}/>
            </div>

            <div className={"absolute top-32 left-12"}>
                <h3 className={"text-4xl font-semibold text-white mb-3 w-64"}>{title}</h3>
                <p className={"text-white pt-2 md:w-[275px] whitespace-normal"}>{description}</p>

                <button className={"text-sm bg-gray-100 font-semibold px-4 py-2 rounded-lg mt-5 "}>{buttonText}</button>
            </div>
        </section>
    );
};

export default Card;