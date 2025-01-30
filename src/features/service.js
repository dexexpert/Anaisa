const getEstimateWithAxios = async (data) => {
  try {
    let response = await fetch(
      "https://anaisa-api.vercel.app/api/get_estimated?fixed="
        .concat(false, "&currency_from=")
        .concat(data.currency_from.symbol, "&currency_to=")
        .concat(data.currency_to.symbol, "&amount=")
        .concat(data.amount)
        .concat("&isFixed=", data.isFixed)
      //  .concat(100)
    );

    return await response.json();
  } catch (e) {
    console.error("Failed to fetch data: ", e);
  }
};

const getExchangeRangeWithAxios = async (data) => {
  try {
    let response = await fetch(
      "https://anaisa-api.vercel.app/api/get_ranges?fixed="
        .concat(false, "&currency_from=")
        .concat(data.currency_from.symbol, "&currency_to=")
        .concat(data.currency_to.symbol)
        .concat("&isFixed=", data.isFixed)
    );

    return await response.json();
  } catch (e) {
    console.error("Failed to fetch data: ", e);
  }
};

const postExchangeTransactionWithAxios = async (data) => {
  try {
    let response = await fetch(
      "https://anaisa-api.vercel.app/api/create_exchange",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isFixed: data.isFixed,
          currency_from: data.currency_from.symbol,
          currency_to: data.currency_to.symbol,
          amount: data.amount,
          address_to: data.address_to,
          extra_id_to: "",
          user_refund_address: "",
          user_refund_extra_id: "",
        }),
      }
    );
    return await response.json();
  } catch (e) {
    throw (console.error("Failed to fetch data: ", e), e);
  }
};

const getTransactionStatusWithAxios = async (id) => {
  try {
    let response = await fetch(
      "https://anaisa-api.vercel.app/api/get_exchange?id=".concat(id)
    );
    return await response.json();
  } catch (e) {
    console.error("Failed to fetch data: ", e);
  }
};

const service = {
  getEstimateWithAxios,
  getExchangeRangeWithAxios,
  postExchangeTransactionWithAxios,
  getTransactionStatusWithAxios,
};

export default service;
