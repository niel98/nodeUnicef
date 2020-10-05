import React from 'react'

import TotalProdsPerProg from './component/Chart/TotalProdsPerProg'
import StockAboveOneyrPerProg from './component/Chart/StockAboveOneyrPerProg'
import StockPerWarehouse from './component/Chart/StocksPerWarehouse'
import GrantsExLessThreeMonths from './component/Chart/GrantsExLessThreeMonths'

const App = () => {
  return (
    <div>
      <TotalProdsPerProg />
      <StockAboveOneyrPerProg />
      <StockPerWarehouse />
      <GrantsExLessThreeMonths />
    </div>
  )
}

export default App