import React from 'react'

import * as S from './styled'

import ServerList from '../ServerList'

const Layout: React.FC = () => (
  <S.Grid>
    <ServerList />
  </S.Grid>
)

export default Layout
