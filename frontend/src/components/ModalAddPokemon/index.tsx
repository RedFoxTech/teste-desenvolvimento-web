import React from 'react'

import { useModal } from '../../context/ModalContext'
import * as S from './styles'
import FormAddPokemon from 'components/FormAddPokemon'
import { FiPlus } from 'react-icons/fi'

const ModalAddPokemon = () => {
  const { modalVisible } = useModal()
  return (
    <>
      <S.Wrapper isOpen={modalVisible}>
        <S.ModalWrapper>
          <S.TitleWrapper>
            <FiPlus size={24} />
            <h1> Adicionar novo pokemon</h1>
          </S.TitleWrapper>
          <FormAddPokemon />
        </S.ModalWrapper>
      </S.Wrapper>
    </>
  )
}

export default ModalAddPokemon
