import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProductivitySection = () => {
  const sectionRef = useRef(null);
  const leftCountRef = useRef(null);
  const rightCountRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const numberEl = leftCountRef.current;
    const rightEl = rightCountRef.current;
    if (!sectionEl || !numberEl) return;

    let started = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: 7,
          duration: 1.1,
          ease: "power2.out",
          onUpdate: () => {
            numberEl.textContent = String(Math.round(obj.value));
          },
        });

        if (rightEl) {
          const objRight = { value: 0 };
          gsap.to(objRight, {
            value: 150,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              rightEl.textContent = `${Math.round(objRight.value)}+`;
            },
          });
        }

        obs.disconnect();
      },
      { threshold: 0.35 },
    );

    obs.observe(sectionEl);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden text-white productivity-stats relative pb-[140px]"
    >
      <div className="relative">
        <div className="relative mx-auto max-w-[1120px] px-4 pb-16">
          <h2 className="text-center text-4xl font-semibold sm:text-5xl md:text-6xl mb-[140px]">
            Powering Daily Productivity
          </h2>

          <div className="productivity-stats relative mx-auto grid max-w-[1080px] items-center gap-10 md:grid-cols-3">
            <div className="text-center md:text-center">
              <div className="productivity-outline-number-left">
                <div
                  ref={leftCountRef}
                  className="productivity-outline-number text-6xl lg:text-7xl xl:text-8xl mb-3"
                >
                  7
                </div>
                <div className="text-white/80 font-medium md:text-lg">
                  Supported Languages
                </div>
              </div>
              <div className="productivity-line-left">
                <svg
                  width="200"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="8" fill="#008745" />

                  <path
                    d="M 20 20 V 120 H 180"
                    stroke="#008745"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="productivity-glow" />
              <div className="productivity-card relative w-full max-w-[320px] rounded-[22px] border border-[#008745]/35 bg-[#07140e]/55 px-[63px] py-[152px] text-center backdrop-blur-md">
                <div className="text-[#24D36A] text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4">
                  5K+
                </div>
                <div className="text-white text-base md:text-lg mb-1">
                  Tasks Created
                  <br />
                  Daily
                </div>
              </div>
            </div>

            <div className="text-center md:text-center">
              <div className="productivity-line-right">
                <svg
                  width="200"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="10"
                    y1="20"
                    x2="180"
                    y2="20"
                    stroke="#008745"
                    stroke-width="2"
                  />

                  <line
                    x1="180"
                    y1="20"
                    x2="180"
                    y2="120"
                    stroke="#008745"
                    stroke-width="2"
                  />

                  <circle cx="180" cy="120" r="8" fill="#008745" />
                </svg>
              </div>
              <div className="productivity-outline-number-right">
                <div
                  ref={rightCountRef}
                  className="productivity-outline-number text-6xl lg:text-7xl xl:text-8xl mb-3 "
                >
                  150+
                </div>
                <div className="text-white/80 text-base md:text-lg">
                  Ready to Use
                  <br />
                  Templates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;
