'use client';

import * as React from 'react';

import { cn } from '@/shared/utils/cn';
import { Slot, Slottable } from '@radix-ui/react-slot';

import { ButtonProps } from './index.types';
import { buttonVariants } from './index.const';
import { LoaderCircle } from 'lucide-react';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      icon,
      iconPosition = 'left',
      loading = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Compoment = asChild ? Slot : 'button';

    return (
      <Compoment
        className={cn(buttonVariants({ size, shape, variant, className }))}
        ref={ref}
        {...props}
        disabled={props.disabled}
      >
        {loading && <LoaderCircle className="animate-spin h-4 w-4" />}
        {!loading && icon && iconPosition === 'left' && <span>{icon}</span>}
        <Slottable>{children}</Slottable>
        {!loading && icon && iconPosition === 'right' && <span>{icon}</span>}
      </Compoment>
    );
  }
);

Button.displayName = 'Button';

export { Button };
