import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LayoutDashboard, ArrowLeft } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary redirect to dashboard for preview
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 min-h-screen">
      <div className="w-full max-w-[520px] cardElev p-[18px]">
        {/* Topbar / Logo Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] bg-[#22C55E] rounded-[8px] flex items-center justify-center shadow-lg shadow-[#22C55E]/20">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#071a2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
               </svg>
            </div>
            <div>
              <h1 className="text-[24px] font-extrabold text-white leading-tight">Growlify</h1>
            </div>
          </div>
          <Link to="/" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        <h2 className="text-[20px] font-extrabold text-white mb-6">Criar Conta</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="label">Nome Completo</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input"
              placeholder="Ex: João Silva"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="label">E-mail</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input"
              placeholder="seu@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="label">Senha</label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="label">Confirmar Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="input"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btnPrimary w-full mt-2 h-[48px] text-[16px]">
            Criar minha conta
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="text-[14px] text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/" className="text-accent hover:underline font-semibold">
              Entrar agora
            </Link>
          </div>

          <p className="text-[11px] text-center text-muted-foreground/50 max-w-[320px]">
            Ao criar sua conta, você concorda com nossos{" "}
            <Link to="#" className="text-muted-foreground/80 hover:text-white underline transition-colors">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link to="#" className="text-muted-foreground/80 hover:text-white underline transition-colors">
              Políticas de Privacidade
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
