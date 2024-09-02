import { useState } from "react";
import clsx from "clsx";

type Seat = {
       id: string;
       row: string;
       position: string;
       column: number;
       booked: boolean;
       reservedForGuests: boolean;
};

type SeatArrangementProps = {
       layout: Seat[][];
       selectedSeats: string[];
       setSelectedSeats: (seats: string[]) => void;
};

const SeatArrangement: React.FC<SeatArrangementProps> = ({
       layout,
       selectedSeats,
       setSelectedSeats,
}) => {
       const toggleSeatSelection = (seatId: string, reserved: boolean) => {
              if (reserved) {
                     alert("This seat is reserved for guests.");
                     return;
              }

              if (selectedSeats.includes(seatId)) {
                     setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
              } else {
                     setSelectedSeats([...selectedSeats, seatId]);
              }
       };

       return (
              <div className="space-y-4">
                     {layout.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex lg:max-w-screen-xl lg:px-24 lg:mx-auto justify-between text-sm space-x-8">
                                   <div className="hidden lg:flex space-x-2">
                                          {row.filter(seat => seat.position === 'left').map((seat) => (
                                                 <button
                                                        key={seat.id}
                                                        onClick={() => toggleSeatSelection(seat.id, seat.reservedForGuests)}
                                                        className={clsx(
                                                               "w-8 h-8 rounded text-white",
                                                               selectedSeats.includes(seat.id)
                                                                      ? "bg-green-500"
                                                                      : seat.booked
                                                                             ? "bg-red-500 cursor-not-allowed"
                                                                             : seat.reservedForGuests
                                                                                    ? "bg-yellow-900 text-black cursor-not-allowed"
                                                                                    : "border-zinc-500 border"
                                                        )}
                                                        disabled={seat.booked}
                                                 >
                                                        {seat.id}
                                                 </button>
                                          ))}
                                   </div>
                                   <div className="flex lg:hidden space-x-2 text-xs">
                                          {row.filter(seat => seat.position === 'left').map((seat) => (
                                                 <button
                                                        key={seat.id}
                                                        onClick={() => toggleSeatSelection(seat.id, seat.reservedForGuests)}
                                                        className={clsx(
                                                               "w-5 h-5 rounded text-white",
                                                               selectedSeats.includes(seat.id)
                                                                      ? "bg-green-500"
                                                                      : seat.booked
                                                                             ? "bg-red-500 cursor-not-allowed"
                                                                             : seat.reservedForGuests
                                                                                    ? "bg-yellow-900 text-black cursor-not-allowed"
                                                                                    : "bg-zinc-500 "
                                                        )}
                                                        disabled={seat.booked}
                                                 >
                                                        {seat.id}
                                                 </button>
                                          ))}
                                   </div>

                                   <div className="hidden lg:flex space-x-2">
                                          {row.filter(seat => seat.position === 'right').map((seat) => (
                                                 <button
                                                        key={seat.id}
                                                        onClick={() => toggleSeatSelection(seat.id, seat.reservedForGuests)}
                                                        className={clsx(
                                                               "w-8 h-8 rounded text-white",
                                                               selectedSeats.includes(seat.id)
                                                                      ? "bg-green-500"
                                                                      : seat.booked
                                                                             ? "bg-red-500 cursor-not-allowed"
                                                                             : seat.reservedForGuests
                                                                                    ? "bg-yellow-900 text-black cursor-not-allowed"
                                                                                    : "border-zinc-500 border"
                                                        )}
                                                        disabled={seat.booked}
                                                 >
                                                        {seat.id}
                                                 </button>
                                          ))}
                                   </div>
                                   <div className="flex lg:hidden space-x-2 text-xs">
                                          {row.filter(seat => seat.position === 'right').map((seat) => (
                                                 <button
                                                        key={seat.id}
                                                        onClick={() => toggleSeatSelection(seat.id, seat.reservedForGuests)}
                                                        className={clsx(
                                                               "w-5 h-5 rounded text-white",
                                                               selectedSeats.includes(seat.id)
                                                                      ? "bg-green-500"
                                                                      : seat.booked
                                                                             ? "bg-red-500 cursor-not-allowed"
                                                                             : seat.reservedForGuests
                                                                                    ? "bg-yellow-900 text-black cursor-not-allowed"
                                                                                    : "bg-zinc-500 "
                                                        )}
                                                        disabled={seat.booked}
                                                 >
                                                        {seat.id}
                                                 </button>
                                          ))}
                                   </div>
                            </div>
                     ))}
              </div>
       );
};

export default SeatArrangement;
