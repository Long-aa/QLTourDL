'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Shield, 
  Mail, 
  Phone, 
  Users,
  Loader2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { EmployeeFormModal } from './EmployeeFormModal';
import { employeeService } from '@/services/employee.service';

export default function EmployeesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const data = await employeeService.getAll();
      setEmployees(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching employees:', err);
      setError('Không thể tải danh sách nhân viên.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            <p className="text-gray-500">Đang tải dữ liệu...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-red-500">
            <AlertCircle className="w-10 h-10" />
            <p>{error}</p>
            <button onClick={fetchEmployees} className="text-blue-600 hover:underline">Thử lại</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-800/30">
                  <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Họ tên</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Email</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-400">Số điện thoại</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center dark:text-gray-400">Chức vụ</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center dark:text-gray-400">Ngày vào làm</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right dark:text-gray-400">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {employees.length === 0 ? (
                  <tr><td colSpan={6} className="py-10 text-center text-gray-500">Không có nhân viên nào</td></tr>
                ) : (
                  employees.map((emp) => (
                    <tr key={emp.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                      <td className="py-4 px-6">
                        <Link href={`/admin/employees/${emp.id}`} className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">
                          <p className="font-bold text-gray-900 text-sm whitespace-nowrap dark:text-gray-200">{emp.user?.full_name || 'N/A'}</p>
                          <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5 tracking-wider">ID: {emp.id}</p>
                        </Link>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium dark:text-gray-400">
                          <Mail className="w-3.5 h-3.5 text-gray-300 dark:text-gray-500" />
                          {emp.user?.email || 'N/A'}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium dark:text-gray-400">
                          <Phone className="w-3.5 h-3.5 text-gray-300 dark:text-gray-500" />
                          {emp.phone || 'N/A'}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold border bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400">
                          {emp.position || 'Nhân viên'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-sm text-gray-500 font-medium dark:text-gray-400">{emp.hire_date || 'N/A'}</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors dark:hover:bg-gray-800 dark:hover:text-gray-200">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && <EmployeeFormModal onClose={() => { setIsModalOpen(false); fetchEmployees(); }} />}
    </div>
  );
}
