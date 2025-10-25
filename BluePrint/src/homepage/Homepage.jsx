import React from 'react';
import Hero from "@/homepage/Hero.jsx";
import Introduction from "@/homepage/Introduction.jsx";
import Agenda from "@/homepage/Agenda.jsx";
import Speaker from "@/homepage/Speaker.jsx";
import TheEvent from "@/homepage/TheEvent.jsx";
import FAQ from "@/homepage/FAQ.jsx";
import Copyright from "@/homepage/Copyright.jsx";

const Homepage = (events) => {
    if (!events) return null;

    const { title, introduction, agenda, speakers, description, faq, date, location } = events.data;
    return (
        <div className="overflow-x-hidden">
            <Hero data={{ title, date, location }} />
            <Introduction introduction={introduction} />
            <Agenda agenda={agenda} />
            <Speaker speakers={speakers} />
            <TheEvent description={description} />
            <FAQ FAQ={faq} />
            <Copyright />
        </div>
    );
};

export default Homepage;
