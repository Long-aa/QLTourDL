'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, Bell, Moon, Sun, User, LogOut, UserCircle, 
  CheckCircle2, ShoppingBag, BarChart3, MapPin, Users, Building2, Loader2, X, UserCog
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { authService } from '@/services/auth.service';
import { useAuth } from '@/components/providers/AuthProvider';
import { searchService, SearchResultItem } from '@/services/search.service';

export function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle click outside search to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search
  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(async () => {
      try {
        const data = await searchService.globalSearch(searchQuery);
        setSearchResults(data.results);
      } catch (error) {
        console.error('Search error', error);
      } finally {
        setIsSearching(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const getRoleLabel = (role: string) => {
    switch (role?.toLowerCase()) {
      case 'admin': return 'Quản trị viên';
      case 'staff': return 'Nhân viên';
      case 'employee': return 'Nhân viên';
      case 'user': return 'Khách hàng';
      default: return role;
    }
  };
  
  const notifications = [
    { id: 1, title: 'Đơn hàng mới #EV-90210', desc: 'Khách hàng Nguyễn Văn A vừa đặt cọc thành công cho tour Maldives Exclusive...', time: '5 phút trước', type: 'order', unread: true },
    { id: 2, title: 'Cập nhật hệ thống định kỳ', desc: 'Hệ thống quản trị sẽ tạm dừng để bảo trì từ 02:00 AM đến 04:00 AM ngày mai...', time: '2 giờ trước', type: 'system', unread: true },
    { id: 3, title: 'Thay đổi lịch trình chuyến bay', desc: 'Chuyến bay VN-204 cho booking #EV-8832 đã được hãng hàng không dời lại 1 tiếng...', time: 'Hôm qua', type: 'flight', unread: false },
    { id: 4, title: 'Cập nhật hồ sơ khách hàng', desc: 'Khách hàng VIP Trần Thị B vừa thêm ghi chú về yêu cầu thực đơn ăn chay...', time: '2 ngày trước', type: 'user', unread: false },
  ];

  const getSearchIcon = (type: string) => {
    switch (type) {
      case 'tour': return <MapPin className="w-5 h-5 text-indigo-500" />;
      case 'customer': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'supplier': return <Building2 className="w-5 h-5 text-amber-500" />;
      case 'order': return <ShoppingBag className="w-5 h-5 text-rose-500" />;
      case 'employee': return <UserCog className="w-5 h-5 text-purple-500" />;
      default: return <Search className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 relative z-50 dark:bg-gray-900 dark:border-gray-800 transition-colors">
      
      {/* Global Search */}
      <div className="relative w-80 lg:w-96" ref={searchRef}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Tìm kiếm tour, khách hàng, đơn hàng..."
          className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500 transition-all"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchOpen(true);
          }}
          onFocus={() => setIsSearchOpen(true)}
        />
        {searchQuery && (
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => {
              setSearchQuery('');
              setSearchResults([]);
              setIsSearchOpen(false);
            }}
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Search Results Dropdown */}
        {isSearchOpen && searchQuery.trim().length >= 2 && (
          <div className="absolute top-full left-0 mt-2 w-[450px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
            {isSearching ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">Đang tìm kiếm...</span>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="max-h-[400px] overflow-y-auto p-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 py-2">Kết quả tìm kiếm</div>
                {searchResults.map((result) => (
                  <Link 
                    key={`${result.type}-${result.id}`}
                    href={result.link}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 border border-gray-200 dark:border-gray-700 overflow-hidden">
                      {result.image_url ? (
                        <img src={result.image_url} alt="" className="w-full h-full object-cover" />
                      ) : (
                        getSearchIcon(result.type)
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {result.title}
                      </p>
                      {result.subtitle && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {result.subtitle}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Không tìm thấy kết quả</p>
                <p className="text-xs text-gray-400 mt-1">Thử sử dụng các từ khóa khác</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors dark:text-gray-400 dark:hover:bg-gray-800"
        >
          {mounted && (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          {!mounted && <Moon className="w-5 h-5" />}
        </button>
        
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`p-2 rounded-lg transition-all relative ${isNotificationsOpen ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>

          {isNotificationsOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)} />
              <div className="absolute right-0 mt-3 w-[450px] bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="p-8 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">Thông báo</h3>
                    <button className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest flex items-center gap-1 dark:text-blue-400 dark:hover:text-blue-300">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Đánh dấu tất cả là đã đọc
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 font-bold mb-6 uppercase tracking-widest dark:text-gray-500">Quản lý các cập nhật và hành động cần thiết.</p>
                  
                  <div className="flex gap-2 mb-6">
                    {['Tất cả', 'Chưa đọc', 'Đơn hàng', 'Hệ thống'].map((cat, i) => (
                      <button key={i} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700'
                      }`}>
                        {cat} {i === 1 && <span className="ml-1 bg-red-500 text-white px-1.5 rounded-full">2</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="max-h-[480px] overflow-y-auto px-6 pb-8 space-y-4">
                  {notifications.map((n) => (
                    <div key={n.id} className={`group p-5 rounded-2xl border transition-all cursor-pointer relative ${
                      n.unread ? 'bg-blue-50/30 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/30' : 'bg-white border-gray-50 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800'
                    }`}>
                      {n.unread && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-600 rounded-r-full" />}
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          n.type === 'order' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 
                          n.type === 'system' ? 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'
                        }`}>
                          {n.type === 'order' ? <ShoppingBag className="w-5 h-5" /> : 
                           n.type === 'system' ? <BarChart3 className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm font-black text-gray-900 truncate dark:text-gray-100">{n.title}</h4>
                            <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap dark:text-gray-500">
                              {n.unread && <span className="text-blue-600 dark:text-blue-400 mr-1.5">●</span>}
                              {n.time}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2 dark:text-gray-400">{n.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-4 bg-gray-50 text-[10px] font-black text-gray-400 hover:text-blue-600 uppercase tracking-widest border-t border-gray-100 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-blue-400">
                  Xem tất cả thông báo
                </button>
              </div>
            </>
          )}
        </div>

        <div className="relative group">
          <button className="flex items-center gap-2 p-1 pr-3 hover:bg-gray-100 rounded-lg transition-colors dark:hover:bg-gray-800">
            <div className="w-8 h-8 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              {user?.avatar_url ? (
                <img src={user.avatar_url} alt={user?.full_name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-4 h-4" />
              )}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-bold text-gray-900 leading-tight dark:text-gray-100">
                {user?.full_name || user?.email || 'Người dùng'}
              </p>
              <p className="text-[10px] text-gray-400 leading-tight dark:text-gray-500">
                {user?.role ? getRoleLabel(user.role) : 'Thành viên'}
              </p>
            </div>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 dark:bg-gray-900 dark:border-gray-800">
              <Link href="/admin/profile" className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-all dark:text-gray-400 dark:hover:bg-gray-800">
                <UserCircle className="w-4 h-4" />
                Hồ sơ cá nhân
              </Link>

              <div className="h-px bg-gray-100 my-1 dark:bg-gray-800"></div>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all font-bold dark:hover:bg-red-900/10"
              >
                <LogOut className="w-4 h-4" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
