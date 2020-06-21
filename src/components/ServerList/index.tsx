import React from 'react'

import * as S from './styled'

import ServerButton from '../ServerButton'

const ServerList: React.FC = () => (
  <S.ServerListWrapper>
    <ServerButton isHome />

    <S.Separator />

    <ServerButton mentions={8} />
    <ServerButton />
    <ServerButton hasNotifications />
    <ServerButton />
    <ServerButton />
    <ServerButton mentions={8} />
    <ServerButton />
    <ServerButton hasNotifications />
    <ServerButton />
    <ServerButton />
  </S.ServerListWrapper>
)

export default ServerList
