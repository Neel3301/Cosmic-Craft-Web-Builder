"use client";

import { useState } from "react";
import { use_Editable_Text_Store } from "../store/studio/Editable_Text_Store";
import Link from "next/link";
import use_Model_Store_Studio from "@/store/studio/Model_Store_Studio";
import { poppins } from "@/assets/Fonts";

interface Editable_Text_Props {
  cid: string;
  content: string;
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  classname?: string;
  href?: string;
  env?: "production" | "development";

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
const Editable_Text = ({
  cid,
  content,
  tag,
  classname,
  href,
  env = "development",
  fontStyle,
  fontSize,
  textColor,
  textAlignment,
  textUnderline,
  textItalic,
  fontWeight,
  lineHeight,
  letterSpacing,
}: Editable_Text_Props) => {
  const [
    addEditableTextComponent,
    editableTextComponents,
    setSelectedId,
    setContent,
  ] = use_Editable_Text_Store((s) => [
    s.addEditableTextComponent,
    s.editableTextComponents,
    s.setSelectedId,
    s.setContent,
  ]);

  const studioToolBoxOnOpen = use_Model_Store_Studio(
    (s) => s.studioToolBoxOnOpen,
  );

  // Edding Component
  const [initialized, setInitialized] = useState(false);
  if (!initialized) {
    addEditableTextComponent({
      id: cid,
      content: cid,
      fontStyle: fontStyle === undefined ? `${poppins.className}` : fontStyle,
      fontSize: fontSize === undefined ? 18 : fontSize,
      textColor: textColor === undefined ? `#000000` : textColor,
      textAlignment: textAlignment === undefined ? `left` : textAlignment,
      textUnderline: textUnderline === undefined ? false : textUnderline,
      textItalic: textItalic === undefined ? false : textItalic,
      fontWeight: fontWeight === undefined ? 400 : fontWeight,
      lineHeight: lineHeight === undefined ? 0 : lineHeight,
      letterSpacing: letterSpacing === undefined ? 0 : letterSpacing,
    });

    setContent(cid, content);
    setInitialized(true);
  }

  // finding component
  const component = editableTextComponents.find(
    (myComponent) => myComponent.id === cid,
  );

  // tag
  const Element = tag == Link ? (env == "development" ? "span" : Link) : tag;

  // fns
  const handleClick = () => {
    setSelectedId(cid);
    studioToolBoxOnOpen();
  };
  const [localContent, setLocalContent] = useState(content);
  const handleInput = (e: any) => {
    setLocalContent(e.currentTarget.textContent || "");
    console.log(localContent);
  };

  return (
    <div className={`${classname}`}>
      <Element
        id={cid}
        onClick={handleClick}
        onBlur={handleInput}
        contentEditable={env == "development" ? true : false}
        suppressContentEditableWarning={true}
        spellCheck={false}
        className={`${component?.fontStyle} h-fit w-fit`}
        href={`${href}`}
        style={{
          fontSize: `${component?.fontSize}px`,
          color: `${component?.textColor}`,
          textAlign: `${component?.textAlignment}`,
          textDecoration: `${component?.textUnderline == true ? `underline` : `none`}`,
          fontStyle: `${component?.textItalic == true ? `italic` : `normal`}`,
          fontWeight: `${component?.fontWeight}`,
          lineHeight: `${component?.lineHeight === 0 ? `normal` : component?.lineHeight}px`,
          letterSpacing: `${component?.letterSpacing}px`,
        }}
      >
        {localContent}
      </Element>
    </div>
  );
};

export default Editable_Text;
