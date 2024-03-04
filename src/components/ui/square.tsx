"use client";
import { clsx } from "clsx";

type TSquare = {
  children?: "X" | "O";
  onClick: () => void;
  stop?: boolean;
};

export function Square({ children, onClick, stop = false }: TSquare) {
  return (
    <button
      disabled={typeof children !== "undefined" || stop}
      onClick={onClick}
      className={clsx(
        "border border-gray-500 text-2xl font-bold w-[100px] h-[100px]",
        children === "X" ? "text-blue-800" : "text-red-800"
      )}
    >
      {children}
    </button>
  );
}
