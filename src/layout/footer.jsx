import React from "react";
import logo from "../assets/logo.svg";

const IconPhone = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 16.92V21a1 1 0 0 1-1.09 1A19.86 19.86 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.2 4.8a1 1 0 0 1-.27.95l-2.27 2.27a16 16 0 0 0 6.49 6.49l2.27-2.27a1 1 0 0 1 .95-.27l4.8 1.2a1 1 0 0 1 .75 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4H20V20H4V4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPin = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUp = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Social = ({ children, href }) => (
  <a
    href={href}
    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/80 hover:border-[#008745]/50 hover:text-white"
  >
    {children}
  </a>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,135,69,0.22)_0%,_rgba(0,0,0,0.95)_55%,_rgba(0,0,0,1)_100%)]" />

      <div className="relative mx-auto  px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Petpooja Tasks" className="h-10 w-auto" />
          </div>

          <div className="text-center">
            <div className="text-xs text-white/70">Connect with us:</div>
            <div className="mt-2 flex flex-col items-center justify-center gap-2 text-xs text-white/80 sm:flex-row">
              <a
                href="tel:+916358916474"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconPhone className="text-[#008745]" />
                +91 63589 16474
              </a>
              <span className="hidden text-white/30 sm:inline">|</span>
              <a
                href="mailto:gettasks@petpooja.com"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconMail className="text-[#008745]" />
                gettasks@petpooja.com
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <Social href="#" aria-label="LinkedIn">
                <span className="text-xs font-semibold">in</span>
              </Social>
              <Social href="#" aria-label="Instagram">
                <span className="text-xs font-semibold">ig</span>
              </Social>
              <Social href="#" aria-label="YouTube">
                <span className="text-xs font-semibold">yt</span>
              </Social>
              <Social href="#" aria-label="Facebook">
                <span className="text-xs font-semibold">f</span>
              </Social>
            </div>
          </div>

          <div className="text-right text-xs text-white/70">
            <div className="flex items-start justify-end gap-2">
              <IconPin className="mt-0.5 shrink-0 text-[#008745]" />
              <div>
                <div>3rd Floor, Tower-A, Gopal Palace,</div>
                <div>NehruNagar, Ambawadi,</div>
                <div>Ahmedabad, Gujarat - 380015</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-[#008745]/25" />

        <div className="mt-4 text-center text-[10px] text-white/55">
          © 2026 - Prayosho Food Services Pvt. Ltd., India · Privacy ·
          Compliance · Terms · Cancellation &amp; Refund · Escalation Matrix
        </div>
      </div>

      {/* <button
        type="button"
        onClick={scrollToTop}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-white/[0.06] p-2 text-white/80 hover:border-[#008745]/50 hover:text-white"
        aria-label="Back to top"
      >
        <IconUp />
      </button> */}
    </footer>
  );
};

export default Footer;
