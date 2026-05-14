'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Settings, 
  Wrench, 
  Calendar, 
  MapPin, 
  Users, 
  Bus, 
  Fuel, 
  ShieldCheck, 
  Activity,
  Wifi,
  Wind,
  Tv,
  Coffee,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Search,
  ChevronDown,
  Filter,
  MoreHorizontal,
  ChevronRight,
  Clock,
  History,
  FileText,
  DollarSign,
  User as UserIcon,
  Zap
} from 'lucide-react';

import { VehicleFormModal } from '../../VehicleFormModal';

export default function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: vehicleId } = React.use(params);
  const [activeTab, setActiveTab] = useState('Thông tin chung');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock data for the vehicle
  const vehicle = {
    id: vehicleId,
    name: 'Limousine Dcar XPlus',
    sub: 'Hạng thương gia',
    plate: '29B-123.45',
    capacity: '09 Chỗ',
    status: 'Sẵn sàng',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    specs: {
      make: 'Ford',
      model: 'Transit Dcar',
      year: '2023',
      fuel: 'Diesel',
      odometer: '12,500 KM',
      color: 'Đen Sapphire'
    },
    amenities: [
      { name: 'WiFi Tốc độ cao', icon: Wifi },
      { name: 'Điều hòa 2 chiều', icon: Wind },
      { name: 'Màn hình LCD 21"', icon: Tv },
      { name: 'Tủ lạnh mini', icon: Coffee },
      { name: 'Định vị GPS', icon: Navigation },
      { name: 'Cổng sạc USB', icon: Activity }
    ],
    usage: {
      totalTours: 48,
      totalDistance: '8,420 KM',
      fuelConsumption: '9.5L/100KM'
    }
  };

  const operationalHistory = [
    { id: 'TR-001', tour: 'Hành trình di sản Miền Trung', route: 'Đà Nẵng - Huế - Hội An', driver: 'Nguyễn Văn A', date: '12/10/2023 - 16/10/2023', status: 'Hoàn tất' },
    { id: 'TR-002', tour: 'Khám phá Sapa Mùa Lúa Chín', route: 'Hà Nội - Sapa - Fansipan', driver: 'Trần Văn Hải', date: '20/10/2023 - 23/10/2023', status: 'Sắp tới' },
    { id: 'TR-003', tour: 'Ninh Bình - Tràng An Bái Đính', route: 'Hà Nội - Ninh Bình', driver: 'Lê Văn C', date: '15/10/2023', status: 'Đang đi tour' },
  ];

  const serviceHistory = [
    { type: 'Thay dầu & Lọc gió', date: '10/09/2023', cost: '2,500,000₫', shop: 'Ford Thăng Long', status: 'Hoàn tất' },
    { type: 'Kiểm tra lốp & Phanh', date: '15/07/2023', cost: '1,200,000₫', shop: 'Michelin Service Center', status: 'Hoàn tất' },
    { type: 'Bảo dưỡng định kỳ 10,000 KM', date: '01/05/2023', cost: '4,800,000₫', shop: 'Ford Thăng Long', status: 'Hoàn tất' },
  ];

  const documents = [
    { name: 'Đăng ký xe', code: '0123456789', expiry: '31/12/2028', status: 'Hợp lệ' },
    { name: 'Bảo hiểm dân sự', code: 'BH-556677', expiry: '15/11/2023', status: 'Sắp hết hạn' },
    { name: 'Phí bảo trì đường bộ', code: 'FE-889900', expiry: '01/01/2024', status: 'Hợp lệ' },
    { name: 'Giấy phép kinh doanh vận tải', code: 'GP-2023-A', expiry: '20/10/2025', status: 'Hợp lệ' },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6]/30 dark:bg-gray-950 pb-20 animate-in fade-in duration-500 transition-colors">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800 transition-colors">
        <div className="flex items-center gap-4">
          <Link href="/admin/guides-vehicles" className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-900 dark:text-white">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight transition-colors">Chi tiết Phương tiện</h1>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest dark:bg-blue-900/20 dark:text-blue-400">
              {vehicleId}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsEditModalOpen(true)}
            className="flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-gray-100 rounded-full text-sm font-black text-gray-700 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm active:scale-95 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
          >
            <Settings className="w-4 h-4" />
            Cấu hình
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40 active:scale-95">
            <Wrench className="w-4 h-4" />
            Lịch bảo trì
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-8 space-y-8">
        {/* Vehicle Hero Card */}
        <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 relative h-[400px] lg:h-auto">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="col-span-12 lg:col-span-5 p-12 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${
                    vehicle.status === 'Sẵn sàng' ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 
                    vehicle.status === 'Đang đi tour' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                  }`}>
                    {vehicle.status}
                  </span>
                  <span className="px-4 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-black rounded-full tracking-widest uppercase dark:bg-gray-800 dark:text-gray-500">
                    {vehicle.sub}
                  </span>
                </div>
                <h2 className="text-5xl font-black text-gray-900 tracking-tighter leading-tight dark:text-white transition-colors">
                  {vehicle.name}
                </h2>
                <p className="text-3xl font-black text-blue-600 tracking-wider dark:text-blue-400 transition-colors">
                  {vehicle.plate}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 dark:text-gray-500">Sức chứa</p>
                  <p className="text-lg font-black text-gray-900 flex items-center gap-2 dark:text-white">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    {vehicle.capacity}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 dark:text-gray-500">Nhiên liệu</p>
                  <p className="text-lg font-black text-gray-900 flex items-center gap-2 dark:text-white">
                    <Fuel className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    {vehicle.specs.fuel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Tab Nav */}
            <div className="flex gap-8 border-b border-gray-200 dark:border-gray-800 transition-colors">
              {['Thông tin chung', 'Lịch trình vận hành', 'Bảo trì & Sửa chữa', 'Tài liệu'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-black transition-all relative ${
                    activeTab === tab ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Areas */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeTab === 'Thông tin chung' && (
                <div className="space-y-8">
                  {/* Technical Specs */}
                  <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                    <h3 className="text-2xl font-black text-[#1e3a8a] tracking-tight mb-8 dark:text-blue-400 transition-colors">Thông số kỹ thuật</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                      {[
                        { label: 'Hãng xe', value: vehicle.specs.make },
                        { label: 'Dòng xe', value: vehicle.specs.model },
                        { label: 'Năm sản xuất', value: vehicle.specs.year },
                        { label: 'Màu sắc', value: vehicle.specs.color },
                        { label: 'Quãng đường đã đi', value: vehicle.specs.odometer },
                        { label: 'Tiêu chuẩn khí thải', value: 'Euro 5' },
                      ].map((spec, i) => (
                        <div key={i} className="space-y-1">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">{spec.label}</p>
                          <p className="text-sm font-black text-gray-900 dark:text-white transition-colors">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                    <h3 className="text-2xl font-black text-[#1e3a8a] tracking-tight mb-8 dark:text-blue-400 transition-colors">Trang thiết bị & Tiện nghi</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {vehicle.amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-gray-50/50 border border-gray-50 rounded-2xl group hover:bg-blue-50 hover:border-blue-100 dark:bg-gray-800/50 dark:border-gray-800 dark:hover:bg-blue-900/20 dark:hover:border-blue-900/30 transition-all">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform dark:bg-gray-900 dark:text-blue-400 dark:shadow-none">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-black text-gray-700 dark:text-gray-300 transition-colors">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Lịch trình vận hành' && (
                <div className="space-y-8">
                  {/* Filter Bar */}
                  <div className="bg-white p-6 rounded-[32px] shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-wrap items-end gap-6 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 dark:text-gray-500">Thời gian</p>
                      <div className="relative min-w-[180px]">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                        <select className="w-full pl-11 pr-10 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-xs font-black text-gray-700 appearance-none cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 transition-colors">
                          <option>Tất cả thời gian</option>
                          <option>Tháng này</option>
                          <option>Tháng trước</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none dark:text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-[300px]">
                      <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors dark:text-gray-500 dark:group-focus-within:text-blue-400" />
                        <input
                          type="text"
                          placeholder="Tìm kiếm hành trình..."
                          className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:bg-gray-800/50 dark:placeholder-gray-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Operational Table */}
                  <div className="bg-white rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-50 bg-gray-50/30 dark:border-gray-800 dark:bg-gray-800/30 transition-colors">
                            <th className="py-6 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Mã Chuyến</th>
                            <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Tên Tour / Lộ trình</th>
                            <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Tài xế</th>
                            <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800 transition-colors">
                          {operationalHistory.map((trip) => (
                            <tr key={trip.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                              <td className="py-6 px-10 text-sm font-black text-blue-600 dark:text-blue-400">{trip.id}</td>
                              <td className="py-6 px-6">
                                <p className="text-sm font-black text-gray-900 dark:text-gray-100 transition-colors">{trip.tour}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 flex items-center gap-1 dark:text-gray-500 transition-colors">
                                  <MapPin className="w-3 h-3" /> {trip.route}
                                </p>
                              </td>
                              <td className="py-6 px-6">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors"><UserIcon className="w-4 h-4" /></div>
                                  <span className="text-xs font-black text-gray-700 dark:text-gray-300 transition-colors">{trip.driver}</span>
                                </div>
                              </td>
                              <td className="py-6 px-6">
                                <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                                  trip.status === 'Đang đi tour' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
                                  trip.status === 'Sắp tới' ? 'bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-600'
                                }`}>
                                  {trip.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Bảo trì & Sửa chữa' && (
                <div className="space-y-8">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex items-center justify-between dark:bg-blue-900/10 dark:border-blue-900/30 transition-colors">
                      <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 dark:text-blue-500">TỔNG CHI PHÍ BẢO TRÌ</p>
                        <h4 className="text-3xl font-black text-[#1e3a8a] dark:text-blue-300">15,400,000₫</h4>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm dark:bg-gray-900 dark:text-blue-400 dark:shadow-none transition-colors"><DollarSign className="w-8 h-8" /></div>
                    </div>
                    <div className="p-8 bg-teal-50 rounded-[32px] border border-teal-100 flex items-center justify-between dark:bg-teal-900/10 dark:border-teal-900/30 transition-colors">
                      <div>
                        <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1 dark:text-teal-500">LẦN BẢO DƯỠNG CUỐI</p>
                        <h4 className="text-3xl font-black text-teal-700 dark:text-teal-400">10/09/2023</h4>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm dark:bg-gray-900 dark:text-teal-400 dark:shadow-none transition-colors"><Wrench className="w-8 h-8" /></div>
                    </div>
                  </div>

                  {/* Service Table */}
                  <div className="bg-white rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-50 bg-gray-50/30 dark:border-gray-800 dark:bg-gray-800/30 transition-colors">
                            <th className="py-6 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Hạng mục bảo dưỡng</th>
                            <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Ngày thực hiện</th>
                            <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Chi phí</th>
                            <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right px-10 dark:text-gray-500">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800 transition-colors">
                          {serviceHistory.map((service, i) => (
                            <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                              <td className="py-6 px-10">
                                <p className="text-sm font-black text-gray-900 dark:text-gray-100 transition-colors">{service.type}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 dark:text-gray-500">{service.shop}</p>
                              </td>
                              <td className="py-6 px-6 text-xs font-bold text-gray-500 dark:text-gray-500">{service.date}</td>
                              <td className="py-6 px-6 text-sm font-black text-[#1e3a8a] dark:text-blue-400 transition-colors">{service.cost}</td>
                              <td className="py-6 px-10 text-right"><button className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-xl transition-colors"><MoreHorizontal className="w-5 h-5" /></button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Tài liệu' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {documents.map((doc, i) => (
                    <div key={i} className="bg-white rounded-[40px] p-8 shadow-xl shadow-blue-900/5 border border-gray-100 group hover:shadow-2xl hover:shadow-blue-900/10 transition-all dark:bg-gray-900 dark:border-gray-800 dark:shadow-none dark:hover:bg-gray-800/50">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform dark:bg-blue-900/20 dark:text-blue-400"><FileText className="w-7 h-7" /></div>
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          doc.status === 'Hợp lệ' ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                        }`}>{doc.status}</span>
                      </div>
                      <h4 className="text-xl font-black text-gray-900 tracking-tight dark:text-white transition-colors">{doc.name}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2 dark:text-gray-500">MÃ SỐ: {doc.code}</p>
                      
                      <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between dark:border-gray-800 transition-colors">
                        <div>
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-600">Hết hạn vào</p>
                          <p className="text-sm font-black text-gray-700 dark:text-gray-300 transition-colors">{doc.expiry}</p>
                        </div>
                        <button className="p-3 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                      </div>
                    </div>
                  ))}
                  <button className="col-span-full py-6 border-2 border-dashed border-gray-200 rounded-[40px] text-sm font-black text-gray-400 uppercase tracking-widest hover:border-blue-200 hover:text-blue-600 transition-all dark:border-gray-800 dark:text-gray-600 dark:hover:border-blue-500/50 dark:hover:text-blue-400">
                    <Zap className="w-4 h-4 inline mr-2" /> Thêm tài liệu mới
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Performance Stats */}
            <div className="bg-[#1e3a8a] rounded-[40px] p-10 shadow-2xl shadow-blue-900/20 text-white space-y-10 dark:bg-blue-900/40 dark:shadow-none transition-colors">
              <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                <Activity className="w-6 h-6 text-blue-400" />
                Hiệu suất vận hành
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-2 dark:text-blue-400/60">TỔNG QUÃNG ĐƯỜNG</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black tracking-tighter">{vehicle.usage.totalDistance}</span>
                    <span className="text-sm font-bold text-blue-300 mb-1 dark:text-blue-400/60">kể từ khi bàn giao</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 dark:border-white/5">
                  <div>
                    <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1 dark:text-blue-400/60">SỐ CHUYẾN ĐI</p>
                    <p className="text-xl font-black">{vehicle.usage.totalTours}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1 dark:text-blue-400/60">TIÊU HAO NL</p>
                    <p className="text-xl font-black">{vehicle.usage.fuelConsumption}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Countdown */}
            <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-8 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900 tracking-tight dark:text-white transition-colors">Lịch bảo dưỡng</h3>
                <span className="p-2 bg-red-50 text-red-600 rounded-xl dark:bg-red-900/20 dark:text-red-400 transition-colors">
                  <AlertCircle className="w-5 h-5" />
                </span>
              </div>
              <div className="p-6 bg-red-50/50 rounded-[32px] border border-red-100/50 space-y-4 dark:bg-red-900/10 dark:border-red-900/30 transition-colors">
                <p className="text-xs font-bold text-red-700 leading-relaxed dark:text-red-400/80">Sắp đến hạn bảo trì định kỳ 15,000 KM.</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-red-100 rounded-full overflow-hidden dark:bg-red-900/30">
                    <div className="h-full bg-red-600 w-[85%] dark:bg-red-500" />
                  </div>
                  <span className="text-[10px] font-black text-red-600 dark:text-red-400">85%</span>
                </div>
                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest dark:text-red-500/60">Còn lại: 2,500 KM</p>
              </div>
              <button className="w-full py-4 bg-gray-900 text-white rounded-full font-black text-sm hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:shadow-blue-600/20">
                Đặt lịch bảo trì ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <VehicleFormModal 
          vehicle={vehicle} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
    </div>
  );
}
