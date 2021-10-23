import { RefObject } from "react";

export const isElementAtPosition = (position: number, ref: RefObject<HTMLDivElement>): boolean => {
  const offsetFromTop = ref.current?.getBoundingClientRect().top;
  if (offsetFromTop as number < position) {
    return true;
  }
  return false;
}