import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Star, Clock, ChevronDown, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const TOURS = [
  { id: 1, title: 'Hành trình lãng mạn Châu Âu: Pháp - Thụy Sĩ', rating: 4.9, duration: '7 Ngày 6 Đêm', price: '85.000.000đ', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', tag: 'Ưu đãi' },
  { id: 2, title: 'Nghỉ dưỡng 5 sao tại thiên đường Maldives', rating: 5.0, duration: '5 Ngày 4 Đêm', price: '120.000.000đ', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Dubai - Xa hoa & Lộng lẫy Vùng vịnh', rating: 4.8, duration: '6 Ngày 5 Đêm', price: '65.000.000đ', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Kyoto mùa anh đào rực rỡ', rating: 4.9, duration: '5 Ngày 4 Đêm', price: '45.000.000đ', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800' },
];

export default function ToursPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-gray-900 tracking-tight">Khám phá thế giới</h1>
        <p className="text-gray-500 font-medium italic">Lựa chọn hoàn hảo cho hành trình thượng lưu của bạn</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-80 space-y-8">
          <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8 sticky top-32">
            <h3 className="text-xl font-black text-gray-900">Bộ lọc tìm kiếm</h3>
            
            {/* Keyword */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">TỪ KHÓA</label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Tên tour, địa điểm..." 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium"
                />
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">MỨC GIÁ</label>
              <div className="space-y-3">
                {['Dưới 20 triệu', '20 - 50 triệu', 'Trên 50 triệu'].map((range, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" defaultChecked={i === 1} className="peer w-5 h-5 rounded-lg border-gray-200 text-blue-600 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none border-2 checked:border-blue-600 checked:bg-blue-600" />
                      <div className="absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none text-white">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7"/></svg>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">THỜI GIAN</label>
              <div className="space-y-3">
                {['1 - 3 ngày', '4 - 7 ngày', 'Trên 7 ngày'].map((time, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="duration" defaultChecked={i === 1} className="w-5 h-5 border-2 border-gray-200 text-blue-600 focus:ring-blue-500/20 cursor-pointer" />
                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{time}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
              Áp dụng bộ lọc
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-500">Hiển thị <span className="text-gray-900">12 tour cao cấp</span></p>
            <button className="flex items-center gap-2 text-sm font-black text-gray-900 hover:text-blue-600 transition-colors">
              Sắp xếp: Nổi bật nhất <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {TOURS.map((tour) => (
              <Link 
                key={tour.id} 
                href={`/tour-detail/${tour.id}`}
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-56">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  {tour.tag && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg flex items-center gap-1">
                        <Filter className="w-3 h-3" /> {tour.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black flex items-center gap-1 text-gray-900">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" /> {tour.rating}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-lg font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors h-14 line-clamp-2">
                    {tour.title}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold">{tour.duration}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-50 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">GIÁ TỪ</p>
                      <p className="text-xl font-black text-blue-600">{tour.price}</p>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 pt-12">
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-600 text-white text-sm font-black shadow-lg shadow-blue-600/20">1</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-100 text-gray-500 hover:bg-gray-50 transition-all text-sm font-black">2</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-100 text-gray-500 hover:bg-gray-50 transition-all text-sm font-black">3</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
