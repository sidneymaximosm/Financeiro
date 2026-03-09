import { useState } from "react";
import { 
  LayoutDashboard, Wallet, TrendingUp, TrendingDown, LogOut, 
  Search, PlusCircle, Bell, ChevronDown, X, DollarSign, 
  Calendar, CreditCard, ArrowUpRight, ArrowDownLeft 
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const chartData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Fev', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Abr', income: 2780, expenses: 3908 },
  { name: 'Mai', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const stats = [
    { label: "Saldo Total", value: "R$ 4.250,00", icon: Wallet, color: "text-accent" },
    { label: "Receitas", value: "R$ 7.800,00", icon: TrendingUp, color: "text-primary" },
    { label: "Despesas", value: "R$ 3.550,00", icon: TrendingDown, color: "text-error" },
  ];

  const recentTransactions = [
    { name: "Supermercado Extra", date: "Hoje, 14:20", value: "- R$ 150,00", category: "Alimentação", type: "expense" },
    { name: "Salário Mensal", date: "Hoje, 09:00", value: "+ R$ 5.000,00", category: "Salário", type: "income" },
    { name: "Posto Shell", date: "Ontem, 18:30", value: "- R$ 220,00", category: "Transporte", type: "expense" },
    { name: "Netflix", date: "Ontem, 10:15", value: "- R$ 39,90", category: "Lazer", type: "expense" },
  ];

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
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/planejamento" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl transition-all">
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
            <input type="text" placeholder="Pesquisar transações..." className="bg-transparent border-none outline-none text-sm w-full" />
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

        {/* Dashboard Grid */}
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold">Olá, Sidney! 👋</h2>
              <p className="text-muted-foreground mt-1">Bem-vindo ao seu painel financeiro.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn btnPrimary h-[48px] px-6 gap-2">
              <PlusCircle size={20} /> Nova Transação
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="cardElev p-6 flex items-center justify-between group hover:scale-[1.02] transition-transform cursor-pointer">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 cardElev p-6 h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Resumo Financeiro</h3>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-xs font-semibold text-primary"><span className="w-3 h-3 bg-primary rounded-full"></span> Receitas</div>
                   <div className="flex items-center gap-2 text-xs font-semibold text-error"><span className="w-3 h-3 bg-error rounded-full"></span> Despesas</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0F2F4A', border: '1px solid #1E3A5F', borderRadius: '12px'}}
                    itemStyle={{fontSize: '12px'}}
                  />
                  <Area type="monotone" dataKey="income" stroke="#22C55E" fillOpacity={1} fill="url(#colorIncome)" strokeWidth={3} />
                  <Area type="monotone" dataKey="expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpenses)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="cardElev p-6 bg-primary/5 border-primary/20 relative overflow-hidden flex flex-col">
              <div className="relative z-10">
                <h3 className="text-xl font-bold">Meta do Mês</h3>
                <p className="text-muted-foreground text-sm mt-1">Economizar R$ 1.500,00</p>
                
                <div className="mt-8 space-y-4">
                   <div className="h-4 bg-background/50 rounded-full overflow-hidden border border-border">
                      <div className="h-full bg-primary w-[65%] shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-1000"></div>
                   </div>
                   <p className="text-right text-sm font-bold text-primary">65% alcançado</p>
                </div>

                <div className="mt-8 bg-card/60 rounded-2xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Dica Financeira</p>
                  <p className="text-sm mt-2 italic leading-relaxed text-muted-foreground">"Sua meta está 15% acima do mês passado. Continue assim para atingir sua liberdade financeira mais cedo!"</p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                 <button className="w-full btn border-primary/30 hover:bg-primary/10 text-primary text-sm font-bold">Ver Planejamento Completo</button>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full"></div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
            <div className="lg:col-span-2 cardElev p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Transações Recentes</h3>
                <Link to="/carteira" className="text-accent text-sm hover:underline font-semibold">Ver todas</Link>
              </div>
              <div className="space-y-4">
                {recentTransactions.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-border group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'income' ? 'bg-primary/20 text-primary' : 'bg-error/20 text-error'}`}>
                        {tx.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-white transition-colors">{tx.name}</p>
                        <p className="text-xs text-muted-foreground">{tx.date} • {tx.category}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${tx.type === 'income' ? 'text-primary' : 'text-white'}`}>
                      {tx.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cardElev p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-6">Suas Carteiras</h3>
              <div className="space-y-4 flex-1">
                 <div className="p-4 bg-gradient-to-br from-[#38BDF8] to-[#1E3A5F] rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
                    <p className="text-xs text-white/70 uppercase font-bold tracking-widest">Nubank Principal</p>
                    <p className="text-xl font-black mt-2">R$ 2.450,00</p>
                    <CreditCard className="absolute bottom-4 right-4 text-white/20 w-12 h-12 rotate-12 group-hover:rotate-0 transition-transform" />
                 </div>
                 <div className="p-4 bg-gradient-to-br from-[#22C55E] to-[#0A2540] rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
                    <p className="text-xs text-white/70 uppercase font-bold tracking-widest">Itaú Investimentos</p>
                    <p className="text-xl font-black mt-2">R$ 1.800,00</p>
                    <CreditCard className="absolute bottom-4 right-4 text-white/20 w-12 h-12 rotate-12 group-hover:rotate-0 transition-transform" />
                 </div>
              </div>
              <button onClick={() => navigate("/carteira")} className="mt-6 w-full btn border-border hover:bg-white/5 text-sm font-bold">Gerenciar Contas</button>
            </div>
          </div>
        </div>
      </main>

      {/* New Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-[500px] cardElev p-8 relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6">Nova Transação</h2>
            
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="flex-1 btn btnPrimary h-[48px] gap-2">
                     <PlusCircle size={18} /> Receita
                  </button>
                  <button type="button" className="flex-1 btn border-error/50 text-error hover:bg-error/10 h-[48px] gap-2 font-bold">
                     <TrendingDown size={18} /> Despesa
                  </button>
               </div>

               <div className="space-y-1.5">
                  <label className="label">Valor</label>
                  <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">R$</span>
                     <input type="text" className="input pl-12 text-xl font-bold" placeholder="0,00" />
                  </div>
               </div>

               <div className="space-y-1.5">
                  <label className="label">Descrição</label>
                  <input type="text" className="input" placeholder="Ex: Almoço, Salário, etc." />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="label">Categoria</label>
                    <select className="input bg-[#0a254080]">
                       <option>Alimentação</option>
                       <option>Salário</option>
                       <option>Lazer</option>
                       <option>Transporte</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="label">Data</label>
                    <input type="date" className="input" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
               </div>

               <button type="submit" onClick={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="w-full btn btnPrimary h-[52px] text-lg mt-4 shadow-xl shadow-primary/20">
                  Salvar Transação
               </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
