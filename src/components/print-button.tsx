"use client";

import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";

export const PrintButton = () => {
  return (
    <Button
      className="size-8"
      variant="outline"
      size="icon"
      aria-label="Save as PDF"
      title="Save as PDF"
      onClick={() => window.print()}
    >
      <PrinterIcon className="size-4" />
    </Button>
  );
};
