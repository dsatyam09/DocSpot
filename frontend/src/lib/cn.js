import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn() {
  const inputs = Array.prototype.slice.call(arguments);
  return twMerge(clsx(inputs));
}
