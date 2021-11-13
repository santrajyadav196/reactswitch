import React, {useState} from "react";

import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import styled from "styled-components";

const StyledTimePicker = styled(TimePicker)`
  & .rc-time-picker-input {
    width: 60%;
    border: none;
    font-size: 14px;
    color: #1a1a1a;
  }
`;

const TimeFormat = () => {
  return (
    <>
      <StyledTimePicker
        placeholder='10:25 AM'
        showSecond={false}
        allowEmpty={false}
        use12Hours={true}
        format='hh:mm A'
      />
    </>
  );
};

export default TimeFormat;
