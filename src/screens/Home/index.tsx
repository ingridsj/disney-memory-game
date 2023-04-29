import React, { useState, useMemo, useEffect, useCallback, useContext } from 'react'
import { useGame } from 'hooks/game'

import Button from 'components/Button'
import Label from 'components/Label'
import ModalMenu from 'components/ModalMenu'
import ModalResult from 'components/ModalResult'
import MemoryCard from 'components/MemoryCard'

import * as S from './styles'
import { Princess, Villains } from 'utils/helpers'
import { ThemeContext } from 'styled-components/native'

import ToggleButton from 'components/ToggleButton'

type ImagesCards = {
  character: Princess | Villains
  selected: boolean
  visible: boolean
}

type HomeProps = {
  toggleTheme: () => void
}

const Home = ({ toggleTheme }: HomeProps) => {
  const {
    size,
    movements,
    setMovements,
    time,
    setTime,
    victories,
    setVictories,
    defeats,
    setDefeats
  } = useGame()
  const { colors, title } = useContext(ThemeContext)
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ openResult, setOpenResult ] = useState(false)
  const [ imagesCards, setImagesCards ] = useState<ImagesCards[]>([])
  const [ firstClick, setFirstClick ] = useState(false)
  const [ timerInterval, setTimerInterval ] = useState<NodeJS.Timer>()
  const [ toggleValue, setToggleValue ] = useState(false)

  const characterImages = useMemo(() => {
    return title === 'light'
      ? Object.values(Princess)
      : Object.values(Villains)
  }, [ title ])

  function shuffle (images: Array<Princess | Villains>) {
    const shuffleImages = images.sort(() => Math.random() - 0.5)
    return shuffleImages
  }

  function checkCards () {
    const newImagesCards = [ ...imagesCards ]
    const selectedCards = newImagesCards.filter((item) => item.selected)

    if (selectedCards.length === 2) {
      const [ characterOne, characterTwo ] = selectedCards

      setTimeout(() => {
        if (characterOne.character === characterTwo.character) {
          characterOne.selected = false
          characterTwo.selected = false
          characterOne.visible = true
          characterTwo.visible = true
        } else {
          characterOne.selected = false
          characterTwo.selected = false
        }
        setImagesCards(newImagesCards)

        const visibleCards = newImagesCards.filter((item) => item.visible)
        if (visibleCards.length === (size * 2)) {
          setVictories(victories + 1)
          setOpenResult(true)
          clearInterval(timerInterval)
        }
      }, 500)
    }
  }

  function handleCardPress (index: number) {
    const newImagesCards = [ ...imagesCards ]

    if (newImagesCards[index].selected || newImagesCards[index].visible) {
      return
    }

    setMovements(movements + 1)

    const selectedCards = newImagesCards.filter((item) => item.selected)
    if (selectedCards.length < 2) {
      if (!firstClick) {
        setFirstClick(true)
        updateTimer()
      }

      newImagesCards[index].selected = true
      setImagesCards(newImagesCards)
    }
  }

  function updateTimer () {
    let counter = 0
    const interval = setInterval(() => {
      const date = new Date(counter * 1000)
      const minutes = date.getUTCMinutes()
      const seconds = date.getSeconds()

      const timer = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
      setTime(timer)

      counter++
    }, 1000)

    setTimerInterval(interval)
  }

  function shuffleImages () {
    const shuffledPrincessImages = shuffle(characterImages)
    const selectedImages = shuffledPrincessImages.slice(0, size)
    const duplicatedImages = [ ...selectedImages, ...selectedImages ]
    const shuffleDuplicatedImages = shuffle(duplicatedImages)
    const imagesPrincess = shuffleDuplicatedImages.map(character => {
      return { character, selected: false, visible: false }
    })

    setImagesCards(imagesPrincess)
  }

  function handleRestart () {
    if (firstClick) {
      setDefeats(defeats + 1)
      setMovements(0)
      handleClearInterval()
    }
  }

  function handleNew () {
    setOpenMenu(true)
    setMovements(0)
  }

  const handleClearInterval = useCallback(() => {
    clearInterval(timerInterval)
    setTime('00:00')
    setFirstClick(false)
  }, [ timerInterval ])

  function handleChangeTheme () {
    setToggleValue(!toggleValue)
    toggleTheme()
    handleRestart()
  }

  useEffect(() => {
    checkCards()
  }, [ imagesCards ])

  useEffect(() => {
    shuffleImages()
  }, [ characterImages, size, defeats, title ])

  return (
    <S.Container>
       <S.Header>
        <Label text='Memória Encantada' color={colors.primary} fontSize={48} />
        <ToggleButton handleChangeTheme={handleChangeTheme} toggleValue={toggleValue}/>
        <S.HeaderButtons>
          <Button backgroundColor={colors.primary} onPress={() => { handleRestart() }}>
            <Label text='Reiniciar' color={colors.secondary} fontSize={18} />
          </Button>
          <Button backgroundColor={colors.secondary} onPress={() => { handleNew() }}>
            <Label text='Novo' color={colors.primary} fontSize={18} />
          </Button>
        </S.HeaderButtons>
      </S.Header>
      <ModalMenu
        open={openMenu}
        setOpen={setOpenMenu}
        handleClearInterval={handleClearInterval}
        shuffleImages={shuffleImages}
      />
      <ModalResult
        open={openResult}
        setOpen={setOpenResult}
        setOpenMenu={setOpenMenu}
        handleClearInterval={handleClearInterval}
        shuffleImages={shuffleImages}
      />
      <S.Board
        size={size}
        centerContent
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          alignContent: 'center'
        }}
      >
        <S.ContainerMemoryCard >
          {imagesCards.map((card, index) => (
            <MemoryCard
              key={card.character + index.toString()}
              character={card.character}
              selected={card.selected}
              visible={card.visible}
              onPress={() => { handleCardPress(index) }}
            />
          ))}
        </S.ContainerMemoryCard>
      </S.Board>
      <S.Footer>
        <Label color={colors.secondary} fontSize={18} text={'Tempo: ' + time}/>
        <Label color={colors.secondary} fontSize={18} text={'Movimentos: ' + movements.toString()} />
        <Label color={colors.secondary} fontSize={18} text={'Vitórias: ' + victories.toString()} />
        <Label color={colors.secondary} fontSize={18} text={'Derrotas: ' + defeats.toString()} />
      </S.Footer>
    </S.Container>
  )
}

export default Home
