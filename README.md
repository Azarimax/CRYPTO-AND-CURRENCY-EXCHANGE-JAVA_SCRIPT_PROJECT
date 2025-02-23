# CRYPTO-AND-CURRENCY-EXCHANGE-JAVA_SCRIPT_PROJECT
Exchange Rate & Crypto Calculator 

A web-based calculator that allows users to calculate exchange rates for fiat currencies and cryptocurrency values in real-time using APIs. The project includes two separate calculators: Exchange Rate Calculator  and Crypto Calculator , both integrated into a single page with responsive design. 
Table of Contents 

    Features 
    Demo 
    How It Works 
    Technologies Used 
    Setup Instructions 
    APIs 
    Contributing 
    License 
    Acknowledgments 
     

Features 

    Exchange Rate Calculator : Convert between fiat currencies (e.g., USD, EUR, INR, etc.) using real-time exchange rates.
    Crypto Calculator : Fetch live cryptocurrency prices (e.g., Bitcoin, Ethereum, etc.) and convert them to fiat currencies.
    Responsive Design : Fully responsive layout that adapts to all screen sizes.
    Interactive UI : Smooth animations, hover effects, and swap functionality for enhanced user experience.
    Real-Time Data : Powered by external APIs for accurate and up-to-date currency and crypto values.
     

Demo 

You can view a live demo of the project here . 
How It Works 

    Exchange Rate Calculator : 
        Select the base currency and target currency from dropdown menus.
        Enter an amount in the input field.
        The converted amount will be displayed instantly.
        Use the "Swap" button to switch the selected currencies.
         
    Crypto Calculator : 
        Select a cryptocurrency (e.g., Bitcoin, Ethereum) and a fiat currency (e.g., USD, EUR).
        Enter the amount of cryptocurrency you want to convert.
        The equivalent value in the selected fiat currency will be displayed.
        Use the "Swap" button to switch between crypto and fiat.
         
  
Technologies Used 

    HTML5 : Structure of the web page.
    CSS3 : Styling and layout, including responsive design.
    JavaScript : Functional logic for API integration and interactivity.
    APIs :
        Exchangerate-API  for fiat currency exchange rates.
        CoinGecko-API  for cryptocurrency prices.
        

Setup Instructions 

    Clone the repository: 
    bash
    
1
git clone https://github.com/Azarimax/CRYPTO-AND-CURRENCY-EXCHANGE_JAVA_SCRIPT_PROJECT.git
 
 

Navigate to the project directory: 
bash
 

     
    1
    cd exchange-rate-crypto-calculator
     
     

    Open the index.html file in your preferred browser. 

    Ensure your system has an active internet connection to fetch data from the APIs. 
     

APIs 
Exchange Rate API 

    Provider : Exchangerate-API 
    Endpoint : https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{BASE_CURRENCY}
    Usage : Fetches real-time exchange rates for fiat currencies.
     

Crypto API 

    Provider : CoinGecko-API 
    Endpoint : https://api.coingecko.com/api/v3/simple/price?ids={CRYPTO_ID}&vs_currencies={CURRENCY}
    Usage : Fetches live cryptocurrency prices.
     

Note : Replace {API_KEY} with your actual API key for the Exchangerate-API. 
Contributing 

 Contributions are welcome! If you'd like to contribute, please follow these steps: 

    Fork the repository.
    Create a new branch for your feature or bug fix:
    bash
     

 
1
git checkout -b feature-name
 
 
Commit your changes:
bash
 
 
1
git commit -m "Add feature or fix bug"
 
 
Push your changes to your fork:
bash
 

     
    1
    git push origin feature-name
     
     
    Submit a pull request to the main repository.
     

License 

This project is licensed under the MIT License. See the LICENSE  file for details. 
Acknowledgments 

    Exchangerate-API  for providing the fiat currency exchange rate API.
    CoinGecko-API  for providing the cryptocurrency price API.
    Special thanks to Azari Tech Solution for inspiring this project.
     
