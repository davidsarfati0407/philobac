"use client";

import { useEffect } from "react";
import { resetProgress } from "@/lib/localStorage";

export default function SessionReset() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.sessionStorage.getItem("session-initialized")) {
      resetProgress();
      window.sessionStorage.setItem("session-initialized", "1");
    }
  }, []);

  return null;
}
