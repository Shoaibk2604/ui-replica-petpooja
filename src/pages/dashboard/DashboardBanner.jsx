import React from "react";
import dashboardBanner from "../../assets/dashboard_banner-new.webp";

const DashboardBanner = () => {
  return (
    <section className="w-full overflow-hidden  text-white">
      <div className="relative">
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center px-4 pb-16 pt-14 text-center sm:pt-16">
          <h1 className="max-w-6xl text-[72px] leading-[1.25] mb-4 sm:mb-6 font-medium sm:font-semibold text-center tracking-[2px]">
            Get Work Done
            <br />
            On Time. Every Time.
          </h1>

          <p className="mb-6 max-w-6xl text-[24px] leading-[1.5] text-white/50 text-center ">
            Manage all your tasks and projects from one screen. Send automatic
            reminders,
            <br /> schedule tasks, assign routine work, use AI for quick
            reviews,
            <br /> and track progress in real time.
          </p>

          <a
            href="#get-started"
            className=" inline-flex items-center justify-center rounded-md bg-[#008745] px-5 py-2.5 text-[16px] font-semibold text-white transition-colors hover:bg-[#006d38]"
          >
            Get a 7 Day FREE Trial
          </a>

          <div className="text-[#FFFFFF] opacity-50 feature-p leading-[1.25] my-6 text-center">
            Spend less time managing, and more time growing
          </div>

          <div className="mt-10 w-full max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              <img
                src={dashboardBanner}
                alt="Dashboard preview"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardBanner;
