import { create } from "zustand";

interface Editable_Text_Component {
  id: string;
  content: string;
  fontStyle?: string;
  fontSize?: number;
  textColor?: string;
  textAlignment?: string;
  textUnderline?: boolean;
  textItalic?: boolean;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
}

interface Editable_Text_Store {
  editableTextComponents: Editable_Text_Component[];
  addEditableTextComponent: (property: Editable_Text_Component) => void;

  setId: (id: string) => void;
  setContent: (id: string, content: string) => void;
  setFontStyle: (id: string, fontStyle: string) => void;
  setFontSize: (id: string, fontSize: number) => void;
  setTextColor: (id: string, textColor: string) => void;
  setTextAlignment: (id: string, textAlignment: string) => void;
  setTextUnderline: (id: string, textUnderline: boolean) => void;
  setTextItalic: (id: string, textItalic: boolean) => void;
  setFontWeight: (id: string, fontWeight: number) => void;
  setLineHeight: (id: string, lineHeight: number) => void;
  setLetterSpacing: (id: string, letterSpacing: number) => void;

  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export const use_Editable_Text_Store = create<Editable_Text_Store>((set) => ({
  editableTextComponents: [],
  addEditableTextComponent: (property) => {
    set((state) => ({
      editableTextComponents: [...state.editableTextComponents, property],
    }));
  },

  setId: (id) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, id } : component,
      ),
    }));
  },
  setContent: (id, content) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, content } : component,
      ),
    }));
  },
  setFontStyle: (id, fontStyle) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, fontStyle } : component,
      ),
    }));
  },
  setFontSize: (id, fontSize) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, fontSize } : component,
      ),
    }));
  },
  setTextColor: (id, textColor) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, textColor } : component,
      ),
    }));
  },
  setTextAlignment: (id, textAlignment) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, textAlignment } : component,
      ),
    }));
  },
  setTextUnderline: (id, textUnderline) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, textUnderline } : component,
      ),
    }));
  },
  setTextItalic: (id, textItalic) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, textItalic } : component,
      ),
    }));
  },
  setFontWeight: (id, fontWeight) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, fontWeight } : component,
      ),
    }));
  },
  setLineHeight: (id, lineHeight) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, lineHeight } : component,
      ),
    }));
  },
  setLetterSpacing: (id, letterSpacing) => {
    set((state) => ({
      editableTextComponents: state.editableTextComponents.map((component) =>
        component.id === id ? { ...component, letterSpacing } : component,
      ),
    }));
  },

  selectedId: null,
  setSelectedId: (id) => {
    set({ selectedId: id });
  },
}));
