import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { setPage } from '~/store/modules/application/actions';

import { Container, InnerContainer, PageButton } from './styles';

function PageContainer() {
  const dispatch = useDispatch();
  const { page, length } = useSelector((state) => state.application);
  const { loading } = useSelector((state) => state.pokemon);

  return (
    <>
      {!loading && (
        <Container length={length}>
          <InnerContainer>
            <PageButton
              disabled={page === 1}
              onClick={() => dispatch(setPage(page - 1))}
            >
              <MdChevronLeft size={30} color="#e0b300" />
            </PageButton>
            <span>{page}</span>
            <PageButton
              disabled={length < 10}
              onClick={() => dispatch(setPage(page + 1))}
            >
              <MdChevronRight size={30} color="#e0b300" />
            </PageButton>
          </InnerContainer>
        </Container>
      )}
    </>
  );
}

export default PageContainer;
