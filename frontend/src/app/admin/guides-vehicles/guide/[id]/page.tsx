'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  Briefcase, 
  Award, 
  Compass, 
  Star, 
  ThumbsUp,
  Edit2,
  Send,
  Calendar,
  MoreHorizontal,
  Search,
  ChevronDown,
  Filter,
  Reply,
  Tag,
  Flag,
  MessageSquare,
  History,
  Plane,
  ChevronRight,
  Smile,
  Clock,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

import { GuideFormModal } from '../../GuideFormModal';

export default function GuideDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: guideId } = React.use(params);
  const [activeTab, setActiveTab] = useState('Thông tin chung');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock data for the guide
  const guide = {
    id: guideId,
    name: 'Nguyễn Văn A',
    idCode: 'GUIDE-0142',
    role: 'Hướng dẫn viên Quốc tế',
    status: 'Sẵn sàng',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
    languages: ['Tiếng Anh', 'Tiếng Nhật', 'Tiếng Pháp'],
    contact: {
      email: 'nguyen.vana@luxevoyage.com',
      phone: '+84 90 123 4567'
    },
    experience: '5 năm chuyên tuyến Châu Âu & Nhật Bản',
    certificates: 'Thẻ HDV Quốc tế, Sơ cấp cứu chữ thập đỏ',
    stats: {
      totalTours: 142,
      rating: '4.9/5.0',
      positiveFeedback: '98%'
    }
  };

  const scheduleData = [
    { id: 'EV-2023-18A', name: 'Khám Phá Vịnh Hạ Long Premium 3N2Đ', start: '15/10/2023', end: '17/10/2023', guests: '24/25', status: 'Đang diễn ra' },
    { id: 'EV-2023-10B', name: 'Sapa Retreat - Chạm Vào Mây Trời 4N3Đ', start: '22/10/2023', end: '25/10/2023', guests: '18/20', status: 'Sắp tới' },
    { id: 'EV-2023-09C', name: 'Đà Nẵng - Hội An Di Sản Chuyện Mùa Thu', start: '28/09/2023', end: '01/10/2023', guests: '30/30', status: 'Đã hoàn thành' },
    { id: 'EV-2023-09A', name: 'Phú Quốc Xanh - Nghỉ Dưỡng 5 Sao', start: '10/09/2023', end: '13/09/2023', guests: '15/15', status: 'Đã hoàn thành' },
  ];

  const reviews = [
    {
      id: 1,
      user: 'Trần Văn Hải',
      avatar: 'TH',
      date: '12/10/2023',
      tour: 'Hành trình Di sản Miền Trung (5N4Đ)',
      rating: 5,
      content: '"Anh A thực sự là một người hướng dẫn tuyệt vời. Kiến thức của anh về lịch sử các triều đại ở Huế và văn hóa Hội An rất uyên bác, không hề rập khuôn như đọc trong sách. Cách kể chuyện lôi cuốn, hài hước và luôn quan tâm đến sức khỏe của các cô chú lớn tuổi trong đoàn. Chuyến đi gia đình tôi trở nên trọn vẹn hơn rất nhiều nhờ có sự đồng hành của anh."',
      isFeatured: true
    },
    {
      id: 2,
      user: 'Lê Mai Phương',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      date: '28/09/2023',
      tour: 'Khám phá Sapa Mùa Lúa Chín (3N2Đ)',
      rating: 4,
      content: '"Tour tổ chức tốt, phong cảnh đẹp. HDV A nhiệt tình, xách đồ giúp khách và chụp ảnh rất có tâm. Điểm trừ duy nhất là hôm cuối xe hỏng điều hòa nhẹ nhưng A đã xử lý gọi xe thay thế khá nhanh gọn. Sẽ ủng hộ Ethereal Voyages trong những chuyến đi tới."',
      reply: {
        author: 'Ethereal Concierge',
        date: '01/10/2023',
        content: 'Cảm ơn chị Phượng đã tin tưởng và để lại nhận xét. Ethereal Voyages rất vui vì chị đã có trải nghiệm tốt cùng HDV Văn A. Chúng tôi xin ghi nhận sự cố về xe và đã làm việc với đối tác vận tải để đảm bảo không lặp lại. Mong sớm được phục vụ chị trong hành trình tiếp theo!'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6]/30 dark:bg-gray-950 pb-20 animate-in fade-in duration-500 transition-colors">
      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col md:flex-row items-center gap-10 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-600/20 dark:border-gray-800">
              <img src={guide.avatar} alt={guide.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full shadow-lg dark:border-gray-900" />
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight dark:text-white transition-colors">{guide.name}</h1>
                <span className="px-4 py-1 bg-blue-50 text-blue-600 text-xs font-black rounded-full uppercase tracking-widest dark:bg-blue-900/20 dark:text-blue-400 transition-colors">
                  {guide.idCode}
                </span>
              </div>
              <p className="text-gray-500 font-bold text-sm dark:text-gray-400 transition-colors">
                {guide.role} • <span className="text-green-600 dark:text-green-400">{guide.status}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {guide.languages.map((lang) => (
                <span key={lang} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black text-gray-700 uppercase tracking-widest dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 transition-colors">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 rounded-full font-black text-sm hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm active:scale-95 whitespace-nowrap dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
            >
              <Edit2 className="w-4 h-4" />
              Chỉnh sửa hồ sơ
            </button>
            <button className="flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-full font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40 active:scale-95 whitespace-nowrap dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              <Send className="w-4 h-4" />
              Gửi thông báo
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-8 mt-10">
        <div className="flex gap-10 border-b border-gray-200 dark:border-gray-800 transition-colors">
          {['Thông tin chung', 'Lịch trình tour', 'Đánh giá từ khách hàng'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-black transition-all relative ${
                activeTab === tab ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-10">
        {activeTab === 'Thông tin chung' && (
          <div className="grid grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Contact & Experience Card */}
              <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-10 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                <div className="flex items-center gap-4 text-[#1e3a8a] dark:text-blue-400 transition-colors">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight dark:text-white transition-colors">Chi tiết liên hệ & Kinh nghiệm</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 dark:text-gray-500">Email</p>
                        <p className="text-sm font-black text-gray-900 dark:text-gray-200 transition-colors">{guide.contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 dark:text-gray-500">Số điện thoại</p>
                        <p className="text-sm font-black text-gray-900 dark:text-gray-200 transition-colors">{guide.contact.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 transition-colors">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 dark:text-gray-500">Kinh nghiệm</p>
                        <p className="text-sm font-black text-blue-600 dark:text-blue-400 leading-relaxed transition-colors">{guide.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 transition-colors">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 dark:text-gray-500">Chứng chỉ chuyên môn</p>
                        <p className="text-sm font-black text-gray-900 dark:text-gray-200 leading-relaxed transition-colors">{guide.certificates}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Schedule Card */}
              <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-8 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[#1e3a8a] dark:text-blue-400 transition-colors">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight dark:text-white">Lịch trình tour sắp tới</h3>
                  </div>
                  <button onClick={() => setActiveTab('Lịch trình tour')} className="text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest dark:text-blue-400">Xem tất cả</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-50 dark:border-gray-800 transition-colors">
                        <th className="py-4 text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Mã tour</th>
                        <th className="py-4 text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Tên tour</th>
                        <th className="py-4 text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Khởi hành</th>
                        <th className="py-4 text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-800 transition-colors">
                      {scheduleData.slice(0, 3).map((tour, i) => (
                        <tr key={i} className="group transition-colors">
                          <td className="py-4 text-xs font-black text-blue-600 dark:text-blue-400">{tour.id}</td>
                          <td className="py-4 text-xs font-black text-gray-700 dark:text-gray-300 transition-colors">{tour.name}</td>
                          <td className="py-4 text-xs font-bold text-gray-500 dark:text-gray-400 transition-colors">{tour.start}</td>
                          <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest transition-colors ${
                              tour.status === 'Sắp tới' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
                              tour.status === 'Đang diễn ra' ? 'bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400' :
                              'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                            }`}>
                              {tour.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Stats Card */}
              <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-10 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                <h3 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight transition-colors">Thống kê hiệu suất</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Tổng số tour đã dẫn', value: guide.stats.totalTours, icon: Compass, color: 'text-blue-600', bg: 'bg-blue-50', darkBg: 'dark:bg-blue-900/20', darkColor: 'dark:text-blue-400' },
                    { label: 'Điểm đánh giá trung bình', value: guide.stats.rating, icon: Star, color: 'text-amber-500', bg: 'bg-amber-50', darkBg: 'dark:bg-amber-900/20', darkColor: 'dark:text-amber-400' },
                    { label: 'Tỷ lệ phản hồi tích cực', value: guide.stats.positiveFeedback, icon: ThumbsUp, color: 'text-green-600', bg: 'bg-green-50', darkBg: 'dark:bg-green-900/20', darkColor: 'dark:text-green-400' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-5 p-5 bg-gray-50 border border-gray-100 rounded-[32px] group hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
                      <div className={`w-14 h-14 ${stat.bg} ${stat.darkBg} ${stat.color} ${stat.darkColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-6 h-6 fill-current" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-black text-gray-900 dark:text-white leading-none transition-colors">{stat.value}</h4>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 dark:text-gray-500 transition-colors">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner */}
              <div className="relative h-64 rounded-[40px] overflow-hidden group shadow-2xl shadow-blue-900/10">
                <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800" alt="Europe Expertise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest">DESTINATIONS MAPPED</p>
                  <h4 className="text-2xl font-black text-white leading-tight">Chuyên gia thị trường Châu Âu</h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Lịch trình tour' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Filter Bar */}
            <div className="bg-white p-6 rounded-[32px] shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-wrap items-end gap-6 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 dark:text-gray-500">Thời gian</p>
                <div className="relative min-w-[180px]">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select className="w-full pl-11 pr-10 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-xs font-black text-gray-700 appearance-none cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                    <option>Tháng này</option>
                    <option>Tháng trước</option>
                    <option>Quý này</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 dark:text-gray-500">Trạng thái</p>
                <div className="relative min-w-[180px]">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select className="w-full pl-11 pr-10 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-xs font-black text-gray-700 appearance-none cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                    <option>Tất cả</option>
                    <option>Đang diễn ra</option>
                    <option>Sắp tới</option>
                    <option>Hoàn thành</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 min-w-[300px]">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo mã hoặc tên tour..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-bold text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:bg-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="bg-white rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-50 bg-gray-50/30 dark:border-gray-800 dark:bg-gray-800/30 transition-colors">
                      <th className="py-6 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Mã Tour</th>
                      <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Tên Tour</th>
                      <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center dark:text-gray-500">Khởi Hành</th>
                      <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center dark:text-gray-500">Kết Thúc</th>
                      <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center dark:text-gray-500">Khách</th>
                      <th className="py-6 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center dark:text-gray-500">Trạng Thái</th>
                      <th className="py-6 px-10 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right dark:text-gray-500">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800 transition-colors">
                    {scheduleData.map((tour, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                        <td className="py-6 px-10 text-sm font-black text-blue-600 cursor-pointer hover:underline dark:text-blue-400">{tour.id}</td>
                        <td className="py-6 px-6 text-sm font-black text-gray-900 dark:text-gray-200 max-w-[250px] leading-relaxed transition-colors">{tour.name}</td>
                        <td className="py-6 px-6 text-sm font-bold text-gray-500 dark:text-gray-400 text-center transition-colors">{tour.start}</td>
                        <td className="py-6 px-6 text-sm font-bold text-gray-500 dark:text-gray-400 text-center transition-colors">{tour.end}</td>
                        <td className="py-6 px-6 text-sm font-black text-gray-900 dark:text-gray-200 text-center transition-colors">{tour.guests}</td>
                        <td className="py-6 px-6 text-center">
                          <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm transition-colors ${
                            tour.status === 'Đang diễn ra' ? 'bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30' :
                            tour.status === 'Sắp tới' ? 'bg-blue-50/40 text-blue-400 border border-blue-50 dark:bg-blue-900/10 dark:text-blue-500/80 dark:border-blue-900/20' :
                            'bg-gray-100 text-gray-500 border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
                          }`}>
                            {tour.status === 'Đang diễn ra' && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse dark:bg-blue-400" />}
                            {tour.status === 'Sắp tới' && <Clock className="w-3 h-3" />}
                            {tour.status === 'Đã hoàn thành' && <CheckCircle2 className="w-3 h-3" />}
                            {tour.status}
                          </span>
                        </td>
                        <td className="py-6 px-10 text-right">
                          <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all dark:hover:text-white dark:hover:bg-gray-800"><MoreHorizontal className="w-5 h-5" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between dark:border-gray-800 dark:bg-gray-800/30 transition-colors">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">Hiển thị 1 - 4 trên 24 tour</p>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-gray-900 transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white"><ChevronLeft className="w-5 h-5" /></button>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-600/20">1</button>
                  <button className="w-10 h-10 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-black hover:border-blue-200 hover:text-blue-600 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400">2</button>
                  <button className="w-10 h-10 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-black hover:border-blue-200 hover:text-blue-600 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400">3</button>
                  <span className="text-gray-400 px-2 dark:text-gray-600">...</span>
                  <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-gray-900 transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Đánh giá từ khách hàng' && (
          <div className="grid grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Left Sidebar: Ratings Summary */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-10 sticky top-32 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#1e3a8a] dark:text-blue-400 tracking-tight transition-colors">Tổng quan đánh giá</h3>
                  <div className="flex items-center gap-6">
                    <h4 className="text-6xl font-black text-blue-600 dark:text-blue-400 tracking-tighter transition-colors">4.9</h4>
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500 transition-colors">Dựa trên 142 lượt đánh giá</p>
                    </div>
                  </div>
                </div>

                {/* Rating Bars */}
                <div className="space-y-4">
                  {[
                    { stars: 5, count: 121, percent: '85%' },
                    { stars: 4, count: 18, percent: '12%' },
                    { stars: 3, count: 3, percent: '3%' },
                    { stars: 2, count: 0, percent: '0%' },
                    { stars: 1, count: 0, percent: '0%' },
                  ].map((item) => (
                    <div key={item.stars} className="flex items-center gap-4">
                      <span className="text-xs font-black text-gray-400 w-4 dark:text-gray-500">{item.stars} <Star className="w-3 h-3 inline fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700" /></span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800 transition-colors">
                        <div className="h-full bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: item.percent }} />
                      </div>
                      <span className="text-[10px] font-black text-gray-400 w-8 text-right dark:text-gray-500">{item.count}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="pt-10 border-t border-gray-50 dark:border-gray-800 space-y-6 transition-colors">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">ĐIỂM NỔI BẬT</p>
                  <div className="space-y-5">
                    {[
                      { label: 'Kiến thức lịch sử', score: '5.0', icon: BookOpen },
                      { label: 'Thái độ phục vụ', score: '4.9', icon: Smile },
                      { label: 'Quản lý thời gian', score: '4.8', icon: Clock },
                    ].map((h, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <h.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-black text-gray-700 dark:text-gray-300 transition-colors">{h.label}</span>
                        </div>
                        <span className="text-sm font-black text-blue-600 dark:text-blue-400 transition-colors">{h.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Review List */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Review Filters */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <button className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-xs font-black shadow-lg shadow-blue-600/20">Tất cả (142)</button>
                  <button className="px-6 py-2.5 bg-white border border-gray-100 rounded-full text-xs font-black text-gray-600 hover:border-blue-200 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50">Mới nhất</button>
                  <button className="px-6 py-2.5 bg-white border border-gray-100 rounded-full text-xs font-black text-gray-600 hover:border-blue-200 transition-all flex items-center gap-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500/50">5 sao <Star className="w-3 h-3 fill-amber-400 text-amber-400" /></button>
                </div>
                <div className="relative group min-w-[250px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input type="text" placeholder="Tìm trong đánh giá..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-full focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-xs font-bold dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:bg-gray-900" />
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-[40px] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 space-y-6 animate-in slide-in-from-right-4 duration-500 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        {typeof review.avatar === 'string' && review.avatar.startsWith('http') ? (
                          <img src={review.avatar} className="w-14 h-14 rounded-full object-cover border-2 border-gray-50 shadow-sm" />
                        ) : (
                          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-600/20">{review.avatar}</div>
                        )}
                        <div>
                          <h5 className="text-lg font-black text-gray-900 dark:text-white transition-colors">{review.user}</h5>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest dark:text-gray-500 transition-colors">{review.date}</span>
                            <span className="text-gray-300 dark:text-gray-700 transition-colors">•</span>
                            <span className="flex items-center gap-1 text-[10px] font-black text-gray-500 uppercase tracking-tighter dark:text-gray-400 transition-colors"><Plane className="w-3 h-3" /> {review.tour}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-xl dark:bg-amber-900/20 transition-colors">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-gray-800'}`} />)}
                        {review.isFeatured && <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black rounded uppercase tracking-widest dark:bg-blue-500">Nổi bật</span>}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed font-medium italic text-sm dark:text-gray-300 transition-colors">{review.content}</p>

                    <div className="flex items-center gap-6 pt-4 border-t border-gray-50 dark:border-gray-800 transition-colors">
                      <button className="flex items-center gap-2 text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest dark:text-blue-400"><Reply className="w-4 h-4" /> Trả lời</button>
                      <button className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-gray-900 transition-all uppercase tracking-widest dark:text-gray-500 dark:hover:text-gray-300"><Tag className="w-4 h-4" /> Gắn thẻ</button>
                      {review.reply && (
                         <div className="ml-auto flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-600"><MessageSquare className="w-4 h-4" /> 1 phản hồi</div>
                      )}
                    </div>

                    {review.reply && (
                      <div className="mt-8 p-8 bg-blue-50/50 rounded-[32px] border border-blue-100/50 space-y-4 dark:bg-blue-900/10 dark:border-blue-900/20 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white dark:bg-blue-500"><Smile className="w-5 h-5" /></div>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest dark:text-blue-400">{review.reply.author} Đã trả lời</span>
                          </div>
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest dark:text-gray-500">{review.reply.date}</span>
                        </div>
                        <p className="text-xs font-bold text-gray-600 leading-relaxed dark:text-gray-400 transition-colors">{review.reply.content}</p>
                      </div>
                    )}
                    
                    {!review.isFeatured && (
                      <button className="w-full py-3 border-2 border-dashed border-gray-100 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-widest hover:border-blue-200 hover:text-blue-600 transition-all dark:border-gray-800 dark:hover:border-blue-900/50 dark:hover:text-blue-400">
                        <Star className="w-3.5 h-3.5 inline mr-2" /> Đánh dấu nổi bật
                      </button>
                    )}
                  </div>
                ))}
                
                <button className="w-full py-4 bg-white border-2 border-gray-100 rounded-[32px] text-sm font-black text-gray-900 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:border-blue-500/50 dark:hover:text-blue-400">Tải thêm đánh giá</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isEditModalOpen && (
        <GuideFormModal 
          guide={guide} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
    </div>
  );
}
