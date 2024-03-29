import Home from "../components/Home";
import {exploreData} from "../data/data";
import {cardsData} from "../data/data";

export default function HomePage({exploreData, cardsData}) {
  return (
      <Home exploreData={exploreData} cardsData={cardsData} />
  )
}

export const getStaticProps = async () => {

  return {
    props: {
       exploreData,
      cardsData
    }
  }
}