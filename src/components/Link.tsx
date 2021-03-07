import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  to: string,
}

export default function Link({ children, to, ...rest }: LinkProps) {
  return (
    <NextLink href={to} {...rest}>
      <a>
        {children}
      </a>
    </NextLink>
  )
}