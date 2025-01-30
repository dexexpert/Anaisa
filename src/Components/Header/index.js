import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy CA");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleCopy = () => {
    // Text to be copied
    const textToCopy = "asdfasdfasdfasdf";

    // Copy text to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Change button text to "Copied"
      setCopyButtonText("Copied!");

      // Reset button text to "CopyCA" after 2 seconds
      setTimeout(() => {
        setCopyButtonText("Copy CA");
      }, 2000);
    });
  };

  return (
    <div
      className="flex items-center self-stretch justify-between p-4 mx-0 sm:mx-5"
      onClick={() => {
        if (isMobileMenuOpen === true) setIsMobileMenuOpen(false);
      }}
    >
      {/* Left text */}
      <a
        className="text-center text-[#1FEA00] text-[20px] lg:text-[40px] font-normal leading-normal"
        href="/#"
      >
        Anaisa
      </a>

      {/* Desktop Menu (Whitepaper, FAQ, Telegram, X icons) */}
      <div className="hidden lg:flex max-w-[600px] min-h-[70px] p-3 justify-end items-center gap-6 flex-1">
        <a
          className="text-white text-[20px] font-extrabold leading-normal cursor-pointer"
          href="https://anaisa-swap.gitbook.io/anaisa-swap"
          target="_blank"
          rel="noreferrer"
        >
          WhitePaper
        </a>
        <div className="text-white text-[20px] font-extrabold leading-normal cursor-pointer">
          FAQ
        </div>
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            className="cursor-pointer"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0C3.96955 0 46 0 46 0V7.1875V38.8125V46H0V38.8125V7.1875V0ZM23.9945 17.2606C21.9346 18.1174 17.8176 19.8908 11.6436 22.5807C10.6411 22.9794 10.1159 23.3694 10.0681 23.7508C9.98727 24.3953 10.7944 24.6491 11.8935 24.9947C12.043 25.0417 12.1979 25.0904 12.3567 25.142C13.4381 25.4935 14.8927 25.9048 15.6489 25.9211C16.3348 25.9359 17.1004 25.6531 17.9456 25.0727C23.7142 21.1788 26.6919 19.2106 26.8789 19.1682C27.0108 19.1382 27.1935 19.1006 27.3174 19.2107C27.4412 19.3207 27.429 19.5292 27.4159 19.5851C27.3359 19.926 24.1677 22.8715 22.5281 24.3958C22.017 24.871 21.6544 25.2081 21.5803 25.285C21.4142 25.4575 21.245 25.6206 21.0824 25.7774C20.0778 26.7458 19.3244 27.4721 21.1241 28.658C21.9889 29.2279 22.681 29.6992 23.3714 30.1694C24.1254 30.6829 24.8774 31.195 25.8505 31.8328C26.0984 31.9953 26.3351 32.1641 26.5657 32.3285C27.4432 32.9541 28.2315 33.5161 29.2055 33.4265C29.7714 33.3744 30.356 32.8422 30.6528 31.2552C31.3544 27.5044 32.7336 19.3776 33.0523 16.0288C33.0802 15.7354 33.0451 15.3599 33.0169 15.1951C32.9887 15.0302 32.9297 14.7954 32.7154 14.6215C32.4617 14.4156 32.07 14.3722 31.8948 14.3751C31.0982 14.3893 29.8761 14.8143 23.9945 17.2606Z"
              fill="#1FEA00"
            />
          </svg>
        </a>
        <a href="https://x.com/AnaisaSwap" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M28.6058 33.0733H31.7223L17.3768 12.9946H14.2602L28.6058 33.0733Z"
              fill="#1FEA00"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L0 7.1875V46H7.1875H46V38.8125C46 34.843 46 0 46 0H38.8125H0ZM33.7504 11.5L25.1876 21.2389L34.5 34.5H27.6512L21.3802 25.57L13.5291 34.5H11.5L20.4794 24.2872L11.5 11.5H18.3488L24.2868 19.9562L31.7214 11.5H33.7504Z"
              fill="#1FEA00"
            />
          </svg>
        </a>
        <a
          href="/#"
          className="bg-[#1FEA00] w-[46px] h-[46px] flex justify-center items-center"
        >
          <img
            alt="dexscreener"
            className="w-[40px] h-[40px]"
            src="/dexscreener.png"
          />
        </a>
        <div
          className="text-white text-[20px] font-extrabold leading-normal cursor-pointer underline-offset-4 underline"
          onClick={handleCopy}
        >
          {copyButtonText}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex items-center gap-2 p-4 cursor-pointer lg:hidden">
        <div onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.38805 5.33681C7.25211 5.20087 7.17574 5.0165 7.17574 4.82426C7.17574 4.63201 7.25211 4.44764 7.38805 4.31171L11.4874 0.212306C11.6234 0.0763687 11.8078 0 12 0C12.1922 0 12.3766 0.0763687 12.5126 0.212306L16.613 4.31273C16.7489 4.44867 16.8253 4.63304 16.8253 4.82528C16.8253 5.01753 16.7489 5.2019 16.613 5.33784L12.5136 9.43723C12.3776 9.57317 12.1933 9.64954 12.001 9.64954C11.8088 9.64954 11.6244 9.57317 11.4885 9.43723L7.38805 5.33681ZM14.5638 12.5126C14.4279 12.3766 14.3515 12.1922 14.3515 12C14.3515 11.8078 14.4279 11.6234 14.5638 11.4874L18.6632 7.38805C18.7991 7.25211 18.9835 7.17574 19.1757 7.17574C19.368 7.17574 19.5524 7.25211 19.6883 7.38805L23.7877 11.4874C23.9236 11.6234 24 11.8078 24 12C24 12.1922 23.9236 12.3766 23.7877 12.5126L19.6883 16.612C19.5524 16.7479 19.368 16.8243 19.1757 16.8243C18.9835 16.8243 18.7991 16.7479 18.6632 16.612L14.5638 12.5126ZM0.212307 12.5126C0.0763692 12.3766 0 12.1922 0 12C0 11.8078 0.0763692 11.6234 0.212307 11.4874L4.31273 7.38702C4.44867 7.25109 4.63304 7.17472 4.82528 7.17472C5.01753 7.17472 5.2019 7.25109 5.33784 7.38702L9.43826 11.4874C9.5742 11.6234 9.65057 11.8078 9.65057 12C9.65057 12.1922 9.5742 12.3766 9.43826 12.5126L5.33784 16.613C5.2019 16.7489 5.01753 16.8253 4.82528 16.8253C4.63304 16.8253 4.44867 16.7489 4.31273 16.613L0.212307 12.5126ZM7.38805 19.6883C7.25211 19.5524 7.17574 19.368 7.17574 19.1757C7.17574 18.9835 7.25211 18.7991 7.38805 18.6632L11.4885 14.5628C11.6244 14.4268 11.8088 14.3505 12.001 14.3505C12.1933 14.3505 12.3776 14.4268 12.5136 14.5628L16.613 18.6622C16.7489 18.7981 16.8253 18.9825 16.8253 19.1747C16.8253 19.367 16.7489 19.5513 16.613 19.6873L12.5126 23.7877C12.3766 23.9236 12.1922 24 12 24C11.8078 24 11.6234 23.9236 11.4874 23.7877L7.38805 19.6883Z"
              fill="#1FEA00"
            />
          </svg>
        </div>
        <div
          className="text-white text-[20px] font-extrabold leading-normal cursor-pointer underline-offset-4 underline"
          onClick={handleCopy}
        >
          {copyButtonText}
        </div>
      </div>

      {/* Mobile Menu (Visible when hamburger icon is clicked) */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen p-6 text-white bg-black rounded-md lg:hidden">
          <div className="flex flex-col gap-4 justify-center items-center w-[100%] px-20 text-center">
            <a
              href="https://anaisa-swap.gitbook.io/anaisa-swap"
              target="_blank"
              rel="noreferrer"
              className="text-[20px] font-extrabold leading-normal pb-[6px] border-b border-b-[#515151] w-[100%]"
            >
              WhitePaper
            </a>
            <a
              href="/#"
              className="text-[20px] font-extrabold leading-normal pb-[6px] border-b border-b-[#515151] w-[100%]"
            >
              FAQ
            </a>

            <div className=" flex flex-row gap-[20px]">
              <a href="/#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0980225 0C2.16063 0 24 0 24 0V3.73468V20.1673V23.902H0.0980225V20.1673V3.73468V0ZM12.5658 8.96875C11.4954 9.41394 9.3562 10.3354 6.14814 11.7331C5.6272 11.9403 5.35431 12.1429 5.32947 12.3411C5.28749 12.676 5.70688 12.8079 6.27798 12.9874C6.35566 13.0119 6.43615 13.0372 6.51867 13.064C7.08055 13.2466 7.83637 13.4603 8.22929 13.4688C8.58571 13.4765 8.98351 13.3296 9.42269 13.028C12.4201 11.0047 13.9673 9.98198 14.0645 9.95993C14.133 9.94438 14.228 9.92482 14.2923 9.98201C14.3567 10.0392 14.3504 10.1475 14.3435 10.1766C14.302 10.3537 12.6557 11.8842 11.8038 12.6762C11.5382 12.9232 11.3498 13.0983 11.3113 13.1383C11.225 13.2279 11.1371 13.3127 11.0526 13.3941C10.5306 13.8973 10.1392 14.2747 11.0743 14.8909C11.5237 15.1871 11.8832 15.4319 12.242 15.6762C12.6338 15.9431 13.0245 16.2092 13.5301 16.5406C13.6589 16.625 13.782 16.7127 13.9018 16.7981C14.3577 17.1232 14.7674 17.4152 15.2734 17.3687C15.5675 17.3416 15.8712 17.0651 16.0255 16.2404C16.39 14.2915 17.1066 10.0688 17.2722 8.32869C17.2868 8.17623 17.2685 7.98112 17.2538 7.89547C17.2392 7.80982 17.2086 7.68779 17.0972 7.59745C16.9654 7.49047 16.7618 7.46791 16.6708 7.46943C16.2569 7.4768 15.6219 7.69761 12.5658 8.96875Z"
                    fill="#1FEA00"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/AnaisaSwap"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M14.8638 17.1852H16.4832L9.02911 6.75211H7.40971L14.8638 17.1852Z"
                    fill="#1FEA00"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L0 3.73468V23.902H3.73468H23.902V20.1673C23.902 18.1047 23.902 0 23.902 0H20.1673H0ZM17.537 5.97549L13.0877 11.0359L17.9265 17.9265H14.3678L11.1093 13.2864L7.02984 17.9265H5.97549L10.6413 12.6198L5.97549 5.97549H9.53417L12.6196 10.3694L16.4827 5.97549H17.537Z"
                    fill="#1FEA00"
                  />
                </svg>
              </a>
              <a
                href="/#"
                className="bg-[#1FEA00] w-[32px] h-[32px] flex justify-center items-center"
              >
                <img
                  alt="dexscreener"
                  className="w-[24px] h-[24px]"
                  src="/dexscreener.png"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
