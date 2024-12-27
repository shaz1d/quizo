import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (seconds: number | string): string => {
  const secNum = Number(seconds);
  const hours = Math.floor(secNum / 3600);
  const minutes = Math.floor((secNum % 3600) / 60);
  const remainingSeconds = secNum % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  } else {
    return `${minutes}m ${remainingSeconds}s`;
  }
};

export function truncateEmail(email: string, maxLength: number): string {
  // Check if the email is longer than the maxLength
  if (email.length > maxLength) {
    // Truncate and append '...' at the end
    return email.slice(0, maxLength) + "...";
  }
  return email;
}
