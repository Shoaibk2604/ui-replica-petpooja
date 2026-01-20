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

          <div className="mt-14 grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
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
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
