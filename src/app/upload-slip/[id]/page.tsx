"use client"


import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/utils/firebase";
import { useParams, useRouter } from "next/navigation";


const UploadSlip = () => {
       const router = useRouter();
       const params = useParams();
       const id = params?.id; // Reservation ID from URL
       const [file, setFile] = useState<File | null>(null);
       const [isUploading, setIsUploading] = useState(false);
       const [progress, setProgress] = useState(0);


       const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                     setFile(e.target.files[0]);
              }
       };

       const handleSubmit = async (e: React.FormEvent) => {
              e.preventDefault();

              if (!file) {
                     alert("Please select a file to upload.");
                     return;
              }

              setIsUploading(true);

              // Create a reference in Firebase Storage for the payment slip
              const storageRef = ref(storage, `paymentSlips/${file.name}`);

              // Upload file
              const uploadTask = uploadBytesResumable(storageRef, file);

              // Monitor the upload progress
              uploadTask.on(
                     "state_changed",
                     (snapshot) => {
                            const progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            setProgress(progressPercentage);
                     },
                     (error) => {
                            console.error("Error uploading file:", error);
                            alert("Failed to upload payment slip. Please try again.");
                            setIsUploading(false);
                     },
                     async () => {
                            // On successful upload, get the download URL
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                            // Update the Firestore document with the download URL
                            const reservationRef = doc(db, "bookings", id as string);
                            await updateDoc(reservationRef, {
                                   paymentSlip: downloadURL, // Add payment slip URL to Firestore
                                   paymentUploadedAt: new Date(),
                            });

                            alert("Payment slip uploaded successfully!");
                            router.push("/success-page"); // Navigate to a success page or dashboard
                            setIsUploading(false);
                     }
              );
       };

       return (
              <form onSubmit={handleSubmit} className="p-6 text-white max-w-screen-xl mx-auto">
                     <h2 className="text-xl font-bold mb-4">Upload Payment Slip</h2>

                     <div className="mb-4">
                            <label className="block text-gray-200">Select Payment Slip</label>
                            <input
                                   type="file"
                                   className="w-full mt-1 p-2 border bg-zinc-900 rounded"
                                   accept="image/*,application/pdf"
                                   onChange={handleFileChange}
                                   required
                            />
                     </div>

                     {isUploading && (
                            <div className="mb-4">
                                   <label className="block text-gray-200">Uploading: {progress.toFixed(2)}%</label>
                                   <progress value={progress} max="100" className="w-full"></progress>
                            </div>
                     )}

                     <button
                            type="submit"
                            className="w-full py-2 px-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-500"
                            disabled={isUploading}
                     >
                            {isUploading ? "Uploading..." : "Upload"}
                     </button>
              </form>
       );
};

export default UploadSlip;
