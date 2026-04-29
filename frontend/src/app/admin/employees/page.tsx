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
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Danh sách nhân viên</h1>
          <p className="text-gray-500 text-sm mt-1">Quản lý tài khoản, quyền hạn và thông tin nhân sự.</p>
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
          { label: 'TỔNG NHÂN VIÊN', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'ĐANG HOẠT ĐỘNG', value: '22', icon: UserCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'QUYỀN QUẢN TRỊ', value: '3', icon: Shield, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm tên, email..."
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all"
            />
          </div>
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer appearance-none transition-all min-w-[150px]">
            <option value="">Chức vụ</option>
            <option value="admin">Quản trị viên</option>
            <option value="staff">Nhân viên</option>
          </select>
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer appearance-none transition-all min-w-[150px]">
            <option value="">Trạng thái</option>
            <option value="active">Đang làm việc</option>
            <option value="inactive">Đã nghỉ việc</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avatar</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Họ tên</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Số điện thoại</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Chức vụ</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Trạng thái</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Ngày vào làm</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_EMPLOYEES.map((emp) => (
                <tr key={emp.id} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="py-4 px-6">
                    <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-100 group-hover:scale-105 transition-transform" />
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-gray-900 text-sm whitespace-nowrap">{emp.name}</p>
                    <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">{emp.id}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Mail className="w-3.5 h-3.5 text-gray-300" />
                      {emp.email}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Phone className="w-3.5 h-3.5 text-gray-300" />
                      {emp.phone}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold border ${
                      emp.role === 'Quản trị viên' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-cyan-50 text-cyan-600 border-cyan-100'
                    }`}>
                      {emp.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border ${
                      emp.status === 'Đang làm việc' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${emp.status === 'Đang làm việc' ? 'bg-green-600' : 'bg-slate-400'}`}></span>
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm text-gray-500 font-medium">{emp.joinDate}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="py-5 px-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
          <p className="text-sm text-gray-500 font-medium">Hiển thị 1-3 trong số 24 nhân viên</p>
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white text-xs font-bold transition-all border border-transparent hover:border-gray-100">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white text-xs font-bold transition-all border border-transparent hover:border-gray-100">3</button>
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && <EmployeeFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
