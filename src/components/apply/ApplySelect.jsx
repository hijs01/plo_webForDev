import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ApplySelect({ label, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <Label className="text-neutral-200">{label}</Label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-neutral-900 border-neutral-700 text-neutral-100">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>

        <SelectContent className="bg-neutral-900 border-neutral-700 text-neutral-100">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}