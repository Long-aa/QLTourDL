'use client';

import { MoreHorizontal } from 'lucide-react';

const categories = [
  { name: 'Văn hóa', percentage: 45, color: 'bg-blue-500' },
  { name: 'Khám phá', percentage: 35, color: 'bg-blue-400' },
  { name: 'Nghỉ dưỡng', percentage: 20, color: 'bg-blue-300' },
];

export function TourDistribution() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full dark:bg-gray-900 dark:border-gray-800 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">Phân bố loại tour</h3>
        <button className="p-1 hover:bg-gray-100 rounded dark:hover:bg-gray-800 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </button>
      </div>

      <div className="flex flex-col items-center mb-6">
        {/* Donut chart using SVG */}
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeDasharray={`${45 * 2.51} ${100 * 2.51}`}
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="20"
              strokeDasharray={`${35 * 2.51} ${100 * 2.51}`}
              strokeDashoffset={-45 * 2.51}
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="20"
              strokeDasharray={`${20 * 2.51} ${100 * 2.51}`}
              strokeDashoffset={-(45 + 35) * 2.51}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">324</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Total Tours</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{cat.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{cat.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
