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
      const tl = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 0.8,
      });

      tl.set(bgRef.current, { y: 120, scale: 0.95 })
        .set(miniRef.current, { x: -120, opacity: 0, scale: 0.9 })
        .set(mainRef.current, { x: 120, opacity: 0, scale: 0.95 })
        .to(bgRef.current, {
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          miniRef.current,
          { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          "-=0.25",
        )
        .to(miniRef.current, {
          scale: 1.2,
          duration: 0.35,
          ease: "power2.out",
        })
        .to(miniRef.current, {
          scale: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.6)",
        })
        .to(mainRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(mainRef.current, {
          scale: 1.2,
          duration: 0.35,
          ease: "power2.out",
        })
        .to(mainRef.current, {
          scale: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.6)",
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => tl.play(0),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex max-h-[120vh] items-center justify-center bg-black"
    >
      <div className="relative h-[380px] w-[380px]">
        {/* Background Card */}
        <div
          ref={bgRef}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-700 to-zinc-950"
        />

        {/* Mini Notification */}
        <div ref={miniRef} className="absolute left-[-20px] top-6 w-[260px]">
          <div className="relative overflow-hidden rounded-2xl p-[2px]">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(0,135,69,0)_0deg,rgba(0,135,69,1)_60deg,rgba(0,135,69,0)_140deg)] animate-[spin_2.2s_linear_infinite]" />
            <div className="relative z-10 rounded-2xl bg-zinc-900 px-4 py-3 text-sm text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <p className="font-medium">Petpooja Task</p>
              <p className="text-zinc-400">Task is marked completed</p>
            </div>
          </div>
        </div>

        {/* Main WhatsApp Card */}
        <div
          ref={mainRef}
          className="absolute bottom-6 right-[-20px] w-[250px] h-[240px]"
        >
          <div className="relative overflow-hidden rounded-2xl p-[2px]">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(0,135,69,0)_0deg,rgba(0,135,69,1)_90deg,rgba(0,135,69,0)_180deg)] animate-[spin_3.2s_linear_infinite]" />
            <div className="relative z-10 rounded-2xl bg-zinc-900 p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <div className="mb-3 flex items-center gap-2 text-green-500">
                <span className="text-sm font-semibold">WhatsApp</span>
              </div>

              <p className="mb-2 text-sm font-medium">
                Petpooja Tasks : Task Is Marked Completed
              </p>

              <p className="text-sm text-zinc-400">
                Task Name – AC maintenance
              </p>
              <p className="text-sm text-zinc-400">Outlet – Indraprastha</p>

              <p className="mt-3 text-sm">Keep going to finish your tasks</p>

              <p className="mt-4 text-sm text-zinc-400">
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
