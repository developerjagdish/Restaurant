import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface WebhookResponse {
  output: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add initial greeting when chatbot opens for the first time
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Namaste! Welcome to Shyamnath Restaurant! 🙏\n\nI'm here to help you with:\n• Menu information and recommendations\n• Restaurant hours and location\n• Dietary options (veg, vegan, Jain food)\n• Parking and seating details\n• General inquiries\n\nHow can I assist you today?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://dhtest4.app.n8n.cloud/webhook/f7db284f-c5c6-4837-a116-bf9b1d939441', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: WebhookResponse[] = await response.json();
      
      if (data && data[0] && data[0].output) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data[0].output.trim(), // Clean up any extra whitespace/newlines
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try calling us directly at +91-9876543210 for immediate assistance, or visit us at Spice Garden, 2nd Floor, Indiranagar 100 Feet Rd, Bangalore.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 lg:bottom-6 lg:right-6 w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 z-50 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-orange-600 hover:bg-orange-700 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5 lg:w-6 lg:h-6 text-white mx-auto" />
        ) : (
          <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white mx-auto" />
        )}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 lg:bottom-24 lg:right-6 w-[calc(100vw-2rem)] max-w-sm lg:max-w-md xl:w-96 h-[70vh] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 lg:p-4 text-white">
            <h3 className="font-semibold text-base lg:text-lg">Shyamnath Restaurant</h3>
            <p className="text-orange-100 text-xs lg:text-sm">How can we help you today? 🍛</p>
          </div>

          {/* Messages Container */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-3 lg:p-4 space-y-3 lg:space-y-4 bg-gray-50"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] lg:max-w-xs px-3 lg:px-4 py-2 rounded-2xl ${
                    message.isUser
                      ? 'bg-orange-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                  }`}
                >
                  <p className="text-xs lg:text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                  <p 
                    className={`text-xs mt-1 ${
                      message.isUser ? 'text-orange-100' : 'text-gray-500'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border px-3 lg:px-4 py-2 flex items-center space-x-2">
                  <Loader2 className="w-3 h-3 lg:w-4 lg:h-4 animate-spin" />
                  <span className="text-xs lg:text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 lg:p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about menu, timings, location..."
                className="flex-1 px-3 lg:px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm lg:text-base"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-600 text-white rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <Send className="w-3 h-3 lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;