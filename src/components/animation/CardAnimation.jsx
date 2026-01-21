"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NotificationScroll() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const miniRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const entranceTl = gsap.timeline({ paused: true });

      let hasPlayed = false;

      const swapTl = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 0.25,
      });
      swapTl
        .to(
          miniRef.current,
          {
            scale: 1.08,
            duration: 0.55,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          mainRef.current,
          {
            scale: 0.92,
            duration: 0.55,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          miniRef.current,
          {
            scale: 0.9,
            duration: 0.55,
            ease: "power2.inOut",
          },
          "+=0.05",
        )
        .to(
          mainRef.current,
          {
            scale: 1.08,
            duration: 0.55,
            ease: "power2.inOut",
          },
          "<",
        );

      entranceTl
        .set(bgRef.current, { y: 120, scale: 0.95 })
        .set(miniRef.current, { x: -120, opacity: 0, scale: 0.95 })
        .set(mainRef.current, { x: 120, opacity: 0, scale: 0.95 })
        .to(bgRef.current, {
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
        })
        .to(
          miniRef.current,
          { x: 0, opacity: 1, scale: 0.9, duration: 0.25, ease: "power3.out" },
          "<",
        )
        .to(
          mainRef.current,
          { x: 0, opacity: 1, scale: 1.08, duration: 0.25, ease: "power3.out" },
          "<",
        )
        .call(() => {
          swapTl.play(0);
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: (self) => {
          if (hasPlayed) return;
          hasPlayed = true;
          entranceTl.play(0);
          self.kill();
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex max-h-[120vh] items-center justify-center bg-black"
    >
      <div className="relative md:h-[320px] md:w-[320px] sm:h-[320px] sm:w-[320px] h-[280px] w-[280px]">
        {/* Background Card */}
        <div
          ref={bgRef}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-700 to-zinc-950"
        />

        {/* Mini Notification */}
        <div ref={miniRef} className="absolute left-[-20px] top-6 w-[260px]">
          <div className="relative overflow-hidden rounded-2xl p-[2px]">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(0,135,69,0)_0deg,rgba(0,135,69,1)_60deg,rgba(0,135,69,0)_140deg)] animate-[spin_2.2s_linear_infinite]" />
            <div className="relative z-10 rounded-2xl bg-black/70 backdrop-blur-xl px-4 py-3 text-[10px] text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <p className="font-medium">Petpooja Task</p>
              <p className="text-zinc-400">Task is marked completed</p>
            </div>
          </div>
        </div>

        {/* Main WhatsApp Card */}
        <div
          ref={mainRef}
          className="absolute bottom-[-50px] right-[-50px] sm:bottom-[-30px] sm:right-[-50px] md:bottom-[-25px] md:right-[-20px] w-[250px] h-[240px]"
        >
          <div className="relative overflow-hidden rounded-2xl p-[2px]">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(0,135,69,0)_0deg,rgba(0,135,69,1)_90deg,rgba(0,135,69,0)_180deg)] animate-[spin_3.2s_linear_infinite]" />
            <div className="relative z-10 rounded-2xl bg-black/70 backdrop-blur-xl p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="mb-3 flex items-center gap-2 text-green-500">
                <span className="text-[12px] font-semibold">WhatsApp</span>
              </div>

              <p className="mb-2 text-[10px] font-medium">
                Petpooja Tasks : Task Is Marked Completed
              </p>

              <p className="text-[10px] text-zinc-400">
                Task Name {"–"} AC maintenance
              </p>
              <p className="text-[10px] text-zinc-400">
                Outlet {"–"} Indraprastha
              </p>

              <p className="mt-1 text-[10px]">
                Keep going to finish your tasks
              </p>

              <p className="mt-2 text-[10px] text-zinc-400">
                Best
                <br />
                Petpooja Tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
