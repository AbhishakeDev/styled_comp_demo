import styled from 'styled-components';
import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) =>
    page === 'first' ? 'flex-end' : 'space-between'};
`;

const Link = styled.a.attrs((props) => ({
  target: '_blank',
}))`
  color: violet;
  font-size: 1.5rem;
`;

function App() {
  return (
    <MainWrapper>
      <Button outline='none' primary>
        <span className='someClass'> My Primary Button</span>
      </Button>
      <Button>My Button</Button>
      <PaginationWrapper page='second'>
        <Button>page 1</Button>
        <Button>page 2</Button>
      </PaginationWrapper>
      <Link href='https://www.google.com'>One Link</Link>
      <Link href='https://www.google.com'>Second Link</Link>
    </MainWrapper>
  );
}

export default App;
