import { useState, useEffect } from "react";

export const AiAvatar = () => {
  // Generate a random number to append to the URL
  const randomNumber = Math.random();

  // Randomly select between "male" and "female"
  const gender = Math.random() < 0.5 ? "male" : "female";

  const imageUrl = `https://xsgames.co/randomusers/avatar.php?g=${gender}&${randomNumber}`;

  // State to handle image loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoading(false);
  }, [imageUrl]);

  return (
    <>
      {loading ? (
        <div className="inline-block rounded-full w-12 h-12 ring-2 ring-white bg-white">
          <div className="bg-slate-200 rounded-full w-12 h-12"></div>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt="AI generated avatar"
          className="inline-block rounded-full w-12 h-12 ring-2 ring-white bg-white"
        />
      )}
    </>
  );
};
