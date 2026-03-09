import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LayoutDashboard } from "lucide-react";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login with:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 min-h-screen">
      <div className="w-full max-w-[520px] cardElev p-[18px]">
        {/* Topbar / Logo Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[34px] h-[34px] bg-[#22C55E] rounded-[8px] flex items-center justify-center shadow-lg shadow-[#22C55E]/20">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#071a2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
             </svg>
          </div>
          <div>
            <h1 className="text-[24px] font-extrabold text-white leading-tight">Growlify</h1>
            <p className="text-[12px] text-muted-foreground font-medium uppercase tracking-wider">Seu Administrador Financeiro Inteligente</p>
          </div>
        </div>

        <h2 className="text-[20px] font-extrabold text-white mb-6">Entrar</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="label">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="seu@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="label">Senha</label>
            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-white transition-colors"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                title={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btnPrimary w-full mt-2 h-[48px] text-[16px]">
            Entrar
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link to="#" className="text-[14px] text-muted-foreground hover:text-white transition-colors">
            Esqueceu a senha?
          </Link>
          
          <div className="text-[14px] text-muted-foreground">
            Ainda não tem conta?{" "}
            <Link to="#" className="text-accent hover:underline font-semibold">
              Criar conta
            </Link>
          </div>

          <Link to="#" className="text-[12px] text-muted-foreground/60 hover:text-muted-foreground transition-colors mt-2">
            Termos e responsabilidades
          </Link>
        </div>
      </div>
    </div>
  );
}
