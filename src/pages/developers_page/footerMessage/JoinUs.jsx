// src/components/home/JoinUsMessage.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// 위 경로가 애매하면 이렇게 써도 됨:
// import { Card, CardContent } from "../ui/card";
// import { Button } from "../ui/button";

function JoinUsMessage() {
    const navigate = useNavigate();

    return (
        <section className="mt-10 px-6 pb-10">
            <div className="max-w-5xl mx-auto ">
                <Card className="border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950">
                    <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 px-8">
                        <div className="space-y-1.5 flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold">
                                Don't hesitate, pursue your dreams.
                            </h3>
                            <p className="text-sm md:text-base text-neutral-400 max-w-2xl">
                                Pursue your dreams. We will support you.
                                <br />
                                Planning, design, frontend, backend - if you're interested, that's enough.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <Button className="gap-2 whitespace-nowrap" onClick={() => navigate("/signup")}>
                                Apply to join
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default JoinUsMessage;