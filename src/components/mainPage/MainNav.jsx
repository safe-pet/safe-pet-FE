import styled from "styled-components";

export const MainNav = ({ status, changeStatus }) => {
  return (
    <NavContainer>
      <MainNavStyle>
        <NavListBox>
          <NavLists
            style={
              status === "분양받기" ? { backgroundColor: "#ffdb5a" } : null
            }
            onClick={() => changeStatus("분양받기")}
          >
            분양받기
          </NavLists>
          <NavLists
            style={
              status === "커뮤니티" ? { backgroundColor: "#ffdb5a" } : null
            }
            onClick={() => changeStatus("커뮤니티")}
          >
            커뮤니티
          </NavLists>
          <NavLists
            style={
              status === "집사 TIP!" ? { backgroundColor: "#ffdb5a" } : null
            }
            onClick={() => changeStatus("집사 TIP!")}
          >
            집사 TIP!
          </NavLists>
          <NavLists
            style={
              status === "사이트소개" ? { backgroundColor: "#ffdb5a" } : null
            }
            onClick={() => changeStatus("사이트소개")}
          >
            사이트소개
          </NavLists>
        </NavListBox>
      </MainNavStyle>
    </NavContainer>
  );
};

const NavContainer = styled.section`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  & ul,
  li {
    list-style: none;
  }

  animation: MainNavFadein 0.8s;

  & {
    @keyframes MainNavFadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

 
`;

const MainNavStyle = styled.nav`
  display: flex;
`;

const NavListBox = styled.ul`
  height: 40px;

  padding: 0;
  display: flex;
  align-items: center;

  border-radius: 10px;
  background-color: #fff88c;

  & li:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  & li:last-child {
    border-radius: 0px 10px 10px 0px;
  }

  &{
  @media all and (max-width:480px) {
    width:80vw;
    
  }
 }
`;

const NavLists = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #ffdb5a;
  }

`;
