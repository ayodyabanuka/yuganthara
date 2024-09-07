"use client"
import { useEffect, useState } from "react";
import { addDoc, collection, DocumentData, DocumentReference, getDocs } from "firebase/firestore";
import SeatArrangement from "../components/seat-arrangements";
import { seatLayout } from "@/utils/seats";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
       subsets: ["latin"],
});


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
       const [isLoading, setIsLoading] = useState(true);
       const [success, setSuccess] = useState(false);

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

       const handleOrderSubmission = async (docRef: DocumentReference<DocumentData, DocumentData>) => {
              try {
                     const response = await fetch('/api/reservation', {
                            method: 'POST',
                            headers: {
                                   'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                   userEmail: email, // Replace with the user's email
                                   phone,
                                   selectedSeats,
                                   name,
                                   seatsCount: selectedSeats.length,
                                   link: docRef.id,

                            })
                     });
                     if (response.ok) {
                            console.log('Email sent successfully');
                     } else {
                            console.error('Failed to send email');
                     }

              } catch (error) {
                     console.error('Error submitting order:', error);
              }
       };

       const handleSubmit = async (e: React.FormEvent) => {
              e.preventDefault();
              setIsSubmitting(true);

              if (selectedSeats.length >= 5) {
                     alert('Only 4 seats can be book for one time');
                     setIsSubmitting(false);
                     return;
              }

              if (selectedSeats.length <= 0) {
                     alert('Select your seats before submit');
                     setIsSubmitting(false);
                     return;
              }

              try {
                     const docRef = await addDoc(collection(db, "bookings"), {
                            name,
                            email,
                            phone,
                            seats: selectedSeats,
                            bookedAt: new Date(),
                            status: "pending"
                     });
                     await handleOrderSubmission(docRef);
                     setSuccess(true);



              } catch (error) {
                     console.error("Error booking seats: ", error);
                     alert("Failed to book seats. Please try again.");
              } finally {
                     setIsSubmitting(false);
              }
       };

       return (
              <div className="relative">
                     <form onSubmit={handleSubmit} className="p-6 text-white max-w-screen-xl mx-auto">
                            <h2 className="text-xl font-bold mb-4">Book Your Seats</h2>

                            <div className="mb-4">
                                   <div className="block text-gray-200">Name</div>
                                   <input
                                          type="text"
                                          className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          required
                                   />
                            </div>

                            <div className="mb-4">
                                   <div className="block text-gray-200">Email</div>
                                   <input
                                          type="email"
                                          className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          required
                                   />
                            </div>
                            <div className="mb-4">
                                   <div className="block text-gray-200">Phone</div>
                                   <input
                                          type="phone"
                                          className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                          value={phone}
                                          onChange={(e) => setPhone(e.target.value)}
                                          required
                                   />
                            </div>

                            <div className="block text-gray-200 text-2xl py-2 w-full rounded-b-3xl text-center bg-zinc-600 mt-20 mb-5 lg:my-32">Stage this way</div>

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
                     {success && <div className={`fixed flex justify-center items-center top-0 left-0 w-full h-full backdrop-blur-sm bg-[#171717]/80 ${inter.className}`}>
                            <div className="bg-[#171717] mx-4 px-8 py-10 md:p-20 md:py-20 rounded-lg text-white flex flex-col gap-3 border text-center border-zinc-600 ">
                                   <div className="text-4xl font-bold text-yellow-600">Seat{selectedSeats.length > 1 ? "s" : ""} reservation Successfully</div>

                                   <div className="text-xl">Check your email for further instructions</div>
                                   <div className="text-white/60">Payment instructions will be sent to your email</div>

                                   <Link className="py-2 px-4 mt-5 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500" href={"/"}>Back to home</Link>
                            </div>
                     </div>}


              </div>
       );
};

export default BookingForm;
