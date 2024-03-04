"use client";

import { useState } from "react";
import { use_Editable_Image_Store } from "../store/studio/Editable_Image_Store";
import use_Model_Store_Studio from "../store/studio/Model_Store_Studio";

interface Editable_Image_Props {
  cid: string;
  img: string;
  classname?: string;
  env?: "production" | "development";

  height: number;
  width: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  object?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

const Editable_Image = ({
  cid,
  img,
  classname,
  env = "development",
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  object,
}: Editable_Image_Props) => {
  const [
    addEditableImageComponent,
    editableImageComponents,
    setSelectedId,
    setImg,
  ] = use_Editable_Image_Store((s) => [
    s.addEditableImageComponent,
    s.editableImageComponents,
    s.setSelectedId,
    s.setImg,
  ]);

  // Edding Component
  const [initialized, setInitialized] = useState(false);
  if (!initialized) {
    addEditableImageComponent({
      id: cid,
      img: img,
      height: height === undefined ? 100 : height,
      width: width === undefined ? 100 : width,
      maxHeight: maxHeight!,
      maxWidth: maxWidth!,
      minHeight: minHeight!,
      minWidth: minWidth!,
      object: object!,
    });
    setInitialized(true);
  }

  const studioImageToolBoxOnOpen = use_Model_Store_Studio(
    (s) => s.studioImageToolBoxOnOpen,
  );

  // finding component
  const component = editableImageComponents.find(
    (myComponent) => myComponent.id === cid,
  );

  const handleClick = () => {
    setSelectedId(cid);
    studioImageToolBoxOnOpen();
    console.log(component);
  };

  return (
    <div
      style={{
        height: `${component?.height}px`,
        width: `${component?.width}px`,
        minHeight: `${component?.minHeight}px`,
        minWidth: `${component?.minWidth}px`,
        maxHeight: `${component?.maxHeight}px`,
        maxWidth: `${component?.maxWidth}px`,
      }}
      className="resize"
      onClick={handleClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={component?.img}
        alt={img}
        id={cid}
        className={`${classname} h-full w-full`}
        style={{
          objectFit: `${component?.object!}`,
        }}
      />
    </div>
  );
};

export default Editable_Image;
