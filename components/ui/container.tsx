import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={` xl:max-w-[1500px] px-[3.7cm]  ${className}`}>
      {children}
    </div>
  );
}