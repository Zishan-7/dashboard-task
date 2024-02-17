"use client";

import { useColorStore } from "@/Store/ColorStore";
import React from "react";

interface BackgroundI {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundI) => {
  const { color } = useColorStore((state) => state);

  return (
    <main
      style={{
        backgroundColor: color,
      }}
      className="flex min-h-screen py-9 flex-col items-center justify-center"
    >
      {children}
    </main>
  );
};

export default Background;
