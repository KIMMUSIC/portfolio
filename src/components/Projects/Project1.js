import React from "react";
import "./ProjectStyle.css";

function Project1({ children, ...restProps }) {
  return (
    <div>
      <div class="title">옷을 골라주는 인공지능</div>
      <div class="subtitle">학교 팀 프로젝트 2022.03 ~ 2022.06</div>
      <img class="clothes"  src="./images/misc/clothes.PNG" alt="HOMEPAGE" />
      <div>
      단순히 통계형 알고리즘을 사용하여 유저에게 추천해주기보다 개개인의 구매 기록 및 나이, 계절 등을 고려하여 개인화된 추천 시스템을 유저에게 제공한다면 유저의 구매를 부축이는 효과를 
      얻을 수 있을 뿐만 아니라 다른 온라인 쇼핑몰과의 차별점을 가질 수 있다고 생각했다.
사용자에게 이미지 & 스케치 이미지 검색 기능을 제공함으로써 사용자는 자신이 가지고 있는 사진으로 홈페이지 내의 비슷한 옷에 대해 검색할 수 있다. 
또한 사진이 없을 경우 스케치를 통해 옷을 검색 할 수 있다. 이는 사용자가 원하는 옷을 더 정확히 검색하는 기능을 제공 할 뿐만 아니라 쇼핑몰에 대한 흥미를 
유발함으로써 고객을 확보할 수 있는 효과를 지닌다. 
      </div>
    </div>
  );
}

export default Project1;
