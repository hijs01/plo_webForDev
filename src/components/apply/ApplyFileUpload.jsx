// src/components/apply/ApplyFileUpload.jsx

import React from "react";
import { Label } from "@/components/ui/label";
import { Upload, FileText, X } from "lucide-react";

export default function ApplyFileUpload({ label, file, setFile }) {
  const handleFileChange = (e) => {
    const uploaded = e.target.files?.[0] || null;
    setFile(uploaded);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="space-y-2">
      <Label className="text-neutral-200">{label}</Label>

      <label className="group relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-700 rounded-lg bg-neutral-900/50 hover:border-blue-500/50 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer overflow-hidden">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        
        {!file ? (
          <div className="flex flex-col items-center justify-center gap-2 text-center px-4">
            <div className="rounded-full bg-neutral-800 p-3 group-hover:bg-blue-500/10 transition-colors">
              <Upload className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-neutral-200">
                Click or drag a file here
              </p>
              <p className="text-xs text-neutral-500">
                PDF, DOC, DOCX (Max 10MB)
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full px-4 py-3 gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 rounded-lg bg-blue-500/10 p-2">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-200 truncate">
                  {file.name}
                </p>
                <p className="text-xs text-neutral-500">
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="flex-shrink-0 rounded-full p-1.5 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </label>
    </div>
  );
}