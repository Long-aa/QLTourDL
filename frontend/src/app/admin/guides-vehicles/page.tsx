'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Edit, 
  Trash2, 
  Bus, 
  UserCheck, 
  Wrench, 
  CheckCircle2,
  Clock, 
  AlertCircle,
  Eye 
} from 'lucide-react';
import Link from 'next/link';
import { GuideFormModal } from './GuideFormModal';
import { VehicleFormModal } from './VehicleFormModal';

const MOCK_GUIDES = [
  { id: 'G-001', name: 'Nguyễn Văn A', phone: '090 123 4567', exp: '5 năm', lang: 'Tiếng Anh, Tiếng Nhật', status: 'Sẵn sàng', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=A' },
  { id: 'G-002', name: 'Trần Thị B', phone: '098 765 4321', exp: '3 năm', lang: 'Tiếng Anh, Tiếng Pháp', status: 'Đang bận', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=B' },
  { id: 'G-003', name: 'Lê Văn C', phone: '091 234 5678', exp: '8 năm', lang: 'Tiếng Anh, Tiếng Trung', status: 'Sẵn sàng', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=C' },
];

const MOCK_VEHICLES = [
  { id: 'V-001', name: 'Limousine Dcar XPlus', sub: 'Hạng thương gia', plate: '29B-123.45', capacity: '09 Chỗ', status: 'Sẵn sàng', icon: Bus, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'V-002', name: 'Mercedes Sprinter', sub: 'Tiêu chuẩn', plate: '29B-456.78', capacity: '16 Chỗ', status: 'Đang đi tour', icon: Bus, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { id: 'V-003', name: 'Toyota Camry 2.5Q', sub: 'Xe VIP cá nhân', plate: '30G-789.10', capacity: '04 Chỗ', status: 'Sẵn sàng', icon: Bus, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'V-004', name: 'Ford Transit', sub: 'Tiêu chuẩn', plate: '29B-987.65', capacity: '16 Chỗ', status: 'Đang bảo trì', icon: Bus, color: 'text-red-600', bg: 'bg-red-50' },
];

export default function GuidesVehiclesPage() {
  const [activeTab, setActiveTab] = useState<'guides' | 'vehicles'>('guides');
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Quản lý Hướng dẫn viên & Phương tiện</h1>
          <p className="text-gray-500 text-sm mt-1">Quản lý danh sách, trạng thái và lịch trình của đội ngũ.</p>
        </div>
        <button 
          onClick={() => activeTab === 'guides' ? setIsGuideModalOpen(true) : setIsVehicleModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          {activeTab === 'guides' ? 'Thêm Hướng dẫn viên' : 'Thêm phương tiện'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('guides')}
          className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'guides' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Hướng dẫn viên
        </button>
        <button 
          onClick={() => setActiveTab('vehicles')}
          className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'vehicles' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Phương tiện
        </button>
      </div>

      {activeTab === 'guides' ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-500">
          {[
            { label: 'TỔNG SỐ HDV', value: '24', change: '+3 trong tháng này', icon: UserCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'SẴN SÀNG PHỤC VỤ', value: '18', change: 'Đang ở trạng thái chờ', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'ĐANG ĐI TOUR', value: '6', change: 'Đang dẫn các đoàn khách', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-[11px] text-gray-500 mt-2 font-medium flex items-center gap-1">
                {stat.color === 'text-blue-600' && <span className="text-blue-600">↗</span>}
                {stat.color === 'text-green-600' && <span className="w-2 h-2 rounded-full bg-green-600 inline-block mr-1"></span>}
                {stat.color === 'text-amber-600' && <span className="w-2 h-2 rounded-full bg-amber-600 inline-block mr-1"></span>}
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-500">
          {[
            { label: 'TỔNG SỐ XE', value: '45', change: '+2 so với tháng trước', icon: Bus, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'SẴN SÀNG PHỤC VỤ', value: '38', change: 'Đang đậu tại bãi', icon: CheckCircle2, color: 'text-cyan-600', bg: 'bg-cyan-50' },
            { label: 'ĐANG BẢO TRÌ', value: '3', change: 'Dự kiến hoàn thành hôm nay', icon: Wrench, color: 'text-red-600', bg: 'bg-red-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-[11px] text-gray-500 mt-2 font-medium flex items-center gap-1">
                {stat.color === 'text-blue-600' && <span className="text-blue-600">↗</span>}
                {stat.color === 'text-cyan-600' && <span className="w-2 h-2 rounded-full bg-blue-600 inline-block mr-1"></span>}
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={activeTab === 'guides' ? "Tìm kiếm hướng dẫn viên..." : "Tìm biển số, loại xe..."}
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-all">
            <span className="text-gray-400">☰</span> Lọc
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                {activeTab === 'guides' ? (
                  <>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avatar</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tên</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Số điện thoại</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kinh nghiệm</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ngôn ngữ</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Trạng thái</th>
                  </>
                ) : (
                  <>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Loại xe</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Biển số</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sức chứa</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Trạng thái</th>
                  </>
                )}
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeTab === 'guides' ? MOCK_GUIDES.map((guide) => (
                <tr key={guide.id} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="py-4 px-6">
                    <img src={guide.avatar} alt={guide.name} className="w-10 h-10 rounded-full bg-gray-100 border border-gray-100" />
                  </td>
                  <td className="py-4 px-6">
                    <Link href={`/admin/guides-vehicles/guide/${guide.id}`} className="font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors">
                      {guide.name}
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600 font-medium">{guide.phone}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600 font-medium">{guide.exp}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-500 leading-relaxed">{guide.lang}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                      guide.status === 'Sẵn sàng' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${guide.status === 'Sẵn sàng' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                      {guide.status}
                    </span>
                  </td>
                   <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/admin/guides-vehicles/guide/${guide.id}`} className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50" title="Xem chi tiết">
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50" title="Chỉnh sửa">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => {
                          if(confirm('Bạn có chắc muốn xóa hướng dẫn viên này?')) {
                            alert('Đã xóa ' + guide.name);
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50" 
                        title="Xóa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : MOCK_VEHICLES.map((vehicle) => (
                <tr key={vehicle.id} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${vehicle.bg} ${vehicle.color} flex items-center justify-center border border-gray-100`}>
                        <vehicle.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <Link href={`/admin/guides-vehicles/vehicle/${vehicle.id}`} className="font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors">
                          {vehicle.name}
                        </Link>
                        <p className="text-[10px] text-gray-500 font-medium">{vehicle.sub}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-bold text-gray-900">{vehicle.plate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600 font-medium">{vehicle.capacity}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border ${
                        vehicle.status === 'Sẵn sàng' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                        vehicle.status === 'Đang đi tour' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' : 'bg-red-50 text-red-600 border-red-100'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          vehicle.status === 'Sẵn sàng' ? 'bg-blue-600' :
                          vehicle.status === 'Đang đi tour' ? 'bg-cyan-600' : 'bg-red-600'
                        }`}></span>
                        {vehicle.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/admin/guides-vehicles/vehicle/${vehicle.id}`} className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50" title="Xem chi tiết">
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50" title="Chỉnh sửa">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => {
                          if(confirm('Bạn có chắc muốn xóa phương tiện này?')) {
                            alert('Đã xóa ' + vehicle.name);
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50" 
                        title="Xóa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="py-5 px-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
          <p className="text-sm text-gray-500 font-medium">Hiển thị 1-3 của {activeTab === 'guides' ? '24' : '45'}</p>
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white text-xs font-bold transition-all border border-transparent hover:border-gray-100">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white text-xs font-bold transition-all border border-transparent hover:border-gray-100">3</button>
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isGuideModalOpen && <GuideFormModal onClose={() => setIsGuideModalOpen(false)} />}
      {isVehicleModalOpen && <VehicleFormModal onClose={() => setIsVehicleModalOpen(false)} />}
    </div>
  );
}
