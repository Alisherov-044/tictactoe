"use client";
import { useEffect, useState } from "react";
import { range, rules } from "@/utils";
import { Square } from "@/components";

export function Board() {
  const [winner, setWinner] = useState<"x" | "o" | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [currentPlayer, setCurrentPlayer] = useState<"x" | "o">("x");
  const [board, setBoard] = useState<Record<"x" | "o", number[]>>({
    x: [],
    o: [],
  });

  function getType(index: number): "X" | "O" | undefined {
    if (board.x.some((i) => i === index)) {
      return "X";
    } else if (board.o.some((i) => i === index)) {
      return "O";
    }
  }

  function filter(arr: number[]) {
    return arr.sort((x, y) => x - y);
  }

  function isEqual(firstArr: number[], secondArr: number[]) {
    return (
      JSON.stringify(filter(firstArr)) === JSON.stringify(filter(secondArr))
    );
  }

  function checkWinner(board: Record<"x" | "o", number[]>) {
    if (rules.some((rule) => isEqual(rule, board.x))) {
      setWinner("x");
    } else if (rules.some((rule) => isEqual(rule, board.o))) {
      setWinner("o");
    }
  }

  useEffect(() => {
    checkWinner(board);

    if (board.x.length + board.o.length === 9) {
      setIsDraw(true);
    }
  }, [board]);

  function swipePlayers(current: string) {
    return current === "x" ? "o" : "x";
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <h1 className="uppercase">Current Player: {currentPlayer}</h1>
        {winner && <h1>Winner is: {winner}</h1>}
        {isDraw && <h1>Draw</h1>}
      </div>
      <div className="w-[300px] h-[300px] grid grid-cols-3">
        {range(1, 9).map((i) => (
          <Square
            stop={!!winner || !!isDraw}
            key={i}
            onClick={() => {
              setBoard((prev) => ({
                ...prev,
                [currentPlayer]: [...prev[currentPlayer], i],
              }));
              setCurrentPlayer((prev) => swipePlayers(prev));
            }}
          >
            {getType(i)}
          </Square>
        ))}
      </div>
    </div>
  );
}
