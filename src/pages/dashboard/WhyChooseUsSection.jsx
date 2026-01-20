import React from "react";

import supportIcon from "../../assets/person_support_logo.svg";
import aiIcon from "../../assets/ai_based_task_logo.svg";
import planIcon from "../../assets/one_plan_logo.svg";

const WhyChooseUsSection = () => {
  const items = [
    { icon: supportIcon, title: "24×7\nSupport" },
    { icon: aiIcon, title: "AI-based task\nverification" },
    { icon: planIcon, title: "One plan with\nunlimited users" },
  ];

  return (
    <section className="w-full overflow-hidden text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.20)_0%,_rgba(0,0,0,0.92)_55%,_rgba(0,0,0,1)_100%)]" />

        <div className="relative mx-auto max-w-[1120px] px-4 py-20">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[#008745]/20 blur-3xl" />

            <h2 className="relative z-10 text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
              Why Teams
              <br />
              Choose Us
            </h2>

            <div className="relative mt-12 overflow-hidden rounded-[44px] border border-[#008745]/35 bg-black/30 px-6 py-14 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.18)_0%,_rgba(0,0,0,0)_55%)]" />

              <div className="relative grid gap-12 md:grid-cols-3">
                {items.map((it) => (
                  <div
                    key={it.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#008745]/15">
                      <img src={it.icon} alt="" className="h-10 w-10" />
                    </div>
                    <div className="mt-6 text-sm font-semibold text-white/90">
                      {it.title.split("\\n").map((line, idx) => (
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
    </section>
  );
};

export default WhyChooseUsSection;
