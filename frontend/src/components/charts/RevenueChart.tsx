'use client';

import { MoreHorizontal } from 'lucide-react';

export function RevenueChart() {
  // SVG path for smooth curve
  const pathData = "M 0 180 Q 50 170, 100 160 T 200 140 T 300 100 T 400 80 T 500 40 T 600 20 L 600 200 L 0 200 Z";
  const lineData = "M 0 180 Q 50 170, 100 160 T 200 140 T 300 100 T 400 80 T 500 40 T 600 20";
  
  const points = [
    { x: 0, y: 180 },
    { x: 100, y: 160 },
    { x: 200, y: 140 },
    { x: 300, y: 100 },
    { x: 400, y: 80 },
    { x: 500, y: 40 },
    { x: 600, y: 20 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">Xu hướng doanh thu</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="relative h-48">
        <svg viewBox="0 0 600 200" className="w-full h-full">
          <defs>
            <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Fill area */}
          <path d={pathData} fill="url(#revenueGradient)" />
          
          {/* Line */}
          <path 
            d={lineData} 
            fill="none" 
            stroke="#2563eb" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Points */}
          {points.map((point, index) => (
            <g key={index}>
              <circle 
                cx={point.x} 
                cy={point.y} 
                r="5" 
                fill="#2563eb"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          ))}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
          <span>$20K</span>
          <span>$15K</span>
          <span>$10K</span>
          <span>$5K</span>
          <span>$0</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute left-12 right-0 bottom-0 flex justify-between text-xs text-gray-400">
          <span>T1</span>
          <span>T2</span>
          <span>T3</span>
          <span>T4</span>
          <span>T5</span>
          <span>T6</span>
        </div>
      </div>
    </div>
  );
}
