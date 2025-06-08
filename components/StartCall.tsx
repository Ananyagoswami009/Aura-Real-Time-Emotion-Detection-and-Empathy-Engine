import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, Loader } from "lucide-react";
import { useState } from "react";

export default function StartCall() {
  const { status, connect } = useVoice();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    connect()
      .then(() => {
        console.log("Connected successfully");
      })
      .catch((error) => {
        console.error("Connection failed", error);
      })
      .finally(() => {
        setIsConnecting(false);
      });
  };

  return (
    <AnimatePresence>
      {status.value !== "connected" && (
        <motion.div
          className="fixed inset-0 p-4 flex items-center justify-center bg-background bg-opacity-70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <Button
              className="z-50 flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
              onClick={handleConnect}
              disabled={isConnecting}
            >
              <Phone className="size-4 opacity-80" strokeWidth={2} />
              <span>{isConnecting ? "Connecting..." : "Start Call"}</span>
              {isConnecting && <Loader className="animate-spin ml-2 size-4" />}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
