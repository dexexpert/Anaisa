
  const range = (data) => {
    service.getExchangeRangeWithAxios(data).then((result) => {
      if (!result.error) {
        setRangeData({
          minAmount: result?.min,
          maxAmount: result?.max,
        });
      }
    }).catch(err => console.log(err));
  }

  const getEstimate = (data) => {
    service.getEstimateWithAxios(data).then((result) => {

      if (!result.error) {
        setAmountTo(result);
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    if (currencyData) {
      setCurrencyFrom(currencyData[0]);
      setCurrencyTo(currencyData[1]);
    }
  }, [currencyData])

  useEffect(() => {
    if (currency_from && currency_to) {
      range({ currency_from: currency_from, currency_to: currency_to });
    }
  }, [currency_from, currency_to])

  useEffect(() => {
    if (rangeData.minAmount !== 0) {
      getEstimate({
        currency_from: currency_from,
        currency_to: currency_to,
        amount: amount_from,
      });
    }
  }, [rangeData.minAmount])

  useEffect(() => {
    if ((currency_from && currency_to) && (currency_from == currency_to)) {
      toast.error('Sorry, plz choose other pair!');
      return;
    }

    if (parseFloat(amount_from) < parseFloat(rangeData.minAmount))
      setAmountFrom(parseFloat(rangeData.minAmount) * 1.1);

    else if (rangeData.maxAmount && parseFloat(amount_from) > parseFloat(rangeData.maxAmount))
      setAmountFrom(rangeData.maxAmount);

    if (currency_from && currency_to && (parseFloat(amount_from) > 0)) {
      getEstimate({
        currency_from: currency_from,
        currency_to: currency_to,
        amount: amount_from,
      });
    }


  }, [currency_from, currency_to, amount_from, amount_to, rangeData])