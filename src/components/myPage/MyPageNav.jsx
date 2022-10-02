import styled from "styled-components";

export const MyPageNav = ({ status, changeStatus }) => {
  return (
    <NavContainer>
      <MyNavStyle>
        <NavListBox>
          <NavLists
            style={status === "내 피드" ? { backgroundColor: "#ffdb5a" } : null}
            onClick={() => changeStatus("내 피드")}
          >
            내 피드
          </NavLists>
          <NavLists
            style={status === "스크랩" ? { backgroundColor: "#ffdb5a" } : null}
            onClick={() => changeStatus("스크랩")}
          >
            스크랩
          </NavLists>
          <NavLists
            style={status === "내 글" ? { backgroundColor: "#ffdb5a" } : null}
            onClick={() => changeStatus("내 글")}
          >
            내 글
          </NavLists>
        </NavListBox>
      </MyNavStyle>
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

  animation: MyNavFadein 0.8s;

  & {
    @keyframes MyNavFadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const MyNavStyle = styled.nav`
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
