'use client';

import React from 'react';
import { X, Save, Bus, Hash, Users } from 'lucide-react';

interface VehicleFormModalProps {
  onClose: () => void;
}

export function VehicleFormModal({ onClose }: VehicleFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Thêm Phương tiện Mới</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Bus className="w-4 h-4 text-gray-400" /> Loại xe
              </label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                <option value="">Chọn loại xe...</option>
                <option value="limo">Limousine</option>
                <option value="sedan">Sedan 4 chỗ</option>
                <option value="suv">SUV 7 chỗ</option>
                <option value="sprinter">Mercedes Sprinter</option>
                <option value="coach">Bus 45 chỗ</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Hash className="w-4 h-4 text-gray-400" /> Biển số xe
              </label>
              <input type="text" placeholder="VD: 51H-123.45" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-400" /> Sức chứa (Hành khách)
              </label>
              <input type="number" placeholder="Nhập số lượng..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                <option value="ready">Sẵn sàng</option>
                <option value="touring">Đang đi tour</option>
                <option value="maintenance">Đang bảo trì</option>
              </select>
            </div>
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
