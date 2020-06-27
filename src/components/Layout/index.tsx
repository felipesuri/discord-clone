import React from 'react'

import * as S from './styled'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'

const Layout: React.FC = () => (
  <S.Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
  </S.Grid>
)

export default Layout
