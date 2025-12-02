import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApplyInput from "@/components/apply/ApplyInput";
import ApplySelect from "@/components/apply/ApplySelect";
import ApplyFileUpload from "@/components/apply/ApplyFileUpload";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/supabaseClient";

const ApplyForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [major, setMajor] = useState("");
    const [email, setEmail] = useState("");
    const [cvFile, setCvFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !year || !major || !cvFile || !email) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            // 1) 파일 업로드
            const ext = cvFile.name.split(".").pop();
            const filename = `${crypto.randomUUID()}.${ext}`;
            const filePath = `resumes/${filename}`;

            const { error: uploadError } = await supabase.storage
                .from("private_resume")
                .upload(filePath, cvFile, {
                    cacheControl: "3600",
                    upsert: false,
                });

            if (uploadError) {
                console.error(uploadError);
                alert(`File upload failed. Please try again. ${uploadError.message}`);
                setLoading(false);
                return;
            }
            // 3) DB에 insert
            const { error: insertError } = await supabase
                .from("applications")
                .insert([
                    {
                        name,
                        year,
                        major,
                        email,
                        resume_url: filePath,
                    },
                ]);

            if (insertError) {
                console.error(insertError);
                alert(`Failed to save application. Please try again. ${insertError.message}`);
                setLoading(false);
                return;
            }

            // 성공 시 Success 페이지로 이동
            navigate("/success");
        } catch (err) {
            console.error(err);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="w-full max-w-xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.h2 
                className="text-2xl font-semibold text-center mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                SIGN UP RIGHT NOW
            </motion.h2>

            <motion.p 
                className="text-sm text-neutral-400 text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                Fill in your information and let's get started
            </motion.p>

            <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <ApplyInput label="Name" value={name} onChange={setName} placeholder="John Doe" />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ApplySelect label="Year" value={year} onChange={setYear} options={[
                        { value: "freshman", label: "Freshman" },
                        { value: "sophomore", label: "Sophomore" },
                        { value: "junior", label: "Junior" },
                        { value: "senior", label: "Senior" },
                        { value: "graduate", label: "Graduate" },
                        { value: "other", label: "Other" },
                    ]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ApplyInput label="Major" value={major} onChange={setMajor} placeholder="Computer Science" />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ApplyInput 
                        label="Email"  
                        type="email"   
                        id="email" 
                        placeholder="your.email@example.com" 
                        value={email} 
                        onChange={setEmail} 
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ApplyFileUpload label="Resume" file={cvFile} setFile={setCvFile} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                        {loading ? "Submitting..." : "Apply Now"}
                    </Button>
                </motion.div>
            </motion.form>
        </motion.div>
    );
}

export default ApplyForm;