import React from 'react'

import * as S from './styled'

export { Mention } from './styled'

export interface Props {
  author: string
  date: string
  content: string | React.ReactElement | React.ReactNode
  hasMention?: boolean
  isBot?: boolean
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => (
  <S.CMWrapper className={hasMention ? 'mention' : ''}>
    <S.Avatar className={isBot ? 'bot' : ''} />

    <S.Message>
      <S.Header>
        <strong>{author}</strong>

        {isBot && <span>Bot</span>}

        <time>{date}</time>
      </S.Header>

      <S.Content>{content}</S.Content>
    </S.Message>
  </S.CMWrapper>
)

export default ChannelMessage
