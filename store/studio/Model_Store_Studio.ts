import { create } from "zustand";

interface Model_Store_Studio {
  studioToolBoxIsOpen: boolean;
  studioToolBoxOnOpen: () => void;
  studioToolBoxOnClose: () => void;

  studioImageToolBoxIsOpen: boolean;
  studioImageToolBoxOnOpen: () => void;
  studioImageToolBoxOnClose: () => void;

  studioPageSliderIsOpen: boolean;
  studioPageSliderOnOpen: () => void;
  studioPageSliderOnClose: () => void;

  isNavbarVisible: boolean;
  setIsNavbarVisible: () => void;
}
const use_Model_Store_Studio = create<Model_Store_Studio>((set) => ({
  studioToolBoxIsOpen: false,
  studioToolBoxOnOpen: () =>
    set((state) => ({
      studioToolBoxIsOpen: true,
      studioImageToolBoxIsOpen: false,
      studioPageSliderIsOpen: false,
    })),
  studioToolBoxOnClose: () => set((state) => ({ studioToolBoxIsOpen: false })),

  studioImageToolBoxIsOpen: false,
  studioImageToolBoxOnOpen: () =>
    set((state) => ({
      studioImageToolBoxIsOpen: true,
      studioToolBoxIsOpen: false,
      studioPageSliderIsOpen: false,
    })),
  studioImageToolBoxOnClose: () =>
    set((state) => ({ studioImageToolBoxIsOpen: false })),

  studioPageSliderIsOpen: false,
  studioPageSliderOnOpen: () =>
    set((state) => ({
      studioPageSliderIsOpen: !state.studioPageSliderIsOpen,
      studioImageToolBoxIsOpen: false,
      studioToolBoxIsOpen: false,
    })),
  studioPageSliderOnClose: () =>
    set((state) => ({ studioPageSliderIsOpen: false })),
  isNavbarVisible: true,
  setIsNavbarVisible: () =>
    set((state) => ({ isNavbarVisible: !state.isNavbarVisible })),
}));

export default use_Model_Store_Studio;
