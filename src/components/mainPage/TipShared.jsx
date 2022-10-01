import styled from "@emotion/styled";

export const TipShared = ({ status }) => {
  return (
    <div style={status !== "집사 TIP!" ? { display: "none" } : null}>
      집사팁 - 애완동물 기르는 방법 등을 알려주는 탭으로 사용 예정
    </div>
  );
};
