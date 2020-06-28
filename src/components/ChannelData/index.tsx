import React, { useRef, useEffect } from 'react'

import * as S from './styled'

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <S.CDWrapper>
      <S.Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="felipesuri"
            date="21/06/2020"
            content="Este dia está sendo bem legal"
          />
        ))}

        <ChannelMessage
          author="Francyne Farias"
          date="21/06/2020"
          content={
            <>
              <Mention>@felipesuri</Mention>, que bom que seu dia está sendo legal!
            </>
          }
          hasMention
          isBot
        />
      </S.Messages>

      <S.InputWrapper>
        <S.Input type="text" placeholder="Conversar em #chat-livre" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.CDWrapper>
  )
}

export default ChannelData
