import React from "react";

interface Review {
  author: string;
  avatar: string;
  rating: number;
  title: string;
  experienceDate: string;
  text: string;
  writtenDate: string;
  photos: string[];
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white space-y-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={review.avatar}
          alt={review.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-lg">{review.author}</p>
          <p className="text-sm text-gray-500">{review.experienceDate}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-green-600 text-xl">●</span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold">{review.title}</h3>

      {/* Text */}
      <p className="text-gray-700 leading-relaxed">{review.text}</p>

      {/* Photos */}
      {review.photos.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {review.photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="rounded-lg object-cover w-full h-32"
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <p className="text-sm text-gray-400">
        Written on {review.writtenDate}
      </p>
    </div>
  );
}
