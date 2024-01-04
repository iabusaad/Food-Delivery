"use client";
import React from "react";
import Countdown from "react-countdown";
const endDate = new Date("2024-02-02");
const CountDown = () => {
  return (
    <Countdown
      className="text-5xl font-bold text-yellow-400 mb-5"
      date={endDate}
    />
  );
};

export default CountDown;
