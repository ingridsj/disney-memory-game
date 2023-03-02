import React, { createContext, ReactNode, useContext, useState } from "react";

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextType = {
  size: number | undefined
  setSize: (value: number) => void
  movements: number
  setMovements: (value: number) => void
  time: number
  setTime: any
}

const GameContext = createContext({} as GameContextType);

export function AuthProvider({ children }: GameContextProviderProps) {
  const [ size, setSize ] = useState<number | undefined>();
  const [ time, setTime ] = useState<number>(0)
  const [ movements, setMovements ] = useState<number>(0)

  return (
    <GameContext.Provider 
    value={{ 
        size, 
        setSize, 
        movements, 
        setMovements, 
        time, 
        setTime 
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  return context;
}
