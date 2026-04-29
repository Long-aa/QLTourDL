import { StatCard } from '@/components/ui/StatCard';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { TourDistribution } from '@/components/charts/TourDistribution';
import { RecentOrders } from '@/components/table/RecentOrders';
import { FeaturedTours } from '@/components/ui/FeaturedTours';
import { Calendar, SlidersHorizontal, TrendingUp, Flag, Wallet, Users, Video } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tổng quan hệ thống</h1>
          <p className="text-gray-500">Hiệu suất kinh doanh hôm nay</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            Tuần này
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <SlidersHorizontal className="w-4 h-4" />
            Loại Tour
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          icon={Wallet}
          label="Doanh thu"
          value="2.840.000.000₫"
          trend="+12.5%"
          trendUp={true}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatCard
          icon={Flag}
          label="Số lượng tour"
          value="42"
          trend="+3 mới"
          trendLabel="Tuần này"
          iconBg="bg-indigo-50"
          iconColor="text-indigo-600"
        />
        <StatCard
          icon={Video}
          label="Tổng đơn hàng"
          value="156"
          iconBg="bg-purple-50"
          iconColor="text-purple-600"
        />
        <StatCard
          icon={Users}
          label="Số khách hàng"
          value="2,450"
          trend="98% hài lòng"
          trendUp={true}
          trendLabel="Tuần này"
          iconBg="bg-green-50"
          iconColor="text-green-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RevenueChart />
        </div>
        <div>
          <TourDistribution />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <RecentOrders />
        </div>
        <div className="col-span-2">
          <FeaturedTours />
        </div>
      </div>
    </div>
  );
}
