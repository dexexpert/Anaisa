import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { FixedSizeList as List } from "react-window";

const InputCard = forwardRef(({
  currencyData,
  isFrom,
  curCurrency,
  onValueChange,
  amount,
  setAmount,
  rangeData
}, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  
  const [minFlag, setMinFlag] = useState(false);
  const [maxFlag, setMaxFlag] = useState(false);
  
  useEffect(() => {
    if(!isFrom) return;

    if (!rangeData) return;

    setMinFlag(false);  // Format
    setMaxFlag(false);

    if(rangeData.minAmount > amount)
      setMinFlag(true)

    if(rangeData.maxAmount &&  (rangeData.maxAmount < amount))
      setMaxFlag(true)

    console.log("range", rangeData)
    console.log("amount", amount)
    console.log("(isFrom )", isFrom )
    console.log("(min )", minFlag )
    console.log("(max )", maxFlag )
    console.log("(isFrom && (minFlag || maxFlag))", (isFrom && (minFlag || maxFlag)))

  }, [rangeData, amount])

  useImperativeHandle(ref, () => ({
    hideDropdown() {
      setSearchWord("");
      setIsOpen(false);
    },
  }));


  const onRangeButonClicked = () =>{
    minFlag ? setAmount(rangeData.minAmount) : setAmount(rangeData.maxAmount)
  }

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


  const handleChange = (e) => {
    
    const inputValue = e.target.value;

    // Allow only numbers (including decimal point if needed)
    if (/^\d*\.?\d*$/.test(inputValue)) {
      console.log(inputValue)
     setAmount(inputValue )
    }
  };

  if (curCurrency) {
    return (
      <div className="flex w-full flex-col justify-center items-start flex-[1_0_0] text-white text-[15px] lg:text-[20px] relative lg:w-auto">

    <>
      {/* Currency & Amount Section */}
      <div className="relative grid grid-cols-1 sm:grid-cols-[35%_65%] pb-4 w-full ">
        <div className="p-2 sm:py-0 sm:px-3 border-2 lg:border-4 lg:border-r-0 h-auto lg:h-[65px] sm: w-full rounded-l-lg rounded-r-lg sm:rounded-r-none">
          <div 
            className="flex sm:flex-row flex-col sm:max-w-[250px] px-2 sm:py-2 lg:p-3 items-start gap-2 lg:flex-1 cursor-pointer w-full"
            onClick={toggleDropdown}
          >
            <div className="flex flex-col items-start w-full gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-[7px] w-full">
                <img className="max-h-6 max-w-6" src={curCurrency.image} alt={curCurrency.symbol} />
                <div className="flex self-stretch justify-between w-full uppercase lg:pr-2">
                  {curCurrency.symbol}
                  <span className="bg-[#1FEA00] text-black uppercase  lg:px-2">{curCurrency.network}</span>
                  <div className="self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M1.51416 3.84573H11.4858L6.49999 10.4543L1.51416 3.84573Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className=" h-auto sm:h-[65px] pr-0 sm:pr-3 border-2 my-3 sm:my-0 lg:border-4 rounded-r-lg ">
          <div className="flex flex-col w-full sm:flex-row ">
            {/* First Row: Label */}
            <div className="flex justify-center w-full p-1 text-center sm:p-3 sm:justify-start sm:text-left">
              You {isFrom ? 'Send:' : 'Receive:'}
            </div>

            {/* Second Row: Input Field */}
            <div className="flex justify-center w-full p-1 pr-3 sm:p-3">
              {isFrom ? (
                <input
                  type="text"
                  inputMode="numeric"
                  className="w-full text-right bg-transparent focus:outline-none"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className="w-full text-right bg-transparent focus:outline-none"
                  value={amount}
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Hidden Third Item (Invisible) */}
        <div className="invisible"></div>

        {/* Range Alert */}
        <div className="relative">
          <div className={`pl-5 absolute top-0 border-4 border-t-0 bg-[#927d81] rounded-b-md w-full ${minFlag || maxFlag ? 'h-fit' : 'hidden'}`}>
            <div className="flex self-stretch justify-between w-full" role="alert">
              <span className="w-full">{minFlag ? 'Min' : 'Max'} amount</span>
              <button
                className="max-w-6xl px-4 text-white underline"
                aria-label="Min amount"
                onClick={() => onRangeButonClicked()}
              >
                {minFlag
                  ? Math.round(rangeData.minAmount * 1000000000000) / 1000000000000
                  : rangeData.maxAmount}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    {isOpen && (
   <>
      {/* Search Dropdown */}
      <div
        className="m-auto flex flex-col items-start gap-2 lg:flex-1 border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer w-[100%] top-0 absolute bg-[#000000cc] backdrop-blur-3xl rounded-lg font-sans text-[14px] sm:text-[19px] z-[999]"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          placeholder="Type a currency or symbol"
          className="sticky flex items-center w-full p-2 sm:p-5 mt-0  text-left text-white rounded-lg shadow-sm focus:outline-none bg-[#637c75cc]"
          value={searchWord}
          onChange={onChangeSearchWord}
        />
        <ul aria-labelledby="dropdown" className="w-full overflow-hidden">
          {(() => {
            const filteredCurrencies =
              searchWord.length === 0
                ? currencyData
                : currencyData.filter(
                    (currency) =>
                      currency.name.toLowerCase().includes(searchWord.toLowerCase()) ||
                      currency.symbol.toLowerCase().includes(searchWord.toLowerCase())
                  );

            return (
              <List
                height={50 * filteredCurrencies.length > 300 ? 300 : 50 * filteredCurrencies.length}
                itemCount={filteredCurrencies.length}
                itemSize={50}
                width="100%"
              >
                {({ index, style }) => {
                  const currency = filteredCurrencies[index];
                  return (
                    <div
                      className="hover:bg-white/20 cursor-pointer hover:brightness-125 block px-2 py-1 sm:px-4 sm:py-2 sm:text-[10px] md:text-xs text-[10px] text-white"
                      key={index}
                      style={style}
                      onClick={() => subMenuClick(currency)}
                    >
                      <div className="flex items-center justify-between w-full uppercase">
                        <div className="flex items-center gap-0 mx-0 sm:mx-5 sm:gap-2">
                          <img className="pr-2 max-h-10 max-w-10" src={currency.image} alt={currency.symbol} />
                          <div className="flex flex-col">
                            <div className="tracking-tighter text-[10px] sm:text-xs md:text-sm">
                              {currency.name}
                            </div>
                            <div className="tracking-tighter text-[10px] sm:text-xs md:text-sm">
                              {currency.network}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="tracking-tighter text-[10px] sm:text-xs md:text-sm">
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


      // <div className="flex w-full flex-col justify-center items-start flex-[1_0_0] text-white text-[20px] relative w-auto">
      //   {!isOpen ? (
      //     <>
      //       <div className=" relative grid grid-cols-[35%_65%]  pb-4 w-full ">
      //         {/* First Item */}
      //         <div className="px-6 border-4 border-r-0 h-[65px]">
      //           <div className="flex max-w-[250px] p-3 flex-col items-start gap-2 lg:flex-1 cursor-pointer" onClick={toggleDropdown}>
      //             <div className="flex items-center self-stretch justify-between">
      //               <div className="flex items-center gap-[7px] w-full">
      //                 <img className="max-h-6 max-w-6" src={curCurrency.image} alt={curCurrency.symbol} />
      //                 <div className="flex self-stretch justify-between w-full pr-2 uppercase">
      //                   {curCurrency.symbol}
      //                   <span className="bg-[#1FEA00] text-black uppercase px-2">{curCurrency.network}</span>
      //                 </div>
      //               </div>
      //               <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      //                 <path d="M1.51416 3.84573H11.4858L6.49999 10.4543L1.51416 3.84573Z" fill="white" />
      //               </svg>
      //             </div>
      //           </div>
      //         </div>

      //         {/* Second Item */}
      //         <div className="pr-3 border-4 h-[65px]">
      //           <div className="flex flex-col">
      //             <div className="flex p-3 flex-col justify-center items-center gap-2.5 flex-1 self-stretch">
      //               <div className="flex items-center self-stretch justify-between">
      //                 <div className="w-[40%] ">You {isFrom ? 'Send:' : 'Receive:'}</div>
      //                 <div className="flex items-center justify-center w-full ">
      //                   {isFrom ? (
      //                     <input
      //                     type="text"
      //                     inputMode="numeric"
      //                     className="w-full text-right bg-transparent focus:outline-none"
      //                     placeholder="Enter amount"
      //                     value={amount}
      //                     onChange={handleChange}
      //                   />
      //                   ) : (
      //                     <input
      //                       className="w-full text-right bg-transparent focus:outline-none"
      //                       value={amount}
      //                       readOnly
      //                     />
      //                   )}
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>

      //         {/* Hidden Third Item (Invisible) */}
      //         <div className="invisible"></div>

      //         {/* Fourth Item */}
      //         <div className="relative">
      //         <div className={`pl-5 absolute top-0 border-4 border-t-0  bg-[#927d81] rounded-b-md  w-full ${(minFlag || maxFlag) ? 'h-fit' :'hidden'}`}>
      //           <div className="flex self-stretch justify-between w-full " role="alert">
      //             <span className="w-full "> {minFlag ? 'Min' : 'Max'} amount</span>
      //             <button className="max-w-6xl px-4 text-white underline" aria-label="Min amount" onClick={() => onRangeButonClicked()} >{minFlag ? Math.round(rangeData.minAmount * 1000000000000) / 1000000000000  : rangeData.maxAmount}</button>
      //           </div>
      //         </div>
      //         </div>
      //       </div>

      //     </>
      //   ) : (
      //     <>
      //       <div className=" m-auto flex p-3 flex-col items-start gap-2 lg:flex-1 border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer w-[100%] top-0 absolute bg-[#000000cc] backdrop-blur-3xl rounded-lg font-sans text-[19px]" onClick={(e) => { e.stopPropagation() }}>
      //         <input
      //           placeholder="Type a currency or symbol"
      //           className="sticky flex items-center w-full p-5 mt-4 text-left text-white rounded-lg shadow-sm focus:outline-none bg-[#637c75cc]"
      //           value={searchWord}
      //           onChange={onChangeSearchWord}
      //         />
      //         <ul aria-labelledby="dropdown" className="w-full overflow-hidden">
      //           {(() => {
      //             const filteredCurrencies = searchWord.length === 0
      //               ? currencyData
      //               : currencyData.filter(currency =>
      //                 (currency.name.toLowerCase().includes(searchWord.toLowerCase())) || currency.symbol.toLowerCase().includes(searchWord.toLocaleLowerCase())
      //               );
  
      //             return (
      //               <List
      //                 height={50 * filteredCurrencies.length > 300 ? 300 : 50 * filteredCurrencies.length}
      //                 itemCount={filteredCurrencies.length}
      //                 itemSize={50}
      //                 width="100%"
      //               >
      //                 {({ index, style }) => {
      //                   const currency = filteredCurrencies[index];
      //                   return (
      //                     <div
      //                       className="hover:bg-white/20 cursor-pointer hover:brightness-125 block px-4 py-2 sm:text-[10px] md:text-xs text-[19px] text-white"
      //                       key={index}
      //                       style={style}
      //                       onClick={() => subMenuClick(currency)}
      //                     >
      //                       <div className="flex items-center justify-between w-full uppercase">
      //                         <div className="flex items-center gap-2 mx-5">
      //                           <img
      //                             className="pr-2 max-h-10 max-w-10"
      //                             src={currency.image}
      //                             alt={currency.symbol}
      //                           />
      //                           <div className="flex flex-col">
      //                             <div className="tracking-tighter text-[19px] sm:text-xs md:text-sm">
      //                               {currency.name}
      //                             </div>
      //                             <div className="tracking-tighter text-[19px] sm:text-xs md:text-sm">
      //                               {currency.network}
      //                             </div>
      //                           </div>
      //                         </div>
      //                         <div className="flex flex-col items-center justify-center">
      //                           <div className="tracking-tighter text-[19px] sm:text-xs md:text-sm">
      //                             {currency.symbol}
      //                           </div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   );
      //                 }}
      //               </List>
      //             );
      //           })()}
      //         </ul>
      //       </div>
      //     </>
      //   )}
      // </div>
    );
  } else {
    return (
      <div className="flex w-full flex-col justify-center items-start gap-3 flex-[1_0_0] text-white relative">
        <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center self-stretch text-[20px] lg:text-[24px]">
          <div className="flex max-w-[250px] p-3 flex-col items-start gap-2 lg:flex-1 border-[3px] lg:border-4 border-b-0 lg:border-b-[3px] border-[#515151] cursor-pointer">
            <div className="flex items-center self-stretch justify-between" onClick={toggleDropdown}>
              <div className="flex items-center gap-[7px]">
                <img className="max-h-6 max-w-6" src="https://content-api.changenow.io/uploads/sol_3b3f795997.svg" />
                <div className="uppercase">sol</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1.51416 3.84573H11.4858L6.49999 10.4543L1.51416 3.84573Z" fill="white" />
              </svg>
            </div>
          </div>
  
          <div className="flex p-3 flex-col justify-center items-center gap-2.5 flex-1 self-stretch border-4 border-[#515151]">
            <div className="flex items-center self-stretch justify-between">
              <div>You {isFrom ? 'Send' : 'Receive'}</div>
              <div className="flex justify-center items-center gap-[6px]">
                {isFrom ? (
                  <input
                    className="w-full bg-[#00000000] text-right lg:mr-2"
                    step="any"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                ) : (
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
}
)  

export default InputCard