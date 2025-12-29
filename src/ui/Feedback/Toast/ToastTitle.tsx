import React from 'react';

import { cn } from '@/shared/utils/cn';
import * as ToastPrimitives from '@radix-ui/react-toast';

export const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
));

ToastTitle.displayName = ToastPrimitives.Title.displayName;
