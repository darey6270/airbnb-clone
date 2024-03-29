import {DateRangePicker} from "react-date-range";
import {UsersIcon} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {useState} from "react";
import {useRouter} from "next/router";

const SearchInput = ({clearSearchHandler, searchInput}) => {
    const [guestNumber, setGuestNumber] =  useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const router = useRouter();

    const searchHandler = async () => {
        await router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guestNumber
            }
        });

        clearSearchHandler();
    }

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const handleSelectDate = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className={"flex flex-col col-span-3 mx-auto"}>
            <DateRangePicker minDate={new Date()} ranges={[selectionRange]} rangeColors={["#FD5B61"]} onChange={handleSelectDate} />
            <div className={"flex items-center border-b mb-4"}>
                <h2 className={"text-2xl flex-grow font-semibold"}>Number of Guests</h2>
                <UsersIcon className={"h-5"} />
                <input min={1} value={guestNumber} onChange={e => setGuestNumber(e.target.value)} type="number" className={"w-12 pl-2 text-lg outline-none text-red-400"}/>
            </div>
            <div className={"flex"}>
                <button onClick={clearSearchHandler} className={"flex-grow text-gray-500"}>Cancel</button>
                <button onClick={searchHandler} className={"flex-grow text-red-400"}>Search</button>
            </div>

        </div>
    );
};

export default SearchInput;