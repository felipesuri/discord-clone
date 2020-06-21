import React from 'react'

import * as S from './styled'

export interface Props {
  selected?: boolean
  isHome?: boolean
  hasNotifications?: boolean
  mentions?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => (
  <S.Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active' : ''}
  >
    {isHome && (
      <img
        src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
        alt="Rocketseat"
      />
    )}
  </S.Button>
)

export default ServerButton
