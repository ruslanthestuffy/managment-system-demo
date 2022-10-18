import { FC } from 'react';
import { useMedia } from 'react-use';

import { Search } from 'components/inputs';
import { Avatar } from 'components/Avatar';

import { theme } from 'lib';

import { NotificationIcon, SettingsIcon } from 'assets/icons';

import { AlignContainer, IconsGroup, StyledHeader, UserInfo } from 'components/Header/styles';
interface SideBarProps {
  url?: string;
}

export const Header: FC<SideBarProps> = () => {
  const isMobile = useMedia(theme.breakpoints.md);

  return (
    <StyledHeader>
      <AlignContainer>
        {!isMobile && <Search />}
        <UserInfo>
          Иван Иванов
          <IconsGroup>
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <NotificationIcon />
            {!isMobile && <SettingsIcon />}
          </IconsGroup>
        </UserInfo>
      </AlignContainer>
    </StyledHeader>
  );
};
