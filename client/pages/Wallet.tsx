import { 
  LayoutDashboard, Wallet, TrendingUp, TrendingDown, LogOut, 
  Search, Bell, ChevronDown, PlusCircle, CreditCard, 
  ArrowUpRight, ArrowDownLeft, Filter, Calendar, Settings,
  Building, Landmark, Coins
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const accounts = [
  { name: "Nubank Principal", type: "Corrente", balance: "R$ 2.450,00", color: "from-[#38BDF8] to-[#1E3A5F]", icon: Building },
  { name: "Itaú Investimentos", type: "Investimentos", balance: "R$ 1.800,00", color: "from-[#22C55E] to-[#0A2540]", icon: Landmark },
  { name: "XP Corretora", type: "Ações", balance: "R$ 12.300,00", color: "from-[#FBBF24] to-[#071a2b]", icon: Coins },
];

const cards = [
  { name: "Visa Infinite", limit: "R$ 5.000,00", used: "R$ 1.250,00", expiry: "12/28", color: "from-[#334155] to-[#0f172a]" },
  { name: "Mastercard Black", limit: "R$ 10.000,00", used: "R$ 3.800,00", expiry: "05/29", color: "from-[#7c2d12] to-[#451a03]" },
];

export default function WalletPage() {
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
          <Link to="/planejamento" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <TrendingUp size={20} /> Planejamento
          </Link>
          <Link to="/carteira" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold">
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
            <input type="text" placeholder="Pesquisar contas..." className="bg-transparent border-none outline-none text-sm w-full" />
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
              <h2 className="text-3xl font-extrabold">Carteira 🏦</h2>
              <p className="text-muted-foreground mt-1">Gerencie suas contas, cartões e patrimônio.</p>
            </div>
            <button className="btn btnPrimary h-[48px] px-6 gap-2">
              <PlusCircle size={20} /> Adicionar Conta
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 space-y-8">
                {/* Accounts Grid */}
                <div>
                   <h3 className="text-xl font-bold mb-4">Suas Contas</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {accounts.map((acc, i) => (
                         <div key={i} className={`cardElev p-6 bg-gradient-to-br ${acc.color} relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform shadow-xl shadow-black/30`}>
                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                               <div className="flex justify-between items-start">
                                  <div>
                                     <p className="text-xs text-white/70 uppercase font-black tracking-widest">{acc.type}</p>
                                     <p className="text-xl font-black mt-1">{acc.name}</p>
                                  </div>
                                  <acc.icon className="text-white/40" size={32} />
                               </div>
                               <div>
                                  <p className="text-xs text-white/50 mb-1">Saldo Atual</p>
                                  <p className="text-3xl font-black">{acc.balance}</p>
                               </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] rounded-full group-hover:bg-white/20 transition-all"></div>
                         </div>
                      ))}
                      <div className="cardElev p-6 border-dashed border-2 border-border/50 bg-white/5 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/10 transition-colors group">
                         <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground group-hover:text-white transition-colors">
                            <PlusCircle size={24} />
                         </div>
                         <p className="text-sm font-bold text-muted-foreground group-hover:text-white transition-colors">Conectar Nova Instituição</p>
                      </div>
                   </div>
                </div>

                {/* Credit Cards Grid */}
                <div>
                   <h3 className="text-xl font-bold mb-4">Cartões de Crédito</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cards.map((card, i) => (
                         <div key={i} className={`cardElev p-6 bg-gradient-to-br ${card.color} relative overflow-hidden group cursor-pointer shadow-xl shadow-black/30`}>
                            <div className="relative z-10">
                               <div className="flex justify-between items-start mb-8">
                                  <div className="flex items-center gap-2">
                                     <div className="w-10 h-6 bg-white/20 rounded-md backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                        <div className="w-6 h-4 bg-primary/40 rounded-sm"></div>
                                     </div>
                                     <p className="font-bold text-sm">{card.name}</p>
                                  </div>
                                  <Settings size={18} className="text-white/40 hover:text-white transition-colors" />
                               </div>
                               <div className="space-y-4">
                                  <div className="flex justify-between items-end">
                                     <p className="text-xl font-black tracking-wider">**** **** **** 4589</p>
                                     <p className="text-xs font-bold text-white/50">{card.expiry}</p>
                                  </div>
                                  <div className="space-y-1.5">
                                     <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-white/60">
                                        <span>Fatura Atual</span>
                                        <span>Limite R$ {card.limit}</span>
                                     </div>
                                     <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                                        <div className="h-full bg-white w-[35%] shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
                                     </div>
                                     <p className="text-right text-sm font-bold">{card.used}</p>
                                  </div>
                               </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-[40px] rounded-full group-hover:bg-white/10 transition-all"></div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="space-y-8">
                {/* Net Worth Summary */}
                <div className="cardElev p-6 bg-primary/5 border-primary/20 relative overflow-hidden">
                   <div className="relative z-10">
                      <h3 className="text-xl font-bold">Patrimônio Líquido</h3>
                      <p className="text-4xl font-black mt-4">R$ 16.550,00</p>
                      <div className="mt-6 space-y-3">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Total em Contas</span>
                            <span className="font-bold">R$ 4.250,00</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Total em Investimentos</span>
                            <span className="font-bold">R$ 12.300,00</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Total em Dívidas</span>
                            <span className="font-bold text-error">R$ 0,00</span>
                         </div>
                      </div>
                      <div className="h-px bg-border my-6"></div>
                      <div className="flex items-center gap-2 text-primary text-sm font-bold">
                         <TrendingUp size={16} />
                         <span>+ R$ 2.450 este mês</span>
                      </div>
                   </div>
                   <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full"></div>
                </div>

                {/* Account Settings / Actions */}
                <div className="cardElev p-6 space-y-4">
                   <h3 className="text-lg font-bold">Ações Rápidas</h3>
                   <div className="space-y-2">
                      <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-border/50 group">
                         <div className="flex items-center gap-3">
                            <ArrowUpRight size={18} className="text-primary" />
                            <span className="text-sm font-bold">Exportar Extrato</span>
                         </div>
                         <ChevronDown size={14} className="-rotate-90 text-muted-foreground group-hover:text-white" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-border/50 group">
                         <div className="flex items-center gap-3">
                            <Filter size={18} className="text-accent" />
                            <span className="text-sm font-bold">Conciliar Contas</span>
                         </div>
                         <ChevronDown size={14} className="-rotate-90 text-muted-foreground group-hover:text-white" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-border/50 group">
                         <div className="flex items-center gap-3">
                            <Calendar size={18} className="text-warning" />
                            <span className="text-sm font-bold">Agendamentos</span>
                         </div>
                         <ChevronDown size={14} className="-rotate-90 text-muted-foreground group-hover:text-white" />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
