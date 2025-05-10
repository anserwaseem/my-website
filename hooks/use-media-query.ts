"use client";

import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!isClient) return;

    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    // set initial value
    updateMatch();

    // setup listener
    media.addEventListener("change", updateMatch);

    // cleanup
    return () => media.removeEventListener("change", updateMatch);
  }, [query, isClient]);

  return matches;
};
