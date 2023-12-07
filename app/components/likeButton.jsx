'use client'
import { useState } from "react";

export default function LikeButton(){
  const [liked, setLiked] = useState(false);
 const [likes, setLikes] = useState(100);

  const heart = liked ? "❤️" : "♡";
  const handleLike = () => {
    
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <button onClick={handleLike}>
      {likes} {heart}
    </button>
  );
};


