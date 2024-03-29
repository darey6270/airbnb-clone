import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import {useRouter} from "next/router";
import {format} from "date-fns";

const Layout = ({children}) => {
    const router = useRouter();
    const {location, startDate, endDate, guestNumber} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    const {pathname} = router;

    return (
        <>
            {pathname === "/" && <Header placeholder={"Start your search."} />}
            {pathname !== "/" && <Header placeholder={`${location} | ${range} | ${guestNumber} guest(s)`} />}
            {pathname === "/" && <Hero />}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;