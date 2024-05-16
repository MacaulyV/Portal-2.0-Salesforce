"use client";
import React from "react";
import VLibras from "react-vlibras";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <VLibras safeInit />
      {children}
    </>
  );
}
