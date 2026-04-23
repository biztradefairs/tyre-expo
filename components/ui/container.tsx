// components/ui/container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}