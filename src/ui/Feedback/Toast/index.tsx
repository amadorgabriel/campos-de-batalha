'use client';

import * as React from 'react';

import { type VariantProps } from 'class-variance-authority';
import { type ToastProps, type ToastActionElement } from './index.types';

import { cn } from '@/shared/utils/cn';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { ToastTitle } from './ToastTitle';
import { ToastClose } from './ToastClose';
import { ToastAction } from './ToastAction';
import { toastVariants } from './index.const';
import { ToastViewport } from './ToastViewport';
import { ToastDescription } from './ToastDescription';
import { ToastProvider } from './ToastProvider';

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});

Toast.displayName = ToastPrimitives.Root.displayName;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
