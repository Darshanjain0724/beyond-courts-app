"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Send } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your mediation assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessages = [
      ...messages,
      { role: "user", content: input.trim() } as Message,
    ]
    setMessages(newMessages)
    setInput("")

    // TODO: Integrate with BHASHINI API for response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "I understand. Let me help you with that...",
        },
      ])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // TODO: Implement speech-to-text using BHASHINI API
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="flex h-[calc(100vh-12rem)] flex-col rounded-lg border bg-background shadow-sm">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className={isRecording ? "bg-red-100" : ""}
              onClick={toggleRecording}
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Toggle voice input</span>
            </Button>
            <div className="relative flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-[40px] w-full resize-none rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                rows={1}
              />
            </div>
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 