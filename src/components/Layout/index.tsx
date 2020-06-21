import React from 'react'

import * as S from './styled'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'

const Layout: React.FC = () => (
  <S.Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
  </S.Grid>
)

export default Layout
