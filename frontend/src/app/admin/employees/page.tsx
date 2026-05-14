'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Mail, 
  Phone, 
  Calendar,
  UserCircle,
  Briefcase,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { EmployeeFormModal } from './EmployeeFormModal';

const MOCK_EMPLOYEES = [
  { 
    id: 'EMP-001', 
    name: 'Nguyễn Thị Mai', 
    email: 'mai.nguyen@luxevoyage.vn', 
    phone: '090 123 4567', 
    role: 'Quản trị viên', 
    status: 'Đang làm việc', 
    joinDate: '15/03/2022', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai' 
  },
  { 
    id: 'EMP-002', 
    name: 'Trần Văn Nam', 
    email: 'nam.tran@luxevoyage.vn', 
    phone: '091 234 5678', 
    role: 'Nhân viên', 
    status: 'Đang làm việc', 
    joinDate: '01/08/2023', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam' 
  },
  { 
    id: 'EMP-003', 
    name: 'Lê Thị Hương', 
    email: 'huong.le@luxevoyage.vn', 
    phone: '098 765 4321', 
    role: 'Nhân viên', 
    status: 'Đã nghỉ việc', 
    joinDate: '10/01/2021', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huong' 
  }
];

export default function EmployeesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Danh sách nhân viên</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Quản lý tài khoản, quyền hạn và thông tin nhân sự.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Thêm nhân viên
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'TỔNG NHÂN VIÊN', value: '24', icon: Users, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { label: 'ĐANG HOẠT ĐỘNG', value: '22', icon: UserCircle, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
          { label: 'QUYỀN QUẢN TRỊ', value: '3', icon: Shield, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 dark:bg-gray-900 dark:border-gray-800 transition-colors">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest dark:text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            </div>
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
              placeholder="Tìm tên, email..."
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
            />
          </div>
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer appearance-none transition-all min-w-[150px] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <option value="">Chức vụ</option>
            <option value="admin">Quản trị viên</option>
            <option value="staff">Nhân viên</option>
          </select>
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer appearance-none transition-all min-w-[150px] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <option value="">Trạng thái</option>
            <option value="active">Đang làm việc</option>
            <option value="inactive">Đã nghỉ việc</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-800/30">
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Avatar</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Họ tên</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Email</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Số điện thoại</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center dark:text-gray-400">Chức vụ</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center dark:text-gray-400">Trạng thái</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center dark:text-gray-400">Ngày vào làm</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right dark:text-gray-400">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {MOCK_EMPLOYEES.map((emp) => (
                <tr key={emp.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                  <td className="py-4 px-6">
                    <Link href={`/admin/employees/${emp.id}`}>
                      <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-100 group-hover:scale-105 transition-transform dark:bg-gray-800 dark:border-gray-700" />
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <Link href={`/admin/employees/${emp.id}`} className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">
                      <p className="font-bold text-gray-900 text-sm whitespace-nowrap dark:text-gray-200">{emp.name}</p>
                      <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5 dark:text-gray-500">{emp.id}</p>
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium dark:text-gray-400">
                      <Mail className="w-3.5 h-3.5 text-gray-300 dark:text-gray-500" />
                      {emp.email}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium dark:text-gray-400">
                      <Phone className="w-3.5 h-3.5 text-gray-300 dark:text-gray-500" />
                      {emp.phone}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold border ${
                      emp.role === 'Quản trị viên' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30' : 'bg-cyan-50 text-cyan-600 border-cyan-100 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-900/30'
                    }`}>
                      {emp.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border ${
                      emp.status === 'Đang làm việc' ? 'bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30' : 'bg-slate-50 text-slate-400 border-slate-100 dark:bg-slate-900/20 dark:text-slate-500 dark:border-slate-800'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${emp.status === 'Đang làm việc' ? 'bg-green-600' : 'bg-slate-400'}`}></span>
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm text-gray-500 font-medium dark:text-gray-400">{emp.joinDate}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors dark:hover:bg-gray-800 dark:hover:text-gray-200">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="py-5 px-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/20 dark:border-gray-800 transition-colors">
          <p className="text-sm text-gray-500 font-medium dark:text-gray-400">Hiển thị 1-3 trong số 24 nhân viên</p>
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 transition-all dark:hover:text-gray-200"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-700">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-700">3</button>
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 transition-all dark:hover:text-gray-200"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && <EmployeeFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
