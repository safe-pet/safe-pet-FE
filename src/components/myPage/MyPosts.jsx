import styled from "styled-components";

export const MyPosts = ({status})=>{
    return(
        <div style={status!=="내 글"?{display:"none"}:null}>
            내가쓴글목록
        </div>
    )
}