import { ReactNode } from 'react';
import { Spinner } from '../Spinner';

type SuspenseProps = {
  spinning?: boolean;
  fullscreen?: boolean;
  description?: string;
  children?: ReactNode;
  classname?: string;
};

export const Suspense = ({
  spinning = true,
  fullscreen = false,
  description,
  children,
  classname = '',
}: SuspenseProps) => {
  if (!spinning) return <>{children}</>;

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <Spinner className="animate-spin text-primary w-6 h-6" />
      {description && <p className={'text-sm text-muted-foreground ' + classname}>{description}</p>}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className={
          'fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm ' +
          classname
        }
      >
        {spinner}
      </div>
    );
  }

  if (children) {
    return (
      <div className="relative">
        <div className="opacity-0 pointer-events-none">{children}</div>
        <div
          className={
            'absolute inset-0 z-10 flex items-center justify-center bg-white/50 ' + classname
          }
        >
          {spinner}
        </div>
      </div>
    );
  }

  return <div className={'flex items-center justify-center p-4 ' + classname}>{spinner}</div>;
};
