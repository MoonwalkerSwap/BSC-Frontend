import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'moonwalkerswap-uikit'
import useI18n from 'hooks/useI18n'
import useTheme from 'hooks/useTheme'

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()
  // eslint-disable-next-line
  const { isDark, toggleTheme } = useTheme()
  const textColor = isDark ? "" : "#2A2A2A";

  return (
    <Wrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`} style={{ borderRadius: '30px', width: '100px', color:textColor }}>
          {TranslateString(1198, 'Live')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`} style={{ borderRadius: '30px', width: '100px', color:textColor }}>
          {TranslateString(388, 'Finished')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
