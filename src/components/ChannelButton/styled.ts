import styled from 'styled-components'
import { Hashtag } from '@styled-icons/heroicons-outline'
import { PersonAdd, Settings } from '@styled-icons/material'

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`

export const CBWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    ${InviteIcon}, ${SettingsIcon} {
      display: flex;
    }
  }

  ${InviteIcon}, ${SettingsIcon} {
    display: none;
  }
`

export const CBGroup = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 15px;
    color: var(--senary);
  }
`

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`
