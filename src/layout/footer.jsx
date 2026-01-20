import React from "react";
import logo from "../assets/logo.svg";

const IconPhone = (props) => (
  <svg
    width="20"
    height="20"
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
    width="20"
    height="20"
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
    width="20"
    height="20"
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

const IconLinkedIn = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3Z"
      fill="currentColor"
    />
    <path d="M2 9h4v12H2V9Z" fill="currentColor" />
    <path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor" />
  </svg>
);

const IconInstagram = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const IconYouTube = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6a3 3 0 0 0-2.1 2.1A31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="#000" />
  </svg>
);

const IconFacebook = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 8h2V5h-2a4 4 0 0 0-4 4v3H8v3h2v7h3v-7h2.2l.8-3H13V9a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

const Social = ({ children, href, ...props }) => (
  <a
    href={href}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/85 bg-white/[0.02] text-white/80 hover:border-[#008745]/50 hover:text-white"
    {...props}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative w-full max-w-[1430px] m-auto overflow-hidden text-white">
      <div className="relative mx-auto  px-6 py-8 border-t border-[#FFFFFF17]">
        <div className="grid gap-8 md:grid-cols-3 md:items-start md:justify-start sm:justify-center justify-center">
          <div className="flex items-center md:justify-start sm:justify-center justify-center gap-3">
            <img src={logo} alt="Petpooja Tasks" className="h-10 w-auto" />
          </div>

          <div className="text-center order-2 md:order-none">
            <div className="text-[16px] text-white">Connect with us:</div>
            <div className="mt-2 flex flex-row   items-center justify-center md:gap-2 gap-6 text-[16px]  text-white sm:flex-row">
              <a
                href="tel:+916358916474"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconPhone className="text-white size-4" />
                +91 63589 16474
              </a>
              <span className="hidden text-white/30 sm:inline">|</span>
              <a
                href="mailto:gettasks@petpooja.com"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconMail className="text-white size-4" />
                gettasks@petpooja.com
              </a>
            </div>

            <div className="mt-4 hidden items-center justify-center gap-3 md:flex">
              <Social href="#" aria-label="LinkedIn">
                <IconLinkedIn className="text-white size-4" />
              </Social>
              <Social href="#" aria-label="Instagram">
                <IconInstagram className="text-white size-4" />
              </Social>
              <Social href="#" aria-label="YouTube">
                <IconYouTube className="text-white size-4" />
              </Social>
              <Social href="#" aria-label="Facebook">
                <IconFacebook className="text-white size-4" />
              </Social>
            </div>
          </div>

          <div className="text-center md:text-right text-xs text-white/70 order-3 md:order-none">
            <div className="flex items-start justify-center md:justify-end gap-2">
              <IconPin className="mt-0.5 shrink-0 text-white size-4" />
              <div className="text-[16px] text-white">
                <div className="md:hidden">
                  3rd Floor, Tower-A, Gopal Palace, NehruNagar, Ambawadi,
                  Ahmedabad, Gujarat - 380015
                </div>
                <div className="hidden md:block">
                  <h6>3rd Floor, Tower-A, Gopal Palace,</h6>
                  <h6>NehruNagar, Ambawadi,</h6>
                  <h6>Ahmedabad, Gujarat - 380015</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-center gap-3 md:hidden order-4">
            <Social href="#" aria-label="LinkedIn">
              <IconLinkedIn className="text-white size-4" />
            </Social>
            <Social href="#" aria-label="Instagram">
              <IconInstagram className="text-white size-4" />
            </Social>
            <Social href="#" aria-label="YouTube">
              <IconYouTube className="text-white size-4" />
            </Social>
            <Social href="#" aria-label="Facebook">
              <IconFacebook className="text-white size-4" />
            </Social>
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-[#008745]/25" />

        <div className="mt-4 text-center text-[14px] text-white">
          2026 - Prayosho Food Services Pvt. Ltd., India · Privacy · Compliance
          · Terms · Cancellation &amp; Refund · Escalation Matrix
        </div>
      </div>
    </footer>
  );
};

export default Footer;
