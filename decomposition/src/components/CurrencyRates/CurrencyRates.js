import React from 'react';

/** Блок с курсами валют и котировками нефти */
function CurrencyRates() {
  return (
    <div className="currency-rates">
      <span className="rate-item"><strong>USD MOEX</strong> 63,52 +0,09</span>
      <span className="rate-item"><strong>EUR MOEX</strong> 70,86 +0,14</span>
      <span className="rate-item"><strong>НЕФТЬ</strong> 64,90 +1,63%</span>
    </div>
  );
}

export default CurrencyRates;