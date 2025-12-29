'use client';

import { type ReactNode } from 'react';
import { QueryProvider } from './query';
import { TooltipProvider } from '@/ui/DataDisplay/Tooltip';

interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  return (
    <QueryProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </QueryProvider>
  );
}
