import React from "react";

import supportIcon from "../../assets/person_support_logo.svg";
import aiIcon from "../../assets/ai_based_task_logo.svg";
import planIcon from "../../assets/one_plan_logo.svg";
import subtractBg from "../../assets/Subtract1.svg";

const WhyChooseUsSection = () => {
  const items = [
    { icon: supportIcon, title: "24×7\nSupport" },
    { icon: aiIcon, title: "AI-based task\nverification" },
    { icon: planIcon, title: "One plan with\nunlimited users" },
  ];

  return (
    <section className="w-full overflow-hidden text-white ">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.20)_0%,_rgba(0,0,0,0.92)_55%,_rgba(0,0,0,1)_100%)]" />

        <div className="relative mx-auto max-w-[1420px] px-4 py-20">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-30 h-48 w-[320px] -translate-x-1/2 rounded-full bg-[#008745]/50 blur-3xl" />

            <h2 className="relative mb-10 z-10 text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
              Why Teams
              <br />
              Choose Us
            </h2>
            <div className="background-substract">
              <div className="pb-[120px] sm:pb-[120px] md:pb-0 pt-[120px] sm:pt-[120px] md:pt-[220px]">
                <div className="relative grid gap-12 md:grid-cols-3 m-auto">
                  {items.map((it) => (
                    <div
                      key={it.title}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="flex h-24 w-24 md:h-36 md:w-36 items-center justify-center ">
                        <img
                          src={it.icon}
                          alt=""
                          className="h-24 w-24md:h-36 md:w-36"
                        />
                      </div>
                      <div className="mt-6 md:text-[24px] text-[18px] font-semibold text-white/90">
                        {it?.title?.split("\n").map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
