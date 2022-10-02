import styled from "styled-components";
import { LayoutSmall } from "../layout/LayoutSmall";
import { Inputs } from "../useInForm/Inputs";
import { Buttons } from "../useInForm/Buttons";

export const AddPost = () => {
  return (
    <LayoutSmall>
      <AddPostContainer>
        <FirstImgWrap>
          <FirstImg
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="메인이미지"
          />
        </FirstImgWrap>
        <SubImgWrap>
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
          <SubImgs
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="서브이미지 최대9개"
          />
        </SubImgWrap>
        <FileInputWrap>
          <FileInputLabel htmlFor="fileInput">
            <Buttons size="middle" useType="main" content="사진 추가" />
          </FileInputLabel>
          <FileInput id="fileInput" type="file" />
        </FileInputWrap>
        <InputsWrap>
          <Inputs
            type="text"
            size="middle"
            useType="main"
            placeholder="제목"
            defaultValue="주소를 입력해주세요"
          />
          <Inputs type="text" size="large" useType="main" placeholder="제목" />
          <ContentArea
            id=""
            placeholder="내용을 입력해주세요"
            cols="30"
            rows="10"
          />
        </InputsWrap>
      </AddPostContainer>
    </LayoutSmall>
  );
};

const AddPostContainer = styled.form`
  margin: auto;
  margin-top: 130px;
  padding: 10px;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px #fff455;

  transition: 0.6s;
`;

const FirstImgWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
const FirstImg = styled.img`
  width: 250px;
  height: 250px;
`;

const SubImgWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const SubImgs = styled.img`
  width: 50px;
  height: 50px;
`;

const FileInputWrap = styled.div`
    margin-top:20px;
    display: flex;
    justify-content: center;

`
const FileInput = styled.input`
  display: none;
`;
const FileInputLabel = styled.label``;

const InputsWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  & input,
  textarea {
    margin-top: 30px;
  }
`;

const ContentArea = styled.textarea`
  height: 230px;
  font-size: 1rem;

  border-radius: 10px;
  border: 1px solid #fff88c;
  padding: 15px;
  padding-left: 20px;
  resize: none;

  &:focus {
    outline-color: #fff88c;
  }
`;
