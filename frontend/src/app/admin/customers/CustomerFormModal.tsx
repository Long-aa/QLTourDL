'use client';

import React from 'react';
import { X, User, Mail, Phone, MapPin, Calendar, IdCard, LayoutGrid } from 'lucide-react';

interface CustomerFormModalProps {
  onClose: () => void;
  customer?: any;
}

export function CustomerFormModal({ onClose, customer }: CustomerFormModalProps) {
  const isEdit = !!customer;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-8 py-5 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            {isEdit ? 'Chỉnh sửa thông tin khách hàng' : 'Thêm Khách Hàng Mới'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
          <form className="space-y-10">
            {/* Section 1: Thông tin cá nhân */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <User className="w-5 h-5 fill-current opacity-20" />
                <h3 className="text-lg font-black tracking-tight">Thông tin cá nhân</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Họ và Tên</label>
                  <input
                    type="text"
                    defaultValue={customer?.name || ''}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Ngày sinh</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue={customer?.birthday || '10/15/1985'}
                      placeholder="dd/mm/yyyy"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Giới tính</label>
                  <div className="flex items-center gap-8">
                    {['Nam', 'Nữ', 'Khác'].map((gender) => (
                      <label key={gender} className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input 
                            type="radio" 
                            name="gender" 
                            defaultChecked={customer?.gender === gender || (gender === 'Nam' && !customer)}
                            className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-full checked:border-blue-600 transition-all cursor-pointer" 
                          />
                          <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                        </div>
                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Liên hệ & Địa chỉ */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <IdCard className="w-5 h-5 fill-current opacity-20" />
                <h3 className="text-lg font-black tracking-tight">Liên hệ & Địa chỉ</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    type="email"
                    defaultValue={customer?.email || ''}
                    placeholder="nguyenvana@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Số điện thoại</label>
                  <input
                    type="tel"
                    defaultValue={customer?.phone || ''}
                    placeholder="0901234567"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Địa chỉ</label>
                  <input
                    type="text"
                    defaultValue={customer?.address || ''}
                    placeholder="123 Đường Lê Lợi, Quận 1, TP.HCM"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Phân loại khách hàng */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <LayoutGrid className="w-5 h-5 fill-current opacity-20" />
                <h3 className="text-lg font-black tracking-tight">Phân loại khách hàng</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Loại khách</label>
                  <input
                    type="text"
                    defaultValue={customer?.type || 'Cá nhân'}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Hạng thành viên</label>
                  <input
                    type="text"
                    defaultValue={customer?.isVip ? 'Gold' : 'Silver'}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-50 bg-gray-50/30 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-white border border-gray-200 rounded-xl text-sm font-black text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
          >
            Hủy
          </button>
          <button 
            className="px-10 py-3 bg-blue-600 rounded-xl text-sm font-black text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-2"
          >
            <LayoutGrid className="w-4 h-4" />
            {isEdit ? 'Lưu thay đổi' : 'Lưu khách hàng'}
          </button>
        </div>
      </div>
    </div>
  );
}
