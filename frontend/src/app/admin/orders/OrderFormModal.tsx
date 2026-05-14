'use client';

import React from 'react';
import { X, Search, MapPin, User, Calendar, CreditCard, ShoppingBag } from 'lucide-react';

interface OrderFormModalProps {
  onClose: () => void;
  order?: any;
}

export function OrderFormModal({ onClose, order }: OrderFormModalProps) {
  const isEdit = !!order;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 dark:bg-gray-900 dark:border dark:border-gray-800 transition-colors">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10 dark:bg-gray-900 dark:border-gray-800 transition-colors">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
              <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {isEdit ? `Chỉnh sửa Đơn hàng ${order.id || ''}` : 'Tạo Đơn Hàng Mới'}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isEdit ? 'Cập nhật lộ trình và dịch vụ cho khách hàng' : 'Thiết lập lộ trình và dịch vụ cho khách hàng'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[calc(100vh-200px)] overflow-y-auto dark:bg-gray-900 transition-colors">
          <form className="space-y-6">
            {/* Step 1: Chọn Khách hàng */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2 dark:text-gray-100">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                Thông tin khách hàng
              </h3>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  defaultValue={order?.customer?.name || ''}
                  placeholder="Tìm kiếm khách hàng theo tên, email hoặc SĐT..."
                  className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-600"
                />
              </div>
            </div>

            {/* Step 2: Chọn Tour & Dịch vụ */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2 dark:text-gray-100">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">2</span>
                Lựa chọn Tour & Dịch vụ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1 dark:text-gray-400">Chọn Tour</label>
                  <select 
                    defaultValue={order?.tour || ''}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  >
                    <option value="">-- Chọn Tour --</option>
                    <option value="Maldives Private Villa Resort">Maldives Private Villa Resort</option>
                    <option value="Swiss Alps Heli-Skiing">Swiss Alps Heli-Skiing</option>
                    <option value="Kyoto Cherry Blossom Tour">Kyoto Cherry Blossom Tour</option>
                    <option value="Phú Quốc Luxury Resort">Phú Quốc Luxury Resort</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1 dark:text-gray-400">Ngày khởi hành</label>
                  <input
                    type="date"
                    defaultValue={order?.date ? "2024-10-12" : ""}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1 dark:text-gray-400">Số lượng người lớn</label>
                  <input type="number" defaultValue={2} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1 dark:text-gray-400">Trẻ em (2-12t)</label>
                  <input type="number" defaultValue={0} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-1 dark:text-gray-400">Em bé (&lt;2t)</label>
                  <input type="number" defaultValue={0} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" />
                </div>
              </div>
            </div>

            {/* Step 3: Thanh toán */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2 dark:text-gray-100">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">3</span>
                Thanh toán & Ghi chú
              </h3>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-4 dark:bg-gray-800/50 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Phương thức thanh toán</span>
                  <div className="flex gap-2">
                    <button type="button" className="p-2 bg-white border-2 border-blue-600 text-blue-600 rounded-xl shadow-sm dark:bg-gray-800 dark:border-blue-500 dark:text-blue-400"><CreditCard className="w-4 h-4" /></button>
                    <button type="button" className="p-2 bg-white border border-gray-200 text-gray-400 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-blue-400 dark:hover:border-blue-500"><Calendar className="w-4 h-4" /></button>
                    <button type="button" className="p-2 bg-white border border-gray-200 text-gray-400 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-blue-400 dark:hover:border-blue-500"><User className="w-4 h-4" /></button>
                  </div>
                </div>
                <textarea
                  rows={2}
                  defaultValue={isEdit ? "Phòng hướng biển, tầng cao, ưu tiên nhận phòng sớm." : ""}
                  placeholder="Yêu cầu đặc biệt của khách (ví dụ: Ăn chay, Phòng hướng biển...)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm resize-none bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-600"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3 dark:bg-gray-800/30 dark:border-gray-800 transition-colors">
          <div className="mr-auto flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase dark:text-gray-500">Tạm tính</span>
            <span className="text-xl font-black text-blue-600 dark:text-blue-400">
              {isEdit ? (order.amount || 0).toLocaleString('vi-VN') : '0'} VNĐ
            </span>
          </div>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition-all active:scale-95 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Hủy
          </button>
          <button 
            className="px-8 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {isEdit ? 'Lưu thay đổi' : 'Xác nhận tạo đơn'}
          </button>
        </div>
      </div>
    </div>
  );
}
