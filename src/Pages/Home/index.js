import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import service from "../../features/service";
import InputCard from "./InputCard";
import currencyData from "../../currencyData.json";

const HomePage = () => {
  const fromInputBar = useRef(null); // Ref for the child component

  const handleHideFromFunction = () => {
    if (fromInputBar.current) {
      fromInputBar.current.hideDropdown(); // Call the function in the child
    }
  };

  const toInputBar = useRef(null); // Ref for the child component

  const handleHideToFunction = () => {
    if (toInputBar.current) {
      toInputBar.current.hideDropdown(); // Call the function in the child
    }
  };

  const [currency_from, setCurrencyFrom] = useState();
  const [currency_to, setCurrencyTo] = useState();
  const [amount_from, setAmountFrom] = useState(1);
  const [amount_to, setAmountTo] = useState(1);
  const [address_to, setAddressTo] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [rangeData, setRangeData] = useState({
    minAmount: 0,
    maxAmount: 0,
  });

  const navigate = useNavigate(); // Get the navigate function

  const onSwapButtonClicked = () => {
    if (address_to.length === 0) {
      toast.warning("Enter Wallet address!");
      return;
    }
    service
      .postExchangeTransactionWithAxios({
        currency_from: currency_from,
        currency_to: currency_to,
        amount: amount_from,
        address_to: address_to,
        isFixed,
        // address_to: '4NfxuRXwhk2ugNNkQJ4XDYxQc7QyNoPw3LkjsUGMKQ1B', // for test
      })
      .then((result) => {
        if (!result.error) {
          navigate(`/deposit/${result.id}`);
        } else {
          toast.warning(
            result.error
              ? result.error.description
              : "Request parameters are not valid"
          );
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Check Wallet address!!`);
      });
  };

  const range = (data) => {
    service
      .getExchangeRangeWithAxios(data)
      .then((result) => {
        if (!result.error) {
          setRangeData({
            minAmount: result?.min * 1.1, // in create exchange bug
            maxAmount: result?.max * 1.1,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const getEstimate = (data) => {
    service
      .getEstimateWithAxios(data)
      .then((result) => {
        if (!result.error) {
          setAmountTo(result);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // currencyData.forEach((current, index) => {
    //   if (current.symbol === "sol") {
    //     alert(index);
    //   }
    // });
    if (currencyData && currencyData.length > 1669) {
      setCurrencyFrom(currencyData[1669]); // set default sol
      setCurrencyTo(currencyData[1669]);
    }
  }, [currencyData]);

  useEffect(() => {
    if (currency_from && currency_to)
      range({ currency_from, currency_to, isFixed });
  }, [currency_from, currency_to, isFixed]);

  useEffect(() => {
    getEstimate({ currency_from, currency_to, amount: amount_from, isFixed });
  }, [currency_from, currency_to, amount_from, isFixed]);

  return (
    <div
      className="flex xl:h-[70vh] flex-col items-center content-center justify-center w-full align-middle gap-9"
      onClick={() => {
        handleHideFromFunction();
        handleHideToFunction();
      }}
    >
      <div
        className="flex min-h-[580px] h-full px-[12px] lg:px-[24px] py-6 flex-col justify-center items-center gap-[42px]
        self-stretch border-[3px] lg:border-[6px] border-[#1FEA00] bg-[#00000020] shadow-custom backdrop-blur-[1.05px]] mx-[10px] sm:mx-[40px] "
      >
        <div className="flex h-full flex-col justify-between items-center self-stretch gap-[10px] sm:gap-[42px] ">
          <div className="text-[#1FEA00] text-center text-[22px] lg:text-[44px] font-normal leading-none flex-[1_0_0]">
            Trade Freely, Stay Anonymous
          </div>
          <div className="flex lg:flex-row flex-col justify-center mt-3 sm:mt-0 gap-[10px] sm:gap-[42px] self-stretch">
            <div className="flex flex-col w-full ">
              <InputCard
                currencyData={currencyData}
                isFrom={true}
                curCurrency={currency_from}
                onValueChange={setCurrencyFrom}
                amount={amount_from}
                setAmount={setAmountFrom}
                ref={fromInputBar}
                rangeData={rangeData}
              />
              {currency_from && currency_to ? (
                <div className="text-white ">
                  {amount_from} {currency_from.symbol} = {amount_to}
                  {currency_to.symbol}{" "}
                </div>
              ) : (
                <div className="text-white text-[14px]">1 SOL = 0.989 USDT</div>
              )}
            </div>

            <div
              className="flex cursor-pointer mt-[5px] sm:mt-[16px] h-fit justify-center"
              onClick={() => {
                setCurrencyFrom(currency_to);
                setCurrencyTo(currency_from);
              }}
            >
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
            <div className="flex flex-col w-full ">
              <InputCard
                currencyData={currencyData}
                isFrom={false}
                curCurrency={currency_to}
                onValueChange={setCurrencyTo}
                amount={amount_to}
                setAmount={setAmountTo}
                ref={toInputBar}
                rangeData={rangeData}
              />
              {currency_from && currency_to ? (
                <div className="text-white">
                  {amount_from} {currency_from.symbol} = {amount_to}
                  {currency_to.symbol}{" "}
                </div>
              ) : (
                <div className="text-white text-[14px]">1 SOL = 0.989 USDT</div>
              )}
            </div>
          </div>
          <div className="flex flex-col p-4 justify-center items-center gap-4 flex-1 self-stretch border-4 border-white text-white">
            <div className="flex lg:flex-row flex-col lg:justify-center items-start gap-[10px] lg:gap-[30px] self-stretch">
              <div className="text-[20px]">Destination</div>
              <input
                className="text-[14px] lg:text-[20px] w-full bg-[#00000000] text-nowrap"
                placeholder="Enter your Address"
                value={address_to}
                onChange={(e) => setAddressTo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center flex-col items-start gap-[12px] sm:gap-[24px] self-stretch">
            <div className="flex flex-col lg:flex-row justify-center gap-[12px] self-stretch max-w-[425px]">
              <div
                className={`flex p-3 justify-center items-center gap-2 flex-1 ${
                  isFixed
                    ? "bg-[#1FEA00] text-black border-[#1FEA00]"
                    : "border-white text-white bg-none"
                }  border-4 text-[15px] sm:text-[20px] font-bold cursor-pointer`}
                onClick={() => {
                  setIsFixed(true);
                }}
              >
                FIXED RATE (1.0%)
              </div>
              <div
                className={`flex p-3 justify-center items-center gap-2 flex-1  ${
                  !isFixed
                    ? "bg-[#1FEA00] text-black border-[#1FEA00]"
                    : "border-white text-white bg-none"
                }  border-4 font-bold cursor-pointer text-[15px] sm:text-[20px]`}
                onClick={() => {
                  setIsFixed(false);
                }}
              >
                Float RATE (0.5%)
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full ">
            <div
              className="flex w-full lg:w-[337px] p-3 justify-center items-center gap-2 self-stretch bg-[#1FEA00] text-[15px] sm:text-[24px] font-bold cursor-pointer 
    hover:bg-[#16D500] hover:scale-105 active:scale-95 transition-all duration-200"
              onClick={onSwapButtonClicked}
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
