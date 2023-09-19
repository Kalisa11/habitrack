import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateEmail(email: string) {
  if (email) {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      const userName = email.slice(0, atIndex);
      return userName;
    }
    return null;
  }
}
