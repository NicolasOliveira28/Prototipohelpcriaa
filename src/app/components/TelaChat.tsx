import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowLeft, Send, Paperclip, User, Shield, CheckCheck } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "conselho";
  text: string;
  timestamp: Date;
  read?: boolean;
}

export function TelaChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "conselho",
      text: "Olá! Sou Ana Paula, conselheira tutelar. Recebemos sua solicitação e estamos aqui para te ajudar. Você está em segurança agora.",
      timestamp: new Date(Date.now() - 30000),
      read: true,
    },
    {
      id: 2,
      sender: "conselho",
      text: "Pode me contar com mais detalhes o que está acontecendo? Fique tranquilo(a), tudo que você disser aqui é confidencial.",
      timestamp: new Date(Date.now() - 25000),
      read: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      timestamp: new Date(),
      read: false,
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simula o conselheiro digitando
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const conselhoResponse: Message = {
        id: messages.length + 2,
        sender: "conselho",
        text: "Entendo. Obrigada por compartilhar isso comigo. Vou registrar todas as informações. Você está em um lugar seguro agora?",
        timestamp: new Date(),
        read: true,
      };
      setMessages(prev => [...prev, conselhoResponse]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 max-w-md">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/principal")}
              variant="ghost"
              size="sm"
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3 flex-1">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Conselho Tutelar</h3>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 max-w-md space-y-4">
          {/* Aviso de privacidade */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-center">
            <p className="text-xs text-yellow-800">
              🔒 Esta conversa é criptografada e confidencial
            </p>
          </div>

          {/* Mensagens */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-l-2xl rounded-tr-2xl"
                    : "bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl shadow-md"
                } px-4 py-3`}
              >
                {message.sender === "conselho" && (
                  <p className="text-xs font-semibold text-blue-600 mb-1">
                    Ana Paula - Conselheira
                  </p>
                )}
                <p className="text-sm">{message.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <p
                    className={`text-xs ${
                      message.sender === "user" ? "text-blue-200" : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                  {message.sender === "user" && (
                    <CheckCheck className="w-3 h-3 text-blue-200" />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Digitando... */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-r-2xl rounded-tl-2xl shadow-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4 max-w-md">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-gray-500 hover:text-blue-600"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            
            <Input
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 rounded-full border-gray-300"
            />
            
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="rounded-full w-10 h-10 p-0 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500 mt-2">
            Resposta em até 5 minutos
          </p>
        </div>
      </div>
    </div>
  );
}
