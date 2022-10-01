import styled from "styled-components";

export const Introduction = ({status})=>{
    return(
        <div style={status!=="사이트소개"?{display:"none"}:null}>
            사이트 소개글 등을 만들예정
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDpCi0%2FbtrNvqSvDw8%2FGr29uQmRxlmUYM5XIY84b1%2Fimg.png" alt="메인포스터" />
        </div>
    )
}