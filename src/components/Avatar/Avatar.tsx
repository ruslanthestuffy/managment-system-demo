import { ComponentProps } from 'react';
import styled from 'styled-components';

type AvatarSize = 'small' | 'large';

export interface AvatarProps extends ComponentProps<'img'> {
  size?: AvatarSize;
}

const sizeMap: Record<AvatarSize, number> = {
  small: 34,
  large: 260,
};

export const Avatar = styled.img<AvatarProps>(({ size = 'small', alt = 'avatar' }) => ({
  verticalAlign: 'middle',
  width: sizeMap[size],
  height: sizeMap[size],
  borderRadius: '50%',
  objectFit: 'cover',
}));
