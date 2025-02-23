// Exchange Rate Calculator Logic
const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculateExchangeRate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  // Fetch exchange rate data from API
  fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        const rate = data.conversion_rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      } else {
        rateEl.innerText = 'Error fetching exchange rate';
        amountEl_two.value = '';
      }
    })
    .catch(() => {
      rateEl.innerText = 'Error fetching exchange rate';
      amountEl_two.value = '';
    });
}

// Event Listeners for Exchange Rate Calculator
currencyEl_one.addEventListener('change', calculateExchangeRate);
amountEl_one.addEventListener('input', calculateExchangeRate);
currencyEl_two.addEventListener('change', calculateExchangeRate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculateExchangeRate();
});

calculateExchangeRate();

// Crypto Calculator Logic
const cryptoEl_one = document.getElementById('crypto-one');
const currencyEl_three = document.getElementById('currency-three');
const cryptoAmountEl_one = document.getElementById('crypto-amount-one');
const cryptoAmountEl_two = document.getElementById('crypto-amount-two');
const cryptoRateEl = document.getElementById('crypto-rate');
const cryptoSwap = document.getElementById('crypto-swap');

function calculateCryptoRate() {
  const crypto_one = cryptoEl_one.value;
  const currency_three = currencyEl_three.value;

  // Fetch cryptocurrency price data from CoinGecko API
  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto_one}&vs_currencies=${currency_three}`)
    .then(res => res.json())
    .then(data => {
      if (data && data[crypto_one] && data[crypto_one][currency_three]) {
        const rate = data[crypto_one][currency_three];
        cryptoRateEl.innerText = `1 ${crypto_one.toUpperCase()} = ${rate} ${currency_three.toUpperCase()}`;
        cryptoAmountEl_two.value = (cryptoAmountEl_one.value * rate).toFixed(2);
      } else {
        cryptoRateEl.innerText = 'Data not available';
        cryptoAmountEl_two.value = '';
      }
    })
    .catch(() => {
      cryptoRateEl.innerText = 'Error fetching crypto rate';
      cryptoAmountEl_two.value = '';
    });
}

// Event Listeners for Crypto Calculator
cryptoEl_one.addEventListener('change', calculateCryptoRate);
cryptoAmountEl_one.addEventListener('input', calculateCryptoRate);
currencyEl_three.addEventListener('change', calculateCryptoRate);
cryptoSwap.addEventListener('click', () => {
  const temp = cryptoEl_one.value;
  cryptoEl_one.value = currencyEl_three.value;
  currencyEl_three.value = temp;
  calculateCryptoRate();
});

calculateCryptoRate();