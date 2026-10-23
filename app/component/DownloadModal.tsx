"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { Apple, PlayStore, Logo } from "@/public/assets/export";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/frame-the-world/id6762137371";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dignitestudios.frametheworld";

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center justify-center mb-4 shadow-sm">
            <Image
              src={Logo}
              alt="Frame The World"
              className="w-9 h-auto object-contain"
            />
          </div>
          <h3
            id="download-modal-title"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Download Mobile App
          </h3>
          <p className="text-sm text-gray-500 mt-1.5 max-w-xs">
            Experience Frame The World on your smartphone. Choose your platform below:
          </p>
        </div>

        {/* Download Options */}
        <div className="flex flex-col gap-3">
          {/* Apple App Store */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-black bg-gray-50/70 hover:bg-black hover:text-white transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 group-hover:border-white/20 flex items-center justify-center transition-colors shadow-xs">
                <Image
                  src={Apple}
                  alt="Apple App Store"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-gray-300 font-medium">
                  Download on the
                </span>
                <span className="text-base font-semibold text-gray-900 group-hover:text-white leading-tight">
                  Apple App Store
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Google Play Store */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-black bg-gray-50/70 hover:bg-black hover:text-white transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 group-hover:border-white/20 flex items-center justify-center transition-colors shadow-xs">
                <Image
                  src={PlayStore}
                  alt="Google Play Store"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-gray-300 font-medium">
                  Get it on
                </span>
                <span className="text-base font-semibold text-gray-900 group-hover:text-white leading-tight">
                  Google Play Store
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-400 mt-6">
          Free download • Available for iOS and Android
        </p>
      </div>
    </div>
  );
}
