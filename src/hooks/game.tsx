import React, { createContext, type ReactNode, useContext, useState, useMemo } from 'react'

type GameContextProviderProps = {
  children: ReactNode
}

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

const GameContext = createContext({} as GameContextType)

export function GameProvider ({ children }: GameContextProviderProps) {
  const [ size, setSize ] = useState<number>(3)
  const [ time, setTime ] = useState<string>('00:00')
  const [ movements, setMovements ] = useState<number>(0)
  const [ victories, setVictories ] = useState<number>(0)
  const [ defeats, setDefeats ] = useState<number>(0)

  const value = useMemo(() => {
    return {
      size,
      setSize,
      movements,
      setMovements,
      time,
      setTime,
      victories,
      setVictories,
      defeats,
      setDefeats
    }
  }, [ size, setSize, movements, setMovements, time, setTime, victories, setVictories, defeats, setDefeats ])

  return (
    <GameContext.Provider value={value} >
      {children}
    </GameContext.Provider>
  )
}

export function useGame () {
  const context = useContext(GameContext)

  return context
}
