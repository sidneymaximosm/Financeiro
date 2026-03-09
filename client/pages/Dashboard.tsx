import { LayoutDashboard, Wallet, TrendingUp, TrendingDown, LogOut, Search, PlusCircle, Bell, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <TrendingUp size={20} /> Planejamento
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl transition-all">
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
            <div className="flex items-center gap-3 p-1 pl-3 bg-card/40 border border-border rounded-full hover:bg-card/60 transition-colors cursor-pointer group">
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
            <button className="btn btnPrimary h-[48px] px-6 gap-2">
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

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Transactions */}
            <div className="lg:col-span-2 cardElev p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Transações Recentes</h3>
                <Link to="#" className="text-accent text-sm hover:underline font-semibold">Ver todas</Link>
              </div>
              <div className="space-y-4">
                {recentTransactions.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-border group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'income' ? 'bg-primary/20 text-primary' : 'bg-error/20 text-error'}`}>
                        {tx.type === 'income' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
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

            {/* Quick Summary Card */}
            <div className="cardElev p-6 bg-primary/5 border-primary/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold">Meta do Mês</h3>
                <p className="text-muted-foreground text-sm mt-1">Economizar R$ 1.500,00</p>
                
                <div className="mt-8 space-y-4">
                   <div className="h-4 bg-background/50 rounded-full overflow-hidden border border-border">
                      <div className="h-full bg-primary w-[65%] shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
                   </div>
                   <p className="text-right text-sm font-bold text-primary">65% alcançado</p>
                </div>

                <div className="mt-12 bg-card/60 rounded-2xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Dica Financeira</p>
                  <p className="text-sm mt-2 italic leading-relaxed">"Sua meta está 15% acima do mês passado. Continue assim para atingir sua liberdade financeira mais cedo!"</p>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
