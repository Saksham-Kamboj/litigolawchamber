import { createContext, useContext, useState, useEffect } from 'react'

const WelcomeModalContext = createContext()

export function WelcomeModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if this is the first visit after accepting disclaimer
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome')
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted')

    if (disclaimerAccepted === 'true' && hasSeenWelcome !== 'true') {
      setIsOpen(true)
      localStorage.setItem('hasSeenWelcome', 'true')
    }
  }, [])

  const closeWelcomeModal = () => {
    setIsOpen(false)
  }

  const value = {
    isOpen,
    closeWelcomeModal
  }

  return (
    <WelcomeModalContext.Provider value={value}>
      {children}
    </WelcomeModalContext.Provider>
  )
}

export function useWelcomeModal() {
  const context = useContext(WelcomeModalContext)
  if (!context) {
    throw new Error('useWelcomeModal must be used within a WelcomeModalProvider')
  }
  return context
}

export { WelcomeModalContext }
