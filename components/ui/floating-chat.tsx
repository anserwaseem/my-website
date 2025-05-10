"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { FC } from "react";
import ChatAssistant from "../sections/contact/chat-assistant";
import { useMediaQuery } from "@/hooks/use-media-query";

type FloatingChatProps = {
  initiallyOpen?: boolean;
};

const FloatingChat: FC<FloatingChatProps> = ({ initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* backdrop for mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              />
            )}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`fixed ${
                isMobile
                  ? "inset-4 z-50"
                  : "bottom-4 right-4 z-50 w-[400px] shadow-2xl"
              }`}
            >
              <div
                className={`${isMobile ? "h-[calc(100vh-32px)]" : "h-[600px]"} relative bg-muted rounded-2xl overflow-hidden`}
              >
                <ChatAssistant onClose={() => setIsOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Open chat assistant"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </>
  );
};

export default FloatingChat;
