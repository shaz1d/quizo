"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";

interface AlertModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  open,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title="Are you sure?"
      description="This action can not be undone."
      isOpen={open}
      onClose={onClose}
    >
      <div className="mt-6 flex items-center gap-2 justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
