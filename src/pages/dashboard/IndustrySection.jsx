import React from "react";

import hospitality from "../../assets/hotel_logo.svg";
import education from "../../assets/education_logo.svg";
import healthcare from "../../assets/healthcare_logo.svg";
import logistics from "../../assets/logistics_logo.svg";
import manufacturing from "../../assets/manufacturing_logo.svg";
import retailStore from "../../assets/retail_store_logo.svg";
import construction from "../../assets/construction_logo.svg";
import finance from "../../assets/finance_logo.svg";
import events from "../../assets/events_logo.svg";

const IndustrySection = () => {
  const desktopItems = [
    { label: "Hospitality", icon: hospitality },
    { label: "Education", icon: education },
    { label: "Health Care", icon: healthcare },
    { label: "Retail Store", icon: retailStore },
    { label: "Events", icon: events },
    { label: "Corporates", icon: events },
  ];

  const items = [
    { label: "Hospitality", icon: hospitality },
    { label: "Education", icon: education },
    { label: "Health Care", icon: healthcare },
    { label: "Logistics", icon: logistics },
    { label: "Manufacturing", icon: manufacturing },
    { label: "Retail Store", icon: retailStore },
    { label: "Construction", icon: construction },
    { label: "Finance", icon: finance },
    { label: "Events", icon: events },
    { label: "Corporates", icon: events },
  ];

  return (
    <section className="w-full overflow-hidden text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.20)_0%,_rgba(0,0,0,0.92)_55%,_rgba(0,0,0,1)_100%)]" />

        <div className="relative mx-auto max-w-[1420px] px-4 py-20 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl md:text-[65px]">
            Built for Every Team
            <br />
            Every Industry
          </h2>

          <a
            href="#industries"
            className="relative cursor-pointer mt-6 inline-flex items-center gap-2 text-[18px] font-medium text-[#008745] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008745] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Show All
            <span aria-hidden={true} className="text-[20px]">
              {"›"}
            </span>
          </a>

          {/* Mobile/Tablet Grid Layout */}
          <div className="mt-14 grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:hidden">
            {items.map((it) => (
              <div key={it.label} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center">
                  {it.icon ? (
                    <img src={it.icon} alt="" className="h-full w-full" />
                  ) : (
                    <div className="h-10 w-10 rounded bg-white/5" />
                  )}
                </div>
                <div className="text-white text-base sm:text-lg">
                  {it.label}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop 3D Card Layout */}
          <div className="mt-14 hidden md:flex justify-center items-center [perspective:1200px]">
            {desktopItems?.map((it, index) => {
              return (
                <div
                  key={it.label}
                  className="group relative transition-all cursor-pointer duration-500 ease-in-out -ml-25 hover:first:-ml-0 first:ml-0 last:-ml-30 hover:z-10 hover:-ml-20 [transform:rotateY(35deg)_scale(0.90)] hover:[transform:rotateY(0deg)_scale(1.05)]"
                >
                  <div className="relative w-[250px] h-[250px] px-8 py-10 rounded-[24px] flex flex-col items-center justify-center gap-4 bg-[linear-gradient(180deg,rgba(30,117,90,0.2),rgba(10,17,14,0.2))] border border-[#00793e] backdrop-blur-sm [perspective:200px] transition-all duration-200 [transition-timing-function:cubic-bezier(0.455,0.03,0.515,0.955)]">
                    <div className="flex h-14 w-14 items-center justify-center">
                      {it.icon ? (
                        <img src={it.icon} alt="" className="h-full w-full" />
                      ) : (
                        <div className="h-10 w-10 rounded bg-white/5" />
                      )}
                    </div>
                    <div className="text-white text-[24px] font-medium">
                      {it.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
