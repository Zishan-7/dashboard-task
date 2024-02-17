"use client";

import "react-clock/dist/Clock.css";
import React, { useEffect, useState } from "react";
import "./ClockContainer.css";
import Clock from "react-clock";
import moment from "moment";
import { useDrag, useDrop } from "react-dnd";

interface DropResult {
  name: string;
}

const ClockContainer = () => {
  const [value, setValue] = useState(new Date());
  const [isDragComplete, setisDragComplete] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Clock",
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        setisDragComplete(true);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Clock",
    drop: () => ({ name: "dropBox" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container h-full w-full rounded-md flex flex-col justify-center items-center">
      <div
        className={`w-[150px] h-[150px] rounded-full  transition-all duration-500 ${
          isDragging && "opacity-0"
        }`}
        data-testid={`Clock`}
        ref={drag}
      >
        {!isDragComplete && (
          <Clock
            size={150}
            minuteHandWidth={2}
            hourHandWidth={2}
            renderMinuteMarks={false}
            renderHourMarks={false}
            value={value}
          />
        )}
      </div>

      <span className="text-3xl mt-4">{moment(value).format("HH:mm")}</span>
      {isDragComplete ? (
        <Clock
          className={"mt-14"}
          size={150}
          minuteHandWidth={2}
          hourHandWidth={2}
          renderMinuteMarks={false}
          renderHourMarks={false}
          value={value}
        />
      ) : (
        <div
          ref={drop}
          data-testid="dropBox"
          className="mt-14 bg-opacity-5 border-opacity-35 bg-white w-[150px] h-[150px] border border-dashed rounded-full border-white"
        >
          {" "}
        </div>
      )}
    </div>
  );
};

export default ClockContainer;
