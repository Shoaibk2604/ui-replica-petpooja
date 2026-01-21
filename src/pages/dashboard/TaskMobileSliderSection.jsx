import React, { useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import taskMobile05 from "../../assets/Task mobile screen-05.png";

const TaskMobileSliderSection = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleProgress = (swiper) => {
    swiper.slides.forEach((slideEl) => {
      const p = slideEl.progress;
      const inner = slideEl.querySelector(".task-mobile-slide");
      if (!inner) return;

      const clamped = Math.max(-2.6, Math.min(2.6, p));
      const abs = Math.abs(clamped);
      const rotate = clamped * -12;
      const translateY = abs * 22;
      const scale = 1 - abs * 0.08;
      const opacity = 1 - abs * 0.18;

      inner.style.transform = `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`;
      inner.style.opacity = String(opacity);
      inner.style.transformOrigin = "50% 90%";
      inner.style.willChange = "transform, opacity";
    });
  };

  const handleSetTransition = (swiper, duration) => {
    swiper.slides.forEach((slideEl) => {
      const inner = slideEl.querySelector(".task-mobile-slide");
      if (!inner) return;
      inner.style.transitionDuration = `${duration}ms`;
    });
  };

  const slides = useMemo(
    () => [
      { img: taskMobile05, title: "Location Based\nTask Completion" },
      { img: taskMobile05, title: "One Tap\nApprovals" },
      { img: taskMobile05, title: "Attachments\nOn The Go" },
      { img: taskMobile05, title: "Quick Updates\nFrom Mobile" },
      { img: taskMobile05, title: "Instant\nProof Upload" },
      { img: taskMobile05, title: "Instant\nProof Upload" },
      { img: taskMobile05, title: "Instant\nProof Upload" },
      { img: taskMobile05, title: "Instant\nProof Upload" },
    ],
    [],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    if (isInView) swiper.autoplay.start();
    else swiper.autoplay.stop();
  }, [isInView]);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.40)_0%,_rgba(0,0,0,0.92)_55%,_rgba(0,0,0,1)_100%)]" />

        <div className="relative w-full pb-20 text-center">
          <div className="mx-auto  px-4">
            <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
              Access Projects From
              <br />
              Anywhere
            </h2>

            <div className="mt-10 text-base font-semibold text-white/85 sm:text-lg">
              {slides[activeIndex]?.title.split("\\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 w-full">
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008745]/25 blur-3xl" />

            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              centeredSlides
              loop
              slidesPerView="auto"
              spaceBetween={24}
              speed={800}
              watchSlidesProgress
              coverflowEffect={{
                rotate: 22,
                stretch: 0,
                depth: 320,
                modifier: 1.35,
                slideShadows: false,
              }}
              onProgress={handleProgress}
              onSetTransition={handleSetTransition}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                if (!isInView && swiper.autoplay) swiper.autoplay.stop();
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="task-mobile-swiper !px-0"
            >
              {slides?.map((s, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!w-[220px] sm:!w-[250px] md:!w-[320px] lg:!w-[360px]"
                >
                  <div className="task-mobile-slide mx-auto">
                    <img
                      src={s.img}
                      alt="Task mobile screen"
                      className="mx-auto h-[320px] w-auto rounded-2xl border border-white/10 object-contain shadow-[0_30px_90px_rgba(0,0,0,0.65)] sm:h-[360px] md:h-[520px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskMobileSliderSection;
