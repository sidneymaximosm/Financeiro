import { LayoutDashboard, Wallet, TrendingUp, TrendingDown, LogOut, Search, Bell, ChevronDown, PlusCircle, Target, PieChart, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const categoryData = [
  { name: 'Alimentação', value: 1200, color: '#38BDF8', limit: 1500 },
  { name: 'Lazer', value: 800, color: '#22C55E', limit: 1000 },
  { name: 'Transporte', value: 550, color: '#FBBF24', limit: 600 },
  { name: 'Educação', value: 1000, color: '#EF4444', limit: 900 },
];

export default function Planning() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A2540] border-r border-border hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-[34px] h-[34px] bg-[#22C55E] rounded-[8px] flex items-center justify-center shadow-lg shadow-[#22C55E]/20">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#071a2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
             </svg>
          </div>
          <h1 className="text-[20px] font-extrabold text-white">Growlify</h1>
        </div>

        <nav className="mt-4 px-4 space-y-2 flex-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/planejamento" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold">
            <TrendingUp size={20} /> Planejamento
          </Link>
          <Link to="/carteira" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <Wallet size={20} /> Carteira
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error/10 rounded-xl transition-all">
            <LogOut size={20} /> Sair
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background/50 backdrop-blur-sm">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-background/20 backdrop-blur-md border-b border-border">
          <div className="flex items-center gap-4 bg-card/40 border border-border px-4 py-2 rounded-2xl w-96">
            <Search size={18} className="text-muted-foreground" />
            <input type="text" placeholder="Pesquisar metas..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-muted-foreground hover:text-white transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
            </button>
            <div onClick={() => navigate("/perfil")} className="flex items-center gap-3 p-1 pl-3 bg-card/40 border border-border rounded-full hover:bg-card/60 transition-colors cursor-pointer group">
              <span className="text-sm font-semibold">Sidney Máximo</span>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[#071a2b] font-bold text-xs uppercase shadow-lg shadow-accent/20">
                SM
              </div>
              <ChevronDown size={14} className="text-muted-foreground mr-2 group-hover:text-white" />
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold">Planejamento 🎯</h2>
              <p className="text-muted-foreground mt-1">Gerencie seus orçamentos e metas de economia.</p>
            </div>
            <button className="btn btnPrimary h-[48px] px-6 gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
              <PlusCircle size={20} /> Nova Meta
            </button>
          </div>

          {/* Budget Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 space-y-6">
                <div className="cardElev p-8">
                   <h3 className="text-xl font-bold mb-6">Orçamentos por Categoria</h3>
                   <div className="space-y-8">
                      {categoryData.map((cat, i) => {
                         const percentage = (cat.value / cat.limit) * 100;
                         const isOver = cat.value > cat.limit;
                         
                         return (
                            <div key={i} className="space-y-2">
                               <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                     <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></span>
                                     <span className="font-bold text-lg">{cat.name}</span>
                                     {isOver && <AlertCircle size={16} className="text-error animate-pulse" />}
                                  </div>
                                  <div className="text-sm">
                                     <span className="font-black text-white">R$ {cat.value.toLocaleString('pt-BR')}</span>
                                     <span className="text-muted-foreground"> / R$ {cat.limit.toLocaleString('pt-BR')}</span>
                                  </div>
                               </div>
                               <div className="h-3 bg-background/50 rounded-full overflow-hidden border border-border/50">
                                  <div 
                                    className={`h-full transition-all duration-1000 ${isOver ? 'bg-error shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]'}`} 
                                    style={{ width: `${Math.min(percentage, 100)}%`, backgroundColor: cat.color }}
                                  ></div>
                               </div>
                               <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                                  <span>{Math.round(percentage)}% usado</span>
                                  <span>R$ {Math.max(0, cat.limit - cat.value).toLocaleString('pt-BR')} restantes</span>
                                </div>
                            </div>
                         );
                      })}
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="cardElev p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4">
                         <Target size={24} />
                      </div>
                      <h4 className="font-bold text-lg">Reserva de Emergência</h4>
                      <p className="text-muted-foreground text-sm mt-1">Meta: R$ 15.000,00</p>
                      <div className="mt-6 flex items-end justify-between">
                         <p className="text-3xl font-black">R$ 8.450</p>
                         <p className="text-accent font-bold text-sm mb-1">56%</p>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full mt-2 overflow-hidden">
                         <div className="h-full bg-accent w-[56%] shadow-[0_0_10px_rgba(56,189,248,0.3)]"></div>
                      </div>
                   </div>

                   <div className="cardElev p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                         <TrendingUp size={24} />
                      </div>
                      <h4 className="font-bold text-lg">Viagem de Fim de Ano</h4>
                      <p className="text-muted-foreground text-sm mt-1">Meta: R$ 5.000,00</p>
                      <div className="mt-6 flex items-end justify-between">
                         <p className="text-3xl font-black">R$ 4.200</p>
                         <p className="text-primary font-bold text-sm mb-1">84%</p>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full mt-2 overflow-hidden">
                         <div className="h-full bg-primary w-[84%] shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-6">
                <div className="cardElev p-6 flex flex-col h-[400px]">
                   <h3 className="text-xl font-bold mb-4">Distribuição de Gastos</h3>
                   <div className="flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <RePieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            paddingAngle={8}
                            dataKey="value"
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{backgroundColor: '#0F2F4A', border: '1px solid #1E3A5F', borderRadius: '12px', color: '#fff'}}
                            itemStyle={{color: '#fff'}}
                          />
                        </RePieChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="grid grid-cols-2 gap-4 mt-4">
                      {categoryData.map((cat, i) => (
                         <div key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></span>
                            <span className="text-xs text-muted-foreground truncate">{cat.name}</span>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="cardElev p-6 bg-accent/5 border-accent/20 relative overflow-hidden group">
                   <div className="relative z-10">
                      <h4 className="font-bold flex items-center gap-2">
                        <AlertCircle size={18} className="text-accent" /> Insights Inteligentes
                      </h4>
                      <p className="text-sm mt-3 text-muted-foreground leading-relaxed italic">
                        "Seu gasto com <strong>Alimentação</strong> está 12% menor que no mês passado. Parabéns pela economia!"
                      </p>
                      <p className="text-sm mt-4 text-muted-foreground leading-relaxed">
                         Em contrapartida, você ultrapassou o limite de <strong>Educação</strong> devido ao curso de Inglês.
                      </p>
                      <button className="mt-6 w-full btn border-accent/30 text-accent text-xs font-bold hover:bg-accent/10 transition-all uppercase tracking-widest">Ajustar Orçamentos</button>
                   </div>
                   <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/10 blur-[50px] rounded-full group-hover:bg-accent/20 transition-all"></div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
