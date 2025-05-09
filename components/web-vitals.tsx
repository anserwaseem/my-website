"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals(): undefined {
  useReportWebVitals((metric) => {
    console.log("useReportWebVitals", metric);
  });
}
