import React, { useState, forwardRef, useImperativeHandle } from "react";
import { FixedSizeList as List } from "react-window";


const InputCard = forwardRef(({
  currencyData,
  isFrom,
  curCurrency,
  onValueChange,
  amount,
  setAmount,
}, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  useImperativeHandle(ref, () => ({
    hideDropdown() {
      setSearchWord("");
      setIsOpen(false);
    },
  }));
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const subMenuClick = (currency) => {
    setIsOpen(false);
    onValueChange(currency);
  };

  const onChangeSearchWord = (e) => {
    e.stopPropagation();
    setSearchWord(e.target.value);
  };



  if (curCurrency) {
    return (

      <div className="flex w-full flex-col justify-center items-start gap-3 flex-[1_0_0] text-white relative" >

        {!isOpen ? (
          <>
            <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center self-stretch text-[20px] lg:text-[24px]">
              <div className="flex max-w-[250px] p-3 flex-col items-start gap-2 lg:flex-1 bl border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer" onClick={toggleDropdown}>
                <div className="flex items-center self-stretch justify-between">
                  <div className="flex items-center gap-[7px] w-full">
                    <img className=" max-h-6 max-w-6" src={curCurrency.image} alt={curCurrency.symbol}></img>
                    <div className="flex self-stretch justify-between w-full pr-2 uppercase">{curCurrency.symbol} <span className="bg-[#1FEA00] text-black uppercase px-2">{curCurrency.network}</span></div>
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
                <div className="flex items-center self-stretch justify-between">
                  <div className="">You {isFrom ? "Send" : "Receive"}</div>
                  <div className="flex justify-center items-center gap-[6px]">
                    {isFrom ? (
                      <input
                        className="w-full bg-[#00000000] text-right lg:mr-2"
                        step="any"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />) : (
                      <input
                        className="w-full bg-[#00000000] text-right lg:mr-2"
                        value={amount}
                        readOnly
                      />
                    )}

                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (<>
          <div className="flex p-3 flex-col items-start gap-2 lg:flex-1 border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer w-[100%] top-[-50px] absolute bg-[#000000cc] backdrop-blur-3xl rounded-lg font-sans text-[19px]" onClick={(e) => { e.stopPropagation() }}>
            <input
              placeholder="Type a currency or symbol"
              className="sticky flex items-center w-full p-5 mt-4 text-left text-white rounded-lg shadow-sm b-order sm:mt-0 focus:outline-none  bg-[#637c75cc]"
              value={searchWord}
              onChange={onChangeSearchWord}
            />


            <ul aria-labelledby="dropdown" className="w-full overflow-hidden">
              {(() => {
                const filteredCurrencies = searchWord.length === 0
                  ? currencyData
                  : currencyData.filter(currency =>
                    (currency.name.toLowerCase().includes(searchWord.toLowerCase())) || currency.symbol.toLowerCase().includes(searchWord.toLocaleLowerCase())
                  );

                return (
                  <List
                    height={50 * filteredCurrencies.length > 300 ? 300 : 50 * filteredCurrencies.length} // Height of the scrollable container
                    itemCount={filteredCurrencies.length} // Total items
                    itemSize={50} // Height of each row
                    width={"100%"} // Width of the container
                  >
                    {({ index, style }) => {
                      const currency = filteredCurrencies[index];
                      return (
                        <div
                          className="hover:bg-white/20 cursor-pointer hover:brightness-125 block px-4 py-2 sm:text-[10px] md:text-xs text-[19px] text-white"
                          key={index}
                          style={style}
                          onClick={() => subMenuClick(currency)}
                        >
                          <div className="flex items-center justify-between w-full uppercase">
                            <div className="flex items-center gap-2 mx-5">
                              <img
                                className="pr-2 max-h-10 max-w-10"
                                src={currency.image}
                                alt={currency.symbol}
                              />
                              <div className="flex flex-col ">
                                <div className="tracking-tighter text-[19px] sm:text-xs md:text-sm">
                                  {currency.name}
                                </div>
                                <div className="tracking-tighter text-[19px] sm:text-xs md:text-sm">
                                  {currency.network}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <div className="tracking-tighter text-[19px] sm:text-xs md:text-sm">
                                {currency.symbol}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  </List>
                );
              })()}
            </ul>
          </div>
        </>)}
      </div>
    );
  }

  else {
    return (
      <div className="flex w-full flex-col justify-center items-start gap-3 flex-[1_0_0] text-white relative">
        <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center self-stretch text-[20px] lg:text-[24px]">
          <div className="flex max-w-[250px] p-3 flex-col items-start gap-2 lg:flex-1 bl border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer">
            <div className="flex items-center self-stretch justify-between" onClick={toggleDropdown}>
              <div className="flex items-center gap-[7px]">
                <img className=" max-h-6 max-w-6" src="https://content-api.changenow.io/uploads/sol_3b3f795997.svg" />
                <div className="uppercase ">sol</div>
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
            <div className="flex items-center self-stretch justify-between">
              <div className="">You {isFrom ? "Send" : "Receive"}</div>
              <div className="flex justify-center items-center gap-[6px]">
                {isFrom ? (
                  <input
                    className="w-full bg-[#00000000] text-right lg:mr-2"
                    step="any"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />) : (
                  <input
                    className="w-full bg-[#00000000] text-right lg:mr-2"
                    value={amount}
                    readOnly
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

export default InputCard