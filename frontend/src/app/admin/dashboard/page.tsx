'use client';

import React, { useState, useEffect } from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { TourDistribution } from '@/components/charts/TourDistribution';
import { RecentOrders } from '@/components/table/RecentOrders';
import { FeaturedTours } from '@/components/ui/FeaturedTours';
import { Calendar, SlidersHorizontal, Flag, Wallet, Users, ShoppingCart, Loader2 } from 'lucide-react';
import { reportService } from '@/services/report.service';

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await reportService.getDashboardStats();
        setStats(data);
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tổng quan hệ thống</h1>
          <p className="text-gray-500 dark:text-gray-400">Hiệu suất kinh doanh thời gian thực</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Wallet}
          label="Tổng doanh thu"
          value={`${Number(stats?.total_revenue || 0).toLocaleString('vi-VN')}₫`}
          trend="+12.5%"
          trendUp={true}
          iconBg="bg-blue-50 dark:bg-blue-900/20"
          iconColor="text-blue-600 dark:text-blue-400"
        />
        <StatCard
          icon={Flag}
          label="Số lượng tour"
          value={stats?.total_tours || 0}
          trend="+3 mới"
          trendLabel="Tháng này"
          iconBg="bg-indigo-50 dark:bg-indigo-900/20"
          iconColor="text-indigo-600 dark:text-indigo-400"
        />
        <StatCard
          icon={ShoppingCart}
          label="Tổng đơn hàng"
          value={stats?.total_orders || 0}
          iconBg="bg-purple-50 dark:bg-purple-900/20"
          iconColor="text-purple-600 dark:text-purple-400"
        />
        <StatCard
          icon={Users}
          label="Số khách hàng"
          value={stats?.total_customers || 0}
          trend="98% hài lòng"
          trendUp={true}
          trendLabel="Tuần này"
          iconBg="bg-green-50 dark:bg-green-900/20"
          iconColor="text-green-600 dark:text-green-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <TourDistribution />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 pb-6">
        <div className="lg:col-span-3">
          <RecentOrders />
        </div>
        <div className="lg:col-span-2">
          <FeaturedTours />
        </div>
      </div>
    </div>
  );
}
