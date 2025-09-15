"use client";

import { ReactNode } from 'react';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export default function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return (
    <>
      {children}
    </>
  );
}
