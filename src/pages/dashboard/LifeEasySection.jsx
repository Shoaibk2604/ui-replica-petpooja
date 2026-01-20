import React from "react";

import card1 from "../../assets/life_easy_card1.svg";
import card2 from "../../assets/life_easy_card2.svg";
import card3 from "../../assets/life_easy_card3.svg";
import card4 from "../../assets/life_easy_card4.svg";
import card5 from "../../assets/life_easy_card5.svg";

const LifeEasySection = () => {
  return (
    <section className="w-full overflow-hidden text-white">
      <div className="relative">
        <div className="relative mx-auto max-w-[1320px] px-4 py-20">
          <h2 className="text-white text-center mb-10 md:mb-20 leading-[1.25] text-[65px] font-medium sm:font-semibold">
            How We Make Your Life Easy
          </h2>

          <div className="mt-14 grid gap-0  md:grid-cols-[65%_35%]">
            <div className="relative overflow-hidden border-y-[0.92px] md:border-l-[0.92px] border-[#00874533] p-8 ">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#008745]/20 blur-3xl" />
              <div className="relative">
                <div className="mb-12">
                  <h6 className="text-[30px] font-semibold sm:text-2xl mb-6">
                    Provide clear project briefs
                  </h6>
                  <p className="text-white/70 feature-p leading-[1.25] text-center text-[17px] md:text-left max-w-[430px]">
                    Attach files, SOPs, and visuals right when assigning — so
                    your team always knows exactly what{"'"}s needed.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={card1}
                    alt="Project details card"
                    className="mt-8 h-auto w-full max-w-[360px]"
                  />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border  border-[#00874533] border-r-0 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <img
                  src={card2}
                  alt="Centralised management graphic"
                  className="w-full h-full object-contain mx-auto gm-lazy gm-loaded gm-observing gm-observing-cb"
                />
                <div className="mt-10">
                  <h6 className="text-[30px] font-semibold sm:text-2xl mb-6">
                    Centralise project &amp; task management
                  </h6>
                  <p className="text-white/70 feature-p leading-[1.25] text-center text-[17px] md:text-left max-w-[430px]">
                    Manage everything from one centralised dashboard — schedule
                    tasks, assign owners, automate repeated tasks and track
                    progress easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-0  md:grid-cols-[35%_65%]">
            <div className="relative overflow-hidden  border border-[#00874533] border-l-0 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative">
                <div>
                  <h6 className="text-[30px] font-semibold sm:text-2xl mb-6">
                    Work in your preferred language
                  </h6>
                  <p className="text-white/70 feature-p leading-[1.25] text-center text-[17px] md:text-left max-w-[430px]">
                    Assign work in the language your team understands. Select
                    from seven languages, which include Hindi, English,
                    Malayalam, Telugu, Tamil, and Gujarati.
                  </p>
                </div>
                <img
                  src={card3}
                  alt="Languages card"
                  className="w-full h-full object-contain mx-auto gm-lazy gm-loaded gm-observing gm-observing-cb"
                />
              </div>
            </div>

            <div className="relative overflow-hidden border border-[#00874533] border-r-0 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative">
                <img
                  src={card4}
                  alt="Assign work card"
                  className="w-full h-full object-contain mx-auto gm-lazy gm-loaded gm-observing gm-observing-cb"
                />
                <div>
                  <h6 className="text-[30px] font-semibold sm:text-2xl mb-6">
                    Use Geofencing & Geotagging
                  </h6>
                  <p className="text-white/70 feature-p leading-[1.25] text-center text-[17px] md:text-left max-w-[430px]">
                    Create virtual boundaries around real-world locations to
                    ensure tasks are completed in the right place and at the
                    right time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-0  md:grid-cols-1">
            <div className="relative overflow-hidden border border-[#00874533] border-x-0 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)] md:col-span-2">
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-5 md:items-center">
                <div className="md:col-span-3">
                  <h6 className="text-[30px] font-semibold sm:text-2xl mb-6">
                    Get Customised Summary Reports
                  </h6>
                  <p className="text-white/70 feature-p leading-[1.25] text-center text-[17px] md:text-left max-w-[630px]">
                    Access multiple reports on key metrics, including
                    month-on-month reviews, user-wise reports, employee- and
                    task-wise reports, individual and group task reports, and
                    more.
                  </p>
                </div>

                <div className="md:col-span-2">
                  <img
                    src={card5}
                    alt="Overview card"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeEasySection;
