import styled from "styled-components";

export const Login = () => {
    return(
        <div>
            <div>로고자리</div>
            <form>
                <div>
                    <input type="text" placeholder="이메일을 입력해주세요!"/>
                    <p></p>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호를 입력해주세요!"/>
                    <p></p>
                </div>
                <div>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </form>
        </div>
    )
};
