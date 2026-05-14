'use client';

import React from 'react';
import { X, User, Phone, Briefcase, Globe, Save, Award, Power, Mail, Star, MapPin } from 'lucide-react';

interface GuideFormModalProps {
  guide?: any;
  onClose: () => void;
}

export function GuideFormModal({ guide, onClose }: GuideFormModalProps) {
  const isEdit = !!guide;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e3a8a]/20 backdrop-blur-md animate-in fade-in duration-300 p-4">
      <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/20 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white">
        {/* Header */}
        <div className="px-10 py-8 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent">
          <div>
            <h2 className="text-3xl font-black text-[#1e3a8a] tracking-tight">
              {isEdit ? 'Cập nhật hồ sơ' : 'Thêm Hướng dẫn viên'}
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
              Quản lý thông tin nhân sự & chuyên môn
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all active:scale-90"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-10 space-y-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {/* Section: Personal Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
              <User className="w-4 h-4" /> Thông tin cơ bản
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Họ và tên</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={guide?.name}
                    placeholder="Nguyễn Văn A" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Số điện thoại</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={guide?.contact?.phone || guide?.phone}
                    placeholder="+84 90 123 4567" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email nội bộ</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="email" 
                    defaultValue={guide?.contact?.email || (guide?.name ? `${guide.name.toLowerCase().replace(/\s/g, '.')}@luxevoyage.com` : '')}
                    placeholder="name@luxevoyage.com" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Professional Info */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
              <Award className="w-4 h-4" /> Năng lực chuyên môn
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Kinh nghiệm công tác</label>
                <div className="relative group">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={guide?.experience || guide?.exp}
                    placeholder="Ví dụ: 5 năm chuyên tuyến..." 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Thị trường trọng điểm</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue="Châu Âu, Nhật Bản"
                    placeholder="Ví dụ: Đông Bắc Á, Nội địa..." 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Ngôn ngữ thông thạo</label>
                <div className="relative group">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={guide?.languages?.join(', ') || guide?.lang}
                    placeholder="Tiếng Anh, Tiếng Nhật, Tiếng Pháp..." 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Chứng chỉ & Bằng cấp</label>
                <div className="relative group">
                  <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={guide?.certificates}
                    placeholder="Thẻ HDV Quốc tế, Chứng chỉ Sơ cấp cứu..." 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Operational Status */}
          <div className="p-8 bg-blue-50/50 rounded-[32px] border border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                <Power className="w-7 h-7" />
              </div>
              <div>
                <p className="text-base font-black text-gray-900 tracking-tight">Kích hoạt trạng thái vận hành</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cho phép xếp lịch dẫn tour ngay lập tức</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={guide?.status === 'Sẵn sàng'} />
              <div className="w-16 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-4">
          <button 
            onClick={onClose} 
            className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 rounded-full font-black text-sm hover:border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
          >
            Hủy bỏ
          </button>
          <button className="px-10 py-4 bg-[#1e3a8a] text-white rounded-full font-black text-sm hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2 active:scale-95">
            <Save className="w-4 h-4" />
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
