import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from 'moonwalkerswap-uikit'
import useI18n from 'hooks/useI18n'
import { calculateDustEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  dustPrice?: BigNumber
  apy?: number
  addLiquidityUrl?: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  dustPrice,
  apy,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n()
  const oneThousandDollarsWorthOfDust = 1000 / dustPrice.toNumber()

  const dustEarnedPerThousand1D = calculateDustEarnedPerThousandDollars({ numberOfDays: 1, farmApy: apy, dustPrice })
  const dustEarnedPerThousand7D = calculateDustEarnedPerThousandDollars({ numberOfDays: 7, farmApy: apy, dustPrice })
  const dustEarnedPerThousand30D = calculateDustEarnedPerThousandDollars({ numberOfDays: 30, farmApy: apy, dustPrice })
  const dustEarnedPerThousand365D = calculateDustEarnedPerThousandDollars({
    numberOfDays: 365,
    farmApy: apy,
    dustPrice,
  })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(860, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(858, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(864, 'Dust per $1000')}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: dustEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfDust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{dustEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: dustEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfDust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{dustEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: dustEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfDust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{dustEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: dustEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfDust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{dustEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        {TranslateString(
          866,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={addLiquidityUrl}>
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
