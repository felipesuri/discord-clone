import React from 'react'

import * as S from './styled'

import ServerList from '../ServerList'
import ServerName from '../ServerName'

const Layout: React.FC = () => (
  <S.Grid>
    <ServerList />
    <ServerName />
  </S.Grid>
)

export default Layout
