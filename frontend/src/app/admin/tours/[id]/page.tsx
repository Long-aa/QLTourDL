'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Edit, 
  Trash2, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Clock, 
  Star,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Download
} from 'lucide-react';

export default function AdminTourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  // Mock data for a specific tour
  const tour = {
    id: 'TRV-SP01',
    name: 'Khám phá Sapa Mùa Lúa Chín 3N2Đ',
    destination: 'Sapa, Lào Cai',
    price: 3500000,
    totalBooked: 12,
    capacity: 20,
    status: 'Còn chỗ',
    startDate: '15/10/2023',
    endDate: '17/10/2023',
    createdAt: '01/09/2023',
    rating: 4.8,
    reviews: 12,
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=1200',
    revenue: 42000000,
    participants: [
      { id: 'BK-001', name: 'Nguyễn Văn A', email: 'vanna@gmail.com', phone: '0901234567', passengers: 2, total: 7000000, date: '10/09/2023', status: 'Đã thanh toán' },
      { id: 'BK-005', name: 'Trần Thị B', email: 'thib@gmail.com', phone: '0912345678', passengers: 1, total: 3500000, date: '12/09/2023', status: 'Chờ thanh toán' },
      { id: 'BK-012', name: 'Lê Văn C', email: 'vanc@gmail.com', phone: '0987654321', passengers: 4, total: 14000000, date: '15/09/2023', status: 'Đã thanh toán' },
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/tours" 
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider">#{tour.id}</span>
              <span className="text-xs font-bold text-gray-400">Tạo ngày: {tour.createdAt}</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 leading-tight">{tour.name}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm shadow-sm">
            <Edit className="w-4 h-4 text-amber-500" />
            Chỉnh sửa
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-bold text-sm">
            <Trash2 className="w-4 h-4" />
            Xóa Tour
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats & Participants */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Doanh thu</p>
                <p className="text-2xl font-black text-gray-900">{tour.revenue.toLocaleString('vi-VN')}₫</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Số chỗ đã đặt</p>
                <p className="text-2xl font-black text-gray-900">{tour.totalBooked} <span className="text-sm text-gray-400 font-bold">/ {tour.capacity}</span></p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Đánh giá</p>
                <p className="text-2xl font-black text-gray-900">{tour.rating} <span className="text-sm text-gray-400 font-bold">({tour.reviews})</span></p>
              </div>
            </div>
          </div>

          {/* Participants Table */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-lg font-black text-gray-900">Danh sách hành khách</h3>
              <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                <Download className="w-4 h-4" />
                Xuất danh sách
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Hành khách</th>
                    <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Chỗ</th>
                    <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Thanh toán</th>
                    <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Trạng thái</th>
                    <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tour.participants.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-8">
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-xs text-gray-400">{p.phone}</p>
                      </td>
                      <td className="py-5 px-6 text-center font-black text-gray-900">{p.passengers}</td>
                      <td className="py-5 px-6 font-bold text-gray-900">{p.total.toLocaleString('vi-VN')}₫</td>
                      <td className="py-5 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                          p.status === 'Đã thanh toán' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                          {p.status === 'Đã thanh toán' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {p.status}
                        </span>
                      </td>
                      <td className="py-5 px-8 text-right">
                        <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50/50 text-center">
              <button className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">Xem tất cả đặt chỗ</button>
            </div>
          </div>
        </div>

        {/* Right Column: Info Details */}
        <div className="space-y-8">
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-56">
              <Image src={tour.image} alt={tour.name} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  tour.status === 'Còn chỗ' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}>
                  {tour.status}
                </span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-lg font-black text-gray-900">Thông tin cơ bản</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Điểm đến</p>
                    <p className="text-sm font-black text-gray-900">{tour.destination}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Ngày khởi hành</p>
                    <p className="text-sm font-black text-gray-900">{tour.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Thời gian</p>
                    <p className="text-sm font-black text-gray-900">3 Ngày 2 Đêm</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Giá niêm yết</p>
                <p className="text-3xl font-black text-blue-600">{tour.price.toLocaleString('vi-VN')}₫</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[32px] p-8 text-white space-y-4 shadow-xl shadow-blue-600/20">
            <h4 className="font-black text-lg">Ghi chú vận hành</h4>
            <p className="text-blue-100 text-sm leading-relaxed">Tour hiện đã đạt 60% công suất. Cần đẩy mạnh marketing cho tuần cuối cùng để lấp đầy 8 chỗ còn lại.</p>
            <div className="pt-4 flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-600 bg-blue-100 flex items-center justify-center text-[10px] font-black text-blue-600">
                    M{i}
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-blue-100">+9 người đang xem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
