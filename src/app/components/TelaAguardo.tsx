import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { CheckCircle, Clock, MessageCircle } from "lucide-react";

export function TelaAguardo() {
  const navigate = useNavigate();
  const [dots, setDots] = useState(".");

  useEffect(() => {
    // Animação dos pontos
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "." : prev + ".");
    }, 500);

    // Simula o tempo de espera e redireciona para o chat
    const redirectTimer = setTimeout(() => {
      navigate("/chat");
    }, 4000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <Logo size={80} />
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6">
          {/* Ícone de sucesso */}
          <div className="flex justify-center">
            <div className="bg-green-100 p-6 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Mensagem principal */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Solicitação Enviada!
            </h2>
            <p className="text-gray-600">
              Sua solicitação foi recebida com sucesso pelo Conselho Tutelar da sua região.
            </p>
          </div>

          {/* Status de aguardo */}
          <div className="bg-blue-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-blue-600 animate-pulse" />
              <p className="text-blue-800 font-semibold">
                Aguardando retorno{dots}
              </p>
            </div>
            
            <p className="text-sm text-blue-700">
              Um profissional entrará em contato com você em breve via chat
            </p>
          </div>

          {/* Informações adicionais */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-left bg-gray-50 rounded-lg p-3">
              <MessageCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Chat disponível
                </p>
                <p className="text-xs text-gray-600">
                  Você será redirecionado automaticamente
                </p>
              </div>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="pt-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 animate-[loading_4s_ease-in-out]" 
                   style={{
                     animation: 'loading 4s ease-in-out forwards',
                   }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Conectando você ao suporte...
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-xs text-center text-green-800">
            ✨ Você não está sozinho(a). Estamos aqui para ajudar.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
