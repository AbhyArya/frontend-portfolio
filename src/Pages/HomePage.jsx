import React from "react";
import FirstSegment from "../Components/FirstSegment/FirstSegment";
import SecondSection from "../Components/SecondSection/SecondSection";
export default function HomePage({ toggleDarkMode, isDarkMode, active }) {
    return (
        <>
            <FirstSegment />
            <SecondSection />
        </>
    );
}
