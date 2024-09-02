"use client"
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import SeatArrangement from "../components/seat-arrangements";
import { seatLayout } from "@/utils/seats";
import { db } from "@/utils/firebase";


const BookingForm = () => {
       const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
       const [isSubmitting, setIsSubmitting] = useState(false);

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
                     <label className="block text-gray-200 text-2xl py-2 w-full rounded-b-3xl text-center bg-zinc-600 my-32">Stage this way</label>
                     <div className="mb-4 flex justify-center flex-col items-start md:items-center py-10 overflow-hidden overflow-x-auto">

                            <SeatArrangement
                                   layout={seatLayout}
                                   selectedSeats={selectedSeats}
                                   setSelectedSeats={setSelectedSeats}
                            />
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

export default BookingForm
