import Header from "@/components/layout/Header";
import ApplyForm from "@/components/apply/ApplyForm";
import { motion } from "framer-motion";
import Footer from "@/components/layout/home/Footer";

const SignupPage = () => {  
  return(
    <>
    <div>
      <Header />
    </div>
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <ApplyForm />
      </motion.div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default SignupPage;
