import React from "react";
import SectionWrapper from "../Components/SectionWrapper/SectionWrapper";
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactCards from "../Components/ContactForm/ContactCards";
export default function ContactPage() {
    return (
        <>
            <SectionWrapper>
                <ContactCards />
                <ContactForm />
            </SectionWrapper>
        </>
    );
}
