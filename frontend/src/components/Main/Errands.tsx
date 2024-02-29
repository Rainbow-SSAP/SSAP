import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getErrands } from "../../apis/errand";
import { useRecoilState } from "recoil";
import { userLocationState } from "../../recoil/atoms/LocationState";
import { ErrandsData } from "../../types/errand";
import { ErrandItem } from "../ErrandList/ErrandItem";
import Skeleton from "../@common/Skeleton/Skeleton";

function Errands() {
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  const { data, isLoading, error } = useQuery<ErrandsData>(
    "errands",
    () => getErrands(userLocation),
    {
      enabled: !!userLocation, // userLocation 값이 있을 때만 쿼리를 활성화
    },
  );

  console.log("Query data:", data); // 데이터 로깅
  console.log("Is loading:", isLoading); // 로딩 상태 로깅
  console.log("Error:", error); // 에러 로깅

  if (data == null || isLoading) {
    return (
      <ErrandsWrapper>
        {[...new Array(10)].map((_, index) => (
          <ErrandItem.Skeleton key={index} />
        ))}
      </ErrandsWrapper>
    );
  }
  if (error) return <div></div>;

  return (
    <ErrandsWrapper>
      <h3>🌈 우리 동네 심부름</h3>
      <ErrandItemsWrapper>
        {data.content.map((item) => {
          return (
            <ErrandItem
              key={item.taskId}
              taskId={item.taskId}
              fileData={item.fileData}
              district={item.district}
              title={item.title}
              fee={item.fee}
              startTime={item.startTime}
              auctionEndTime={item.auctionEndTime}
              isLiked={item.isLiked}
            />
          );
        })}
      </ErrandItemsWrapper>
    </ErrandsWrapper>
  );
}

const ErrandsWrapper = styled.section`
  width: 100%;
  margin: 40px 0 0;
  > h3 {
    font-size: 18px;
  }
`;
const ErrandItemsWrapper = styled.ul`
  li:last-child {
    border-bottom: none;
  }
`;

export default Errands;
