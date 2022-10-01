import styled from "styled-components";

export const Community = ({status}) => {
  return (
    <div style={status!=="커뮤니티"?{display:"none"}:null}>
      <p>커뮤니티 탭</p>
      <p>갤러리 형식으로 처리 예정</p>
    </div>
  );
};
