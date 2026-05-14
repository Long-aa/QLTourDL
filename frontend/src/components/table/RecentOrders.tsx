'use client';

import { MoreHorizontal } from 'lucide-react';

const orders = [
  {
    id: 1,
    customer: { name: 'Nguyễn Văn A', initials: 'NT', color: 'bg-blue-100 text-blue-600' },
    tour: 'Khám phá Hạ Long 3N2Đ',
    price: '3.450.000₫',
    status: 'Đã xác nhận',
    statusColor: 'bg-green-50 text-green-600',
  },
  {
    id: 2,
    customer: { name: 'Trần Thị B', initials: 'TH', color: 'bg-cyan-100 text-cyan-600' },
    tour: 'Nghỉ dưỡng Phú Quốc',
    price: '5.890.000₫',
    status: 'Chờ xử lý',
    statusColor: 'bg-orange-50 text-orange-600',
  },
  {
    id: 3,
    customer: { name: 'Lê Văn C', initials: 'LM', color: 'bg-blue-100 text-blue-600' },
    tour: 'Sapa Mùa Lúa Chín',
    price: '2.200.000₫',
    status: 'Đã xác nhận',
    statusColor: 'bg-green-50 text-green-600',
  },
  {
    id: 4,
    customer: { name: 'Phạm Thị D', initials: 'PH', color: 'bg-red-100 text-red-600' },
    tour: 'Tour Đà Lạt Thơ Mộng',
    price: '1.500.000₫',
    status: 'Đã hủy',
    statusColor: 'bg-red-50 text-red-600',
  },
];

export function RecentOrders() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">Đơn hàng gần đây</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Xem tất cả</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-500">Khách hàng</th>
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-500">Tour</th>
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-500">Giá</th>
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-500">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((order) => (
              <tr key={order.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${order.customer.color.replace('bg-blue-100', 'bg-blue-100 dark:bg-blue-900/30').replace('bg-cyan-100', 'bg-cyan-100 dark:bg-cyan-900/30').replace('bg-red-100', 'bg-red-100 dark:bg-red-900/30')}`}>
                      {order.customer.initials}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{order.customer.name}</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{order.tour}</span>
                </td>
                <td className="py-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{order.price}</span>
                </td>
                <td className="py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.statusColor
                      .replace('bg-green-50', 'bg-green-50 dark:bg-green-900/20 dark:text-green-400')
                      .replace('bg-orange-50', 'bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400')
                      .replace('bg-red-50', 'bg-red-50 dark:bg-red-900/20 dark:text-red-400')
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
