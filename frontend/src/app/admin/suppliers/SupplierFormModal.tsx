'use client';

import React from 'react';
import { X, Building2, LayoutGrid, Mail, Phone, MapPin, Power, Check } from 'lucide-react';

interface SupplierFormModalProps {
  onClose: () => void;
  supplier?: any;
}

export function SupplierFormModal({ onClose, supplier }: SupplierFormModalProps) {
  const isEdit = !!supplier;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200 border border-white/20">
        {/* Header */}
        <div className="px-10 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#1e3a8a] tracking-tight">
            {isEdit ? 'Thông tin Nhà cung cấp' : 'Thêm Nhà Cung Cấp Mới'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-10 pb-10 space-y-6">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Tên thương hiệu */}
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Tên Thương Hiệu</label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    defaultValue={supplier?.name || ''}
                    placeholder="Nhập tên nhà cung cấp"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
              </div>

              {/* Loại dịch vụ */}
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Loại Dịch Vụ</label>
                <div className="relative group">
                  <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <select 
                    defaultValue={supplier?.type || ''}
                    className="w-full pl-11 pr-10 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900 appearance-none cursor-pointer"
                  >
                    <option value="">Chọn loại dịch vụ</option>
                    <option value="Khách sạn">Khách sạn</option>
                    <option value="Vận chuyển">Vận chuyển</option>
                    <option value="Ẩm thực">Ẩm thực</option>
                    <option value="Nghỉ dưỡng">Nghỉ dưỡng</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email Liên Hệ</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="email"
                    defaultValue={supplier?.contact?.email || ''}
                    placeholder="contact@supplier.com"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
              </div>

              {/* Số điện thoại */}
              <div className="col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Số Điện Thoại</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    defaultValue={supplier?.contact?.phone || ''}
                    placeholder="+84 123 456 789"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
              </div>

              {/* Địa chỉ */}
              <div className="col-span-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Địa Chỉ</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-4 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <textarea
                    rows={3}
                    defaultValue={supplier?.address || ''}
                    placeholder="Nhập địa chỉ đầy đủ"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Trạng thái hoạt động */}
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-50">
                  <Power className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900">Trạng thái hoạt động</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight mt-0.5">Cho phép nhà cung cấp này nhận booking</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Active</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={supplier?.status === 'Đang hoạt động'} className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </form>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-white border-2 border-gray-100 rounded-xl text-sm font-black text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 transition-all active:scale-95 shadow-sm"
            >
              Hủy
            </button>
            <button 
              className="px-10 py-3 bg-[#1e60ff] rounded-xl text-sm font-black text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-2"
            >
              <Check className="w-4 h-4 stroke-[3px]" />
              Lưu thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
