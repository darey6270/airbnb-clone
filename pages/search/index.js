import Search from "../../components/Search";
import {searchResults} from "../../data/data";

const SearchPage = ({searchResults}) => {
    return (
        <Search searchResults={searchResults} />
    );
};

export default SearchPage;

export const getServerSideProps = async (context) => {

    return {
        props: {
            searchResults
        }
    }
}