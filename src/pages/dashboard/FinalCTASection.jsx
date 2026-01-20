const FinalCTASection = () => {
  return (
    <section className="w-full overflow-hidden text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.35)_0%,_rgba(0,0,0,0.92)_55%,_rgba(0,0,0,1)_100%)]" />

        <div className="relative mx-auto max-w-[1420px] px-4 py-24 text-center">
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-[65px] md:mb-[64px] mb-[40px]">
            Experience Effortless
            <br />
            Task Management
          </h2>

          <a
            href="#get-started"
            className="md:mt-10 sm:mt-6 mt-2 inline-flex items-center justify-center rounded-md bg-[#008745] px-5 py-2.5 md:text-[16px] text-[14px] font-semibold text-white transition-colors hover:bg-[#006d38]"
          >
            Get a 7 Day FREE Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
