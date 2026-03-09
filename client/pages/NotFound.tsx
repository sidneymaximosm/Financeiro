import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A2540] text-white p-4">
      <div className="w-full max-w-[500px] cardElev p-12 text-center animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 rounded-3xl bg-error/20 flex items-center justify-center text-error mx-auto mb-6 shadow-xl shadow-error/10">
           <AlertCircle size={48} />
        </div>
        
        <h1 className="text-6xl font-black mb-2 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold mb-6 text-muted-foreground">Página não encontrada</h2>
        
        <p className="text-muted-foreground mb-10 leading-relaxed">
          O caminho <code className="px-2 py-1 bg-white/5 rounded-md text-accent">{location.pathname}</code> não existe ou foi removido.
        </p>
        
        <Link to="/" className="btn btnPrimary h-[52px] w-full gap-2 text-lg">
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
