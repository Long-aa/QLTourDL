'use client';

import React from 'react';
import { X, UploadCloud, User, Mail, Phone, MapPin, Calendar, CreditCard } from 'lucide-react';

interface CustomerFormModalProps {
  onClose: () => void;
}

export function CustomerFormModal({ onClose }: CustomerFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Thêm Khách Hàng Mới</h2>
            <p className="text-xs text-gray-500">Nhập thông tin cá nhân và liên lạc của khách hàng</p>
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
            {/* Avatar Upload */}
            <div className="flex items-center gap-6 pb-2">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-blue-400">
                  <User className="w-10 h-10 text-gray-400" />
                </div>
                <button className="absolute -bottom-2 -right-2 p-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-transform hover:scale-110">
                  <UploadCloud className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Ảnh đại diện</h4>
                <p className="text-xs text-gray-500 mb-3">Tải lên ảnh chân dung khách hàng. Định dạng JPG, PNG tối đa 2MB.</p>
                <div className="flex gap-2">
                  <button type="button" className="text-xs font-medium text-blue-600 hover:underline">Chọn ảnh</button>
                  <button type="button" className="text-xs font-medium text-red-600 hover:underline">Xóa ảnh</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {/* Họ tên */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="VD: Nguyễn Văn A"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>

              {/* Số điện thoại */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="09xx xxx xxx"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>

              {/* Ngày sinh */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  Ngày sinh
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm text-gray-700"
                />
              </div>

              {/* Địa chỉ */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  Địa chỉ
                </label>
                <input
                  type="text"
                  placeholder="Số nhà, tên đường, phường/xã..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>

              {/* Phân hạng */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  Hạng thành viên
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                  <option value="silver">Bạc (Silver)</option>
                  <option value="gold">Vàng (Gold)</option>
                  <option value="platinum">Bạch kim (Platinum)</option>
                  <option value="diamond">Kim cương (Diamond)</option>
                </select>
              </div>

              {/* Trạng thái */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Trạng thái</label>
                <div className="flex items-center gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-700">Đang hoạt động</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-700">Tạm khóa</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Ghi chú */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Ghi chú khách hàng</label>
              <textarea
                rows={3}
                placeholder="Thông tin thêm, sở thích du lịch, yêu cầu đặc biệt..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition-all active:scale-95"
          >
            Hủy bỏ
          </button>
          <button 
            className="px-8 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Lưu khách hàng
          </button>
        </div>
      </div>
    </div>
  );
}
