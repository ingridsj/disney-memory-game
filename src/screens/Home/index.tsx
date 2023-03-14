import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGame } from 'hooks/game';

import Button from 'components/Button';
import Label from 'components/Label';
import ModalMenu from 'components/ModalMenu';
import ModalResult from 'components/ModalResult';
import MemoryCard from 'components/MemoryCard';

import * as S from './styles'
import { useTheme } from 'hooks/theme';
import { Text, TouchableOpacity } from 'react-native';
import { Princess, Villains } from 'utils/helpers';

type ImagesCards = {
  princess: Princess | Villains
  selected: boolean
  visible: boolean
}

const Home = () => {
  const {
    size, 
    movements, 
    setMovements, 
    time, setTime, 
    victories, 
    setVictories,
    defeats,
    setDefeats,
  } = useGame()
  const { theme, toggleTheme, themeState } = useTheme()
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ openResult, setOpenResult ] = useState(false)
  const [ imagesCards, setImagesCards ] = useState<ImagesCards[]>([])
  const [ firstClick, setFirstClick ] = useState(false)
  const [ timerInterval, setTimerInterval ] = useState<NodeJS.Timer>()

  const princessImages = useMemo(() => {
    return themeState === 'light'
      ? Object.values(Princess)
      : Object.values(Villains)
  }, [ themeState])
  
  function shuffle(images: (Princess | Villains)[]) {
    const shuffleImages = images.sort(() => Math.random() - 0.5)
    return shuffleImages
  }

  async function checkCards() {
		const newImagesCards = [...imagesCards]
		const selectedCards = newImagesCards.filter((item) => item.selected)

		if (selectedCards.length === 2) {
			const [princessOne, princessTwo] = selectedCards

			await new Promise(res => setTimeout(res, 500))

			if (princessOne.princess === princessTwo.princess) {
				princessOne.selected = false
				princessTwo.selected = false
				princessOne.visible = true
				princessTwo.visible = true
			} else {
				princessOne.selected = false
				princessTwo.selected = false
			}
			setImagesCards(newImagesCards)

			const visibleCards = newImagesCards.filter((item) => item.visible)
			if (visibleCards.length === (size! * 2)) {
        setVictories(victories + 1)
				setOpenResult(true)
        clearInterval(timerInterval)
			}
		}
	}

  function handleCardPress(index: number) {
    const newImagesCards = [...imagesCards]

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

  function updateTimer() {
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

  function shuffleImages() {
    const shuffledPrincessImages = shuffle(princessImages)
    const selectedImages = shuffledPrincessImages.slice(0, size)
    const duplicatedImages = [...selectedImages, ...selectedImages]
    const shuffleDuplicatedImages = shuffle(duplicatedImages)
    const imagesPrincess = shuffleDuplicatedImages.map(princess => {
      return { princess, selected: false, visible: false }
    })

    setImagesCards(imagesPrincess)
  }

  function handleRestart() {
    if (firstClick) {
      setDefeats(defeats + 1)
      setMovements(0)
      handleClearInterval()
    }
  }

  function handleNew() {
    setOpenMenu(true)
    setMovements(0)
  }

  const handleClearInterval = useCallback(() => {
    clearInterval(timerInterval)
    setTime('00:00')
    setFirstClick(false)
  }, [ timerInterval ])

  function handleChangeTheme() {
    toggleTheme()
    handleRestart()
  }

	useEffect(() => {
		checkCards()
	}, [ imagesCards ])

  useEffect(() => {
    shuffleImages()
  }, [ princessImages, size, defeats, themeState ])

  return (
    <GestureHandlerRootView style={{ 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      flex: 1, 
      paddingTop: 20,
      paddingBottom: 20,
      position: 'relative',
      backgroundColor: theme.colors.background,
      }}>
       <S.Header>
        <Label text='Memória'  color={theme.colors.pink}  fontSize={48} />
        <S.HeaderButtons>
          <TouchableOpacity onPress={() => handleChangeTheme()}>
            <Text>maça</Text>
          </TouchableOpacity>
          <Button backgroundColor={theme.colors.pink} onPress={() => handleRestart()}>
            <Label text='Reiniciar' color={theme.colors.purple} fontSize={18} />
          </Button>
          <Button backgroundColor={theme.colors.purple} onPress={() => handleNew()}>
            <Label text='Novo' color={theme.colors.pink} fontSize={18} />
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
        <S.ContainerMemoryCard >
          {!!size && imagesCards.map((card, index) => (
            <MemoryCard 
              key={index}
              princessName={card.princess} 
              selected={card.selected} 
              visible={card.visible}
              onPress={() => handleCardPress(index)}
            />
          ))}
        </S.ContainerMemoryCard>
        <S.Footer>
          <Label color={theme.colors.purple} fontSize={18} text={'Tempo: ' + time}/>
          <Label color={theme.colors.purple} fontSize={18} text={'Movimentos: ' + movements}  />
          <Label color={theme.colors.purple} fontSize={18} text={'Vitórias: ' + victories} />
          <Label color={theme.colors.purple} fontSize={18} text={'Derrotas: ' + defeats} />
      </S.Footer>
    </GestureHandlerRootView>
  )
}

export default Home;