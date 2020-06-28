import React from 'react'

import * as S from './styled'

interface UserProps {
  nickname: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => (
  <S.UserWrapper>
    <S.Avatar className={isBot ? 'bot' : ''} />

    <strong>{nickname}</strong>

    {isBot && <span>Bot</span>}
  </S.UserWrapper>
)

const UserList: React.FC = () => (
  <S.ULWrapper>
    <S.Role>Disponível - 1</S.Role>
    <UserRow nickname="felipesuri" />

    <S.Role>Offline - 10</S.Role>
    <UserRow nickname="Francyne Farias" isBot />
  </S.ULWrapper>
)

export default UserList
