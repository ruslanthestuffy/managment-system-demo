import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLink } from 'components/CustomLink/styles';

interface CustomLinkProps {
  url: string;
  label: string;
  external?: boolean;
}

export const CustomLink: FC<CustomLinkProps> = ({ url, external, label }) => {
  if (external) return <StyledLink href={url}>{label}</StyledLink>;

  return (
    <StyledLink as={Link} to={url}>
      {label}
    </StyledLink>
  );
};
