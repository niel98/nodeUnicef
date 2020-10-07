import React from 'react'

import TotalProdsPerProg from './component/Chart/TotalProdsPerProg'
import StockAboveOneyrPerProg from './component/Chart/StockAboveOneyrPerProg'
import StockPerWarehouse from './component/Chart/StocksPerWarehouse'
import GrantsExLessThreeMonths from './component/Chart/GrantsExLessThreeMonths'
import GrantsExLessSixMonths from './component/Chart/GrantsExLessSixMonths'
import ExpiredSledLessOneyr from './component/Chart/ExpiredSledLessOneyr'

const App = () => {
  return (
    <div>
      <div>
        <TotalProdsPerProg />
      </div>
      <div>
        <StockAboveOneyrPerProg />
      </div>
      <div>
        <StockPerWarehouse />
      </div>
      <div>
        <GrantsExLessThreeMonths />
      </div>
      <div>
        <GrantsExLessSixMonths />
      </div>
      <div>
        <ExpiredSledLessOneyr />
      </div>
    </div>
  )
}

export default App