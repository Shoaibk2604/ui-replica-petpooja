import React from "react";

const ProductivitySection = () => {
  return (
    <section className="w-full overflow-hidden  text-white">
      <div className="relative">
        <div className="relative mx-auto max-w-[1120px] px-4 py-16">
          <h2 className="text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
            Powering Daily Productivity
          </h2>

          <div className="mt-14 grid items-center gap-10 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="text-6xl font-semibold leading-none text-transparent [text-shadow:0_0_0_#008745] [-webkit-text-stroke:1px_#008745]">
                7
              </div>
              <div className="mt-3 text-sm text-white/60">
                Supported Languages
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-[280px] rounded-2xl border border-[#008745]/40 bg-[#0a1a13]/60 px-8 py-16 text-center shadow-[0_0_80px_rgba(0,135,69,0.22)]">
                <div className="text-6xl font-bold tracking-tight text-[#00c85c]">
                  5K+
                </div>
                <div className="mt-6 text-xs font-semibold text-white/80">
                  Tasks Created
                  <br />
                  Daily
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-6xl font-semibold leading-none text-transparent [text-shadow:0_0_0_#008745] [-webkit-text-stroke:1px_#008745]">
                150+
              </div>
              <div className="mt-3 text-sm text-white/60">
                Ready to Use
                <br />
                Templates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;
