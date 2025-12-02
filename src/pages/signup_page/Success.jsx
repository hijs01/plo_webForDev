import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/home/Footer";

const Success = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <div>
            <Header />
        </div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black pt-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-2xl mx-auto text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2
                    }}
                    className="flex justify-center mb-6"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.3
                            }}
                            className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"
                        />
                        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-4">
                            <CheckCircle2 className="w-16 h-16 text-white" />
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                >
                    Application Submitted!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-xl text-neutral-300 mb-2"
                >
                    Thank you for your interest
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-neutral-400 mb-8 max-w-md mx-auto"
                >
                    We will review your application and get back to you soon. 
                    Keep an eye on your email for updates!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        onClick={() => navigate("/home")}
                        size="lg"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Go to Home
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        onClick={() => navigate("/developers")}
                        variant="outline"
                        size="lg"
                        className="border-neutral-700 text-neutral-200 hover:bg-neutral-800 gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Meet the Team
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 pt-8 border-t border-neutral-800"
                >
                    <p className="text-sm text-neutral-500">
                        Questions? Contact us at{" "}
                        <a href="mailto:contact@plodevs.com" className="text-indigo-400 hover:text-indigo-300 underline">
                            contact@plodevs.com
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default Success;