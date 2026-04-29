'use client';

import React from 'react';
import { X, User, Mail, Phone, Shield, Briefcase, Calendar, Save, Camera } from 'lucide-react';

interface EmployeeFormModalProps {
  onClose: () => void;
}

export function EmployeeFormModal({ onClose }: EmployeeFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Thêm Nhân Viên Mới</h2>
            <p className="text-xs text-gray-500 mt-0.5">Thiết lập tài khoản và quyền hạn nhân sự</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <form className="space-y-6">
            {/* Profile Section */}
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-blue-400">
                  <User className="w-8 h-8 text-gray-300" />
                </div>
                <button type="button" className="absolute -bottom-2 -right-2 p-1.5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform active:scale-90">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Ảnh chân dung</h4>
                <p className="text-xs text-gray-500">Định dạng JPG, PNG. Tối đa 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {/* Họ tên */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Họ và tên</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Nguyễn Văn A" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                </div>
              </div>

              {/* Email */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email công việc</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="email" placeholder="name@luxevoyage.vn" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                </div>
              </div>

              {/* Số điện thoại */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Số điện thoại</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="090 ..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                </div>
              </div>

              {/* Chức vụ */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Chức vụ</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                    <option value="admin">Quản trị viên</option>
                    <option value="staff">Nhân viên</option>
                    <option value="manager">Quản lý vùng</option>
                  </select>
                </div>
              </div>

              {/* Ngày vào làm */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Ngày vào làm</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="date" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm text-gray-700" />
                </div>
              </div>

              {/* Trạng thái */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Trạng thái</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                  <option value="active">Đang làm việc</option>
                  <option value="inactive">Đã nghỉ việc</option>
                </select>
              </div>
            </div>

            {/* Quyền hạn */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" /> Phân quyền hệ thống
              </label>
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                {['Quản lý Tour', 'Quản lý Đơn hàng', 'Quản lý Khách hàng', 'Quản lý Tài chính', 'Báo cáo hệ thống', 'Cấu hình chung'].map((perm, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{perm}</span>
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition-all">Hủy bỏ</button>
          <button className="px-8 py-2.5 bg-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2">
            <Save className="w-4 h-4" /> Lưu thông tin
          </button>
        </div>
      </div>
    </div>
  );
}
