"use client";

import { useEffect } from "react";
import { resetProgress } from "@/lib/localStorage";

export default function SessionReset() {
  useEffect(() => {
    if (!sessionStorage.getItem("session-initialized")) {
      resetProgress();
      sessionStorage.setItem("session-initialized", "1");
    }
  }, []);

  return null;
}
