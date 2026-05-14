'use client';

import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Shield, 
  Lock, 
  Bell, 
  Globe, 
  Camera, 
  CheckCircle2, 
  LogOut,
  Settings,
  Activity,
  Key,
  Smartphone,
  Eye,
  EyeOff
} from 'lucide-react';

export default function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState('Thông tin cá nhân');
  const [showPassword, setShowPassword] = useState(false);

  const admin = {
    name: 'Phạm Minh Hoàng',
    role: 'Quản trị viên cấp cao',
    email: 'hoang.pm@luxevoyage.com',
    phone: '+84 988 777 666',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    joinDate: '10/01/2020',
    location: 'Hà Nội, Việt Nam'
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] animate-in fade-in duration-700 pb-20">
      {/* Header / Hero */}
      <div className="relative h-64 bg-gradient-to-r from-[#1e3a8a] to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-8 h-full flex items-end pb-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-40 h-40 rounded-[40px] border-8 border-white/20 overflow-hidden shadow-2xl">
                <img src={admin.avatar} alt={admin.name} className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-2 right-2 p-3 bg-white text-blue-600 rounded-2xl shadow-xl hover:scale-110 transition-all active:scale-95">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <h1 className="text-4xl font-black text-white tracking-tight">{admin.name}</h1>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full border border-white/30 uppercase tracking-widest">
                  ROOT ADMIN
                </span>
              </div>
              <p className="text-blue-100 font-bold flex items-center gap-2 justify-center md:justify-start">
                <Shield className="w-4 h-4" />
                {admin.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 -mt-8 grid grid-cols-12 gap-8">
        {/* Sidebar Nav */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-2">
            {[
              { id: 'Thông tin cá nhân', icon: User },
              { id: 'Mật khẩu & Bảo mật', icon: Lock },
              { id: 'Thông báo', icon: Bell },
              { id: 'Tùy chọn hệ thống', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.id}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="w-5 h-5" />
                Đăng xuất tài khoản
              </button>
            </div>
          </div>

          <div className="mt-8 bg-blue-50/50 rounded-[40px] p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-5 h-5 text-blue-600" />
              <p className="text-xs font-black text-blue-900 uppercase tracking-widest">Trạng thái tài khoản</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-blue-700/60">Xác thực:</span>
                <span className="font-black text-green-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Đã xác minh
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-blue-700/60">Gia nhập:</span>
                <span className="font-black text-blue-900">{admin.joinDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 min-h-[600px]">
            {activeTab === 'Thông tin cá nhân' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-2 gap-8">
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">HỌ VÀ TÊN</label>
                    <input 
                      type="text" 
                      defaultValue={admin.name}
                      className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900" 
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">EMAIL CÔNG VIỆC</label>
                    <input 
                      type="email" 
                      defaultValue={admin.email}
                      className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900" 
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">SỐ ĐIỆN THOẠI</label>
                    <input 
                      type="text" 
                      defaultValue={admin.phone}
                      className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900" 
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">VỊ TRÍ</label>
                    <input 
                      type="text" 
                      defaultValue={admin.location}
                      className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900" 
                    />
                  </div>
                </div>
                <div className="pt-8 flex justify-end">
                  <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 active:scale-95 flex items-center gap-2">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Mật khẩu & Bảo mật' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-gray-900">
                    <Key className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-black">Thay đổi mật khẩu</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">MẬT KHẨU HIỆN TẠI</label>
                      <div className="relative">
                        <input 
                          type={showPassword ? 'text' : 'password'} 
                          className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900" 
                        />
                        <button 
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">MẬT KHẨU MỚI</label>
                      <input 
                        type="password" 
                        className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900" 
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-gray-100 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-900">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-black">Xác thực 2 lớp (2FA)</h3>
                        <p className="text-xs text-gray-400 font-bold">Tăng cường bảo mật cho tài khoản của bạn</p>
                      </div>
                    </div>
                    <button className="px-6 py-2.5 bg-green-50 text-green-600 rounded-xl text-xs font-black hover:bg-green-100 transition-all border border-green-200">
                      Đã kích hoạt
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Thông báo' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-gray-900">
                    <Bell className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-black">Cài đặt thông báo</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Email thông báo', desc: 'Nhận báo cáo ngày và cập nhật đơn hàng qua email.', active: true },
                      { title: 'Thông báo trình duyệt', desc: 'Hiển thị thông báo đẩy khi có sự kiện mới.', active: true },
                      { title: 'Tin nhắn SMS', desc: 'Nhận cảnh báo bảo mật và đơn hàng khẩn cấp qua điện thoại.', active: false },
                      { title: 'Ưu đãi & Khuyến mãi', desc: 'Cập nhật các chương trình mới từ hệ thống.', active: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-32 border border-transparent hover:border-blue-100 transition-all">
                        <div className="space-y-1">
                          <p className="text-sm font-black text-gray-900">{item.title}</p>
                          <p className="text-xs text-gray-400 font-bold">{item.desc}</p>
                        </div>
                        <button className={`w-12 h-6 rounded-full transition-all relative ${item.active ? 'bg-blue-600' : 'bg-gray-300'}`}>
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'left-7' : 'left-1'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Tùy chọn hệ thống' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-gray-900">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-black">Tùy chỉnh giao diện</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">GIAO DIỆN CHỦ ĐẠO</label>
                      <div className="flex gap-4">
                        <button className="flex-1 py-3 border-2 border-blue-600 bg-blue-50 text-blue-600 rounded-xl text-xs font-black">Sáng</button>
                        <button className="flex-1 py-3 border-2 border-gray-100 text-gray-400 rounded-xl text-xs font-black hover:border-gray-200 transition-all">Tối</button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">NGÔN NGỮ</label>
                      <select className="w-full px-6 py-3.5 bg-gray-100/50 border border-transparent rounded-2xl outline-none font-bold text-sm text-gray-900">
                        <option>Tiếng Việt (VN)</option>
                        <option>English (US)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-gray-100 space-y-6">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">MẬT ĐỘ HIỂN THỊ</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Rộng rãi', 'Tiêu chuẩn', 'Gọn gàng'].map((density, i) => (
                      <button key={i} className={`py-4 border-2 rounded-2xl text-xs font-black transition-all ${
                        i === 1 ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-50 text-gray-400 hover:border-gray-200'
                      }`}>
                        {density}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
