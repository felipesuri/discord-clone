import React from 'react'

import * as S from './styled'

export interface Props {
  channelName: string
  selected?: boolean
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => (
  <S.CBWrapper className={selected ? 'active' : ''}>
    <S.CBGroup>
      <S.HashTagIcon />
      <span>{channelName}</span>
    </S.CBGroup>

    <S.CBGroup>
      <S.InviteIcon />
      <S.SettingsIcon />
    </S.CBGroup>
  </S.CBWrapper>
)

export default ChannelButton
