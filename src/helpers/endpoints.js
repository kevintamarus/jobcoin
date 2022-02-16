export const getAddressInfo = async address => {
  try {
  const response = await fetch(`http://jobcoin.gemini.com/citable-appease/api/addresses/${address}`);
  const addressInfo = await response.json();
  return addressInfo;
  } catch(err) {
    return err;
  }
};

export const sendCoins = async body => {
  try {
    const response = await fetch(`http://jobcoin.gemini.com/citable-appease/api/transactions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;
  } catch(err) {
    return err;
  }
};
