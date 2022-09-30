import styled from "styled-components";

export const MainNav = () => {
  return (
    <NavContainer>
      <MainNavStyle>
        <NavListBox>
          <NavLists>분양받기</NavLists>
          <NavLists>커뮤니티</NavLists>
          <NavLists>기타</NavLists>
          <NavLists>사이트소개</NavLists>
        </NavListBox>
      </MainNavStyle>
    </NavContainer>
  );
};

const NavContainer = styled.section`
  display: flex;
  justify-content: center;

  & ul,
  li {
    list-style: none;
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

  border-radius:10px;
  background-color:#FFF88C;

  & li:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  & li:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

const NavLists = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 40px;
  font-size:1rem;
  font-weight:bold;
  background-color: transparent;
  transition : 0.4s;
  cursor: pointer;

  &:hover{
    background-color:#FFDB5A;
  }
`;
