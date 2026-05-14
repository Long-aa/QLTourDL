'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  Plus, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  Calendar,
  CreditCard,
  Eye,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  History,
  Trash2,
  Edit
} from 'lucide-react';
import { OrderFormModal } from './OrderFormModal';

const MOCK_ORDERS = [
  {
    id: '#LV-2024-8932',
    customer: { name: 'Nguyễn Văn A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eleanor', initials: 'EM' },
    tour: 'Phú Quốc Luxury Resort',
    date: '12 Thg 10, 2024',
    amount: 31200000,
    status: 'Đã thanh toán',
    paymentStatus: 'paid'
  },
  {
    id: '#LV-2024-8931',
    customer: { name: 'Trần Thị B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', initials: 'JW' },
    tour: 'Hà Giang Vòng Cung Gấm Hoa',
    date: '11 Thg 10, 2024',
    amount: 20500000,
    status: 'Chờ xử lý',
    paymentStatus: 'pending'
  },
  {
    id: '#LV-2024-8928',
    customer: { name: 'Lê Văn C', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia', initials: 'SL' },
    tour: 'Sapa Mùa Lúa Chín',
    date: '09 Thg 10, 2024',
    amount: 14000000,
    status: 'Đã hủy',
    paymentStatus: 'cancelled'
  },
  {
    id: '#LV-2024-8925',
    customer: { name: 'Phạm Thị D', initials: 'PH', color: 'bg-red-100 text-red-600' },
    tour: 'Hạ Long Bay Cruise 5 Sao',
    date: '05 Thg 10, 2024',
    amount: 47250000,
    status: 'Hoàn tiền',
    paymentStatus: 'refunded'
  },
  {
    id: '#LV-2024-8920',
    customer: { name: 'Hoàng Văn E', initials: 'OD', color: 'bg-blue-100 text-blue-600' },
    tour: 'Đà Lạt Thơ Mộng',
    date: '01 Thg 10, 2024',
    amount: 9800000,
    status: 'Đã thanh toán',
    paymentStatus: 'paid'
  }
];

const STATUS_STYLES = {
  'Đã thanh toán': 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30',
  'Chờ xử lý': 'bg-cyan-50 text-cyan-600 border-cyan-100 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-900/30',
  'Đã hủy': 'bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30',
  'Hoàn tiền': 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
};

const STATUS_ICONS = {
  'Đã thanh toán': CheckCircle2,
  'Chờ xử lý': Clock,
  'Đã hủy': XCircle,
  'Hoàn tiền': RefreshCcw
};

export default function OrdersPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState<any>(null);

  const handleCreateNew = () => {
    setSelectedOrder(null);
    setIsModalOpen(true);
  };

  const handleEditOrder = (order: any) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Danh sách Đơn hàng</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Quản lý và theo dõi các giao dịch đặt chỗ của khách hàng.</p>
        </div>
        <button 
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Tạo đơn mới
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-4 dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Tìm theo Mã đơn, Tên khách hàng..."
            className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-600"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <option value="">Trạng thái</option>
            <option value="paid">Đã thanh toán</option>
            <option value="pending">Chờ xử lý</option>
            <option value="cancelled">Đã hủy</option>
            <option value="refunded">Hoàn tiền</option>
          </select>
          
          <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <option value="">Thanh toán</option>
            <option value="visa">Visa/Mastercard</option>
            <option value="transfer">Chuyển khoản</option>
            <option value="cash">Tiền mặt</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50">
            <Calendar className="w-4 h-4" />
            Thời gian
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-800/30">
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] dark:text-gray-500">Mã đơn</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] dark:text-gray-500">Khách hàng</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] dark:text-gray-500">Tour / Dịch vụ</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] dark:text-gray-500">Ngày đặt</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] dark:text-gray-500">Tổng tiền</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] text-center dark:text-gray-500">Trạng thái</th>
                <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] text-right dark:text-gray-500">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {MOCK_ORDERS.map((order) => {
                const StatusIcon = STATUS_ICONS[order.status as keyof typeof STATUS_ICONS];
                return (
                  <tr key={order.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                    <td className="py-4 px-6">
                      <Link 
                        href={`/admin/orders/${order.id.replace('#', '')}`}
                        className="text-sm font-bold text-blue-600 hover:underline cursor-pointer dark:text-blue-400"
                      >
                        {order.id}
                      </Link>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 overflow-hidden border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                          {order.customer.avatar ? (
                            <img src={order.customer.avatar} alt={order.customer.name} />
                          ) : (
                            order.customer.initials
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{order.customer.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-600 font-medium dark:text-gray-400">{order.tour}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-500 leading-tight dark:text-gray-500">
                        {order.date}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {order.amount.toLocaleString('vi-VN')}₫
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border ${STATUS_STYLES[order.status as keyof typeof STATUS_STYLES]}`}>
                          <StatusIcon className="w-3 h-3" />
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href={`/admin/orders/${order.id.replace('#', '')}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 rounded-lg transition-colors" title="Xem chi tiết">
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                        <button 
                          onClick={() => handleEditOrder(order)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 rounded-lg transition-colors" 
                          title="Chỉnh sửa"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => {
                            if(confirm('Bạn có chắc muốn hủy đơn hàng này?')) {
                              alert('Đã hủy đơn ' + order.id);
                            }
                          }}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 dark:hover:text-red-400 rounded-lg transition-colors" 
                          title="Hủy đơn"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="py-5 px-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/30 dark:bg-gray-800/20 dark:border-gray-800 transition-colors">
          <p className="text-sm text-gray-500 font-medium dark:text-gray-400">Hiển thị 1-10 của 124 đơn hàng</p>
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800 hover:shadow-sm text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800 hover:shadow-sm text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">3</button>
            <span className="px-1 text-gray-400 text-xs">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-800 hover:shadow-sm text-xs font-bold transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">13</button>
            <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <OrderFormModal 
          order={selectedOrder} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}
