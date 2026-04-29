'use client';

import React, { useState } from 'react';
import { 
  Settings, 
  History, 
  Puzzle, 
  Save, 
  UploadCloud, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  Database, 
  Download, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'backup' | 'integration'>('general');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Cấu hình hệ thống</h1>
          <p className="text-gray-500 text-sm mt-1">Quản lý các thông số cốt lõi của nền tảng LuxeVoyage.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-600/20 active:scale-95">
          <Save className="w-4 h-4" />
          Lưu thay đổi
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-100">
        <button 
          onClick={() => setActiveTab('general')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'general' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          <Settings className="w-4 h-4" />
          Cấu hình chung
        </button>
        <button 
          onClick={() => setActiveTab('backup')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'backup' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          <History className="w-4 h-4" />
          Sao lưu & Nhật ký
        </button>
        <button 
          onClick={() => setActiveTab('integration')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'integration' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          <Puzzle className="w-4 h-4" />
          Tích hợp
        </button>
      </div>

      {/* Tab Content */}
      <div className="animate-in fade-in duration-500">
        {activeTab === 'general' && (
          <div className="space-y-6">
            {/* Branding Section */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Thông tin thương hiệu</h3>
                <p className="text-sm text-gray-500 mt-1">Logo và các thông tin liên hệ chính thức của doanh nghiệp.</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-12">
                {/* Logo Upload */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">LOGO HỆ THỐNG</label>
                  <div className="w-64 h-40 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center group hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer">
                    <div className="p-3 rounded-full bg-white shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-bold text-blue-600 mt-3">Nhấn để tải lên</p>
                    <p className="text-[10px] text-gray-400 mt-1">PNG, JPG, SVG (Tối đa 2MB)</p>
                  </div>
                </div>

                {/* Info Fields */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">TÊN HỆ THỐNG</label>
                    <input type="text" defaultValue="LuxeVoyage" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">EMAIL LIÊN HỆ</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" defaultValue="contact@luxevoyage.vn" className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">SỐ ĐIỆN THOẠI</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" defaultValue="+84 123 456 789" className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ĐỊA CHỈ TRỤ SỞ</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" defaultValue="Tầng 15, Tòa nhà Bitexco, Quận 1, TP.HCM" className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Region Section */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Khu vực & Ngôn ngữ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">MÚI GIỜ</label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium bg-white cursor-pointer">
                      <option>(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                      <option>(GMT+08:00) Singapore, Beijing</option>
                      <option>(GMT+00:00) London, UTC</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">NGÔN NGỮ MẶC ĐỊNH</label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium bg-white cursor-pointer">
                      <option>Tiếng Việt</option>
                      <option>English (US)</option>
                      <option>Français</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'backup' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Backup List */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Sao lưu hệ thống</h3>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">Quản lý và khôi phục các điểm sao lưu dữ liệu.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-xs font-bold shadow-md shadow-blue-600/20 active:scale-95">
                  <PlusIcon className="w-3.5 h-3.5" />
                  Tạo bản sao lưu mới
                </button>
              </div>
              <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-50 bg-gray-50/30">
                      <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tên file</th>
                      <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Ngày tạo</th>
                      <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Dung lượng</th>
                      <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { name: 'system_backup_v2.1.tar.gz', date: '24/10/2023 10:00', size: '1.2 GB' },
                      { name: 'db_dump_daily_2310.sql', date: '23/10/2023 00:00', size: '450 MB' },
                      { name: 'system_backup_v2.0.tar.gz', date: '15/10/2023 10:00', size: '1.1 GB' },
                    ].map((file, i) => (
                      <tr key={i} className="hover:bg-blue-50/20 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <Database className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-bold text-blue-600">{file.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center text-xs font-medium text-gray-600">{file.date}</td>
                        <td className="py-4 px-6 text-center text-xs font-bold text-gray-900">{file.size}</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Tải xuống"><Download className="w-4 h-4" /></button>
                            <button className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Khôi phục"><RotateCcw className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Logs List */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
              <div className="p-6 border-b border-gray-50">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <History className="w-5 h-5 text-blue-600" />
                  Nhật ký hoạt động
                </h3>
              </div>
              <div className="p-6 space-y-6 flex-1 overflow-auto">
                {[
                  { time: '10:05 Hôm nay', title: 'Cập nhật cấu hình email SMTP', user: 'Admin', status: 'success' },
                  { time: '09:30 Hôm nay', title: "Xóa người dùng 'test_user_01'", user: 'Admin', status: 'success' },
                  { time: '08:15 Hôm nay', title: 'Đăng nhập thất bại (Sai mật khẩu)', user: 'System (IP: 192.168.1.45)', status: 'fail' },
                  { time: '23:00 Hôm qua', title: 'Tạo bản sao lưu tự động (db_dump)', user: 'CronJob', status: 'success' },
                ].map((log, i) => (
                  <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-100 last:before:hidden">
                    <div className={`absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white ${log.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{log.time}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${log.status === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                        {log.status === 'success' ? 'Thành công' : 'Thất bại'}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mt-1">{log.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1"><UserIcon className="w-3 h-3" /> {log.user}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50/50 text-center border-t border-gray-50">
                <button className="text-xs font-bold text-blue-600 hover:underline">Xem tất cả nhật ký</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integration' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SMTP Config */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Cấu hình Email (SMTP)</h3>
                  <p className="text-xs text-gray-500 font-medium">Kết nối email để gửi thông báo tự động.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">SMTP HOST</label>
                    <input type="text" defaultValue="smtp.gmail.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">SMTP PORT</label>
                    <input type="text" defaultValue="587" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium text-center" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">USERNAME / EMAIL</label>
                  <input type="email" defaultValue="admin@system.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">PASSWORD / APP PASSWORD</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} defaultValue="••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-2 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Gửi email thử nghiệm
                </button>
              </div>
            </div>

            {/* Payment Gateway */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Cổng Thanh toán</h3>
                  <p className="text-xs text-gray-500 font-medium">Quản lý kết nối các cổng thanh toán trực tuyến.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">LỰA CHỌN CỔNG THANH TOÁN MẶC ĐỊNH</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['VNPay', 'MoMo', 'Stripe'].map((gateway) => (
                      <button key={gateway} className={`py-2.5 rounded-xl text-xs font-bold border-2 transition-all ${gateway === 'VNPay' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200'}`}>
                        {gateway}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-blue-100 bg-blue-50/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gray-900">Cấu hình VNPay</h4>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700 flex items-center gap-1 uppercase tracking-tight">
                      <div className="w-1 h-1 rounded-full bg-green-600"></div> Đang hoạt động
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500">VNPAY TMNCODE</label>
                      <input type="text" defaultValue="GH73KD92" className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium bg-white" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500">HASH SECRET</label>
                      <div className="relative">
                        <input type="password" defaultValue="A1B2C3D4E5F6G7H8I9J0K1L2M3N405P6" className="w-full pl-4 pr-10 py-2 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium bg-white" />
                        <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer pt-1">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-xs font-bold text-blue-900">Chế độ Sandbox (Thử nghiệm)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
