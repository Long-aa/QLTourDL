'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  User,
  Edit3,
  Headset,
  Palmtree,
  Sparkles,
  Utensils,
  Sailboat,
  FileText,
  Megaphone,
  ArrowRight,
  Filter
} from 'lucide-react';
import { SupplierFormModal } from '../SupplierFormModal';

export default function SupplierDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock supplier data
  const supplier = {
    id: 'SUP-001',
    name: 'Amanoi Resort',
    type: 'Nghỉ dưỡng',
    contact: {
      representative: 'Nguyễn Văn A',
      role: 'Giám đốc Kinh doanh',
      email: 'amanoi.reservations@aman.com',
      phone: '+84 259 3770 777',
      website: 'aman.com/resorts/amanoi'
    },
    address: 'Vịnh Vĩnh Hy, Ninh Thuận, Việt Nam',
    status: 'Đang hoạt động',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000'
  };

  const contracts = [
    { 
      id: 1, 
      title: 'HĐ Phân phối 2024', 
      type: 'ĐANG HIỆU LỰC', 
      details: 'Hoa hồng: 15% | Thanh toán 30 ngày', 
      expiry: '31/12/2024',
      icon: FileText,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      typeBg: 'bg-blue-50',
      typeColor: 'text-blue-600'
    },
    { 
      id: 2, 
      title: 'Gói Mùa Hè Độc Quyền', 
      type: 'KHUYẾN MÃI', 
      details: 'Giảm 20% cho biệt thự biển', 
      expiry: '30/08/2024',
      icon: Megaphone,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      typeBg: 'bg-teal-50',
      typeColor: 'text-teal-600'
    }
  ];

  const bookings = [
    { id: '#B-8902', customer: 'Trần Văn B.', date: '15/10/2024', amount: '$4,500', status: 'Đã xác nhận' },
    { id: '#B-8875', customer: 'Lê Thị C.', date: '02/11/2024', amount: '$8,200', status: 'Chờ xử lý' },
    { id: '#B-8810', customer: 'Hoàng Văn D.', date: '20/09/2024', amount: '$3,100', status: 'Hoàn thành' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 pb-20 animate-in fade-in duration-500 transition-colors">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800 transition-colors">
        <div className="flex items-center gap-4">
          <Link href="/admin/suppliers" className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </Link>
          <h1 className="text-xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight transition-colors">Nhà cung cấp</h1>
        </div>
        <button 
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-gray-100 rounded-full text-sm font-black text-gray-700 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm active:scale-95 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
        >
          <Edit3 className="w-4 h-4" />
          Sửa đổi
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-8 space-y-8">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10 group">
          <img 
            src={supplier.heroImage} 
            alt={supplier.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-full tracking-widest uppercase shadow-lg shadow-blue-600/40">
                  {supplier.status}
                </span>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full tracking-widest uppercase border border-white/20">
                  {supplier.type}
                </span>
              </div>
              <h2 className="text-6xl font-black text-white tracking-tighter drop-shadow-2xl">
                {supplier.name}
              </h2>
              <div className="flex items-center gap-2 text-white/80 font-bold">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm">{supplier.address}</span>
              </div>
            </div>
            
            <button className="flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40 active:scale-95">
              <Headset className="w-5 h-5" />
              Liên hệ ngay
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-10 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
              <h3 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight">Thông tin liên hệ</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">NGƯỜI ĐẠI DIỆN</p>
                    <p className="text-lg font-black text-gray-900 dark:text-white transition-colors">{supplier.contact.representative}</p>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 transition-colors">{supplier.contact.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">ĐIỆN THOẠI</p>
                    <p className="text-lg font-black text-gray-900 dark:text-white transition-colors">{supplier.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">EMAIL</p>
                    <p className="text-sm font-black text-gray-900 break-all dark:text-white transition-colors">{supplier.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">WEBSITE</p>
                    <p className="text-sm font-black text-blue-600 hover:underline cursor-pointer dark:text-blue-400">{supplier.contact.website}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-8 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
              <h3 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight">Dịch vụ cung cấp</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Biệt thự cao cấp', icon: Palmtree },
                  { label: 'Spa & Wellness', icon: Sparkles },
                  { label: 'Ẩm thực tinh tế', icon: Utensils },
                  { label: 'Du thuyền', icon: Sailboat }
                ].map((tag, i) => (
                  <span key={i} className="flex items-center gap-2.5 px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-black text-gray-700 hover:bg-blue-50 hover:border-blue-100 transition-all cursor-default dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:border-blue-900/30">
                    <tag.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Contracts Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight transition-colors">Hợp đồng hiện tại</h3>
                <Link href="#" className="flex items-center gap-1 text-xs font-black text-blue-600 hover:underline uppercase tracking-widest dark:text-blue-400">
                  Xem tất cả <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contracts.map((contract) => (
                  <div key={contract.id} className="bg-white rounded-[32px] p-8 shadow-xl shadow-blue-900/5 border border-gray-100 group hover:border-blue-200 transition-all dark:bg-gray-900 dark:border-gray-800 dark:shadow-none dark:hover:border-blue-500/50">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 ${contract.iconBg} dark:bg-blue-900/20 rounded-[20px] flex items-center justify-center ${contract.iconColor} dark:text-blue-400 group-hover:scale-110 transition-transform`}>
                        <contract.icon className="w-7 h-7" />
                      </div>
                      <span className={`px-4 py-1.5 ${contract.typeBg} dark:bg-blue-900/30 ${contract.typeColor} dark:text-blue-400 text-[9px] font-black rounded-full tracking-widest uppercase transition-colors`}>
                        {contract.type}
                      </span>
                    </div>
                    <div className="space-y-1 mb-6">
                      <h4 className="text-xl font-black text-gray-900 dark:text-white transition-colors">{contract.title}</h4>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 transition-colors">{contract.details}</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-gray-800 transition-colors">
                      <div className="space-y-1">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">HẾT HẠN</p>
                        <p className="text-sm font-black text-gray-900 dark:text-white transition-colors">{contract.expiry}</p>
                      </div>
                      <button className="text-xs font-black text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-xl transition-all dark:text-blue-400 dark:hover:bg-blue-900/30">Chi tiết</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* History Table */}
            <div className="bg-white rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
              <div className="p-10 flex items-center justify-between">
                <h3 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight transition-colors">Lịch sử đặt phòng gần đây</h3>
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl text-gray-400 hover:text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-500 dark:hover:text-white">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-y border-gray-50 dark:border-gray-800 transition-colors">
                      <th className="py-5 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">MÃ ĐT</th>
                      <th className="py-5 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">KHÁCH HÀNG</th>
                      <th className="py-5 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">NGÀY ĐẾN</th>
                      <th className="py-5 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">TỔNG TIỀN</th>
                      <th className="py-5 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">TRẠNG THÁI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800 transition-colors">
                    {bookings.map((booking, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                        <td className="py-6 px-10 text-sm font-black text-blue-600 cursor-pointer hover:underline dark:text-blue-400">{booking.id}</td>
                        <td className="py-6 px-6 text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">{booking.customer}</td>
                        <td className="py-6 px-6 text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors">{booking.date}</td>
                        <td className="py-6 px-6 text-sm font-black text-gray-900 dark:text-white transition-colors">{booking.amount}</td>
                        <td className="py-6 px-10">
                          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-colors ${
                            booking.status === 'Đã xác nhận' ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
                            booking.status === 'Chờ xử lý' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' :
                            'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 text-center bg-gray-50/50 dark:bg-gray-800/30 transition-colors">
                <button className="text-xs font-black text-blue-600 hover:underline uppercase tracking-widest dark:text-blue-400">Tải thêm lịch sử</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <SupplierFormModal 
          supplier={supplier} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
    </div>
  );
}
