import styled from "styled-components";
import { LayoutSmall } from "../layout/LayoutSmall";
import { Inputs } from "../useInForm/Inputs";
import { Buttons } from "../useInForm/Buttons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LocationModal } from "../loaction/LocationModal";

import imageCompression from "browser-image-compression";
import Swal from "sweetalert2";

export const AddPost = () => {
  const navigate = useNavigate();

  const [imgView, setImgView] = useState([]);
  const [sendImage, setSendImage] = useState([]);

  const checkImg = (e) => {
    if (imgView.length === 10) {
      e.preventDefault();
      Swal.fire({
        text: "이미 10장이네요ㅠ",
        icon: "warning",
      });
    }
  };

  const fileChange = (fileBlob) => {
    console.log(fileBlob);
    actionImgCompress(fileBlob[fileBlob.length - 1]);
    const reader = new FileReader();
    for (let i = 0; i < fileBlob.length; i++) {
      reader.readAsDataURL(fileBlob[i]);
      reader.onloadend = () => {
        let imageSubs = reader.result;
        setImgView([...imgView].concat(imageSubs));
      };
    }
  };

  const actionImgCompress = async (fileSrc) => {
    console.log("압축 시작");
    console.log("압축전", fileSrc);

    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(fileSrc, options);
      console.log("압축후", compressedFile);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        // 변환 완료!
        const base64data = reader.result;

        // formData 만드는 함수
        sendfileCompression(base64data);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const sendfileCompression = (listItem) => {
    console.log(listItem);
    const byteString = atob(listItem.split(",")[1]);

    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {
      type: "image/jpeg",
    });
    const file = new File([blob], "image.jpg");
    console.log(file);
    setSendImage([...sendImage].concat(file));
  };

  const initImage = (item, indexNum) => {
    setImgView(imgView.filter((element) => element !== item));
    setSendImage(
      [...sendImage]
        .map((item, index) => {
          if (index !== indexNum) {
            return item;
          }
        })
        .filter((element) => element)
    );
  };

  const [myLocation, setMyLocation] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  let sendData = {};

  const addposting = () => {
    console.log("작성완료~");
  };

  // 위치 모달
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <LayoutSmall>
      <AddPostContainer>
        <FirstImgWrap>
          <FirstImg
            src={
              imgView[0] !== undefined
                ? imgView[0]
                : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            }
            alt="메인이미지"
            onClick={() => initImage(imgView[0], 0)}
          />
        </FirstImgWrap>
        <SubImgWrap>
          {imgView[1] !== undefined
            ? imgView
                .filter((v, index) => index !== 0)
                .map((item, index) => (
                  <SubImgs
                    src={item}
                    alt="서브이미지 최대9개"
                    onClick={() => initImage(item, index)}
                  />
                ))
            : null}
        </SubImgWrap>
        <FileInputWrap>
          <FileInputLabel
            onClick={(e) => {
              checkImg(e);
            }}
            htmlFor="fileInput"
            accept="image/*"
          >
            사진추가
          </FileInputLabel>
          <FileInput
            id="fileInput"
            type="file"
            multiple="multiple"
            onChange={(e) => {
              fileChange(e.target.files);
            }}
          />
        </FileInputWrap>
        <ImgInfoMsg>
          최대 10장
          <br />
          (사진 클릭 시 삭제)
        </ImgInfoMsg>
        <InputsWrap>
          <Inputs
            onChange={(e) => {
              setMyLocation(e.target.value);
            }}
            type="text"
            size="middle"
            useType="main"
            placeholder="주소를 입력해주세요"
          />
          <LocatoinBtnWrap onClick={()=>{setShowModal(true)}}>
            <Buttons size="overSize" useType="main" content="위치정보확인" />
          </LocatoinBtnWrap>
            <p>혹시 원하는 주소가 지도로 나오지 않으면 도로명 주소로 검색해보세요!</p>
          <LocationModal showModal={showModal} closeModal={closeModal} locationValue={myLocation}/>
          <Inputs
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            size="large"
            useType="main"
            placeholder="제목"
          />
          <ContentArea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="내용을 입력해주세요"
            cols="30"
            rows="10"
          />
        </InputsWrap>
        <ButtonsWrap>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <Buttons size="overSize" useType="cancel" content="홈으로" />
          </div>
          <div onClick={addposting}>
            <Buttons size="overSize" useType="main" content="작성완료" />
          </div>
        </ButtonsWrap>
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

  animation: AddPostfadein 0.8s;

  & {
    @keyframes AddPostfadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const FileInput = styled.input`
  display: none;
`;
const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.6s;
  background-color: #fff455;

  &:hover {
    background-color: #ffbd13;
  }
`;

const ImgInfoMsg = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

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

const LocatoinBtnWrap = styled.div`
  width:max-content;
  margin-top:10px;
`

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

const ButtonsWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
