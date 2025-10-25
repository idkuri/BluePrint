"use client"
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Divider from "@/components/Divider";
import FadeInSection from "@/hooks/FadeInSection";

const FAQ = ({ FAQ }) => {
  const [openIndex, setOpenIndex] = useState(new Set());
  const [FAQData, setFAQData] = useState([]);

  useEffect(() => {
    console.log(FAQ)
    if (FAQ && Array.isArray(FAQ)) {
      setFAQData(FAQ);
    }
  }, [FAQ]);

  useEffect(() => {
    const handleCloseAllFAQ = (e) => {
      if (openIndex.size === 0) return;

      const faqComponents = document.querySelectorAll('div[data-component="FAQ_COMPONENT"]');
      let clickedOutside = true;

      faqComponents.forEach((component) => {
        if (component.contains(e.target)) clickedOutside = false;
      });

      if (clickedOutside) {
        setOpenIndex(new Set());
      }
    };

    document.addEventListener("click", handleCloseAllFAQ);
    return () => document.removeEventListener("click", handleCloseAllFAQ);
  }, [openIndex]);

  const toggleFAQ = (index) => {
    const newSet = new Set(openIndex);
    newSet.has(index) ? newSet.delete(index) : newSet.add(index);
    setOpenIndex(newSet);
  };

  return (
    <div className="flex justify-center bg-white">
      <main className="flex flex-col min-h-screen w-full h-full z-10 text-black text-5xl font-BRSonoma py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-50">
        <FadeInSection>
          <section id="FAQ" className="flex flex-col gap-10 sm:gap-12 md:gap-[60px]">
            <h1 className="font-semibold whitespace-pre text-5xl sm:text-7xl md:text-8xl lg:text-[112px]">FAQ</h1>
            <div className="flex flex-col gap-8 font-normal text-xl md:text-[24px] lg:text-[24px] font-ibm-plex">
              <div className="flex flex-col">
                <Divider className="transition-all duration-250 pointer-events-none" />
                {FAQData.map((faq, index) => (
                  <div key={index} data-component="FAQ_COMPONENT" onClick={() => toggleFAQ(index)}>
                    <div className="flex flex-row items-center justify-between gap-4 py-[19.5px] hover:cursor-pointer">
                      <h2 className="text-xl md:text-[26px] lg:text-[26px]">{faq.question.toUpperCase()}</h2>
                      <Plus
                        className={`${
                          openIndex.has(index) ? "rotate-135" : ""
                        } w-8 h-8 transition-all duration-350`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex.has(index) ? "h-30 opacity-100" : "h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-[19.5px] pr-12 text-base md:text-lg lg:text-xl text-gray-700">
                        {faq.answer.toUpperCase()}
                      </div>
                    </div>
                    <Divider className="transition-all duration-250 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default FAQ;
