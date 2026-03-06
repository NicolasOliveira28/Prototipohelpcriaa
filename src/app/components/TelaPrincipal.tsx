import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { 
  ArrowLeft, 
  AlertCircle, 
  Phone, 
  MessageCircle, 
  Info, 
  User,
  Settings,
  Shield,
  FileText
} from "lucide-react";

export function TelaPrincipal() {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emergenciaAtivada, setEmergenciaAtivada] = useState(false);

  const handleEmergencia = () => {
    setShowConfirmation(true);
  };

  const confirmarEmergencia = () => {
    setEmergenciaAtivada(true);
    setShowConfirmation(false);
    // Aqui seria feita a chamada real ao Conselho Tutelar
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => navigate("/apresentacao")}
            variant="ghost"
            size="sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Menu
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow-md px-6 py-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Bem-vindo(a),</p>
              <p className="font-semibold text-gray-800">Usuário</p>
            </div>
          </div>

          {emergenciaAtivada && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 w-full animate-pulse">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-green-800">Ajuda a caminho!</p>
                  <p className="text-sm text-green-700">
                    O Conselho Tutelar foi notificado
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Botão de Emergência */}
          <div className="bg-white rounded-3xl shadow-xl p-8 w-full">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Precisa de Ajuda?
              </h2>
              <p className="text-sm text-gray-600">
                Pressione o botão abaixo em caso de emergência
              </p>
            </div>

            <button
              onClick={handleEmergencia}
              className="w-full aspect-square max-w-[280px] mx-auto bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-2xl flex flex-col items-center justify-center gap-3 border-8 border-red-300"
            >
              <AlertCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
              <span className="text-white font-bold text-2xl">SOS</span>
              <span className="text-white text-sm opacity-90">
                Acionar Conselho Tutelar
              </span>
            </button>

            <p className="text-center text-xs text-gray-500 mt-6">
              Ao pressionar, o Conselho Tutelar da sua região será notificado imediatamente
            </p>
          </div>

          {/* Opções Adicionais */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <button className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Contatos</span>
            </button>

            <button className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Chat</span>
            </button>

            <button className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full">
                <Info className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Informações</span>
            </button>

            <button className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Direitos</span>
            </button>
          </div>

          {/* Informações de Segurança */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-4 w-full">
            <p className="text-xs text-center text-gray-700">
              🔒 <strong>Você está seguro.</strong> Todas as suas informações são confidenciais e protegidas.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertCircle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              Confirmar Emergência
            </h3>
            <p className="text-center text-gray-600 mb-6 text-sm">
              Tem certeza que deseja acionar o Conselho Tutelar? Eles serão notificados imediatamente.
            </p>

            <div className="space-y-3">
              <Button
                onClick={confirmarEmergencia}
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl"
              >
                Sim, Acionar Agora
              </Button>
              <Button
                onClick={() => setShowConfirmation(false)}
                variant="outline"
                className="w-full h-12 rounded-xl"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
