'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { Button } from '@/ui/DataDisplay/Button';

export interface ErrorPageProps {
  error: Error & { digest?: string };
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-red-500 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Algo deu errado</h1>
        <p className="text-gray-600 mb-6">
          {error.message || 'Ocorreu um erro inesperado. Por favor, tente novamente.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={handleGoHome} className="w-full sm:w-auto">
            Página inicial
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Se o problema persistir, entre em contato com nosso{' '}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_TECNICAL_MAIL_ADDRESS}`}
              className="text-blue-600 hover:underline"
            >
              suporte técnico
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
