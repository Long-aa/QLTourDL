'use client';

import React from 'react';
import { X, User, Phone, Briefcase, Globe, Save } from 'lucide-react';

interface GuideFormModalProps {
  onClose: () => void;
}

export function GuideFormModal({ onClose }: GuideFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Thêm Hướng dẫn viên Mới</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" /> Tên
            </label>
            <input type="text" placeholder="Nhập họ và tên đầy đủ" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" /> Số điện thoại
              </label>
              <input type="text" placeholder="+84 000 000 000" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gray-400" /> Kinh nghiệm
              </label>
              <div className="relative">
                <input type="text" placeholder="Số năm" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">năm</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" /> Ngôn ngữ
            </label>
            <input type="text" placeholder="Ví dụ: Tiếng Việt, Tiếng Anh, Tiếng Pháp..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
            <p className="text-[10px] text-gray-400 mt-1">Nhập các ngôn ngữ, cách nhau bằng dấu phẩy.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
              <option value="ready">Sẵn sàng</option>
              <option value="busy">Đang bận</option>
            </select>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">Hủy</button>
          <button className="px-6 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"><Save className="w-4 h-4" /> Lưu</button>
        </div>
      </div>
    </div>
  );
}
