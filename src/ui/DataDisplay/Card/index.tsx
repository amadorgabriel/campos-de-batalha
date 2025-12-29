import * as React from 'react';

import { cn } from '@/shared/utils/cn';

import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardContent } from './CardContent';
import { cva, VariantProps } from 'class-variance-authority';

const cardVariants = cva(`transition`, {
  variants: {
    variant: {
      default: 'border bg-card text-card-foreground shadow-xs',
      filled: 'bg-muted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-md px-4', cardVariants({ variant }), className)}
      {...props}
    />
  )
);

Card.displayName = 'Card';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
