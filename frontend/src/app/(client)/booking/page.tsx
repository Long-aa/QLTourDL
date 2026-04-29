import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Users,
  ChevronLeft,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/tours" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách tour
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
              <h1 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                Thông tin đặt tour
              </h1>

              <form className="space-y-10">
                {/* Contact Info */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3 text-blue-600">
                    <User className="w-5 h-5" />
                    <h3 className="text-lg font-black uppercase tracking-widest">Thông tin liên hệ</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">HỌ VÀ TÊN</label>
                      <input type="text" placeholder="Nguyễn Văn A" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">SỐ ĐIỆN THOẠI</label>
                      <input type="tel" placeholder="090 123 4567" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">EMAIL</label>
                      <input type="email" placeholder="example@gmail.com" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold" />
                    </div>
                  </div>
                </section>

                {/* Payment Method */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3 text-blue-600">
                    <CreditCard className="w-5 h-5" />
                    <h3 className="text-lg font-black uppercase tracking-widest">Phương thức thanh toán</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'bank', title: 'Chuyển khoản ngân hàng', desc: 'Vietcombank, Techcombank...' },
                      { id: 'card', title: 'Thẻ tín dụng / Ghi nợ', desc: 'Visa, Mastercard, JCB...' },
                      { id: 'wallet', title: 'Ví điện tử', desc: 'Momo, VNPay, ZaloPay...' },
                      { id: 'office', title: 'Tại văn phòng', desc: 'Thanh toán tiền mặt trực tiếp' }
                    ].map((method) => (
                      <label key={method.id} className="relative flex items-center p-6 bg-gray-50 rounded-[24px] border-2 border-transparent hover:border-blue-100 cursor-pointer transition-all group has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                        <input type="radio" name="payment" className="peer hidden" />
                        <div className="flex-1">
                          <p className="font-black text-gray-900">{method.title}</p>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">{method.desc}</p>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-gray-200 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-all">
                          <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                        </div>
                      </label>
                    ))}
                  </div>
                </section>

                <div className="pt-6 border-t border-gray-50 flex items-center gap-4 text-gray-400">
                  <Lock className="w-4 h-4" />
                  <p className="text-xs font-bold uppercase tracking-widest">Dữ liệu của bạn được bảo mật tuyệt đối</p>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10 border border-blue-50">
                <div className="relative h-48">
                  <Image 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800" 
                    alt="Tour Summary" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Tóm tắt đơn hàng</p>
                    <h4 className="text-xl font-black text-white leading-tight">Khám Phá Paris Tráng Lệ</h4>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3 text-gray-400 font-bold">
                        <Calendar className="w-4 h-4" />
                        Ngày đi:
                      </div>
                      <span className="font-black text-gray-900">15/10/2023</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3 text-gray-400 font-bold">
                        <Users className="w-4 h-4" />
                        Số lượng:
                      </div>
                      <span className="font-black text-gray-900">02 Người lớn</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-400">Tạm tính</span>
                      <span className="font-bold text-gray-900">370.000.000₫</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-400">Giảm giá</span>
                      <span className="font-bold text-green-500">- 0₫</span>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                      <span className="text-lg font-black text-gray-900">Tổng cộng</span>
                      <span className="text-2xl font-black text-blue-600">370.000.000₫</span>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-blue-600 text-white rounded-[24px] font-black text-lg shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-3">
                    Xác nhận đặt tour
                  </button>
                </div>
              </div>

              <div className="bg-blue-600 rounded-[32px] p-8 text-white flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-black leading-tight">Đảm bảo giá tốt nhất</p>
                  <p className="text-xs font-bold text-blue-100">Hoàn tiền 100% nếu tìm thấy mức giá thấp hơn ở bất kỳ đâu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
