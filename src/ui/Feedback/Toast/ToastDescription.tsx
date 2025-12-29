import React from 'react';

import { cn } from '@/shared/utils/cn';
import * as ToastPrimitives from '@radix-ui/react-toast';

export const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));

ToastDescription.displayName = ToastPrimitives.Description.displayName;
