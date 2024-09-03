"use client";
import React from "react";
import clsx from "clsx";

type Seat = {
       id: string;
       row: string;
       position: string;
       column: number;
       reservedForGuests: boolean;
};

type SeatArrangementProps = {
       layout: Seat[][];
       selectedSeats: Seat[];
       setSelectedSeats: (seats: Seat[]) => void;
       bookedSeats: Seat[];
};

const SeatArrangement: React.FC<SeatArrangementProps> = ({
       layout,
       selectedSeats,
       setSelectedSeats,
       bookedSeats,
}) => {
       const toggleSeatSelection = (seat: Seat, e: React.FormEvent) => {
              e.preventDefault();

              if (seat.reservedForGuests) {
                     alert("This seat is reserved for guests.");
                     return;
              }

              if (selectedSeats.some(s => s.id === seat.id)) {
                     setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
              } else {
                     setSelectedSeats([...selectedSeats, seat]);
              }
       };

       const renderSeat = (seat: Seat) => (
              <button
                     key={seat.id}
                     onClick={(e) => toggleSeatSelection(seat, e)}
                     className={clsx(
                            "w-8 h-8 rounded text-white",
                            selectedSeats.some(s => s.id === seat.id)
                                   ? "bg-green-500"
                                   : bookedSeats.some(s => s.id === seat.id)
                                          ? "bg-red-500 cursor-not-allowed"
                                          : seat.reservedForGuests
                                                 ? "bg-yellow-900 text-black cursor-not-allowed"
                                                 : "border-zinc-500 border"
                     )}
                     disabled={bookedSeats.some(s => s.id === seat.id)}
              >
                     {seat.id}
              </button>
       );

       return (
              <div className="space-y-4">
                     {layout.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex lg:max-w-screen-xl lg:px-24 lg:mx-auto justify-between text-sm space-x-2">
                                   <div className="hidden lg:flex space-x-2">
                                          {row.filter(seat => seat.position === 'left').map(renderSeat)}
                                   </div>
                                   <div className="flex lg:hidden space-x-1 text-xs">
                                          {row.filter(seat => seat.position === 'left').map(renderSeat)}
                                   </div>
                                   <div className="hidden lg:flex space-x-2">
                                          {row.filter(seat => seat.position === 'right').map(renderSeat)}
                                   </div>
                                   <div className="flex lg:hidden space-x-1 text-xs">
                                          {row.filter(seat => seat.position === 'right').map(renderSeat)}
                                   </div>
                            </div>
                     ))}
              </div>
       );
};

export default SeatArrangement;
