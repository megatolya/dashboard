import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/appStyles";

const Panel = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.style.lightBackground};
  color: ${(props) => props.theme.style.primaryFontColor};
  font-size: 1.4rem;
  font-family: TechnaSans;
  padding: 1.5rem;
  border: ${(props) => props.theme.style.mainBorder};
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.style.panelBoxShadow};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1.5rem;
`;

const StakePanel = ({ state }) => {
  const [stakeAmount, setStakeAmount] = useState(0);

  return (
    <ThemeProvider theme={state.theme === "dark" ? darkTheme : lightTheme}>
      <Panel>
        <p>
          Stake
          <input
            type="number"
            onChange={(event) => setStakeAmount(event.value)}
            value={stakeAmount}
          />
          FARM
        </p>

        <ButtonContainer>
          <button className="button" disabled={!state.provider}>
            stake
          </button>
        </ButtonContainer>
      </Panel>
    </ThemeProvider>
  );
};

export default StakePanel;
