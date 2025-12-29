'use client';

import { Suspense } from '@/ui/Feedback/Suspense';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DefaultPage() {
  const router = useRouter();

  // useEffect(() => {
  //   console.log('Redirecting to /home');
  //   router.push('/home');
  // }, [router]);

  return <p> aa</p>;
}
