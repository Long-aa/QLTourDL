'use client';

import React from 'react';
import { X, Search, MapPin, User, Calendar, CreditCard, ShoppingBag } from 'lucide-react';

interface OrderFormModalProps {
  onClose: () => void;
}

export function OrderFormModal({ onClose }: OrderFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              Tạo Đơn Hàng Mới
            </h2>
            <p className="text-xs text-gray-500">Thiết lập lộ trình và dịch vụ cho khách hàng</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <form className="space-y-6">
            {/* Step 1: Chọn Khách hàng */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                Thông tin khách hàng
              </h3>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm khách hàng theo tên, email hoặc SĐT..."
                  className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Step 2: Chọn Tour & Dịch vụ */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">2</span>
                Lựa chọn Tour & Dịch vụ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1">Chọn Tour</label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                    <option value="">-- Chọn Tour --</option>
                    <option value="maldives">Maldives Private Villa Resort</option>
                    <option value="swiss">Swiss Alps Heli-Skiing</option>
                    <option value="kyoto">Kyoto Cherry Blossom Tour</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1">Ngày khởi hành</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm text-gray-700"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1">Số lượng người lớn</label>
                  <input type="number" defaultValue={1} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1">Trẻ em (2-12t)</label>
                  <input type="number" defaultValue={0} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1">Em bé (&lt;2t)</label>
                  <input type="number" defaultValue={0} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                </div>
              </div>
            </div>

            {/* Step 3: Thanh toán */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">3</span>
                Thanh toán & Ghi chú
              </h3>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Phương thức thanh toán</span>
                  <div className="flex gap-2">
                    <button type="button" className="p-2 bg-white border-2 border-blue-600 text-blue-600 rounded-xl shadow-sm"><CreditCard className="w-4 h-4" /></button>
                    <button type="button" className="p-2 bg-white border border-gray-200 text-gray-400 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all"><Calendar className="w-4 h-4" /></button>
                    <button type="button" className="p-2 bg-white border border-gray-200 text-gray-400 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all"><User className="w-4 h-4" /></button>
                  </div>
                </div>
                <textarea
                  rows={2}
                  placeholder="Yêu cầu đặc biệt của khách (ví dụ: Ăn chay, Phòng hướng biển...)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm resize-none bg-white"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
          <div className="mr-auto flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Tạm tính</span>
            <span className="text-xl font-black text-blue-600">0 VNĐ</span>
          </div>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition-all"
          >
            Hủy bỏ
          </button>
          <button 
            className="px-8 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Xác nhận tạo đơn
          </button>
        </div>
      </div>
    </div>
  );
}
