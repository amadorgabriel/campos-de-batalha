import { cn } from '@/shared/utils/cn';
import { Button } from '.';
import { CircleX } from 'lucide-react';
import { ButtonProps } from './index.types';

interface RoundButtonProps extends ButtonProps {
  onClose?: () => void;
}

export function RoundButton({ onClose, children, className, ...rest }: RoundButtonProps) {
  return (
    <span
      {...rest}
      id="round-button"
      className={cn(
        'w-full px-4 py-2 rounded-full flex items-center justify-between bg-muted text-sm text-primary border border-transparent transition hover:text-primary disabled:opacity-50',
        className
      )}
    >
      {children}

      <div className="flex items-center gap-1">
        {onClose && (
          <Button
            variant="ghost"
            title="Remover"
            size="icon"
            className="p-1 h-auto w-auto"
            icon={<CircleX className="text-destructive hover:text-red-700" size={14} />}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
        )}
      </div>
    </span>
  );
}
