import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  ArrowLeft, 
  AlertCircle, 
  Phone, 
  MessageCircle, 
  Info, 
  User,
  Settings,
  Shield,
  FileText,
  Upload,
  X,
  Camera,
  Video
} from "lucide-react";

export function TelaPrincipal() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [tiposOcorrencia, setTiposOcorrencia] = useState({
    violenciaFisica: false,
    violenciaPsicologica: false,
    violenciaSexual: false,
    negligencia: false,
    bullying: false,
    outros: false,
  });
  const [descricao, setDescricao] = useState("");
  const [arquivos, setArquivos] = useState<File[]>([]);

  const handleCheckboxChange = (tipo: keyof typeof tiposOcorrencia) => {
    setTiposOcorrencia(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const novosArquivos = Array.from(e.target.files);
      setArquivos(prev => [...prev, ...novosArquivos]);
    }
  };

  const removerArquivo = (index: number) => {
    setArquivos(prev => prev.filter((_, i) => i !== index));
  };

  const handleEnviarSolicitacao = () => {
    // Validação básica
    const algumTipoSelecionado = Object.values(tiposOcorrencia).some(v => v);
    if (!algumTipoSelecionado || !descricao.trim()) {
      alert("Por favor, selecione o tipo de ocorrência e descreva o que aconteceu.");
      return;
    }
    
    // Navega para tela de aguardo
    navigate("/aguardo");
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

          {!showForm ? (
            <>
              {/* Botão de Emergência */}
              <div className="bg-white rounded-3xl shadow-xl p-8 w-full">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Precisa de Ajuda?
                  </h2>
                  <p className="text-sm text-gray-600">
                    Pressione o botão abaixo para solicitar ajuda
                  </p>
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full aspect-square max-w-[280px] mx-auto bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-2xl flex flex-col items-center justify-center gap-3 border-8 border-red-300"
                >
                  <AlertCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
                  <span className="text-white font-bold text-2xl">SOS</span>
                  <span className="text-white text-sm opacity-90">
                    Solicitar Ajuda
                  </span>
                </button>

                <p className="text-center text-xs text-gray-500 mt-6">
                  Ao pressionar, você poderá informar o que está acontecendo
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

                <button 
                  onClick={() => navigate("/chat")}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
                >
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
            </>
          ) : (
            /* Formulário de Solicitação */
            <div className="bg-white rounded-3xl shadow-xl p-6 w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Solicitar Ajuda
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Tipo de Ocorrência */}
                <div>
                  <Label className="text-gray-800 font-semibold mb-3 block">
                    Tipo de Ocorrência *
                  </Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="violenciaFisica"
                        checked={tiposOcorrencia.violenciaFisica}
                        onCheckedChange={() => handleCheckboxChange("violenciaFisica")}
                      />
                      <label
                        htmlFor="violenciaFisica"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Violência Física
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="violenciaPsicologica"
                        checked={tiposOcorrencia.violenciaPsicologica}
                        onCheckedChange={() => handleCheckboxChange("violenciaPsicologica")}
                      />
                      <label
                        htmlFor="violenciaPsicologica"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Violência Psicológica
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="violenciaSexual"
                        checked={tiposOcorrencia.violenciaSexual}
                        onCheckedChange={() => handleCheckboxChange("violenciaSexual")}
                      />
                      <label
                        htmlFor="violenciaSexual"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Violência Sexual
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="negligencia"
                        checked={tiposOcorrencia.negligencia}
                        onCheckedChange={() => handleCheckboxChange("negligencia")}
                      />
                      <label
                        htmlFor="negligencia"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Negligência
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="bullying"
                        checked={tiposOcorrencia.bullying}
                        onCheckedChange={() => handleCheckboxChange("bullying")}
                      />
                      <label
                        htmlFor="bullying"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Bullying / Cyberbullying
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="outros"
                        checked={tiposOcorrencia.outros}
                        onCheckedChange={() => handleCheckboxChange("outros")}
                      />
                      <label
                        htmlFor="outros"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Outros
                      </label>
                    </div>
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <Label htmlFor="descricao" className="text-gray-800 font-semibold mb-2 block">
                    Descreva o que aconteceu *
                  </Label>
                  <Textarea
                    id="descricao"
                    placeholder="Conte com suas palavras o que está acontecendo. Você está em um espaço seguro."
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className="min-h-32 resize-none rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Suas informações são confidenciais e seguras
                  </p>
                </div>

                {/* Upload de Evidências */}
                <div>
                  <Label className="text-gray-800 font-semibold mb-2 block">
                    Evidências (opcional)
                  </Label>
                  <p className="text-xs text-gray-600 mb-3">
                    Você pode anexar fotos ou vídeos se tiver
                  </p>
                  
                  <div className="space-y-2">
                    {arquivos.map((arquivo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                      >
                        <div className="flex items-center gap-2">
                          {arquivo.type.startsWith("image/") ? (
                            <Camera className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Video className="w-5 h-5 text-purple-600" />
                          )}
                          <span className="text-sm text-gray-700 truncate max-w-[200px]">
                            {arquivo.name}
                          </span>
                        </div>
                        <button
                          onClick={() => removerArquivo(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <label className="mt-3 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors">
                    <Upload className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Adicionar foto ou vídeo
                    </span>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Botão de Enviar */}
                <Button
                  onClick={handleEnviarSolicitacao}
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Enviar Solicitação de Ajuda
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Após enviar, você receberá retorno via chat
                </p>
              </div>
            </div>
          )}

          {/* Informações de Segurança */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-4 w-full">
            <p className="text-xs text-center text-gray-700">
              🔒 <strong>Você está seguro.</strong> Todas as suas informações são confidenciais e protegidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}