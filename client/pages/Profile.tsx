import { useState } from "react";
import { 
  LayoutDashboard, Wallet, TrendingUp, TrendingDown, LogOut, 
  Search, Bell, ChevronDown, User, Shield, BellRing, 
  Smartphone, CreditCard, HelpCircle, ArrowLeft, Camera, 
  Settings, Check
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const tabs = [
    { id: "profile", label: "Dados Pessoais", icon: User },
    { id: "security", label: "Segurança", icon: Shield },
    { id: "notifications", label: "Notificações", icon: BellRing },
    { id: "subscription", label: "Assinatura", icon: CreditCard },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

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
          <div className="flex items-center gap-4">
             <button onClick={() => navigate(-1)} className="p-2 bg-white/5 border border-border rounded-xl hover:bg-white/10 text-muted-foreground hover:text-white transition-all">
                <ArrowLeft size={20} />
             </button>
             <h2 className="text-xl font-bold">Configurações do Perfil</h2>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-muted-foreground hover:text-white transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
            </button>
            <div className="flex items-center gap-3 p-1 pl-3 bg-card/40 border border-border rounded-full group transition-colors">
              <span className="text-sm font-semibold">Sidney Máximo</span>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[#071a2b] font-bold text-xs uppercase shadow-lg shadow-accent/20">
                SM
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-[1000px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Profile Tabs */}
              <div className="lg:col-span-1 space-y-2">
                 {tabs.map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${activeTab === tab.id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:bg-white/5 hover:text-white'}`}
                    >
                       <tab.icon size={20} />
                       {tab.label}
                    </button>
                 ))}
              </div>

              {/* Profile Content */}
              <div className="lg:col-span-3">
                 <div className="cardElev p-8">
                    {activeTab === "profile" && (
                       <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                          <div className="flex flex-col md:flex-row gap-8 mb-10">
                             <div className="relative">
                                <div className="w-32 h-32 rounded-3xl bg-accent flex items-center justify-center text-[#071a2b] text-4xl font-black uppercase shadow-2xl shadow-accent/20 border-4 border-card/50">
                                   SM
                                </div>
                                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-[#071a2b] shadow-xl hover:scale-110 transition-transform">
                                   <Camera size={18} />
                                </button>
                             </div>
                             <div className="flex-1">
                                <h3 className="text-2xl font-black">Sidney Máximo</h3>
                                <p className="text-muted-foreground">Membro Premium desde Outubro de 2023</p>
                                <div className="flex gap-2 mt-4">
                                   <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-black rounded-full uppercase tracking-widest border border-primary/20">Growlify PRO</span>
                                   <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-black rounded-full uppercase tracking-widest border border-accent/20">Investidor</span>
                                </div>
                             </div>
                          </div>

                          <form onSubmit={handleSave} className="space-y-6">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                   <label className="label">Nome Completo</label>
                                   <input type="text" className="input" defaultValue="Sidney Máximo" />
                                </div>
                                <div className="space-y-1.5">
                                   <label className="label">E-mail</label>
                                   <input type="email" className="input" defaultValue="sidney@exemplo.com" />
                                </div>
                                <div className="space-y-1.5">
                                   <label className="label">Telefone</label>
                                   <input type="text" className="input" defaultValue="+55 (11) 98888-7777" />
                                </div>
                                <div className="space-y-1.5">
                                   <label className="label">CPF</label>
                                   <input type="text" className="input" defaultValue="***.***.***-00" disabled />
                                </div>
                             </div>

                             <div className="space-y-1.5">
                                <label className="label">Bio</label>
                                <textarea className="input min-h-[100px] py-3" placeholder="Conte um pouco sobre você..." defaultValue="Focado em atingir minha liberdade financeira e investir com inteligência."></textarea>
                             </div>

                             <div className="flex items-center justify-end pt-6 border-t border-border mt-10 gap-4">
                                <button type="button" className="text-muted-foreground hover:text-white font-bold text-sm">Descartar</button>
                                <button type="submit" className="btn btnPrimary h-[48px] px-8 gap-2 relative overflow-hidden">
                                   {saveSuccess ? (
                                      <span className="flex items-center gap-2 animate-in zoom-in-50 duration-300">
                                         <Check size={20} /> Alterações Salvas
                                      </span>
                                   ) : (
                                      <span>Salvar Alterações</span>
                                   )}
                                </button>
                             </div>
                          </form>
                       </div>
                    )}

                    {activeTab === "security" && (
                       <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-8">
                          <div>
                             <h3 className="text-xl font-bold mb-4">Mudar Senha</h3>
                             <div className="space-y-4 max-w-[400px]">
                                <div className="space-y-1.5">
                                   <label className="label">Senha Atual</label>
                                   <input type="password" className="input" placeholder="••••••••" />
                                </div>
                                <div className="space-y-1.5">
                                   <label className="label">Nova Senha</label>
                                   <input type="password" className="input" placeholder="••••••••" />
                                </div>
                                <button className="btn border-border hover:bg-white/5 text-sm font-bold w-full h-[48px]">Atualizar Senha</button>
                             </div>
                          </div>

                          <div className="h-px bg-border"></div>

                          <div>
                             <h3 className="text-xl font-bold mb-4">Autenticação em Duas Etapas</h3>
                             <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-border/50">
                                <div className="flex gap-4">
                                   <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                                      <Smartphone size={24} />
                                   </div>
                                   <div>
                                      <p className="font-bold">Verificação por SMS/App</p>
                                      <p className="text-sm text-muted-foreground mt-0.5">Proteja sua conta com uma camada extra de segurança.</p>
                                   </div>
                                </div>
                                <button className="px-6 py-2 bg-accent/20 text-accent font-black rounded-xl border border-accent/20 hover:bg-accent/30 transition-all">ATIVAR</button>
                             </div>
                          </div>
                       </div>
                    )}

                    {activeTab === "notifications" && (
                       <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
                          <h3 className="text-xl font-bold mb-4">Preferências de Notificação</h3>
                          <div className="space-y-4">
                             {[
                               { title: "Alertas de Gastos", desc: "Receba avisos quando ultrapassar 80% do seu orçamento." },
                               { title: "Relatório Mensal", desc: "Um resumo detalhado das suas finanças todo início de mês." },
                               { title: "Novas Transações", desc: "Notificação instantânea para cada gasto ou receita." },
                               { title: "Dicas de Investimento", desc: "Insights baseados no seu perfil de gastos." }
                             ].map((pref, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all">
                                   <div>
                                      <p className="font-bold">{pref.title}</p>
                                      <p className="text-sm text-muted-foreground mt-0.5">{pref.desc}</p>
                                   </div>
                                   <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-lg shadow-primary/20">
                                      <div className="absolute right-1 top-1 w-4 h-4 bg-[#071a2b] rounded-full"></div>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
