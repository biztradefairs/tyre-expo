import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[2560px] px-4 sm:px-6 lg:px-16 xl:px-24 ${className}`}>
      {children}
    </div>
  );
}