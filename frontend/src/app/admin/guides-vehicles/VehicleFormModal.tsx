'use client';

import React from 'react';
import { X, Save, Bus, Hash, Users, Palette, Calendar, Fuel, Activity, Wind, Power } from 'lucide-react';

interface VehicleFormModalProps {
  vehicle?: any;
  onClose: () => void;
}

export function VehicleFormModal({ vehicle, onClose }: VehicleFormModalProps) {
  const isEdit = !!vehicle;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e3a8a]/20 backdrop-blur-md animate-in fade-in duration-300 p-4">
      <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/20 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white">
        {/* Header */}
        <div className="px-10 py-8 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent">
          <div>
            <h2 className="text-3xl font-black text-[#1e3a8a] tracking-tight">
              {isEdit ? 'Cấu hình Phương tiện' : 'Thêm Phương tiện Mới'}
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
              Thông số kỹ thuật & Vận hành
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
        <div className="p-10 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Tên phương tiện</label>
              <div className="relative group">
                <Bus className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  defaultValue={vehicle?.name}
                  placeholder="Ví dụ: Limousine Dcar XPlus" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Biển số xe</label>
              <div className="relative group">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  defaultValue={vehicle?.plate}
                  placeholder="29B-123.45" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Sức chứa (Hành khách)</label>
              <div className="relative group">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  defaultValue={vehicle?.capacity}
                  placeholder="09 Chỗ" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Màu sắc</label>
              <div className="relative group">
                <Palette className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  defaultValue={vehicle?.specs?.color}
                  placeholder="Đen Sapphire" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Năm sản xuất</label>
              <div className="relative group">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  defaultValue={vehicle?.specs?.year}
                  placeholder="2023" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Loại nhiên liệu</label>
              <div className="relative group">
                <Fuel className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  defaultValue={vehicle?.specs?.fuel}
                  placeholder="Diesel / Xăng" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" 
                />
              </div>
            </div>

            <div className="col-span-2 p-6 bg-blue-50/50 rounded-[32px] border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                  <Power className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900 tracking-tight">Trạng thái sẵn sàng</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cho phép xếp lịch tour</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={vehicle?.status === 'Sẵn sàng'} />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
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
            Lưu cấu hình
          </button>
        </div>
      </div>
    </div>
  );
}
