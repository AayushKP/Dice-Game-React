import styled from "styled-components";
import Button from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;


