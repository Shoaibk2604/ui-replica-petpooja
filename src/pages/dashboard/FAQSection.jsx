import React, { useMemo, useState } from "react";

const Chevron = ({ open }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#008745"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FAQSection = () => {
  const faqs = useMemo(
    () => [
      {
        q: "How can Petpooja Tasks help me, and who can use it?",
        a: "We provide a comprehensive task management system to help you plan, execute, and monitor progress within your project, ensuring deadlines are met. It is a scalable project management software designed to meet the needs of teams of all sizes. Whether you’re a startup or a large corporation, our platform adapts to your workflow.",
      },
      {
        q: "What makes Petpooja Tasks the best task management tool available?",
        a: "Petpooja Tasks combines streamlined task assignment, smart reminders, templates, reporting, and collaboration in a single workflow—helping teams move faster with clear ownership and visibility.",
      },
      {
        q: "Can we schedule a task in advance?",
        a: "Yes. You can create tasks ahead of time, set due dates, and schedule recurring/routine work so your team stays on track.",
      },
      {
        q: "Can I attach images, SOPs, or PDFs with tasks and add steps?",
        a: "Yes. You can attach files and add detailed steps/checklists so the assignee has everything needed to complete the task correctly.",
      },
      {
        q: "Can I manage multiple teams and branches in a single dashboard? Are there any extra charges for it?",
        a: "Yes. You can manage multiple teams/branches from one dashboard with role-based access and reporting. Pricing depends on your plan—share your requirements and we can map the right plan for you.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full overflow-hidden text-white">
      <div className="relative">
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,135,69,0.20)_0%,_rgba(0,0,0,0.92)_55%,_rgba(0,0,0,1)_100%)]" /> */}

        <div className="relative mx-auto max-w-[1280px] px-4 md:py-20 py-10 pt-0">
          <h2 className="text-center text-4xl font-semibold sm:text-5xl md:text-[65px]">
            FAQs
          </h2>

          <div className="mt-12 cursor-pointer border-y border-[#008745]/30 bg-transparent divide-y divide-[#008745]/25">
            {faqs &&
              faqs?.map((item, idx) => {
                const open = idx === openIndex;
                return (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === idx ? -1 : idx))
                    }
                    className="group w-full text-left focus:outline-none !rounded-none !border-0 !bg-transparent !p-0"
                  >
                    <div
                      className={
                        "accordion-item cursor-pointer faq-accordion-item border-t [border-image-source:linear-gradient(90deg,#002111_0%,#008745_55%,#002111_100%)] [border-image-slice:1] px-4 py-4 sm:px-6 sm:py-5 cursor-pointer transition-colors duration-300 hover:bg-[linear-gradient(90deg,_rgba(0,68,35,0.12),_rgba(0,86,45,0.752)_50%,_rgba(0,68,35,0.12))]"
                      }
                    >
                      <div className="flex justify-between">
                        <div className="min-w-0 ">
                          <div className="md:text-[20px] text-[16px] font-semibold text-white">
                            {item.q}
                          </div>
                          <div
                            className={`overflow-hidden md:text-[18px] text-[14px] leading-6 text-white/65 transition-[max-height,opacity] duration-300 ${
                              open
                                ? "max-h-[320px] opacity-100 mt-3"
                                : "max-h-0 opacity-0 mt-0"
                            }`}
                          >
                            {item.a}
                          </div>
                        </div>

                        <div className="mt-0.5 self-start">
                          <Chevron open={open} />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
