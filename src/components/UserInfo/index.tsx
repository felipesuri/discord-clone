import React from 'react'

import * as S from './styled'

const UserInfo: React.FC = () => (
  <S.UIWrapper>
    <S.Profile>
      <S.Avatar />
      <S.UserData>
        <strong>felipesuri</strong>
        <span>#9358</span>
      </S.UserData>
    </S.Profile>

    <S.Icons>
      <S.MicIcon />
      <S.HeadphoneIcon />
      <S.SettingsIcon />
    </S.Icons>
  </S.UIWrapper>
)

export default UserInfo
