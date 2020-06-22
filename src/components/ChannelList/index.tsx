import React from 'react'

import * as S from './styled'

import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => (
  <S.CLWrapper>
    <S.Category>
      <span>Canais de texto</span>
      <S.AddCategoryIcon />
    </S.Category>

    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="chat-gostack" />
    <ChannelButton channelName="chat-links" />
    <ChannelButton channelName="chat-anuncios" />
    <ChannelButton channelName="chat-lives" />
  </S.CLWrapper>
)

export default ChannelList
