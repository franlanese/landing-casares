'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, X, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { aiChatbotAssistant, type AIChatbotAssistantOutput } from '@/ai/flows/ai-chatbot-assistant';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy sobre contabilidad en Argentina?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollAreaRef.current) {
        setTimeout(() => {
            if (scrollAreaRef.current) {
                scrollAreaRef.current.scrollTo({
                    top: scrollAreaRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response: AIChatbotAssistantOutput = await aiChatbotAssistant({ query: currentInput });
      const botMessage: Message = { id: (Date.now() + 1).toString(), text: response.response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling AI chatbot:', error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), text: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={cn("fixed bottom-4 right-4 z-[999] transition-all duration-300 ease-in-out", isOpen ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0")}>
        <Button onClick={() => setIsOpen(true)} size="lg" className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg !p-0">
          <MessageSquare className="w-8 h-8" />
          <span className="sr-only">Abrir chatbot</span>
        </Button>
      </div>

      <div className={cn("fixed bottom-4 right-4 z-[999] w-[calc(100%-2rem)] max-w-sm transition-all duration-300 ease-in-out", isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none")}>
        <Card className="flex flex-col h-[70vh] max-h-[70vh] shadow-2xl rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">Asistente Contable</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar chatbot</span>
            </Button>
          </CardHeader>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <CardContent className="p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={cn("flex items-end gap-2", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                  {message.sender === 'bot' && (
                    <Avatar className="w-8 h-8 self-start">
                      <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
                    </Avatar>
                  )}
                  <div className={cn("max-w-[85%] rounded-2xl p-3 text-sm shadow-md", message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                    <p className="leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-end gap-2 justify-start">
                    <Avatar className="w-8 h-8 self-start">
                      <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-2xl rounded-bl-none p-3 shadow-md">
                        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                    </div>
                </div>
              )}
            </CardContent>
          </ScrollArea>
          <CardFooter className="p-2 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta..."
                autoComplete="off"
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}