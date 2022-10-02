import styled from "styled-components";

export const MyFeed = ({status})=>{
    return(
        <div style={status!=="내 피드"?{display:"none"}:null}>
            내 피드
        </div>
    )
}