import React from "react";

const ReservationBtn = () => {
  return (
    <div className="reservation md:hidden flex justify-center items-center">
      <p
        className="text-white text-center font-bold"
        style={{
          fontSize: 16,

          lineHeight: 1.81,
        }}
      >
        حجز عيادة (20 دينار كويتي)
      </p>
    </div>
  );
};

export default ReservationBtn;
