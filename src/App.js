import "./App.css";
import Header from "./components/header/Header";
import styled from "styled-components";
import Content from "./components/Content";

import Final from "./components/final/Final";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

function App() {
  const status = useSelector((state) => state.cards.status);

  return (
    <div className="App">
      <Container>
        <Header />
        <Content />
      </Container>
      {status && <Final status={status} />}
    </div>
  );
}

export default App;