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
  const [showDragHint, setShowDragHint] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragHintTimeoutRef = useRef(null);
  const dragHintRef = useRef(null);
  const dragAreaRef = useRef(null);
  const dragRafRef = useRef(null);
  const dragPosRef = useRef({ x: 0, y: 0 });
  const dragTargetRef = useRef({ x: 0, y: 0 });
  const dragCurrentRef = useRef({ x: 0, y: 0 });
  const dragVelocityRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);

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

  const showDragHintTemporarily = (ms = 1200) => {
    if (dragHintTimeoutRef.current)
      window.clearTimeout(dragHintTimeoutRef.current);
    setShowDragHint(true);
    dragHintTimeoutRef.current = window.setTimeout(() => {
      if (isHoveringRef.current || isDraggingRef.current) return;
      setShowDragHint(false);
    }, ms);
  };

  const getDragTargetPosition = () => {
    const area = dragAreaRef.current;
    const size = 60;
    const offset = 30;

    let x = dragPosRef.current.x + offset;
    let y = dragPosRef.current.y + offset;

    if (area) {
      x = Math.max(size / 2, Math.min(area.clientWidth - size / 2, x));
      y = Math.max(size / 2, Math.min(area.clientHeight - size / 2, y));
    }

    return { x, y };
  };

  const updateDragHintPosition = (pos) => {
    const el = dragHintRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
  };

  const startDragFollow = () => {
    if (dragRafRef.current) return;

    dragTargetRef.current = getDragTargetPosition();
    dragCurrentRef.current = { ...dragTargetRef.current };
    dragVelocityRef.current = { x: 0, y: 0 };
    updateDragHintPosition(dragCurrentRef.current);

    const tick = () => {
      const stiffness = 0.18;
      const damping = 0.78;

      const t = dragTargetRef.current;
      const c = dragCurrentRef.current;
      const v = dragVelocityRef.current;

      v.x = (v.x + (t.x - c.x) * stiffness) * damping;
      v.y = (v.y + (t.y - c.y) * stiffness) * damping;

      c.x += v.x;
      c.y += v.y;

      dragCurrentRef.current = c;
      dragVelocityRef.current = v;
      updateDragHintPosition(c);

      if (!isHoveringRef.current && !isDraggingRef.current) {
        dragRafRef.current = null;
        return;
      }

      dragRafRef.current = window.requestAnimationFrame(tick);
    };

    dragRafRef.current = window.requestAnimationFrame(tick);
  };

  const stopDragFollow = () => {
    if (!dragRafRef.current) return;
    window.cancelAnimationFrame(dragRafRef.current);
    dragRafRef.current = null;
  };

  const onMouseMoveDragArea = (e) => {
    const area = dragAreaRef.current;
    if (!area) return;
    const rect = area.getBoundingClientRect();
    dragPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    dragTargetRef.current = getDragTargetPosition();
    startDragFollow();
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
    return () => {
      if (dragHintTimeoutRef.current)
        window.clearTimeout(dragHintTimeoutRef.current);
      if (dragRafRef.current) window.cancelAnimationFrame(dragRafRef.current);
    };
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

            <div className="mt-10 text-[16px] font-semibold text-white sm:text-lg">
              {slides[activeIndex]?.title.split("\\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          </div>

          <div
            className="relative w-full"
            ref={dragAreaRef}
            onMouseEnter={() => {
              isHoveringRef.current = true;
              const area = dragAreaRef.current;
              if (area) {
                dragPosRef.current = {
                  x: area.clientWidth / 2,
                  y: area.clientHeight / 2,
                };
                dragTargetRef.current = getDragTargetPosition();
                startDragFollow();
              }
              setShowDragHint(true);
            }}
            onMouseLeave={() => {
              isHoveringRef.current = false;
              if (dragHintTimeoutRef.current)
                window.clearTimeout(dragHintTimeoutRef.current);
              if (!isDraggingRef.current) setShowDragHint(false);
              if (!isDraggingRef.current) stopDragFollow();
            }}
            onMouseMove={onMouseMoveDragArea}
            onPointerDown={() => {
              isDraggingRef.current = true;
              setIsDragging(true);
              if (dragHintTimeoutRef.current)
                window.clearTimeout(dragHintTimeoutRef.current);
              setShowDragHint(true);
              startDragFollow();
            }}
            onPointerUp={() => {
              isDraggingRef.current = false;
              setIsDragging(false);
              if (!isHoveringRef.current) showDragHintTemporarily(450);
              if (!isHoveringRef.current) stopDragFollow();
            }}
            onPointerCancel={() => {
              isDraggingRef.current = false;
              setIsDragging(false);
              if (!isHoveringRef.current) showDragHintTemporarily(450);
              if (!isHoveringRef.current) stopDragFollow();
            }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008745]/25 blur-3xl" />

            <div
              ref={dragHintRef}
              className={`pointer-events-none absolute left-0 top-0 z-20 hidden md:flex items-center justify-center transform-gpu [will-change:transform,opacity] transition-opacity duration-150 ${
                showDragHint || isDragging ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/15 bg-black/65 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
                <span className="text-[12px] font-semibold text-white">
                  Drag
                </span>
              </div>
            </div>

            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              centeredSlides
              loop
              slidesPerView="auto"
              spaceBetween={24}
              speed={800}
              watchSlidesProgress
              grabCursor
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 5,
                modifier: 1.35,
                slideShadows: false,
              }}
              onProgress={handleProgress}
              onSetTransition={handleSetTransition}
              onSliderFirstMove={() => {
                isDraggingRef.current = true;
                setIsDragging(true);
                if (dragHintTimeoutRef.current)
                  window.clearTimeout(dragHintTimeoutRef.current);
                setShowDragHint(true);
                startDragFollow();
              }}
              onTouchEnd={() => {
                isDraggingRef.current = false;
                setIsDragging(false);
                if (!isHoveringRef.current) showDragHintTemporarily(450);
                if (!isHoveringRef.current) stopDragFollow();
              }}
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
                  className="!w-[220px] sm:!w-[250px] md:!w-[320px] lg:!w-[360px] py-10"
                >
                  <div className="task-mobile-slide mx-auto">
                    <img
                      src={s.img}
                      alt="Task mobile screen"
                      className="mx-auto h-[320px] w-auto rounded-2xl  object-contain  sm:h-[360px] md:h-[520px]"
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
