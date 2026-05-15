'use client';

import React from 'react';
import { X, UploadCloud, Calendar } from 'lucide-react';

interface TourFormModalProps {
  onClose: () => void;
  tour?: any; // For simplicity using any, but should be a proper Tour type
}

export function TourFormModal({ onClose, tour }: TourFormModalProps) {
  const isEdit = !!tour;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 dark:bg-gray-950 dark:border dark:border-gray-800 transition-colors">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {isEdit ? 'Chỉnh sửa thông tin Tour' : 'Thêm Tour Mới'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6 max-h-[calc(100vh-160px)] overflow-y-auto dark:bg-gray-950 transition-colors custom-scrollbar">
          <form className="space-y-5">
            {/* Tên tour */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">
                Tên tour <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={tour?.name || ''}
                placeholder="VD: Khám phá Sapa Mùa Lúa Chín"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200 dark:placeholder-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Điểm đến */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Điểm đến</label>
                <input
                  type="text"
                  defaultValue={tour?.destination || ''}
                  placeholder="VD: Hà Nội, Đà Nẵng, Sapa..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200 dark:placeholder-gray-600"
                />
              </div>

              {/* Giá */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Giá</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue={tour?.price || '5.200.000'}
                    className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500 text-sm">
                    đ
                  </div>
                </div>
              </div>

              {/* Số chỗ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Số chỗ</label>
                <input
                  type="number"
                  defaultValue={tour?.capacity || 20}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Ngày khởi hành */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Ngày khởi hành</label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue={tour?.date || ''}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200 dark:placeholder-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Thời gian và Trạng thái */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Thời gian</label>
                <input
                  type="text"
                  defaultValue={isEdit ? "2 ngày 1 đêm" : "3 ngày 2 đêm"}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200"
                />
              </div>
              {isEdit && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Trạng thái</label>
                  <select 
                    defaultValue={tour?.status || 'Còn chỗ'}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%236b7280%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200"
                  >
                    <option value="Còn chỗ">Còn chỗ</option>
                    <option value="Hết chỗ">Hết chỗ</option>
                  </select>
                </div>
              )}
            </div>

            {/* Hình ảnh */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Hình ảnh</label>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50/30 hover:bg-gray-50 hover:border-blue-200 transition-all cursor-pointer group dark:border-gray-800 dark:bg-gray-900/30 dark:hover:bg-gray-900 dark:hover:border-blue-500/50">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600 shadow-sm dark:bg-blue-900/30 dark:text-blue-400">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Kéo thả hoặc click để tải ảnh lên</p>
                <p className="text-xs text-gray-400 mt-1.5 dark:text-gray-500">Hỗ trợ JPG, PNG (Tối đa 5MB)</p>
              </div>
            </div>

            {/* Mô tả */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 dark:text-gray-300">Mô tả</label>
              <textarea
                rows={4}
                defaultValue={isEdit ? "Hành trình khám phá kỳ quan thiên nhiên thế giới Vịnh Hạ Long. Bao gồm: Nghỉ đêm trên du thuyền 5 sao, tham quan Hang Sửng Sốt, chèo kayak tại Hang Luồn và thưởng thức hải sản tươi sống." : ""}
                placeholder="Nhập mô tả chi tiết về hành trình..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm resize-none dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200 dark:placeholder-gray-600"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 transition-colors">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all dark:bg-transparent dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            Hủy
          </button>
          <button 
            className="px-8 py-2 bg-blue-600 rounded-xl text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]"
          >
            {isEdit ? 'Lưu thay đổi' : 'Lưu'}
          </button>
        </div>
      </div>
    </div>
  );
}
