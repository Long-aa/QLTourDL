'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  CreditCard, 
  Clock, 
  CheckCircle2, 
  FileText, 
  RefreshCcw,
  Settings,
  Download,
  Edit2,
  Package,
  Info
} from 'lucide-react';
import { OrderFormModal } from '../OrderFormModal';

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: orderId } = React.use(params);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  // Mock current order data for editing
  const currentOrder = {
    id: orderId,
    customer: { name: 'Nguyễn Hoàng Anh' },
    tour: 'Maldives Cổ Điển - Resort 5 Sao Cố Định',
    date: '15/11/2023',
    amount: 131220000
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col gap-2 transition-colors">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500">
          <Link href="/admin/orders" className="hover:text-blue-600 transition-colors uppercase tracking-wider dark:hover:text-blue-400">Quản lý Đơn hàng</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-blue-600 uppercase tracking-wider dark:text-blue-400">{orderId}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight dark:text-white">Chi tiết Đơn hàng</h1>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30">
                <CheckCircle2 className="w-3 h-3" />
                Đã xác nhận
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-600 border border-cyan-100 uppercase tracking-wider dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-900/30">
                <CreditCard className="w-3 h-3" />
                Đã thanh toán
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Order & Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 dark:text-white transition-colors">
                <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Thông tin Đơn hàng
              </h3>
              <button 
                onClick={() => setIsEditModalOpen(true)}
                className="text-sm font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 border border-transparent hover:border-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-900/50"
              >
                <Edit2 className="w-3.5 h-3.5" />
                Chỉnh sửa
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tour Package */}
              <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 group hover:border-blue-200 transition-all dark:bg-gray-800/50 dark:border-gray-800 dark:hover:border-blue-500/50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 dark:text-gray-500">Gói Tour</p>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm dark:text-gray-200 transition-colors">Maldives Cổ Điển - Resort 5 Sao Cố Định</h4>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400 transition-colors">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15/11/2023</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 Ngày 4 Đêm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 group hover:border-blue-200 transition-all dark:bg-gray-800/50 dark:border-gray-800 dark:hover:border-blue-500/50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 dark:text-gray-500">Khách hàng</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md dark:border-gray-800">
                    HA
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-900 text-sm dark:text-gray-200 transition-colors">Nguyễn Hoàng Anh</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 uppercase dark:bg-amber-900/20 dark:text-amber-400">VIP Member</span>
                    </div>
                    <div className="space-y-0.5 mt-1">
                      <p className="text-xs text-gray-500 flex items-center gap-1.5 dark:text-gray-400 transition-colors"><Mail className="w-3 h-3" /> anh.nguyen@example.com</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1.5 dark:text-gray-400 transition-colors"><Phone className="w-3 h-3" /> +84 901 234 567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 dark:text-white transition-colors">
              <History className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Tiến trình Xử lý
            </h3>
            
            <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100 dark:before:bg-gray-800 transition-colors">
              {[
                { title: 'Khách hàng đặt đơn', desc: 'Qua website LuxeTravel', time: '01/10/2023, 10:24', active: true, done: true },
                { title: 'Xác nhận lịch trình & dịch vụ', desc: 'Hệ thống tự động xác nhận phòng trống', time: '01/10/2023, 10:26', active: true, done: true },
                { title: 'Thanh toán thành công', desc: 'Thẻ tín dụng Visa kết thúc bằng 4242', time: '01/10/2023, 10:30', active: true, done: true },
                { title: 'Hoàn tất chuyến đi', desc: 'Chờ khách hàng trải nghiệm', time: 'Dự kiến 20/11/2023', active: false, done: false },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[27px] top-1.5 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 transition-colors dark:border-gray-900 ${
                    step.done ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-gray-800'
                  }`}>
                    {step.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${step.active ? 'text-gray-900 dark:text-gray-200' : 'text-gray-400 dark:text-gray-600'}`}>{step.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium dark:text-gray-400 transition-colors">{step.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider dark:text-gray-500 transition-colors">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Payment & Actions */}
        <div className="space-y-6">
          {/* Payment Detail Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 dark:text-white transition-colors">
              <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Chi tiết Thanh toán
            </h3>

            <div className="space-y-4 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium dark:text-gray-400 transition-colors">Giá gốc Tour (x2 Khách)</span>
                <span className="text-gray-900 font-bold dark:text-gray-200 transition-colors">120,000,000 VNĐ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium dark:text-gray-400 transition-colors">Phụ phí Nâng hạng (Ocean View)</span>
                <span className="text-gray-900 font-bold dark:text-gray-200 transition-colors">15,000,000 VNĐ</span>
              </div>
              <div className="flex justify-between text-sm text-green-600 bg-green-50/50 p-2 rounded-lg border border-green-100 dark:bg-green-900/10 dark:border-green-900/20 dark:text-green-400 transition-colors">
                <span className="font-bold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  Giảm giá VIP (-10%)
                </span>
                <span className="font-bold">-13,500,000 VNĐ</span>
              </div>
              <div className="flex justify-between text-sm border-t border-gray-100 pt-4 dark:border-gray-800 transition-colors">
                <span className="text-gray-500 font-medium dark:text-gray-400">Thuế GTGT (8%)</span>
                <span className="text-gray-900 font-bold dark:text-gray-200">9,720,000 VNĐ</span>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest dark:text-gray-500">Tổng cộng</span>
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400">131,220,000 VNĐ</span>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-4 relative overflow-hidden group dark:bg-blue-900/10 dark:border-blue-900/30 transition-colors">
                  <div className="absolute top-0 right-0 p-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform dark:bg-gray-800 dark:border-gray-700">
                    <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors">Thanh toán qua Thẻ Tín Dụng</h5>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5 uppercase tracking-tighter dark:text-gray-500 transition-colors">Visa •••• 4242 • TXN-8891-VSA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-[0.98] dark:bg-blue-600 dark:hover:bg-blue-700">
                <CheckCircle2 className="w-4 h-4" />
                Đánh dấu Hoàn tất Cấu hình
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FileText className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                  Xuất Hóa Đơn
                </button>
                <button className="py-2.5 bg-white border border-gray-200 text-red-600 rounded-xl text-xs font-bold hover:bg-red-50 hover:border-red-100 transition-all flex items-center justify-center gap-2 dark:bg-gray-800 dark:border-gray-700 dark:text-red-400 dark:hover:bg-red-900/30">
                  <RefreshCcw className="w-3.5 h-3.5" />
                  Hoàn Tiền
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <OrderFormModal 
          order={currentOrder} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
    </div>
  );
}

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const History = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
  </svg>
);
