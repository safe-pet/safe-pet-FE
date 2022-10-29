import styled from "styled-components";
import { CommunityCard } from "./CommunityCard";


export const Community = ({ status }) => {
  return (
    <CommunityContainer style={status !== "커뮤니티" ? { display: "none" } : null}>
      <GridBox>
        <CommunityCard />
      </GridBox>
    </CommunityContainer>
  );
};


const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: communityFadein 1s;
  & {
    @keyframes communityFadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`

const GridBox = styled.div`
  /* display: grid; */
`