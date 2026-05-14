'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Plus, MoreHorizontal, Upload, X, Image as ImageIcon, ChevronLeft, ChevronRight, Filter, Eye, Edit, Trash2 } from 'lucide-react';
import { TourFormModal } from './TourFormModal';

const MOCK_TOURS = [
  { 
    id: 'TRV-SP01', 
    name: 'Khám phá Sapa Mùa Lúa Chín 3N2Đ', 
    destination: 'Sapa, Lào Cai', 
    price: 3500000, 
    booked: 12, 
    capacity: 20, 
    status: 'Còn chỗ', 
    date: '15/10/2023', 
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    id: 'TRV-DN05', 
    name: 'Nghỉ Dưỡng Resort 5 Sao Đà Nẵng - Hội An', 
    destination: 'Đà Nẵng', 
    price: 8900000, 
    booked: 20, 
    capacity: 20, 
    status: 'Hết chỗ', 
    date: '22/10/2023', 
    image: 'https://images.unsplash.com/photo-1555432384-3b2d1e5e013a?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    id: 'TRV-PQ02', 
    name: 'Tour Đảo Ngọc Phú Quốc Lặn Ngắm San Hô', 
    destination: 'Phú Quốc', 
    price: 5200000, 
    booked: 5, 
    capacity: 15, 
    status: 'Còn chỗ', 
    date: '05/11/2023', 
    image: 'https://images.unsplash.com/photo-1537956961113-53721387d853?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    id: 'TRV-HL09', 
    name: 'Du Thuyền 5 Sao Vịnh Hạ Long 2N1Đ', 
    destination: 'Quảng Ninh', 
    price: 4800000, 
    booked: 18, 
    capacity: 30, 
    status: 'Còn chỗ', 
    date: '12/11/2023', 
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=200' 
  },
];

export default function ToursPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<any>(null);

  const handleAddTour = () => {
    setSelectedTour(null);
    setIsModalOpen(true);
  };

  const handleEditTour = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Danh sách Tour</h1>
        <p className="text-gray-500 dark:text-gray-400">Quản lý và cập nhật thông tin các chuyến đi</p>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4 dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm tour theo tên, mã..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500 transition-all"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 transition-all">
            <option value="">Điểm đến</option>
            <option value="sapa">Sapa</option>
            <option value="danang">Đà Nẵng</option>
            <option value="phuquoc">Phú Quốc</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 transition-all">
            <option value="">Mức giá</option>
            <option value="<5">Dưới 5 triệu</option>
            <option value="5-10">5 - 10 triệu</option>
            <option value=">10">Trên 10 triệu</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 transition-all">
            <option value="">Trạng thái</option>
            <option value="available">Còn chỗ</option>
            <option value="full">Hết chỗ</option>
          </select>
        </div>
        <button 
          onClick={handleAddTour}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Thêm tour
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-800/30">
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Hình ảnh</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Tên tour</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Điểm đến</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
                    Giá
                    <Filter className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Số chỗ</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Trạng thái</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
                    Ngày khởi hành
                    <Filter className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right dark:text-gray-400">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {MOCK_TOURS.map((tour) => (
                <tr key={tour.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="relative w-12 h-12">
                      <Image src={tour.image} alt={tour.name} fill className="rounded-lg object-cover shadow-sm dark:opacity-80" />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Link href={`/admin/tours/${tour.id}`} className="font-semibold text-gray-900 line-clamp-2 max-w-[200px] hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-blue-400" title={tour.name}>
                      {tour.name}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1 dark:text-gray-500">#{tour.id}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{tour.destination}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {tour.price.toLocaleString('vi-VN')} đ
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <span className={tour.booked >= tour.capacity ? 'text-red-600 font-medium' : 'text-gray-900 font-medium dark:text-gray-200'}>
                        {tour.booked}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">/{tour.capacity}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      tour.status === 'Còn chỗ' 
                        ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30'
                        : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30'
                    }`}>
                      {tour.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{tour.date}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/admin/tours/${tour.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                        title="Xem chi tiết"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => handleEditTour(tour)}
                        className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all dark:hover:text-amber-400 dark:hover:bg-amber-900/20"
                        title="Chỉnh sửa"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => {
                          if(confirm('Bạn có chắc chắn muốn xóa tour này?')) {
                            alert('Đã xóa tour ' + tour.id);
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all dark:hover:text-red-400 dark:hover:bg-red-900/20"
                        title="Xóa"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="py-4 px-6 border-t border-gray-100 flex items-center justify-between dark:border-gray-800 transition-colors">
          <p className="text-sm text-gray-500 dark:text-gray-500">Hiển thị 1 đến 4 của 32 tour</p>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-600/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 text-sm font-medium dark:text-gray-400 dark:hover:bg-gray-800 transition-all">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 text-sm font-medium dark:text-gray-400 dark:hover:bg-gray-800 transition-all">3</button>
            <span className="px-2 text-gray-400 dark:text-gray-600">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 text-sm font-medium dark:text-gray-400 dark:hover:bg-gray-800 transition-all">8</button>
            <button className="p-1 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <TourFormModal 
          tour={selectedTour} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTour(null);
          }} 
        />
      )}
    </div>
  );
}
