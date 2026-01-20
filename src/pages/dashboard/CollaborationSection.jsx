import React from "react";

const CollaborationSection = () => {
  return (
    <section className="w-full overflow-hidden text-white">
      <div className="relative">
        <div className="relative mx-auto max-w-[1120px] px-4 pb-20">
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-6xl">
            Everything You Need For
            <br />
            Clarity, Control, &amp; Collaboration
          </h2>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-8 rounded-[32px] bg-[#008745]/20 blur-3xl" />

              <div className="relative">
                <div className="absolute left-0 top-6 h-[240px] w-[320px] rounded-2xl bg-gradient-to-b from-[#0e2a1e] to-[#0a1410] shadow-[0_20px_70px_rgba(0,0,0,0.6)]" />

                <div className="relative inline-block rounded-xl border border-white/10 bg-black/25 p-4 shadow-[0_15px_60px_rgba(0,0,0,0.55)]">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <div className="text-[10px] font-semibold text-white/70">
                        Task Name
                      </div>
                      <div className="mt-2 h-2 w-24 rounded bg-white/10" />
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <div className="text-[10px] font-semibold text-white/70">
                        Entity
                      </div>
                      <div className="mt-2 h-2 w-20 rounded bg-white/10" />
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <div className="text-[11px] text-white/80">
                        Chair Production
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <div className="text-[11px] text-white/80">
                        Batch Production
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <div className="text-[11px] text-white/80">
                        AC maintenance
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">
                      <div className="text-[11px] text-white/80">Assets</div>
                    </div>
                  </div>
                </div>

                <div className="relative -mt-10 ml-16 w-[360px] max-w-full rounded-xl border border-white/10 bg-black/30 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-[10px] font-semibold text-white/60">
                      Assigned to
                    </div>
                    <div className="text-[10px] font-semibold text-white/60">
                      Status
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008745] text-[10px] font-bold text-white">
                        D
                      </div>
                      <div className="text-[11px] text-white/80">
                        Dharmik Patel
                      </div>
                    </div>
                    <div className="inline-flex h-6 items-center justify-center rounded-md bg-[#143c2b] px-2 text-[10px] font-semibold text-white/70">
                      In Review
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3d2e7a] text-[10px] font-bold text-white">
                        P
                      </div>
                      <div className="text-[11px] text-white/80">
                        Priya Sharma
                      </div>
                    </div>
                    <div className="inline-flex h-6 items-center justify-center rounded-md bg-[#3a2a12] px-2 text-[10px] font-semibold text-[#f5b64a]">
                      Ongoing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[520px] text-center md:text-left">
              <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Manage complicated
                <br />
                projects easily
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/55">
                Manage projects and tasks easily from one place. Identify
                delays, view workloads, and see where your attention is
                neededeverything from one screen. Keep everyone aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
