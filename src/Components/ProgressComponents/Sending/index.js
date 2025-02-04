import { useEffect, useState } from "react";
import { toast } from "react-toastify";



const SendingComponent = ({ depositID, transactionStatus }) => {

  const [currency_from, setCurrencyFrom] = useState();
  const [currency_to, setCurrencyTo] = useState();


  useEffect(() => {
    if (transactionStatus) {
      const currencyKeys = Object.keys(transactionStatus.currencies);
      setCurrencyFrom(transactionStatus.currencies[currencyKeys[0]]);
      setCurrencyTo(transactionStatus.currencies[currencyKeys[1]]);
    }
  }, [transactionStatus])


  return (
    <div className="flex flex-col items-center content-center justify-center w-full gap-9">
      <div className="flex flex-col self-stretch flex-start">
        <div className="text-center text-[22px] lg:text-[50px] font-normal leading-none text-[#1FEA00]">
          Sending
        </div>
        <div className="text-[#D9D9D9] text-center text-[14px] lg:text-[22px]">
          Coins are on the way
        </div>
      </div>
      <div
        className="flex min-h-[580px] h-full px-[12px] lg:px-[24px] py-6 lg:py-[36px] flex-col justify-center items-center gap-[42px]
        self-stretch border-[3px] lg:border-[6px] border-[#1FEA00] bg-[#00000020] shadow-custom backdrop-blur-[1.05px]] lg:w-[800px] w-[100vw]"
      >
        <div className="flex max-w-[760px] h-full flex-col justify-between items-center self-stretch gap-[24px] text-white  px-12">
          <div className="text-white text-center text-[20px] font-normal leading-none flex-[1_0_0]">
            Time remaining : {transactionStatus ? transactionStatus.timestamp : ""}
          </div>
          <div className="flex max-w-[280px] lg:max-w-[650px] px-0 py-[20px] justify-center items-center self-stretch">
            <div className="flex items-center gap-[21px]">
              <div className="flex flex-col justify-center items-center gap-[12px]">
                <div className="flex w-[37px] h-[37px] p-[7px] justify-center items-center bg-[#1FEA00] rounded-[29px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6H20V8H18V6ZM16 10V8H18V10H16ZM14 12V10H16V12H14ZM12 14H14V12H12V14ZM10 16H12V14H10V16ZM8 16V18H10V16H8ZM6 14H8V16H6V14ZM6 14H4V12H6V14Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-[14px]">Pending deposit</div>
              </div>
            </div>
            <div className="w-[72px] h-[2px] bg-[#1FEA00]"></div>
            <div className="flex items-center gap-[21px]">
              <div className="flex flex-col justify-center items-center gap-[12px]">
                <div className="flex w-[37px] h-[37px] p-[7px] justify-center items-center bg-[#1FEA00] rounded-[29px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6H20V8H18V6ZM16 10V8H18V10H16ZM14 12V10H16V12H14ZM12 14H14V12H12V14ZM10 16H12V14H10V16ZM8 16V18H10V16H8ZM6 14H8V16H6V14ZM6 14H4V12H6V14Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-[14px]">Confirming</div>
              </div>
            </div>
            <div className="w-[72px] h-[2px] bg-[#1FEA00]"></div>
            <div className="flex items-center gap-[21px]">
              <div className="flex flex-col justify-center items-center gap-[12px]">
                <div className="flex w-[37px] h-[37px] p-[7px] justify-center items-center bg-[#1FEA00] rounded-[29px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6H20V8H18V6ZM16 10V8H18V10H16ZM14 12V10H16V12H14ZM12 14H14V12H12V14ZM10 16H12V14H10V16ZM8 16V18H10V16H8ZM6 14H8V16H6V14ZM6 14H4V12H6V14Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-[14px]">Exchanging</div>
              </div>
            </div>
            <div className="w-[72px] h-[2px] bg-[#1FEA00]"></div>
            <div className="flex items-center gap-[21px]">
              <div className="flex flex-col justify-center items-center gap-[12px]">
                <div className="flex w-[37px] p-[7px_11px_6px_14px] justify-center items-center bg-white rounded-[29px] text-black">
                  4
                </div>
                <div className="text-[14px]">Sending</div>
              </div>
            </div>
          </div>
          <div className="flex max-w-[650px] flex-col items-center gap-[36px] self-stretch">
            <div className="self-start text-[#1FEA00] text-[25px] font-semibold">
              Deposit Details
            </div>
            <div className="flex text-[20px] flex-col justify-center items-center gap-[24px] self-stretch">
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center gap-[10px] self-stretch">
                  <div className="max-w-[241px] flex-[1_0_0]">You Get:</div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0] flex-wrap">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div className="flex p-[2px] justify-center items-center">
                        <img className=" max-h-6 max-w-6" src={currency_to ? currency_to.image : "https://content-api.changenow.io/uploads/sol_3b3f795997.svg"} alt=""/>
                      </div>
                      <div className="font-bold uppercase">{transactionStatus ? transactionStatus.amount_to : ""} {currency_to ? currency_to.symbol : ""} </div>
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
                  <div className="flex items-center gap-[24px] flex-[1_0_0]"  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(transactionStatus.address_from)
                      .then(() => {
                        toast.success("copied");
                        // Optionally, you can provide user feedback here
                      })
                  }}>
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        {transactionStatus ? transactionStatus.address_from : ""}
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
                  <div className="max-w-[241px] flex-[1_0_0]">
                    You Sent:
                  </div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0] flex-wrap">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div className="flex p-[2px] justify-center items-center">
                        <img className=" max-h-6 max-w-6" src={currency_from ? currency_from.image : "https://content-api.changenow.io/uploads/sol_3b3f795997.svg"} alt=""/>
                      </div>
                      <div className="font-bold uppercase "> {transactionStatus ? transactionStatus.amount_from : ""} {currency_from ? currency_from.symbol : ""} </div>
                    </div>
                    <div className="flex justify-end items-center gap-[12px]">
                      <div className="">Network:</div>
                      <div className="flex text-black px-[8px] py-[1px] justify-center items-center gap-[10px] bg-[#1FEA00] uppercase">
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
                  <div className="flex items-center gap-[24px] flex-[1_0_0] cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(transactionStatus.address_from)
                      .then(() => {
                        toast.success("copied");
                        // Optionally, you can provide user feedback here
                      })
                  }}>
                    <div className="flex break-all px-[1px] text-[14px] py-0 justify-center items-start gap-[18px]">
                      <div>
                        {transactionStatus ? transactionStatus.address_from : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[650px] flex-col justify-center items-center gap-[10px] self-stretch">
                <div className="flex lg:flex-row flex-col justify-center items-start lg:items-center self-stretch gap-[10px]">
                  <div className="max-w-[241px] flex-[1_0_0]">
                    Hash In:
                  </div>
                  <div className="flex items-center gap-[24px] flex-[1_0_0] cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(transactionStatus.tx_from)
                      .then(() => {
                        toast.success("copied");
                        // Optionally, you can provide user feedback here
                      })
                  }}>
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

    </div>
  );
};

export default SendingComponent;
