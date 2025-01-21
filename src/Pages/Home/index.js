import { useNavigate } from "react-router-dom";

const InputCard = () => {
  const SOLIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <g clipPath="url(#clip0_91_77)">
        <path
          d="M15.9176 11.7559L13.2763 14.5461C13.2189 14.6067 13.1494 14.6551 13.0722 14.6881C12.995 14.7211 12.9118 14.7381 12.8276 14.7381H0.306634C0.24689 14.7381 0.188447 14.7209 0.138487 14.6886C0.0885274 14.6564 0.0492261 14.6104 0.0254124 14.5564C0.00159878 14.5025 -0.00569 14.4428 0.00444169 14.3848C0.0145734 14.3268 0.0416841 14.273 0.0824431 14.23L2.72572 11.4398C2.78299 11.3794 2.85223 11.3311 2.92917 11.2981C3.00613 11.2651 3.08914 11.248 3.17309 11.2478H15.6934C15.7531 11.2478 15.8116 11.265 15.8615 11.2973C15.9114 11.3296 15.9507 11.3755 15.9747 11.4295C15.9984 11.4835 16.0057 11.5431 15.9956 11.6011C15.9854 11.6591 15.9583 11.7129 15.9176 11.7559ZM13.2763 6.1373C13.2189 6.0767 13.1494 6.02837 13.0722 5.99534C12.995 5.96233 12.9118 5.94531 12.8276 5.94535H0.306634C0.24689 5.94535 0.188447 5.96254 0.138487 5.99481C0.0885274 6.02709 0.0492261 6.07303 0.0254124 6.12699C0.00159878 6.18097 -0.00569 6.24062 0.00444169 6.29861C0.0145734 6.3566 0.0416841 6.41042 0.0824431 6.45345L2.72572 9.24364C2.78299 9.30409 2.85223 9.3523 2.92917 9.38533C3.00613 9.41834 3.08914 9.43546 3.17309 9.43559H15.6934C15.7531 9.43559 15.8116 9.4184 15.8615 9.38613C15.9114 9.35385 15.9507 9.30792 15.9747 9.25395C15.9984 9.19998 16.0057 9.14033 15.9956 9.08233C15.9854 9.02435 15.9583 8.97053 15.9176 8.92749L13.2763 6.1373ZM0.306634 4.13311H12.8276C12.9118 4.13314 12.995 4.11613 13.0722 4.0831C13.1494 4.05007 13.2189 4.00175 13.2763 3.94114L15.9176 1.15095C15.9583 1.10793 15.9854 1.05411 15.9956 0.996115C16.0057 0.938119 15.9984 0.878472 15.9747 0.824502C15.9507 0.770532 15.9114 0.724589 15.8615 0.692318C15.8116 0.660047 15.7531 0.642855 15.6934 0.642853H3.17309C3.08914 0.642993 3.00613 0.660103 2.92917 0.693123C2.85223 0.726143 2.78299 0.774369 2.72572 0.834817L0.0831244 3.625C0.0424049 3.66798 0.0153061 3.72175 0.00515145 3.77967C-0.00500323 3.8376 0.00222771 3.8972 0.0259574 3.95115C0.0496871 4.0051 0.0888841 4.05103 0.138741 4.08336C0.188599 4.11568 0.246948 4.13296 0.306634 4.13311Z"
          fill="url(#paint0_linear_91_77)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_91_77"
          x1="1.35059"
          y1="15.074"
          x2="14.2592"
          y2="0.30064"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.08" stopColor="#9945FF" />
          <stop offset="0.3" stopColor="#8752F3" />
          <stop offset="0.5" stopColor="#5497D5" />
          <stop offset="0.6" stopColor="#43B4CA" />
          <stop offset="0.72" stopColor="#28E0B9" />
          <stop offset="0.97" stopColor="#19FB9B" />
        </linearGradient>
        <clipPath id="clip0_91_77">
          <rect
            width="16"
            height="14.0952"
            fill="white"
            transform="translate(0 0.642853)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className="flex w-full flex-col justify-center items-start gap-3 flex-[1_0_0] text-white">
      <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center self-stretch text-[20px] lg:text-[24px]">
        <div className="flex max-w-[160px] p-3 flex-col items-start gap-2 lg:flex-1 border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer">
          <div className="flex justify-between items-center self-stretch">
            <div className="flex items-center gap-[7px]">
              {SOLIcon}
              <div className="">SOL</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M1.51416 3.84573H11.4858L6.49999 10.4543L1.51416 3.84573Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex p-3 flex-col justify-center items-center gap-2.5 flex-1 self-stretch border-4 border-[#515151]">
          <div className="flex justify-between items-center self-stretch">
            <div className="">You Send</div>
            <div className="flex justify-center items-center gap-[6px]">
              <input
                className="w-full bg-[#00000000] text-right lg:mr-2"
                value={0}
              />
              <div className=" text-[#B6B6B6] text-[14px]">$0.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#B6B6B6] text-[14px]">1 SOL = 0.989 USDT</div>
    </div>
  );
};
const HomePage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div className="flex flex-col items-center gap-9 justify-center align-middle content-center w-full">
      <div className="text-center text-[50px] lg:text-[100px] font-normal leading-none text-[#1FEA00]">
        Anaisa
      </div>
      <div
        className="flex min-h-[580px] h-full px-[12px] lg:px-[24px] py-6 flex-col justify-center items-center gap-[42px]
      self-stretch border-[3px] lg:border-[6px] border-[#1FEA00] bg-[#00000020] shadow-custom backdrop-blur-[1.05px]]"
      >
        <div className="flex h-full flex-col justify-between items-center self-stretch gap-[42px]">
          <div className="text-[#1FEA00] text-center text-[22px] lg:text-[44px] font-normal leading-none flex-[1_0_0]">
            Exchange Crypto
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-[42px] self-stretch">
            <InputCard />
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="42"
                viewBox="0 0 52 42"
                fill="none"
              >
                <path
                  d="M51.2069 9.54311H46.625V4.96122H42.0344V9.54311L11.1045 9.54311L11.1045 14.1293L42.0388 14.1293V18.7156H46.625V14.125L51.2069 14.125V9.54311ZM42.0388 18.7156H37.4612V23.2888H42.0388V18.7156ZM42.0344 4.96122L42.0388 0.375L37.4612 0.375V4.96122L42.0344 4.96122ZM40.8955 27.8707L9.95687 27.8707V23.2931H5.37065V27.8793L0.793091 27.8793L0.793091 32.4612H5.37065L5.37065 37.0474H9.95687V32.4569L40.8955 32.4569V27.8707ZM9.95687 37.0431V41.625H14.5388V37.0431L9.95687 37.0431ZM9.95687 23.2888H14.5388L14.5388 18.7156H9.95687V23.2888Z"
                  fill="#1FEA00"
                />
              </svg>
            </div>
            <InputCard />
          </div>
          <div className="flex flex-col p-3 justify-center items-center gap-2.5 flex-1 self-stretch border-4 border-[#515151] text-white">
            <div className="flex lg:flex-row flex-col lg:justify-center items-start gap-[10px] lg:gap-[30px] self-stretch">
              <div className="text-[20px]">Destination</div>
              <input
                className="text-[14px] lg:text-[20px] w-full bg-[#00000000] text-nowrap"
                placeholder="Enter your Address"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col items-start gap-[24px] self-stretch">
            <div className="flex flex-col lg:flex-row justify-center gap-[12px] self-stretch max-w-[425px]">
              <div className="flex p-3 justify-center items-center gap-2 flex-1 bg-[#1FEA00] text-[20px] text-black font-bold cursor-pointer">
                FIXED RATE (1.0%)
              </div>
              <div className="flex p-3 justify-center items-center gap-2 flex-1 border-4 border-[#515151] text-white font-bold bg-none cursor-pointer">
                Float RATE (0.5%)
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full ">
            <div
              className="flex w-full lg:w-[337px] p-3 justify-center items-center gap-2 self-stretch bg-[#1FEA00] text-[24px] font-bold cursor-pointer"
              onClick={() => {
                navigate("/deposit/123?status=Pending");
              }}
            >
              <div>Swap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
