import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FinishComponent = ({ depositID, transactionStatus }) => {
  const [currency_from, setCurrencyFrom] = useState();
  const [currency_to, setCurrencyTo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (transactionStatus) {
      const currencyKeys = Object.keys(transactionStatus.currencies);
      setCurrencyFrom(transactionStatus.currencies[currencyKeys[0]]);
      setCurrencyTo(transactionStatus.currencies[currencyKeys[1]]);
    }
  }, [transactionStatus]);

  return (
    <div className="flex flex-col items-center content-center justify-center w-full gap-9">
      <div className="flex flex-col self-stretch flex-start">
        <div className="text-center text-[22px] lg:text-[50px] font-normal leading-none text-[#1FEA00]">
          Success
        </div>
        <div className="text-[#D9D9D9] text-center text-[14px] lg:text-[22px]">
          You received your coins
        </div>
      </div>
      <div
        className="flex min-h-[580px] h-full px-[12px] lg:px-[24px] py-6 lg:py-[36px] flex-col justify-center items-center gap-[42px]
        self-stretch border-[3px] lg:border-[6px] border-[#1FEA00] bg-[#00000020] shadow-custom backdrop-blur-[1.05px]] lg:w-[800px] w-[100vw]"
      >
        <div className="flex max-w-[760px] h-full flex-col justify-between items-center self-stretch gap-[24px] text-white px-12">
          <div className="self-start text-[#1FEA00] text-[20px] lg:text-[25px] font-semibold">
            Deposit Details
          </div>
          <div className="flex lg:p-[18px] p-[13px_12px] lg:flex-row flex-col justify-center items-center gap-[36px] self-stretch border-1 border-[#515151] bg-[rgba(81,81,81,0.3)]">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[24px] gap-[12px] self-stretch">
              <div className="flex flex-col justify-center items-start self-stretch lg:self-auto lg:flex-[1_0_0]">
                <div className="flex items-center self-stretch justify-center">
                  <div className="flex w-[36px] h-[36px] p-[2px] justify-center items-center rounded-[34px]">
                    <img
                      className=" max-h-6 max-w-6"
                      src={
                        currency_from
                          ? currency_from.image
                          : "https://content-api.changenow.io/uploads/sol_3b3f795997.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="font-bold uppercase">
                    {transactionStatus ? transactionStatus.amount_from : ""}{" "}
                    {currency_from ? currency_from.symbol : ""}{" "}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-[12px] self-stretch">
                  <div className="text-[18px]">Network:</div>
                  <div className="flex p-[1px_8px] justify-center items-center gap-[10px] bg-[#1FEA00] uppercase">
                    {currency_from ? currency_from.network : ""}
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
                <div className="flex items-center self-stretch justify-center">
                  <div className="flex w-[36px] h-[36px] p-[2px] justify-center items-center rounded-[34px]">
                    <img
                      className=" max-h-6 max-w-6"
                      src={
                        currency_to
                          ? currency_to.image
                          : "https://content-api.changenow.io/uploads/sol_3b3f795997.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="font-bold uppercase ">
                    {" "}
                    {transactionStatus ? transactionStatus.amount_to : ""}{" "}
                    {currency_to ? currency_to.symbol : ""}{" "}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-[12px] self-stretch">
                  <div className="text-[18px]">Network:</div>
                  <div className="flex p-[1px_8px] justify-center items-center gap-[10px] bg-[#1FEA00] uppercase">
                    {currency_to ? currency_to.network : ""}
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
                  <div className="flex items-center gap-[24px] flex-[1_0_0] flex-wrap">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div className="flex p-[2px] justify-center items-center">
                        <img
                          className=" max-h-6 max-w-6"
                          src={
                            currency_to
                              ? currency_to.image
                              : "https://content-api.changenow.io/uploads/sol_3b3f795997.svg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="font-bold uppercase ">
                        {" "}
                        {transactionStatus
                          ? transactionStatus.amount_to
                          : ""}{" "}
                        {currency_to ? currency_to.symbol : ""}{" "}
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-[12px]">
                      <div className="">Network:</div>
                      <div className="flex text-black px-[8px] py-[1px] justify-center items-center gap-[10px] bg-[#1FEA00] uppercase">
                        {currency_to ? currency_to.network : ""}
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
                  <div
                    className="flex items-center gap-[24px] flex-[1_0_0] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard
                        .writeText(transactionStatus.address_to)
                        .then(() => {
                          toast.success("copied");
                          // Optionally, you can provide user feedback here
                        });
                    }}
                  >
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        {transactionStatus ? transactionStatus.address_to : ""}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                  <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                    <div className="max-w-[241px] flex-[1_0_0]">
                      Pay Out Hash:
                    </div>
                    <div
                      className="flex items-center gap-[24px] flex-[1_0_0] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard
                          .writeText(transactionStatus.tx_to)
                          .then(() => {
                            toast.success("copied");
                            // Optionally, you can provide user feedback here
                          });
                      }}
                    >
                      <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                        <div>
                          {transactionStatus ? transactionStatus.tx_to : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center gap-[10px] self-stretch">
                  <div className="max-w-[241px] flex-[1_0_0]">Exchange ID:</div>
                  <div
                    className="flex items-center gap-[12px] flex-[1_0_0] text-[14px] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(depositID).then(() => {
                        toast.success("copied");
                        // Optionally, you can provide user feedback here
                      });
                    }}
                  >
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
                  <div className="flex items-center gap-[24px] flex-[1_0_0] flex-wrap">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div className="flex p-[2px] justify-center items-center">
                        <img
                          className=" max-h-6 max-w-6"
                          src={
                            currency_from
                              ? currency_from.image
                              : "https://content-api.changenow.io/uploads/sol_3b3f795997.svg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="font-bold uppercase">
                        {transactionStatus ? transactionStatus.amount_from : ""}{" "}
                        {currency_from ? currency_from.symbol : ""}{" "}
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-[12px]">
                      <div className="">Network:</div>
                      <div className="flex text-black px-[8px] py-[1px] justify-center items-center gap-[10px] bg-[#1FEA00]">
                        {currency_from ? currency_from.network : ""}
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
                  <div
                    className="flex items-center gap-[24px] flex-[1_0_0] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard
                        .writeText(transactionStatus.address_from)
                        .then(() => {
                          toast.success("copied");
                          // Optionally, you can provide user feedback here
                        });
                    }}
                  >
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        {transactionStatus
                          ? transactionStatus.address_from
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                  <div className="max-w-[241px] flex-[1_0_0]">Pay In Hash:</div>
                  <div
                    className="flex items-center gap-[24px] flex-[1_0_0] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard
                        .writeText(transactionStatus.tx_from)
                        .then(() => {
                          toast.success("copied");
                          // Optionally, you can provide user feedback here
                        });
                    }}
                  >
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        {transactionStatus ? transactionStatus.tx_from : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div
          className="flex w-[250px] p-[6px] justify-center items-center gap-[10px] self-stretch bg-[#1FEA00] cursor-pointer"
          onClick={() => {
            navigate("/#");
          }}
        >
          <div className="text-black text-[20px] lg:text-[24px] font-bold ">
            New Exchange
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishComponent;
