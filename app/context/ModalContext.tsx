"use client";

import React, { createContext, useContext, useState } from "react";
import DownloadModal from "../component/DownloadModal";

export interface ModalOptions {
  title?: string;
  subtitle?: string;
  showWebLink?: boolean;
}

interface ModalContextType {
  openModal: (options?: ModalOptions | string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string | undefined>();
  const [subtitle, setSubtitle] = useState<string | undefined>();
  const [showWebLink, setShowWebLink] = useState<boolean>(true);

  const openModal = (options?: ModalOptions | string) => {
    if (typeof options === "string") {
      setTitle(options);
      setSubtitle(undefined);
      setShowWebLink(true);
    } else if (options) {
      setTitle(options.title);
      setSubtitle(options.subtitle);
      setShowWebLink(options.showWebLink !== undefined ? options.showWebLink : true);
    } else {
      setTitle(undefined);
      setSubtitle(undefined);
      setShowWebLink(true);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <DownloadModal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        subtitle={subtitle}
        showWebLink={showWebLink}
      />
    </ModalContext.Provider>
  );
}
