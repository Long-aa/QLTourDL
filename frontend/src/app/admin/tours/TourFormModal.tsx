'use client';

import React from 'react';
import { X, UploadCloud } from 'lucide-react';

interface TourFormModalProps {
  onClose: () => void;
}

export function TourFormModal({ onClose }: TourFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Thêm Tour Mới</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <form className="space-y-5">
            {/* Tên tour */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên tour <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="VD: Khám phá Sapa Mùa Lúa Chín"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              {/* Điểm đến */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Điểm đến</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                  <option value="">Chọn điểm đến</option>
                  <option value="sapa">Sapa</option>
                  <option value="danang">Đà Nẵng</option>
                  <option value="phuquoc">Phú Quốc</option>
                </select>
              </div>

              {/* Giá */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="5.200.000"
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500 text-sm">
                    đ
                  </div>
                </div>
              </div>

              {/* Số chỗ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Số chỗ</label>
                <input
                  type="number"
                  defaultValue={20}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>

              {/* Ngày khởi hành */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ngày khởi hành</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm text-gray-700"
                />
              </div>

              {/* Thời gian */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian</label>
                <input
                  type="text"
                  defaultValue="3 ngày 2 đêm"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>

              {/* Trạng thái */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer">
                  <option value="available">Còn chỗ</option>
                  <option value="full">Hết chỗ</option>
                </select>
              </div>
            </div>

            {/* Hình ảnh */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh</label>
              <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 flex flex-col items-center justify-center bg-blue-50/50 hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform text-blue-500">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-700">Kéo thả hoặc click để tải ảnh lên</p>
                <p className="text-xs text-gray-500 mt-1">Hỗ trợ JPG, PNG (Tối đa 5MB)</p>
              </div>
            </div>

            {/* Mô tả */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
              <textarea
                rows={4}
                placeholder="Nhập mô tả chi tiết về hành trình..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button 
            className="px-6 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
