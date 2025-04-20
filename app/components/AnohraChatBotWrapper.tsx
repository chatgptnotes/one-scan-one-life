'use client';

import dynamic from 'next/dynamic';

// Dynamically import the AnohraChatBot component with no SSR to avoid hydration issues
const AnohraChatBot = dynamic(() => import('./AnohraChatBot'), { ssr: false });

export default function AnohraChatBotWrapper() {
  return <AnohraChatBot />;
} 