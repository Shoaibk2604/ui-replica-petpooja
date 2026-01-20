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
        <div className="relative mx-auto max-w-[1120px] px-4 py-20">
          <h2 className="text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
            How We Make Your Life Easy
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#008745]/20 blur-3xl" />
              <div className="relative">
                <div className="text-xl font-semibold sm:text-2xl">
                  Provide clear project briefs
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                  Attach files, SOPs, and visuals right when assigning — so your
                  team always knows exactly what{"'"}s needed.
                </p>
                <img
                  src={card1}
                  alt="Project details card"
                  className="mt-8 h-auto w-full max-w-[360px]"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <img
                  src={card2}
                  alt="Centralised management graphic"
                  className="ml-auto h-auto w-full max-w-[280px]"
                />
                <div className="mt-10">
                  <div className="text-xl font-semibold sm:text-2xl">
                    Centralise project &amp; task management
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                    Manage everything from one centralised dashboard — schedule
                    tasks, assign owners, automate repeated tasks and track
                    progress easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative">
                <div className="text-xl font-semibold sm:text-2xl">
                  Work in your preferred language
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                  Assign work in the language your team understands. Select from
                  seven languages, which include Hindi, English, Malayalam,
                  Telugu, Tamil, and Gujarati.
                </p>
                <img
                  src={card3}
                  alt="Languages card"
                  className="mt-8 h-auto w-full max-w-[420px]"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative">
                <div className="text-xl font-semibold sm:text-2xl">
                  Use Geofencing & Geotagging
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                  Create virtual boundaries around real-world locations to
                  ensure tasks are completed in the right place and at the right
                  time.
                </p>
                <img
                  src={card4}
                  alt="Assign work card"
                  className="mt-8 h-auto w-full max-w-[420px]"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)] md:col-span-2">
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#008745]/18 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-5 md:items-center">
                <div className="md:col-span-3">
                  <div className="text-xl font-semibold sm:text-2xl">
                    Get Customised Summary Reports
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
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
