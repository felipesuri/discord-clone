import React from 'react'

import * as S from './styled'

const ChannelInfo: React.FC = () => (
  <S.CIWrapper>
    <S.HashTagIcon />

    <S.Title>chat-livre</S.Title>

    <S.Separator />

    <S.Description>Canal aberto para conversas</S.Description>
  </S.CIWrapper>
)

export default ChannelInfo
