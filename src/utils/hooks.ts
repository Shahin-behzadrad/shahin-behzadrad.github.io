"use client";

import { useState, useEffect } from "react";

export type Breakpoint = 0 | 600 | 960 | 1280 | 1840;

/**
 * Custom hook that returns true if the window width is below the given maxWidth.
 *
 * @param maxWidth - one of the allowed breakpoint values
 * @returns boolean - true if the viewport width is below maxWidth, false otherwise.
 */
export function useBreakpoint(maxWidth: Breakpoint): boolean {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    setIsBelowBreakpoint(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsBelowBreakpoint(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [maxWidth]);

  return isBelowBreakpoint;
}
