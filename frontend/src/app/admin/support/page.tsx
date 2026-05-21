'use client';

import { useState, useEffect } from 'react';
import { contactService } from '@/services/contact.service';
import {
  MessageSquare,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Trash2,
  Mail,
  Phone,
  User,
  Eye,
  AlertCircle
} from 'lucide-react';

interface ContactMessage {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

export default function CustomerSupportPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const fetchMessages = async () => {
    try {
      const data = await contactService.getAll();
      setMessages(data);
    } catch (error) {
      console.error('Failed to fetch messages', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      await contactService.updateStatus(id, status);
      fetchMessages();
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, status: status as any });
      }
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa tin nhắn này?')) {
      try {
        await contactService.delete(id);
        fetchMessages();
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(null);
        }
      } catch (error) {
        console.error('Failed to delete message', error);
      }
    }
  };

  const filteredMessages = messages.filter(msg => {
    const matchesFilter = filter === 'all' || msg.status === filter;
    const matchesSearch = 
      msg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-xs font-semibold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Mới</span>;
      case 'read':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300 rounded-full text-xs font-semibold flex items-center gap-1"><Eye className="w-3 h-3" /> Đã xem</span>;
      case 'replied':
        return <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 rounded-full text-xs font-semibold flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Đã phản hồi</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs font-semibold">Unknown</span>;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
              <MessageSquare className="w-8 h-8" />
            </div>
            Hỗ Trợ Khách Hàng
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 ml-14">Quản lý và phản hồi các yêu cầu từ khách hàng</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto ml-14 md:ml-0">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm yêu cầu..."
              className="pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl w-full md:w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <select
              className="pl-10 pr-8 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none cursor-pointer text-gray-900 dark:text-white"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="new">Mới</option>
              <option value="read">Đã xem</option>
              <option value="replied">Đã phản hồi</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Messages List */}
        <div className="lg:col-span-1 space-y-4 h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-500"></div>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">Không tìm thấy yêu cầu nào.</p>
            </div>
          ) : (
            filteredMessages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  selectedMessage?.id === msg.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 shadow-md shadow-blue-100 dark:shadow-none'
                    : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`font-semibold truncate pr-4 ${selectedMessage?.id === msg.id ? 'text-blue-900 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>{msg.full_name}</h3>
                  {getStatusBadge(msg.status)}
                </div>
                <p className={`text-sm font-medium mb-1 truncate ${selectedMessage?.id === msg.id ? 'text-blue-800 dark:text-blue-300' : 'text-gray-800 dark:text-gray-200'}`}>{msg.subject}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate mb-3">{msg.message}</p>
                <div className="flex items-center text-xs text-gray-400 dark:text-gray-500 gap-1 mt-auto">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(msg.created_at).toLocaleString('vi-VN')}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message Details */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden h-full flex flex-col transition-colors">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedMessage.subject}</h2>
                  <div className="flex items-center gap-4 flex-wrap">
                    {getStatusBadge(selectedMessage.status)}
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(selectedMessage.created_at).toLocaleString('vi-VN')}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {selectedMessage.status === 'new' && (
                    <button
                      onClick={() => handleUpdateStatus(selectedMessage.id, 'read')}
                      className="p-2 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 rounded-xl transition-colors tooltip-trigger"
                      title="Đánh dấu đã xem"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  )}
                  {selectedMessage.status !== 'replied' && (
                    <button
                      onClick={() => handleUpdateStatus(selectedMessage.id, 'replied')}
                      className="p-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-xl transition-colors tooltip-trigger"
                      title="Đánh dấu đã phản hồi"
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="p-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-xl transition-colors tooltip-trigger"
                    title="Xóa yêu cầu"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 border-b border-gray-100 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-900">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Khách hàng</p>
                    <p className="font-medium">{selectedMessage.full_name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Email</p>
                    <a href={`mailto:${selectedMessage.email}`} className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {selectedMessage.email}
                    </a>
                  </div>
                </div>
                {selectedMessage.phone && (
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 md:col-span-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Số điện thoại</p>
                      <a href={`tel:${selectedMessage.phone}`} className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {selectedMessage.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 bg-white dark:bg-gray-900 flex-1 overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">Nội dung tin nhắn</h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-[15px] border border-gray-100 dark:border-gray-700">
                  {selectedMessage.message}
                </div>
              </div>
              
              {selectedMessage.status !== 'replied' && (
                 <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
                    <a 
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      onClick={() => handleUpdateStatus(selectedMessage.id, 'replied')}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20 dark:shadow-none"
                    >
                      <Mail className="w-5 h-5" />
                      Phản hồi qua Email
                    </a>
                 </div>
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 transition-colors">
              <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-12 h-12 text-blue-200 dark:text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Chưa chọn yêu cầu nào</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                Vui lòng chọn một yêu cầu từ danh sách bên trái để xem chi tiết và thực hiện các thao tác hỗ trợ.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #475569;
        }
      `}</style>
    </div>
  );
}
