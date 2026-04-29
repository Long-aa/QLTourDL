'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Hotel, 
  Truck, 
  Utensils, 
  Star, 
  Edit, 
  Trash2, 
  Plus,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Users
} from 'lucide-react';

export default function SupplierDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  // Mock supplier data
  const supplier = {
    id: 'SUP-001',
    name: 'Amanoi Resort',
    type: 'Khách sạn',
    contact: {
      email: 'contact@amanoi.com',
      phone: '+84 259 3770 777',
      website: 'www.amanoi.com'
    },
    address: 'Vịnh Vĩnh Hy, Ninh Thuận, Việt Nam',
    status: 'Đang hoạt động',
    rating: 4.9,
    reviews: 85,
    totalTours: 12,
    totalBookings: 450,
    services: [
      { name: 'Phòng Pavilion hướng biển', price: '25,000,000₫', status: 'Sẵn sàng' },
      { name: 'Villa 3 phòng ngủ', price: '85,000,000₫', status: 'Hết phòng' },
      { name: 'Dịch vụ Spa trọn gói', price: '5,000,000₫', status: 'Sẵn sàng' },
    ]
  };

  const getIcon = () => {
    switch (supplier.type) {
      case 'Khách sạn': return Hotel;
      case 'Vận chuyển': return Truck;
      case 'Ẩm thực': return Utensils;
      default: return Globe;
    }
  };

  const Icon = getIcon();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/suppliers" 
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-blue-600 transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider">#{supplier.id}</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{supplier.type}</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 leading-tight">{supplier.name}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm shadow-sm">
            <Edit className="w-4 h-4 text-amber-500" />
            Sửa thông tin
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-bold text-sm">
            <Trash2 className="w-4 h-4" />
            Ngừng hợp tác
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Số Tour cung cấp</p>
                <p className="text-2xl font-black text-gray-900">{supplier.totalTours}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tổng lượt khách</p>
                <p className="text-2xl font-black text-gray-900">{supplier.totalBookings}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Đánh giá TB</p>
                <p className="text-2xl font-black text-gray-900">{supplier.rating} <span className="text-sm text-gray-400 font-bold">({supplier.reviews})</span></p>
              </div>
            </div>
          </div>

          {/* Service List */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-lg font-black text-gray-900">Danh sách dịch vụ cung cấp</h3>
              <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                <Plus className="w-4 h-4" />
                Thêm dịch vụ
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {supplier.services.map((service, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Giá niêm yết: {service.price}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    service.status === 'Sẵn sàng' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Contact Card */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center gap-3 text-blue-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg font-black tracking-tight">Thông tin liên hệ</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Email</p>
                  <p className="text-sm font-black text-gray-900">{supplier.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Số điện thoại</p>
                  <p className="text-sm font-black text-gray-900">{supplier.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Website</p>
                    <p className="text-sm font-black text-gray-900">{supplier.contact.website}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="flex items-start gap-4 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Địa chỉ trụ sở</p>
                  <p className="text-sm font-black text-gray-900 leading-relaxed">{supplier.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Note */}
          <div className="bg-blue-600 rounded-[32px] p-8 text-white space-y-4 shadow-xl shadow-blue-600/20">
            <h4 className="font-black text-lg">Hợp đồng & Đối tác</h4>
            <p className="text-blue-100 text-sm leading-relaxed">Đối tác chiến lược khu vực miền Trung. Ưu đãi chiết khấu 15% cho các booking trước 30 ngày khởi hành.</p>
            <div className="pt-4 border-t border-white/20">
              <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1">Ngày bắt đầu hợp tác</p>
              <p className="font-black text-white">12/05/2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
