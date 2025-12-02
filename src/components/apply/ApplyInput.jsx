import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ApplyInput({ label, id, type = "text", value, onChange, placeholder }) {
  const handleChange = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-neutral-200">
        {label}
      </Label>

      <Input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-neutral-900 border-neutral-700 text-neutral-100"
      />
    </div>
  );
}