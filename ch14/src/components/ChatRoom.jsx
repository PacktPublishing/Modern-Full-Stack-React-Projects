import { useChat } from '../hooks/useChat.js'
import { EnterMessage } from './EnterMessage.jsx'
import { ChatMessage } from './ChatMessage.jsx'

export function ChatRoom() {
  const { messages, sendMessage } = useChat()
  return (
    <div>
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
      <EnterMessage onSend={sendMessage} />
    </div>
  )
}
