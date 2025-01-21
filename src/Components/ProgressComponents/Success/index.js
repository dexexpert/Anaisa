import { useNavigate } from "react-router-dom";

const SOLIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <g clip-path="url(#clip0_91_96)">
        <path
          d="M15.9176 11.2559L13.2763 14.0461C13.2189 14.1067 13.1494 14.155 13.0722 14.1881C12.995 14.2211 12.9118 14.2381 12.8276 14.2381H0.306634C0.24689 14.2381 0.188447 14.2209 0.138487 14.1886C0.0885274 14.1563 0.0492261 14.1104 0.0254124 14.0564C0.00159878 14.0024 -0.00569 13.9428 0.00444169 13.8848C0.0145734 13.8268 0.0416841 13.773 0.0824431 13.73L2.72572 10.9398C2.78299 10.8793 2.85223 10.8311 2.92917 10.7981C3.00613 10.7651 3.08914 10.748 3.17309 10.7478H15.6934C15.7531 10.7478 15.8116 10.765 15.8615 10.7973C15.9114 10.8295 15.9507 10.8755 15.9747 10.9295C15.9984 10.9834 16.0057 11.0431 15.9956 11.1011C15.9854 11.1591 15.9583 11.2129 15.9176 11.2559ZM13.2763 5.63727C13.2189 5.57666 13.1494 5.52834 13.0722 5.49531C12.995 5.4623 12.9118 5.44527 12.8276 5.44532H0.306634C0.24689 5.44532 0.188447 5.46251 0.138487 5.49478C0.0885274 5.52706 0.0492261 5.573 0.0254124 5.62696C0.00159878 5.68094 -0.00569 5.74059 0.00444169 5.79858C0.0145734 5.85657 0.0416841 5.91039 0.0824431 5.95342L2.72572 8.74361C2.78299 8.80406 2.85223 8.85227 2.92917 8.8853C3.00613 8.91831 3.08914 8.93543 3.17309 8.93556H15.6934C15.7531 8.93556 15.8116 8.91837 15.8615 8.8861C15.9114 8.85382 15.9507 8.80789 15.9747 8.75392C15.9984 8.69995 16.0057 8.6403 15.9956 8.5823C15.9854 8.52432 15.9583 8.4705 15.9176 8.42746L13.2763 5.63727ZM0.306634 3.63308H12.8276C12.9118 3.63311 12.995 3.6161 13.0722 3.58307C13.1494 3.55004 13.2189 3.50172 13.2763 3.44111L15.9176 0.650922C15.9583 0.607896 15.9854 0.55408 15.9956 0.496084C16.0057 0.438089 15.9984 0.378442 15.9747 0.324471C15.9507 0.270501 15.9114 0.224558 15.8615 0.192287C15.8116 0.160017 15.7531 0.142824 15.6934 0.142822H3.17309C3.08914 0.142963 3.00613 0.160073 2.92917 0.193092C2.85223 0.226112 2.78299 0.274338 2.72572 0.334787L0.0831244 3.12497C0.0424049 3.16795 0.0153061 3.22172 0.00515145 3.27964C-0.00500323 3.33757 0.00222771 3.39717 0.0259574 3.45112C0.0496871 3.50506 0.0888841 3.551 0.138741 3.58333C0.188599 3.61565 0.246948 3.63293 0.306634 3.63308Z"
          fill="url(#paint0_linear_91_96)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_91_96"
          x1="1.35059"
          y1="14.574"
          x2="14.2592"
          y2="-0.19939"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.08" stop-color="#9945FF" />
          <stop offset="0.3" stop-color="#8752F3" />
          <stop offset="0.5" stop-color="#5497D5" />
          <stop offset="0.6" stop-color="#43B4CA" />
          <stop offset="0.72" stop-color="#28E0B9" />
          <stop offset="0.97" stop-color="#19FB9B" />
        </linearGradient>
        <clipPath id="clip0_91_96">
          <rect
            width="16"
            height="14.0952"
            fill="white"
            transform="translate(0 0.142822)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const SuccessComponent = ({ depositID }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-9 justify-center content-center w-full">
      <div className="flex flex-col flex-start self-stretch">
        <div className="text-center text-[22px] lg:text-[50px] font-normal leading-none text-[#1FEA00]">
          Success
        </div>
        <div className="text-[#D9D9D9] text-center text-[14px] lg:text-[22px]">
          You received your coins
        </div>
      </div>
      <div
        className="flex min-h-[580px] h-full px-[12px] lg:px-[24px] py-6 lg:py-[36px] flex-col justify-center items-center gap-[42px]
        self-stretch border-[3px] lg:border-[6px] border-[#1FEA00] bg-[#00000020] shadow-custom backdrop-blur-[1.05px]]"
      >
        <div className="flex max-w-[760px] h-full flex-col justify-between items-center self-stretch gap-[24px] text-white">
          <div className="self-start text-[#1FEA00] text-[20px] lg:text-[25px] font-semibold">
            Deposit Details
          </div>
          <div className="flex lg:p-[18px] p-[13px_12px] lg:flex-row flex-col justify-center items-center gap-[36px] self-stretch border-1 border-[#515151] bg-[rgba(81,81,81,0.3)]">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[24px] gap-[12px] self-stretch">
              <div className="flex flex-col justify-center items-start self-stretch lg:self-auto lg:flex-[1_0_0]">
                <div className="flex justify-center items-center gap-[12px] self-stretch">
                  <div className="flex w-[36px] h-[36px] p-[2px] justify-center items-center rounded-[34px]">
                    <SOLIcon />
                  </div>
                  <div className="text-[20px] font-bold">100 SOL</div>
                </div>
                <div className="flex justify-center items-center gap-[12px] self-stretch">
                  <div className="text-[18px]">Network:</div>
                  <div className="flex p-[1px_8px] justify-center items-center gap-[10px] bg-[#1FEA00]">
                    <div className="text-[14px] text-black">SOL</div>
                  </div>
                </div>
              </div>
              <div className="w-[33px] h-[18px] lg:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="33"
                  viewBox="0 0 19 33"
                  fill="none"
                >
                  <path
                    d="M11.298 33L11.298 29.2296L14.8973 29.2296L14.8973 25.452L11.298 25.452L11.298 4.69962e-07L7.69524 -4.72291e-07L7.69523 25.4556L4.09251 25.4556L4.09251 29.2296L7.69864 29.2296L7.69864 33L11.298 33ZM4.09251 25.4556L4.09251 21.6888L0.499999 21.6888L0.499999 25.4556L4.09251 25.4556ZM14.8973 25.452L18.5 25.4556L18.5 21.6888L14.8973 21.6888L14.8973 25.452Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center items-start self-stretch lg:self-auto lg:flex-[1_0_0]">
                <div className="flex justify-center items-center gap-[12px] self-stretch">
                  <div className="flex w-[36px] h-[36px] p-[2px] justify-center items-center rounded-[34px]">
                    <SOLIcon />
                  </div>
                  <div className="text-[20px] font-bold">100 SOL</div>
                </div>
                <div className="flex justify-center items-center gap-[12px] self-stretch">
                  <div className="text-[18px]">Network:</div>
                  <div className="flex p-[1px_8px] justify-center items-center gap-[10px] bg-[#1FEA00]">
                    <div className="text-[14px] text-black">SOL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-[650px] flex-col items-center gap-[36px] self-stretch">
            <div className="flex text-[20px] flex-col justify-center items-center gap-[24px] self-stretch">
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center gap-[10px] self-stretch">
                  <div className="max-w-[241px] flex-[1_0_0]">You Get:</div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0]">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div className="flex p-[2px] justify-center items-center">
                        <SOLIcon />
                      </div>
                      <div className="font-bold">100 SOL</div>
                    </div>
                    <div className="flex justify-end items-center gap-[12px]">
                      <div className="">Network:</div>
                      <div className="flex text-black px-[8px] py-[1px] justify-center items-center gap-[10px] bg-[#1FEA00]">
                        SOL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                  <div className="max-w-[241px] flex-[1_0_0]">
                    Recipient Address:
                  </div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0]">
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        0x032dd6ce9f563ac94ccfe2ccc6ad130c43650f92845dbb2893811b2c9dd2ff8c
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                  <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                    <div className="max-w-[241px] flex-[1_0_0]">Hash Out:</div>
                    <div className="flex items-center gap-[24px] flex-[1_0_0]">
                      <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                        <div>
                          wd32dd6ce9f563ac94ccfe2ccc6ad130c43650f92845dbb2893811b2c9dd2ff8c
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center gap-[10px] self-stretch">
                  <div className="max-w-[241px] flex-[1_0_0]">Exchange ID:</div>
                  <div className="flex items-center gap-[12px] flex-[1_0_0] text-[14px]">
                    {depositID}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-[20px] max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
            <div className="flex flex-col items-start gap-[24px] self-stretch">
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center gap-[10px] self-stretch">
                  <div className="max-w-[241px] flex-[1_0_0]">You Sent:</div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0]">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div className="flex p-[2px] justify-center items-center">
                        <SOLIcon />
                      </div>
                      <div className="font-bold">100 SOL</div>
                    </div>
                    <div className="flex justify-end items-center gap-[12px]">
                      <div className="">Network:</div>
                      <div className="flex text-black px-[8px] py-[1px] justify-center items-center gap-[10px] bg-[#1FEA00]">
                        SOL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                  <div className="max-w-[241px] flex-[1_0_0]">
                    Deposit Address:
                  </div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0]">
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        0x032dd6ce9f563ac94ccfe2ccc6ad130c43650f92845dbb2893811b2c9dd2ff8c
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                  <div className="max-w-[241px] flex-[1_0_0]">Hash In:</div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0]">
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        wd32dd6ce9f563ac94ccfe2ccc6ad130c43650f92845dbb2893811b2c9dd2ff8c
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          className="flex w-[250px] p-[6px] justify-center items-center gap-[10px] self-stretch bg-[#1FEA00] cursor-pointer"
          onClick={() => {
            navigate("/#");
          }}
        >
          <div className="text-black text-[20px] lg:text-[24px] font-bold">
            New Exchange
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
