'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Download, MoreHorizontal, ChevronLeft, ChevronRight, Hotel, Truck, Utensils, Globe, Eye, Edit, Trash2 } from 'lucide-react';
import { SupplierFormModal } from './SupplierFormModal';

const MOCK_SUPPLIERS = [
  {
    id: 'SUP-001',
    name: 'Amanoi Resort',
    type: 'Khách sạn',
    contact: {
      email: 'contact@amanoi.com',
      phone: '+84 259 3770 777'
    },
    address: 'Vịnh Vĩnh Hy, Ninh Thuận',
    status: 'Đang hoạt động',
    icon: Hotel,
    typeColor: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'SUP-042',
    name: 'Luxe Limo Services',
    type: 'Vận chuyển',
    contact: {
      email: 'booking@luxelimo.vn',
      phone: '+84 90 123 4567'
    },
    address: 'Quận 1, TP. Hồ Chí Minh',
    status: 'Đang hoạt động',
    icon: Truck,
    typeColor: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: 'SUP-088',
    name: 'Vietnam House',
    type: 'Ẩm thực',
    contact: {
      email: 'dine@vietnamhouse.com',
      phone: '+84 28 3822 2226'
    },
    address: 'Đồng Khởi, Quận 1, TP.HCM',
    status: 'Tạm ngưng',
    icon: Utensils,
    typeColor: 'bg-indigo-50 text-indigo-600'
  }
];

export default function SuppliersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Quản lý nhà cung cấp</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Danh sách và thông tin đối tác cung cấp dịch vụ.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Thêm nhà cung cấp
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4 dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Tìm tên nhà cung cấp, dịch vụ..."
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-600"
            />
          </div>
          <div className="relative">
            <select className="pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer appearance-none transition-all min-w-[200px] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
              <option value="">Tất cả loại dịch vụ</option>
              <option value="hotel">Khách sạn</option>
              <option value="transport">Vận chuyển</option>
              <option value="restaurant">Ẩm thực</option>
            </select>
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <Globe className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-all shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
          <Download className="w-5 h-5" />
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 dark:bg-gray-800/30 dark:border-gray-800">
                <th className="py-4 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-500">Tên nhà cung cấp</th>
                <th className="py-4 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-500">Loại dịch vụ</th>
                <th className="py-4 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-500">Liên hệ</th>
                <th className="py-4 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-500">Địa chỉ</th>
                <th className="py-4 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-500">Trạng thái</th>
                <th className="py-4 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right dark:text-gray-500">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {MOCK_SUPPLIERS.map((supplier) => (
                <tr key={supplier.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-blue-600 border border-gray-100 group-hover:bg-white transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:group-hover:bg-gray-700">
                        <supplier.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <Link href={`/admin/suppliers/${supplier.id}`} className="font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-blue-400">
                          {supplier.name}
                        </Link>
                        <p className="text-[10px] text-gray-500 font-medium mt-0.5 uppercase tracking-wider dark:text-gray-500">Mã: {supplier.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold ${
                      supplier.type === 'Khách sạn' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
                      supplier.type === 'Vận chuyển' ? 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400' :
                      'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400'
                    }`}>
                      {supplier.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-xs space-y-1">
                      <p className="text-gray-600 font-medium dark:text-gray-300">{supplier.contact.email}</p>
                      <p className="text-gray-400 dark:text-gray-500">{supplier.contact.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs text-gray-600 font-medium leading-relaxed dark:text-gray-400">{supplier.address}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border ${
                      supplier.status === 'Đang hoạt động' 
                        ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30'
                        : 'bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${supplier.status === 'Đang hoạt động' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-red-600 dark:bg-red-400'}`}></span>
                      {supplier.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        href={`/admin/suppliers/${supplier.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 rounded-lg transition-colors"
                        title="Xem chi tiết"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 dark:hover:text-amber-400 rounded-lg transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => {
                          if(confirm('Bạn có chắc muốn xóa nhà cung cấp này?')) {
                            alert('Đã xóa ' + supplier.name);
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 dark:hover:text-red-400 rounded-lg transition-colors"
                        title="Xóa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="py-5 px-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/20 dark:border-gray-800 transition-colors">
          <p className="text-sm text-gray-500 font-medium dark:text-gray-400">Hiển thị 1 đến 3 trong số 124 nhà cung cấp</p>
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800 hover:shadow-sm text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800 hover:shadow-sm text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">3</button>
            <span className="px-1 text-gray-400 text-xs">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800 hover:shadow-sm text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">12</button>
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && <SupplierFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
