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

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Danh sách Tour</h1>
        <p className="text-gray-500">Quản lý và cập nhật thông tin các chuyến đi</p>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm tour theo tên, mã..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px]">
            <option value="">Điểm đến</option>
            <option value="sapa">Sapa</option>
            <option value="danang">Đà Nẵng</option>
            <option value="phuquoc">Phú Quốc</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px]">
            <option value="">Mức giá</option>
            <option value="<5">Dưới 5 triệu</option>
            <option value="5-10">5 - 10 triệu</option>
            <option value=">10">Trên 10 triệu</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px]">
            <option value="">Trạng thái</option>
            <option value="available">Còn chỗ</option>
            <option value="full">Hết chỗ</option>
          </select>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Thêm tour
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Hình ảnh</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tên tour</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Điểm đến</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider flex-1">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                    Giá
                    <Filter className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Số chỗ</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                    Ngày khởi hành
                    <Filter className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_TOURS.map((tour) => (
                <tr key={tour.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="relative w-12 h-12">
                      <Image src={tour.image} alt={tour.name} fill className="rounded-lg object-cover shadow-sm" />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Link href={`/admin/tours/${tour.id}`} className="font-semibold text-gray-900 line-clamp-2 max-w-[200px] hover:text-blue-600 transition-colors" title={tour.name}>
                      {tour.name}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">#{tour.id}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{tour.destination}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-gray-900">
                      {tour.price.toLocaleString('vi-VN')} đ
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <span className={tour.booked >= tour.capacity ? 'text-red-600 font-medium' : 'text-gray-900 font-medium'}>
                        {tour.booked}
                      </span>
                      <span className="text-gray-500">/{tour.capacity}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      tour.status === 'Còn chỗ' 
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {tour.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{tour.date}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/admin/tours/${tour.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Xem chi tiết"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
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
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
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
        <div className="py-4 px-6 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">Hiển thị 1 đến 4 của 32 tour</p>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 text-sm font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 text-sm font-medium">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 text-sm font-medium">8</button>
            <button className="p-1 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && <TourFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
