import React from 'react'

import * as S from './styled'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'

const Layout: React.FC = () => (
  <S.Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
    <div />
    <UserList />
  </S.Grid>
)

export default Layout
