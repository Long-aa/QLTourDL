'use client';

import React from 'react';
import { X, User, Mail, Phone, Briefcase, Camera, ChevronDown, Save } from 'lucide-react';

interface EmployeeFormModalProps {
  employee?: any;
  onClose: () => void;
}

export function EmployeeFormModal({ employee, onClose }: EmployeeFormModalProps) {
  const isEdit = !!employee;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-300 p-4">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-gray-100 dark:bg-gray-900 dark:border-gray-800 transition-colors">
        {/* Header */}
        <div className="px-10 py-8 border-b border-gray-100 flex items-center justify-between dark:border-gray-800">
          <h2 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight">
            {isEdit ? 'Chỉnh sửa thông tin nhân sự' : 'Thêm nhân sự mới'}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all dark:hover:bg-red-900/20 dark:hover:text-red-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-10 space-y-10 dark:bg-gray-900 transition-colors">
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 flex items-center justify-center dark:bg-gray-800 dark:border-gray-700">
                {employee?.avatar ? (
                  <img src={employee.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-gray-300 dark:text-gray-600" />
                )}
              </div>
              <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-black text-gray-900 dark:text-gray-100">Ảnh đại diện</p>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500">Định dạng JPG, PNG. Kích thước tối đa 5MB.</p>
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black hover:bg-blue-100 transition-colors dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50">
                Tải ảnh mới
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 dark:text-gray-500">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                defaultValue={employee?.name}
                placeholder="Nguyễn Văn An" 
                className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-[20px] focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:focus:bg-gray-800 dark:focus:border-blue-500 dark:placeholder-gray-600" 
              />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 dark:text-gray-500">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                defaultValue={employee?.email}
                placeholder="an.nguyen@luxevoyage.com" 
                className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-[20px] focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:focus:bg-gray-800 dark:focus:border-blue-500 dark:placeholder-gray-600" 
              />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 dark:text-gray-500">Số điện thoại</label>
              <input 
                type="text" 
                defaultValue={employee?.phone}
                placeholder="0901234567" 
                className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-[20px] focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:focus:bg-gray-800 dark:focus:border-blue-500 dark:placeholder-gray-600" 
              />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 dark:text-gray-500">
                Chức vụ <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select 
                  defaultValue={employee?.subRole || employee?.role}
                  className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-[20px] focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900 appearance-none cursor-pointer dark:bg-gray-800 dark:text-gray-100 dark:focus:bg-gray-800 dark:focus:border-blue-500"
                >
                  <option value="Nhân viên Sales">Nhân viên Sales</option>
                  <option value="Quản trị viên">Quản trị viên</option>
                  <option value="Senior Admin">Senior Admin</option>
                  <option value="Kế toán">Kế toán</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform dark:text-gray-600" />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 dark:text-gray-500">Trạng thái</label>
              <div className="relative group">
                <select 
                  defaultValue={employee?.status}
                  className="w-full px-6 py-4 bg-gray-100/50 border border-transparent rounded-[20px] focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-bold text-gray-900 appearance-none cursor-pointer dark:bg-gray-800 dark:text-gray-100 dark:focus:bg-gray-800 dark:focus:border-blue-500"
                >
                  <option value="Đang làm việc">Đang làm việc</option>
                  <option value="Nghỉ phép">Nghỉ phép</option>
                  <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform dark:text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 border-t border-gray-100 bg-gray-50/30 flex justify-end gap-4 dark:border-gray-800 dark:bg-gray-800/30 transition-colors">
          <button 
            onClick={onClose} 
            className="px-10 py-3.5 bg-gray-200 text-gray-700 rounded-xl font-black text-sm hover:bg-gray-300 transition-all active:scale-95 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            Hủy
          </button>
          <button className="px-10 py-3.5 bg-blue-600 text-white rounded-xl font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2 active:scale-95">
            <Save className="w-4 h-4" />
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
