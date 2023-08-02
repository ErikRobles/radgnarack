import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "lcs":
      return "L-CLNC SNGL"
    case "lcd":
      return "L-CLNC DBL"
    case "hcs":
      return "H-CLNC SNGL"
    case "hcd":
      return "H-CLNC DBL"
    case "one-size":
      return "One Size"
  }
}
