import { useEffect } from 'react'
import { usePriceDustBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const dustPriceUsd = usePriceDustBusd()
  useEffect(() => {
    document.title = `MoonWalkerSwap - $${Number(dustPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
