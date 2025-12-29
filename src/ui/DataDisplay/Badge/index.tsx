import { cn } from '@/shared/utils/cn';

import { BadgeProps } from './index.types';
import { badgeVariants } from './index.const';

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };
