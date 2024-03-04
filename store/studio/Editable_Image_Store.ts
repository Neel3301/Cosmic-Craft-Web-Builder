import { create } from "zustand";

interface Editable_Image_Component {
  id: string;
  img: string;
  height: number;
  width: number;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  object: "fill" | "contain" | "cover" | "none" | "scale-down";
}

interface Editable_Image_Store {
  editableImageComponents: Editable_Image_Component[];
  addEditableImageComponent: (property: Editable_Image_Component) => void;

  setId: (id: string) => void;
  setImg: (id: string, img: string) => void;
  setHeight: (id: string, height: number) => void;
  setWidth: (id: string, width: number) => void;
  setMaxHeight: (id: string, maxHeight: number) => void;
  setMaxWidth: (id: string, maxWidth: number) => void;
  setMinHeight: (id: string, minHeight: number) => void;
  setMinWidth: (id: string, minWidth: number) => void;
  setObject: (
    id: string,
    object: "fill" | "contain" | "cover" | "none" | "scale-down",
  ) => void;

  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export const use_Editable_Image_Store = create<Editable_Image_Store>((set) => ({
  editableImageComponents: [],
  addEditableImageComponent: (property) => {
    set((state) => ({
      editableImageComponents: [...state.editableImageComponents, property],
    }));
  },

  setId: (id) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, id } : component,
      ),
    }));
  },
  setImg: (id, img) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, img } : component,
      ),
    }));
  },
  setHeight: (id, height) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, height } : component,
      ),
    }));
  },
  setWidth: (id, width) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, width } : component,
      ),
    }));
  },
  setMaxHeight: (id, maxHeight) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, maxHeight } : component,
      ),
    }));
  },
  setMaxWidth: (id, maxWidth) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, maxWidth } : component,
      ),
    }));
  },
  setMinHeight: (id, minHeight) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, minHeight } : component,
      ),
    }));
  },
  setMinWidth: (id, minWidth) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, minWidth } : component,
      ),
    }));
  },

  setObject: (id, object) => {
    set((state) => ({
      editableImageComponents: state.editableImageComponents.map((component) =>
        component.id === id ? { ...component, object } : component,
      ),
    }));
  },

  selectedId: null,
  setSelectedId: (id) => {
    set({ selectedId: id });
  },
}));
