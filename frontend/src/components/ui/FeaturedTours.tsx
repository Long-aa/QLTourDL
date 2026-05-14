'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const tours = [
  {
    id: 1,
    name: 'Khám phá Hạ Long Tráng Lệ',
    bookings: 124,
    price: '3.450.000₫',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    name: 'Nghỉ dưỡng Bali Cao Cấp',
    bookings: 98,
    price: '18.890.000₫',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop',
  },
];

export function FeaturedTours() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">Tour nổi bật</h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {tours.map((tour) => (
          <div key={tour.id} className="rounded-xl overflow-hidden border border-gray-100 group cursor-pointer dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="relative h-28">
              <img 
                src={tour.image} 
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-white/90 rounded-lg text-xs dark:bg-gray-900/90 dark:text-gray-100">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {tour.rating}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm text-gray-900 truncate dark:text-gray-200">{tour.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">{tour.bookings} Bookings</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{tour.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
