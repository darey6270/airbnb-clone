const Footer = () => {
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-10 py-14 px-32 bg-gray-100"}>
            <div className={"space-y-4 text-sm text-gray-800"}>
                <h5 className={"font-bold"}>ABOUT</h5>
                <p> How Airbnb works</p>
                <p> Newsroom</p>
                <p> Airbnb 2021</p>
                <p> Investors</p>
                <p> Airbnb Plus</p>
                <p> Airbnb Luxe</p>
                <p> Hotel Tonight</p>
                <p> Careers</p>
                <p> Founders letters</p>
                <p> Airbnb for Work</p>
                <p> Made possible by Hosts</p>
                <hr className={"md:hidden"}/>
            </div>

            <div className={"space-y-4 text-sm text-gray-800"}>
                <h5 className={"font-bold"}>COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p> Against Discrimination</p>
                <p> Accessibility</p>
                <p> Airbnb Associates</p>
                <p> Airbnb Luxe</p>
                <p> Host Afghan refugees</p>
                <p> Guest Referrals</p>
                <p>Gift cards</p>
                <hr className={"md:hidden"}/>

            </div>

            <div className={"space-y-4 text-sm text-gray-800"}>
                <h5 className={"font-bold"}>HOST</h5>
                <p> Host your home</p>
                <p> Host an Online Experience</p>
                <p> Host an Experience</p>
                <p> Responsible hosting</p>
                <p> Resource Center</p>
                <p> Airbnb for Work</p>
                <p> Community Center</p>
                <hr className={"md:hidden"}/>

            </div>

            <div className={"space-y-4 text-sm text-gray-800"}>
                <h5 className={"font-bold"}>SUPPORT</h5>
                <p> Our COVID-19 Response</p>
                <p> Help Center</p>
                <p> Cancellation options</p>
                <p> Neighborhood Support</p>
                <p> Trust & Safety</p>
                <hr className={"md:hidden"}/>
            </div>
        </div>
    );
};

export default Footer;