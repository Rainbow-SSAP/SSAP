import React from "react";
import styled from "styled-components";
import Category from "./Category/Category";
import Title from "./Title/Title";
import Description from "./Description/Description";
import PreferredGender from "./PreferredGender/PreferredGender";
import Fee from "./Fee/Fee";
import AuctionStatus from "./AuctionStatus/AuctionStatus";
import Terms from "./Terms/Terms";

export const ErrandRequest = () => {
  return (
    <ErrandRequestWarpper>
      <Category />
      <Title />
      <Description />
      <PreferredGender />
      <Fee />
      <AuctionStatus />
      <Terms />
    </ErrandRequestWarpper>
  );
};

const ErrandRequestWarpper = styled.div`
  display: grid;
  grid-gap: 20px;
`;
