import React from "react";
import dashboardBanner from "../../assets/dashboard_banner-new.webp";

const DashboardBanner = () => {
  return (
    <section className="w-full overflow-hidden  text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.55)_0%,_rgba(11,18,15,0.95)_55%,_rgba(11,18,15,1)_100%)]" />
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center px-4 pb-16 pt-14 text-center sm:pt-16">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-6xl">
            Get Work Done
            <br />
            On Time. Every Time.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/55 sm:text-[15px]">
            Manage all your tasks and projects from one screen. Send automatic
            reminders, schedule tasks, assign routine work, use AI for quick
            reviews, and track progress in real time.
          </p>

          <a
            href="#get-started"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#008745] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#006d38]"
          >
            Get a 7 Day FREE Trial
          </a>

          <div className="mt-4 text-xs text-white/40">
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
