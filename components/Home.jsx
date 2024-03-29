import Title from "./Title";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";
import Card from "./Card";
import hosting from "../public/images/airbnb-babe.webp"
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = ({exploreData, cardsData}) => {
    return (
        <>
            <Title title={"AirBnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & ..."} />

            <Header placeholder={"Start your search..."} />
            <Hero />
            <main className={"max-w-7xl mx-auto px-8 sm:px-16"}>
                <section className={"pt-6"}>
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

                    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                        {exploreData?.map(({img, distance, location}, index) => <SmallCard key={index} img={img} distance={distance} location={location} />)}
                    </div>
                </section>

                <section>
                    <h2 className={"text-4xl font-semibold py-8"}>Live Anywhere</h2>

                    <div className={"flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3"}>
                        {cardsData?.map(({title, img}, index) => <MediumCard img={img} title={title} key={index} />)}
                    </div>
                </section>

                <Card
                    img={hosting}
                    title={"Try hosting"}
                    buttonText={"Learn more"}
                    description={"Earn extra income and unlock new opportunities by sharing your space."}
                />
            </main>
            <Footer />
        </>
    );
};

export default Home;