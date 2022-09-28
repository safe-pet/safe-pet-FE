import styled from "styled-components"

export const SignUp=()=>{
    return(
        <div>
            <div>로고자리</div>
            <p>피분양자 회원가입</p>
            <form>
                <div>
                    <input type="text" placeholder="가입할 Email을 입력해주세요!"/>
                    <button>이메일 인증하기</button>
                    <p>인증여부 메세지</p>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호를 입력해주세요!"/>
                    <p>비밀번호 유효성 메세지</p>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호 확인!"/>
                    <p>비밀번호 일치 여부 메세지</p>
                </div>
                <div>
                    <input type="text" placeholder="사업자번호를 입력해주세요!"/>
                    <button>사업자번호 인증</button>
                    <p>인증여부 메세지</p>
                </div>
                <div>
                    <button>가입하기</button>
                    <button>홈으로</button>
                </div>
            </form>
        </div>
    )
}