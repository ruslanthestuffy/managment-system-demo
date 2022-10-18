declare module '*.svg' {
  import { ComponentProps, FC } from 'react';
  const ReactComponent: FC<ComponentProps<'svg'>>;
  export { ReactComponent };
}
