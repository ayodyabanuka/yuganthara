"use client"
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import SeatArrangement from "../components/seat-arrangements";
import { seatLayout } from "@/utils/seats";
import { db } from "@/utils/firebase";

type Seat = {
       id: string;
       row: string;
       position: string;
       column: number;
       reservedForGuests: boolean;
};

const BookingForm = () => {
       const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
       const [isSubmitting, setIsSubmitting] = useState(false);
       const [bookedSeats, setBookedSeats] = useState<Seat[]>([]);
       const [isLoading, setIsLoading] = useState(true); // Loading state

       useEffect(() => {
              const fetchBookedSeats = async () => {
                     try {
                            const querySnapshot = await getDocs(collection(db, "bookings"));
                            const bookedSeatsList: Seat[] = [];

                            querySnapshot.forEach((doc) => {
                                   const data = doc.data();
                                   bookedSeatsList.push(...data.seats);
                            });

                            setBookedSeats(bookedSeatsList);
                     } catch (error) {
                            console.error("Error fetching booked seats: ", error);
                     } finally {
                            setIsLoading(false); // Set loading to false after data is fetched
                     }
              };

              fetchBookedSeats();
       }, [isSubmitting]);

       const handleSubmit = async (e: React.FormEvent) => {
              e.preventDefault();
              setIsSubmitting(true);

              try {
                     await addDoc(collection(db, "bookings"), {
                            name,
                            email,
                            phone,
                            seats: selectedSeats,
                            bookedAt: new Date(),
                     });

                     // Reset form and seat selection
                     setName("");
                     setEmail("");
                     setPhone("");
                     setSelectedSeats([]);
                     alert("Booking successful!");
              } catch (error) {
                     console.error("Error booking seats: ", error);
                     alert("Failed to book seats. Please try again.");
              } finally {
                     setIsSubmitting(false);
              }
       };

       return (
              <form onSubmit={handleSubmit} className="p-6 text-white max-w-screen-xl mx-auto">
                     <h2 className="text-xl font-bold mb-4">Book Your Seats</h2>

                     <div className="mb-4">
                            <label className="block text-gray-200">Name</label>
                            <input
                                   type="text"
                                   className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   required
                            />
                     </div>

                     <div className="mb-4">
                            <label className="block text-gray-200">Email</label>
                            <input
                                   type="email"
                                   className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                            />
                     </div>
                     <div className="mb-4">
                            <label className="block text-gray-200">Phone</label>
                            <input
                                   type="phone"
                                   className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                                   required
                            />
                     </div>

                     <label className="block text-gray-200 text-2xl py-2 w-full rounded-b-3xl text-center bg-zinc-600 mt-20 mb-5 lg:my-32">Stage this way</label>

                     <div className="mb-4 flex justify-center flex-col items-start xl:items-center py-10 overflow-hidden xl:overflow-visible overflow-x-auto">
                            {isLoading ? (
                                   // Loading spinner
                                   <div className="flex justify-center items-center h-32">
                                          <svg
                                                 className="animate-spin h-8 w-8 text-yellow-300"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                          >
                                                 <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                 ></circle>
                                                 <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                 ></path>
                                          </svg>
                                   </div>
                            ) : (
                                   <SeatArrangement
                                          layout={seatLayout}
                                          selectedSeats={selectedSeats}
                                          setSelectedSeats={setSelectedSeats}
                                          bookedSeats={bookedSeats}
                                   />
                            )}
                     </div>

                     <button
                            type="submit"
                            className="w-full py-2 px-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-500"
                            disabled={isSubmitting}
                     >
                            {isSubmitting ? "Booking..." : "Book Now"}
                     </button>
              </form>
       );
};

export default BookingForm;
