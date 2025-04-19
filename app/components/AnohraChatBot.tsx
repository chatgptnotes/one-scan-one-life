'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AnohraChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot', text: string }[]>([
    { sender: 'bot', text: 'Hi there! I\'m Anohra, your healthcare assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { sender: 'user', text: inputValue };
    setMessages([...messages, userMessage as any]);
    setInputValue('');

    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botResponses = [
        "I'm analyzing your query. Could you provide more details about your symptoms?",
        "Based on what you've shared, I recommend consulting with a specialist. Would you like me to help schedule an appointment?",
        "That's a common concern. Here's what medical research suggests about this condition...",
        "I understand your concern. One Scan One Life has expert doctors who specialize in this area.",
        "Would you like me to provide information about treatment options available for this condition?"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { sender: 'bot', text: randomResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 mb-4 border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 relative mr-2 rounded-full overflow-hidden bg-white p-1">
                <Image
                  src="/images/anohra.jpeg"
                  alt="Anohra"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-medium">Anohra - Healthcare Assistant</h3>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-2">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${
                  message.sender === 'user' 
                    ? 'ml-auto bg-blue-500 text-white' 
                    : 'mr-auto bg-white border border-gray-200'
                } rounded-lg p-3 max-w-[80%] shadow-sm`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your health query..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className={`bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-14 w-14 ${isOpen ? 'hidden' : 'animate-pulse'}`}
      >
        <div className="relative h-10 w-10">
          <Image
            src="/images/anohra.jpeg"
            alt="Anohra Chat Bot"
            fill
            className="object-contain rounded-full"
          />
        </div>
      </button>
    </div>
  );
} 