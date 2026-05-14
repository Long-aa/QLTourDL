'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, 
  Edit, 
  Lock, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Info, 
  History, 
  MessageSquare,
  ShieldCheck,
  Briefcase,
  Star
} from 'lucide-react';
import { CustomerFormModal } from '../CustomerFormModal';

export default function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = useState('info');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock customer data
  const customer = {
    id: 'CUST-001',
    name: 'Nguyễn Văn A',
    email: 'nguyen.vana@example.com',
    phone: '+84 987 654 321',
    gender: 'Nam',
    birthday: '15/08/1985',
    address: '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh, Việt Nam',
    type: 'Doanh nghiệp',
    assignee: 'Trần Thị B',
    internalNote: 'Khách hàng khó tính, ưu tiên phòng view biển tầng cao. Thường xuyên book tour resort 5 sao.',
    isVip: true,
    status: 'Đang hoạt động',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
  };

  const bookingHistory = [
    { id: 'BK-001', tourName: 'Khám phá Sapa Mùa Lúa Chín 3N2Đ', date: '10/09/2023', amount: 7000000, passengers: 2, status: 'Hoàn thành' },
    { id: 'BK-045', tourName: 'Nghỉ Dưỡng Resort 5 Sao Đà Nẵng', date: '22/10/2023', amount: 17800000, passengers: 2, status: 'Sắp diễn ra' },
    { id: 'BK-089', tourName: 'Tour Đảo Ngọc Phú Quốc Lặn Ngắm San Hô', date: '05/11/2023', amount: 5200000, passengers: 1, status: 'Chờ thanh toán' },
    { id: 'BK-012', tourName: 'Du Thuyền 5 Sao Vịnh Hạ Long 2N1Đ', date: '15/08/2023', amount: 9600000, passengers: 2, status: 'Hoàn thành' },
    { id: 'BK-005', tourName: 'Hành trình di sản Miền Trung 4N3Đ', date: '12/07/2023', amount: 4500000, passengers: 1, status: 'Đã hủy' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold">
        <Link href="/admin/customers" className="text-gray-400 hover:text-blue-600 transition-colors">Khách hàng</Link>
        <ChevronRight className="w-3 h-3 text-gray-300" />
        <span className="text-gray-900">Chi tiết khách hàng</span>
      </nav>

      {/* Hero Header Card */}
      <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl">
                <Image src={customer.avatar} alt={customer.name} fill className="object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
            </div>
            
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">{customer.name}</h1>
                {customer.isVip && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-400 text-[10px] font-black text-white uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/20">
                    <Star className="w-3 h-3 fill-current" /> VIP
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 text-gray-500 font-bold">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{customer.email}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{customer.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:border-blue-100 hover:text-blue-600 transition-all font-black text-sm shadow-sm"
            >
              <Edit className="w-4 h-4" />
              Chỉnh sửa
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-all font-black text-sm">
              <Lock className="w-4 h-4" />
              Khóa tài khoản
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center border-b border-gray-100">
        {[
          { id: 'info', label: 'Thông tin', icon: Info },
          { id: 'history', label: 'Lịch sử', icon: History },
          { id: 'chat', label: 'Khiếu nại / Chat', icon: MessageSquare, badge: true }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-10 py-5 text-sm font-black transition-all relative ${
              activeTab === tab.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            {tab.badge && <div className="w-2 h-2 bg-red-500 rounded-full absolute top-4 right-8"></div>}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"></div>}
          </button>
        ))}
      </div>

      {/* Main Content Sections */}
      {activeTab === 'info' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Personal Details */}
          <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/40 border border-gray-100 space-y-8">
            <div className="flex items-center gap-3 text-blue-600">
              <User className="w-5 h-5" />
              <h3 className="text-lg font-black tracking-tight">Chi tiết cá nhân</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">HỌ TÊN</p>
                <p className="text-lg font-black text-gray-900">{customer.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">GIỚI TÍNH</p>
                <p className="text-lg font-black text-gray-900">{customer.gender}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">NGÀY SINH</p>
                <p className="text-lg font-black text-gray-900">{customer.birthday}</p>
              </div>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/40 border border-gray-100 space-y-8">
            <div className="flex items-center gap-3 text-blue-600">
              <MapPin className="w-5 h-5" />
              <h3 className="text-lg font-black tracking-tight">Liên hệ & Địa chỉ</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">EMAIL CHÍNH</p>
                <p className="text-lg font-black text-gray-900">{customer.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">SỐ ĐIỆN THOẠI</p>
                <p className="text-lg font-black text-gray-900">{customer.phone}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ĐỊA CHỈ</p>
                <p className="text-sm font-bold text-gray-900 leading-relaxed">{customer.address}</p>
              </div>
            </div>
          </div>

          {/* Internal Management */}
          <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/40 border border-gray-100 space-y-8">
            <div className="flex items-center gap-3 text-blue-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg font-black tracking-tight">Quản lý nội bộ</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">LOẠI KHÁCH HÀNG</p>
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black">{customer.type}</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">NGƯỜI PHỤ TRÁCH</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">TB</div>
                  <p className="text-lg font-black text-gray-900">{customer.assignee}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">GHI CHÚ NỘI BỘ</p>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-xs font-bold text-gray-500 leading-relaxed italic">"{customer.internalNote}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-white rounded-[40px] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="p-10 border-b border-gray-50">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Lịch sử đặt Tour</h3>
            <p className="text-gray-400 font-bold text-sm mt-1">Danh sách các chuyến đi khách hàng đã tham gia hoặc đang đặt</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="py-5 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest">Thông tin Tour</th>
                  <th className="py-5 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ngày đặt</th>
                  <th className="py-5 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Số khách</th>
                  <th className="py-5 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Tổng tiền</th>
                  <th className="py-5 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {bookingHistory.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-6 px-10">
                      <p className="font-black text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">{booking.tourName}</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">#{booking.id}</p>
                    </td>
                    <td className="py-6 px-6 font-bold text-gray-600 text-sm">{booking.date}</td>
                    <td className="py-6 px-6 font-black text-gray-900">{booking.passengers}</td>
                    <td className="py-6 px-6 font-black text-blue-600">{booking.amount.toLocaleString('vi-VN')}₫</td>
                    <td className="py-6 px-10">
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        booking.status === 'Hoàn thành' ? 'bg-green-50 text-green-600' :
                        booking.status === 'Sắp diễn ra' ? 'bg-blue-50 text-blue-600' :
                        booking.status === 'Chờ thanh toán' ? 'bg-amber-50 text-amber-600' :
                        'bg-red-50 text-red-600'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-gray-50/50 text-center">
            <button className="text-sm font-black text-gray-400 hover:text-blue-600 transition-all uppercase tracking-widest">Tải thêm lịch sử</button>
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        <div className="bg-white rounded-[40px] p-20 shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
            <MessageSquare className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-black text-gray-900">Không có khiếu nại nào</h3>
          <p className="text-gray-400 font-bold max-w-sm">Hiện tại khách hàng chưa có bất kỳ khiếu nại hay yêu cầu hỗ trợ nào qua hệ thống chat.</p>
        </div>
      )}

      {isEditModalOpen && (
        <CustomerFormModal 
          customer={customer} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
    </div>
  );
}
