import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowLeft, MapPin } from "lucide-react";

export function DadosPessoais() {
  const navigate = useNavigate();
  const [cep, setCep] = useState("");

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{5})(\d)/, "$1-$2");
    }
    return cep;
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatCEP(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Button
          onClick={() => navigate("/cadastro")}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="flex flex-col items-center gap-6">
          <Logo size={70} />

          <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Localização
            </h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              Informe sua localização para encontrar o Conselho Tutelar mais próximo
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="cep" className="text-gray-700">
                  CEP
                </Label>
                <Input
                  id="cep"
                  type="text"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCEPChange}
                  maxLength={9}
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Não sabe seu CEP? <a href="#" className="text-blue-600 underline">Clique aqui</a>
                </p>
              </div>

              <div>
                <Label htmlFor="cidade" className="text-gray-700">
                  Cidade
                </Label>
                <Input
                  id="cidade"
                  type="text"
                  placeholder="Sua cidade"
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="estado" className="text-gray-700">
                  Estado
                </Label>
                <select
                  id="estado"
                  className="w-full mt-1 h-12 rounded-xl border border-gray-300 px-3 bg-white"
                >
                  <option value="">Selecione seu estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>

              <div>
                <Label htmlFor="bairro" className="text-gray-700">
                  Bairro
                </Label>
                <Input
                  id="bairro"
                  type="text"
                  placeholder="Seu bairro"
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
              </div>

              <Button
                onClick={() => navigate("/principal")}
                className="w-full bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl mt-4"
              >
                Concluir Cadastro
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 w-full">
            <p className="text-xs text-blue-800 text-center">
              📍 Usamos sua localização apenas para conectar você ao Conselho Tutelar da sua região
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
