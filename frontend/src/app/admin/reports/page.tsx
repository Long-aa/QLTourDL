'use client';

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { 
  Calendar, 
  ChevronDown, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  PieChart as PieChartIcon,
  Filter,
  RefreshCw,
  MoreVertical
} from 'lucide-react';

const REVENUE_DATA = [
  { name: 'Thg 1', value: 45000 },
  { name: 'Thg 2', value: 52000 },
  { name: 'Thg 3', value: 48000 },
  { name: 'Thg 4', value: 61000 },
  { name: 'Thg 5', value: 55000 },
  { name: 'Thg 6', value: 67000 },
  { name: 'Thg 7', value: 72000 },
];

const TOUR_TYPE_DATA = [
  { name: 'Nghỉ dưỡng', value: 45, color: '#2563eb' },
  { name: 'Khám phá', value: 35, color: '#3b82f6' },
  { name: 'Mạo hiểm', value: 20, color: '#93c5fd' },
];

const ORDERS_DATA = [
  { name: 'Thg 1', total: 120 },
  { name: 'Thg 2', total: 145 },
  { name: 'Thg 3', total: 132 },
  { name: 'Thg 4', total: 168 },
  { name: 'Thg 5', total: 154 },
  { name: 'Thg 6', total: 189 },
  { name: 'Thg 7', total: 210 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Báo cáo nâng cao</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium italic">Phân tích doanh thu và hiệu suất tour</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-gray-100 bg-white">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-600/20 active:scale-95">
            <TrendingUp className="w-4 h-4" />
            Tải báo cáo
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-end gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">THỜI GIAN</label>
          <div className="flex items-center gap-2">
            <div className="relative group">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Từ ngày - Đến ngày"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all w-60 bg-white"
              />
            </div>
            <div className="flex p-1 bg-gray-100 rounded-xl border border-gray-100">
              <button className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 rounded-lg transition-all">7 ngày</button>
              <button className="px-4 py-1.5 text-xs font-bold bg-white text-blue-600 rounded-lg shadow-sm">30 ngày</button>
              <button className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 rounded-lg transition-all">1 năm</button>
            </div>
          </div>
        </div>

        <div className="space-y-2 flex-1 min-w-[200px]">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">TOUR</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all bg-white cursor-pointer appearance-none">
              <option value="">Tất cả tour</option>
              <option value="maldives">Maldives Resort</option>
              <option value="swiss">Swiss Alps</option>
              <option value="kyoto">Kyoto Cherry</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center gap-2 pb-0.5">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">Reset</button>
          <button className="px-8 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">Áp dụng</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'DOANH THU', value: '$128,430', change: '+12.5%', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50', up: true },
          { label: 'SỐ ĐƠN HÀNG', value: '156', change: '+5.2%', icon: ShoppingBag, color: 'text-cyan-600', bg: 'bg-cyan-50', up: true },
          { label: 'SỐ KHÁCH HÀNG', value: '2,450', change: '+8.1%', icon: Users, color: 'text-blue-700', bg: 'bg-blue-50', up: true },
          { label: 'TỶ LỆ LẤP ĐẦY', value: '84%', change: '+2.4%', icon: PieChartIcon, color: 'text-indigo-600', bg: 'bg-indigo-50', up: true },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between relative z-10">
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-[10px] font-bold flex items-center gap-0.5 px-2 py-1 rounded-lg ${stat.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.up ? '↗' : '↘'} {stat.change}
              </span>
            </div>
            <p className="text-[10px] font-bold text-gray-400 mt-4 tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black text-gray-900 mt-1">{stat.value}</h3>
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <stat.icon className="w-24 h-24" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Biểu đồ Doanh thu
            </h3>
            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.4}/>
                  </linearGradient>
                  <linearGradient id="colorHighlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e40af" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#1e40af" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fontWeight: 600, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fontWeight: 600, fill: '#94a3b8' }} 
                  tickFormatter={(val) => `$${val/1000}k`}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="url(#colorValue)" 
                  radius={[6, 6, 0, 0]} 
                  barSize={32}
                  activeBar={<Bar fill="url(#colorHighlight)" radius={[6, 6, 0, 0]} />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tour Type Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-blue-600" />
              Phân bổ loại tour
            </h3>
            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="h-60 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TOUR_TYPE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {TOUR_TYPE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">TỔNG CỘNG</p>
              <p className="text-xl font-black text-gray-900">100%</p>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {TOUR_TYPE_DATA.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-gray-600">{item.name}</span>
                </div>
                <span className="text-xs font-black text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Area Chart */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              Số đơn hàng theo tháng
            </h3>
            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ORDERS_DATA}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fontWeight: 600, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                   hide
                />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorTotal)" 
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
