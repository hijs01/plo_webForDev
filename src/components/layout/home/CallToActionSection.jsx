// src/components/home/CallToActionSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";        
import { ArrowRight, Github } from "lucide-react";

function CallToActionSection() {
  const navigate = useNavigate();

  return (
    <section className="mt-20">
      <Card className="border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950">
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              We're always looking for people to build with.
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              Our goal is not just side projects, but real services
              and startups that make an impact.
              <br />
              Planning, design, frontend, backend - if you're interested, that's enough.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="gap-2" onClick={() => navigate("/signup")}>
              Apply to join
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-neutral-200 gap-2"
            >
              <Github className="h-4 w-4" />
              Star our repos
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CallToActionSection;