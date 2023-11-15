import { create } from 'zustand';

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductData;
  onOpen: (data: ProductData) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductData) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
