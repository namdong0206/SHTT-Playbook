'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { PlaybookSubTopic } from '@/lib/data';
import { ChevronRight, BarChart3, Info, Printer, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COLORS = ['#8d4b00', '#006a61', '#ad2a27', '#ffb77d', '#6bd8cb'];

interface PlaybookCardProps {
  subTopic: PlaybookSubTopic;
  parentTitle: string;
}

export function PlaybookCard({ subTopic, parentTitle }: PlaybookCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = 0;
        }
        if (titleRef.current) {
          titleRef.current.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        nativeButton={false}
        render={
          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="cursor-pointer h-full group"
          />
        }
      >
        <Card className="h-full border-zinc-100 bg-white hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden rounded-2xl">
          <CardHeader className="p-6 pb-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-zinc-100 group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
              <span className="text-[8px] uppercase tracking-[0.2em] font-black text-zinc-300 group-hover:text-accent transition-colors">
                {parentTitle}
              </span>
            </div>
            <CardTitle className="text-xl font-serif font-black text-primary leading-tight group-hover:translate-x-1 transition-transform duration-500">
              {subTopic.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-zinc-400 line-clamp-2 leading-relaxed font-medium text-[13px] group-hover:text-zinc-600 transition-colors duration-500">
              {subTopic.summary}
            </p>
            <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.1em] text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="w-6 h-px bg-accent" />
              Chi tiết
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent 
        className="max-w-[95vw] sm:max-w-[90vw] w-full max-h-[92vh] overflow-hidden flex flex-col p-0 border-none rounded-3xl shadow-2xl"
      >
        <DialogHeader className="p-8 md:p-12 pb-6 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-100">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-[0.1em] shadow-md shadow-accent/10">
              {parentTitle}
            </Badge>
            <div className="h-px w-8 bg-zinc-200" />
            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.1em]">Báo cáo chi tiết</span>
          </div>
          <DialogTitle 
            ref={titleRef}
            tabIndex={-1}
            className="text-3xl md:text-4xl font-serif font-black tracking-tight text-primary leading-[1.1] outline-none"
          >
            {subTopic.title}
          </DialogTitle>
        </DialogHeader>
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto bg-white custom-scrollbar print-content"
        >
          <div className="p-8 md:p-12 pt-8 space-y-16">
            {/* Section 1: Tổng quan chung */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap flex items-center gap-3">
                  <div className="w-8 h-px bg-primary/30" />
                  Tổng quan chung
                </h3>
                <div className="h-px flex-1 bg-zinc-100" />
              </div>
              <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed max-w-4xl italic border-l-4 border-accent/30 pl-6">
                {subTopic.summary}
              </p>
            </section>

            {/* Section 2: Trực quan hóa */}
            {subTopic.charts && subTopic.charts.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/30" />
                    Trực quan hóa dữ liệu
                  </h3>
                  <div className="h-px flex-1 bg-zinc-100" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {subTopic.charts.map((chart, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="bg-zinc-50/50 p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-500"
                    >
                      <h4 className="text-[10px] font-black text-zinc-400 mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
                        <BarChart3 className="w-3 h-3 text-primary/40" />
                        {chart.title}
                      </h4>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          {chart.type === 'pie' || chart.type === 'donut' ? (
                            <PieChart>
                              <Pie
                                data={chart.data}
                                cx="50%"
                                cy="50%"
                                innerRadius={chart.type === 'donut' ? 65 : 0}
                                outerRadius={90}
                                paddingAngle={chart.type === 'donut' ? 8 : 0}
                                dataKey="value"
                                stroke="none"
                              >
                                {chart.data.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip 
                                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', padding: '16px' }}
                              />
                              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                            </PieChart>
                          ) : chart.type === 'bar' ? (
                            <BarChart data={chart.data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                              <XAxis 
                                dataKey="name" 
                                fontSize={9} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#a1a1aa', fontWeight: 800 }}
                                dy={10}
                              />
                              <YAxis 
                                fontSize={9} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#a1a1aa', fontWeight: 800 }}
                              />
                              <Tooltip 
                                cursor={{fill: 'rgba(0,0,0,0.02)'}} 
                                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', padding: '16px' }}
                              />
                              <Bar dataKey="value" fill="var(--color-primary)" radius={[8, 8, 0, 0]} barSize={32} />
                            </BarChart>
                          ) : chart.type === 'area' ? (
                            <AreaChart data={chart.data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                              <defs>
                                <linearGradient id={`colorValue-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                              <XAxis 
                                dataKey="name" 
                                fontSize={9} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#a1a1aa', fontWeight: 800 }}
                                dy={10}
                              />
                              <YAxis 
                                fontSize={9} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#a1a1aa', fontWeight: 800 }}
                              />
                              <Tooltip 
                                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', padding: '16px' }}
                              />
                              <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="var(--color-primary)" 
                                fillOpacity={1} 
                                fill={`url(#colorValue-${idx})`} 
                                strokeWidth={4}
                              />
                            </AreaChart>
                          ) : (
                            <LineChart data={chart.data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                              <XAxis 
                                dataKey="name" 
                                fontSize={9} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#a1a1aa', fontWeight: 800 }}
                                dy={10}
                              />
                              <YAxis 
                                fontSize={9} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#a1a1aa', fontWeight: 800 }}
                              />
                              <Tooltip 
                                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', padding: '16px' }}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke="var(--color-primary)" 
                                strokeWidth={4} 
                                dot={{ r: 6, fill: 'var(--color-primary)', strokeWidth: 0 }} 
                                activeDot={{ r: 8, strokeWidth: 0 }} 
                              />
                            </LineChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: Các nội dung chính */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap flex items-center gap-3">
                  <div className="w-8 h-px bg-primary/30" />
                  Các nội dung chính
                </h3>
                <div className="h-px flex-1 bg-zinc-100" />
              </div>
              <div className="prose prose-zinc prose-lg max-w-none prose-headings:font-serif prose-headings:font-black prose-p:leading-[1.8] prose-p:text-zinc-600 prose-strong:text-zinc-900 prose-strong:font-black prose-li:text-zinc-600">
                <div className="text-zinc-700 whitespace-pre-wrap">
                  <ReactMarkdown>
                    {subTopic.content}
                  </ReactMarkdown>
                </div>
              </div>
            </section>
            
            {/* Footer Action */}
            <div className="pt-12 border-t border-zinc-100">
              <div className="max-w-md mx-auto">
                <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                  
                  <Button 
                    onClick={handlePrint}
                    variant="secondary" 
                    className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-[12px] uppercase tracking-widest h-14 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-lg"
                  >
                    <Printer className="w-5 h-5" />
                    Xuất báo cáo chi tiết (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
