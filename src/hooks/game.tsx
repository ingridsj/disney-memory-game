import React, { createContext, ReactNode, useContext, useState } from "react";

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextType = {
  size: number | undefined
  setSize: (value: number) => void
  movements: number
  setMovements: (value: number) => void
  time: string
  setTime: any
  victories: number
  setVictories: (value: number) => void
  defeats: number
  setDefeats: (value: number) => void
}

const GameContext = createContext({} as GameContextType);

export function AuthProvider({ children }: GameContextProviderProps) {
  const [ size, setSize ] = useState<number | undefined>();
  const [ time, setTime ] = useState<string>('00:00')
  const [ movements, setMovements ] = useState<number>(0)
  const [ victories, setVictories ] = useState<number>(0)
  const [ defeats, setDefeats ] = useState<number>(0)

  return (
    <GameContext.Provider 
    value={{ 
        size, 
        setSize, 
        movements, 
        setMovements, 
        time, 
        setTime,
        victories,
        setVictories,
        defeats,
        setDefeats,
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
