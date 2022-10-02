import styled from "styled-components";


export const MyScrap = ({status})=>{
    return(
        <div style={status!=="스크랩"?{display:"none"}:null}>
            내 스크랩
        </div>
    )
}