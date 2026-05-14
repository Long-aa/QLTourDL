'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Download,
  Mail,
  Phone,
  Circle,
  Trophy,
  UserCheck,
  History,
  Trash2,
  Edit,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import { CustomerFormModal } from './CustomerFormModal';

const MOCK_CUSTOMERS = [
  {
    id: 'CUS-001',
    name: 'Lê Thế Long',
    email: 'longlt@gmail.com',
    phone: '0987 654 321',
    orders: 12,
    totalSpent: 45200000,
    status: 'Đang hoạt động',
    tier: 'Platinum',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Long'
  },
  {
    id: 'CUS-002',
    name: 'Nguyễn Thị Minh',
    email: 'minh.nt@outlook.com',
    phone: '0912 345 678',
    orders: 5,
    totalSpent: 18500000,
    status: 'Đang hoạt động',
    tier: 'Gold',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh'
  },
  {
    id: 'CUS-003',
    name: 'Trần Văn Hoàng',
    email: 'hoangtv@yahoo.com',
    phone: '0905 111 222',
    orders: 2,
    totalSpent: 7200000,
    status: 'Tạm khóa',
    tier: 'Silver',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang'
  },
  {
    id: 'CUS-004',
    name: 'Phạm Thanh Thảo',
    email: 'thaopt@gmail.com',
    phone: '0977 888 999',
    orders: 24,
    totalSpent: 124000000,
    status: 'Đang hoạt động',
    tier: 'Diamond',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thao'
  },
  {
    id: 'CUS-005',
    name: 'Vũ Anh Tuấn',
    email: 'tuan.va@gmail.com',
    phone: '0944 555 666',
    orders: 8,
    totalSpent: 32000000,
    status: 'Đang hoạt động',
    tier: 'Platinum',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan'
  }
];

const TIER_COLORS = {
  'Silver': 'text-slate-400 bg-slate-50 border-slate-200 dark:bg-slate-900/20 dark:border-slate-800 dark:text-slate-500',
  'Gold': 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-900/30 dark:text-amber-500',
  'Platinum': 'text-cyan-600 bg-cyan-50 border-cyan-200 dark:bg-cyan-900/20 dark:border-cyan-900/30 dark:text-cyan-400',
  'Diamond': 'text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-900/30 dark:text-purple-400'
};

export default function CustomersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Quản lý Khách hàng</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Quản lý cơ sở dữ liệu khách hàng và lịch sử giao dịch</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all text-sm font-medium bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            <Download className="w-4 h-4" />
            Xuất Excel
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Thêm khách hàng
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Tổng khách hàng', value: '1,284', change: '+12%', icon: UserCheck, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { label: 'Đang hoạt động', value: '1,240', change: '+8%', icon: Circle, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
          { label: 'Khách hàng VIP', value: '42', change: '+4%', icon: Trophy, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
          { label: 'Khách hàng mới (Tháng)', value: '156', change: '+24%', icon: History, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all dark:bg-gray-900 dark:border-gray-800">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg dark:bg-green-900/20 dark:text-green-400">{stat.change}</span>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4 dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm khách hàng theo tên, email, sđt..."
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50">
            <Filter className="w-4 h-4" />
            Lọc nâng cao
          </button>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <option value="">Hạng thành viên</option>
            <option value="diamond">Kim cương</option>
            <option value="platinum">Bạch kim</option>
            <option value="gold">Vàng</option>
            <option value="silver">Bạc</option>
          </select>
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <option value="">Trạng thái</option>
            <option value="active">Đang hoạt động</option>
            <option value="locked">Tạm khóa</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-800/30">
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Khách hàng</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Liên lạc</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Hạng</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">Đơn hàng</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right dark:text-gray-400">Tổng chi tiêu</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center dark:text-gray-400">Trạng thái</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right dark:text-gray-400">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {MOCK_CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="group hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-xl object-cover bg-gray-100 border border-gray-100 group-hover:scale-105 transition-transform dark:bg-gray-800 dark:border-gray-700" />
                        <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 ${customer.status === 'Đang hoạt động' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </div>
                      <div>
                        <Link href={`/admin/customers/${customer.id}`} className="font-semibold text-gray-900 leading-tight hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-blue-400">
                          {customer.name}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium dark:text-gray-500">{customer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Mail className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Phone className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold border ${TIER_COLORS[customer.tier as keyof typeof TIER_COLORS]}`}>
                      {customer.tier}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">{customer.orders}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {customer.totalSpent.toLocaleString('vi-VN')} đ
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        customer.status === 'Đang hoạt động' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {customer.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/admin/customers/${customer.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:hover:bg-blue-900/30 dark:hover:text-blue-400" title="Xem chi tiết">
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:hover:bg-blue-900/30 dark:hover:text-blue-400" title="Chỉnh sửa">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:hover:bg-red-900/30 dark:hover:text-red-400" title="Xóa">
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
        <div className="py-5 px-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/30 dark:bg-gray-800/20 dark:border-gray-800 transition-colors">
          <p className="text-sm text-gray-500 font-medium dark:text-gray-400">Hiển thị 1 đến 5 của 1,284 khách hàng</p>
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-white hover:shadow-sm transition-all dark:hover:bg-gray-800 dark:hover:text-gray-200"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-600/20">1</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-600 hover:bg-white hover:shadow-sm text-sm font-bold transition-all border border-transparent hover:border-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-700">2</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-600 hover:bg-white hover:shadow-sm text-sm font-bold transition-all border border-transparent hover:border-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-700">3</button>
            <span className="px-2 text-gray-400 dark:text-gray-600">...</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-600 hover:bg-white hover:shadow-sm text-sm font-bold transition-all border border-transparent hover:border-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-700">257</button>
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-white hover:shadow-sm transition-all dark:hover:bg-gray-800 dark:hover:text-gray-200"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && <CustomerFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
