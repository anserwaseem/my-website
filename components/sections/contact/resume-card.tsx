"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import data from "@/data";

export default function ResumeCard() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { resume, home } = data;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume.pdfUrl;
    link.download = `${home.name.replace(" ", "-")}-resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsPreviewOpen(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[450px] min-w-[320px] rounded-xl bg-muted border p-4 mb-4"
      >
        <div className="flex items-center justify-between gap-4">
          {/* left side - info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">📄</span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-sm truncate">Resume</h3>
            </div>
          </div>

          {/* right side - buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <Button
              onClick={() => setIsPreviewOpen(true)}
              variant="outline"
              size="sm"
              className="gap-1 text-xs px-3"
            >
              <Eye size={14} />
              Preview
            </Button>
            <Button
              onClick={handleDownload}
              size="sm"
              className="gap-1 text-xs px-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Download size={14} />
              PDF
            </Button>
          </div>
        </div>
      </motion.div>

      {/* resume preview modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] m-4 bg-background rounded-2xl border overflow-hidden">
            {/* modal header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Resume Preview</h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="gap-2"
                >
                  <Download size={16} />
                  PDF
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPreviewOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  ✕
                </Button>
              </div>
            </div>

            {/* modal content */}
            <div className="p-6 h-[70vh] overflow-auto">
              <Image
                src={resume.previewImage}
                alt="Resume Preview"
                width={800}
                height={1000}
                className="w-full h-auto object-contain mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
