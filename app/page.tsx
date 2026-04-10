'use client';

import React, { useState, useMemo } from 'react';
import { 
  PLAYBOOK_DATA, 
  PlaybookMainTopic 
} from '@/lib/data';
import { PlaybookCard } from '@/components/playbook/PlaybookCard';
import { 
  Gavel, 
  ShieldAlert, 
  GraduationCap, 
  BarChart3, 
  Zap,
  LayoutGrid, 
  BookOpen,
  Search,
  Menu,
  X,
  ChevronRight,
  Info,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const ICON_MAP: Record<string, any> = {
  Gavel,
  ShieldAlert,
  GraduationCap,
  BarChart3,
  Zap
};

export default function PlaybookPage() {
  const [activeTopicId, setActiveTopicId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredTopics = useMemo(() => {
    let data = PLAYBOOK_DATA;
    
    if (activeTopicId !== 'all') {
      data = data.filter(t => t.id === activeTopicId);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return data.map(topic => ({
        ...topic,
        subTopics: topic.subTopics.filter(st => 
          st.title.toLowerCase().includes(query) ||
          st.summary.toLowerCase().includes(query) ||
          st.content.toLowerCase().includes(query)
        )
      })).filter(topic => topic.subTopics.length > 0);
    }

    return data;
  }, [activeTopicId, searchQuery]);

  return (
    <div className="flex h-screen bg-background overflow-hidden text-foreground">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-sidebar border-r border-sidebar-border text-sidebar-foreground">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-sidebar-primary p-2 rounded-lg shadow-lg">
              <BookOpen className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-black italic tracking-tighter leading-none text-primary">
                Sở hữu trí tuệ
              </h1>
              <p className="text-[8px] font-black opacity-40 uppercase tracking-[0.2em] mt-1">
                The Playbook
              </p>
            </div>
          </div>
          
          <nav className="space-y-1 flex-1 overflow-y-auto pr-2 -mr-2 custom-scrollbar">
            <button
              onClick={() => setActiveTopicId('all')}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-300",
                activeTopicId === 'all' 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md" 
                  : "opacity-50 hover:opacity-100 hover:bg-sidebar-accent/20"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
              Tổng quan hệ thống
            </button>
            
            <div className="pt-6 pb-3">
              <div className="text-[8px] uppercase tracking-[0.2em] font-black opacity-30 px-4">
                Danh mục nội dung
              </div>
            </div>
            
            {PLAYBOOK_DATA.map((topic) => {
              const Icon = ICON_MAP[topic.icon] || Gavel;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-300 text-left",
                    activeTopicId === topic.id 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md" 
                      : "opacity-50 hover:opacity-100 hover:bg-sidebar-accent/20"
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="line-clamp-1">{topic.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 min-h-0">
        <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-zinc-100 flex items-center justify-between px-6 shrink-0 z-20 sticky top-0">
          <div className="flex items-center gap-6 flex-1 max-w-2xl">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-zinc-500 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Tìm kiếm quy định, số liệu, xu hướng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-50 border-transparent focus:bg-white focus:ring-1 focus:ring-primary/20 rounded-xl text-[12px] font-medium transition-all outline-none shadow-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-6">
            <div className="hidden lg:flex flex-col items-end">
              <p className="text-[12px] font-black text-zinc-900">Cục Sở hữu trí tuệ</p>
              <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.1em]">Hệ thống Playbook</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <Users className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-zinc-50/50 custom-scrollbar">
          <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-primary mb-6 leading-[1.1]">
                  {activeTopicId === 'all' 
                    ? "Nâng tầm tri thức Sở hữu trí tuệ" 
                    : PLAYBOOK_DATA.find(t => t.id === activeTopicId)?.title}
                </h2>
                <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed font-medium">
                  {activeTopicId === 'all' 
                    ? 'Phân tích toàn diện về khung khổ pháp lý, thực trạng thực thi và các xu hướng công nghệ mới nhất trong lĩnh vực SHTT tại Việt Nam.' 
                    : `Chi tiết về các nội dung trọng tâm trong phần ${PLAYBOOK_DATA.find(t => t.id === activeTopicId)?.title.toLowerCase()}.`}
                </p>
              </motion.div>
            </div>

            <div className="space-y-12">
              {filteredTopics.map((topic) => (
                <section key={topic.id} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">
                      {topic.title}
                    </h3>
                    <div className="h-px flex-1 bg-zinc-200" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                      {topic.subTopics.map((subTopic) => (
                        <motion.div
                          key={subTopic.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <PlaybookCard 
                            subTopic={subTopic} 
                            parentTitle={topic.title} 
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </section>
              ))}
              
              {filteredTopics.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                  <div className="bg-zinc-100 p-8 rounded-full mb-6">
                    <Search className="w-12 h-12 text-zinc-200" />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-zinc-900 mb-2">Không tìm thấy kết quả</h3>
                  <p className="text-zinc-500">Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục bên trái.</p>
                </div>
              )}
            </div>
            
            {/* Footer Info */}
            <div className="mt-32 pt-16 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">© 2026 Cục Sở hữu Trí tuệ Việt Nam</span>
              </div>
              <div className="flex gap-8">
                <span className="text-[10px] font-black uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Điều khoản</span>
                <span className="text-[10px] font-black uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Bảo mật</span>
                <span className="text-[10px] font-black uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Liên hệ</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-zinc-900/60 z-40 md:hidden backdrop-blur-md"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-sidebar z-50 md:hidden flex flex-col shadow-2xl text-sidebar-foreground"
            >
              <div className="p-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="bg-sidebar-primary p-2.5 rounded-xl">
                      <BookOpen className="w-6 h-6 text-sidebar-primary-foreground" />
                    </div>
                    <h1 className="text-2xl font-serif font-black tracking-tighter">
                      SHTT
                    </h1>
                  </div>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <nav className="space-y-1.5 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <button
                    onClick={() => { setActiveTopicId('all'); setIsSidebarOpen(false); }}
                    className={cn(
                      "w-full flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all",
                      activeTopicId === 'all' 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg" 
                        : "opacity-50 hover:opacity-100 hover:bg-sidebar-accent/30"
                    )}
                  >
                    <LayoutGrid className="w-4 h-4" />
                    Tổng quan hệ thống
                  </button>
                  
                  <div className="pt-10 pb-5">
                    <div className="text-[9px] uppercase tracking-[0.3em] font-black opacity-30 px-5">
                      Danh mục nội dung
                    </div>
                  </div>
                  
                  {PLAYBOOK_DATA.map((topic) => {
                    const Icon = ICON_MAP[topic.icon] || Gavel;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => { setActiveTopicId(topic.id); setIsSidebarOpen(false); }}
                        className={cn(
                          "w-full flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all text-left",
                          activeTopicId === topic.id 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg" 
                            : "opacity-50 hover:opacity-100 hover:bg-sidebar-accent/30"
                        )}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="line-clamp-1">{topic.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
