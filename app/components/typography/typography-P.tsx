import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type TypographyParagraphProps = ComponentProps<'p'> & object;

export function TypographyP(props: TypographyParagraphProps) {
  return (
    <p
      className={cn(
        props.className ? props.className : '',
        'leading-4 sm:leading-5 md:leading-6 lg:leading-7 not-first:mt-6 text-muted-foreground'
      )}>
      {props.children}
    </p>
  );
}
