import Tippy, { TippyProps } from "@tippyjs/react";
import React, { FC, ReactNode } from 'react';
import { Placement } from "react-bootstrap/esm/types";
import 'tippy.js/themes/translucent.css';
import 'tippy.js/animations/scale.css';
interface TippyCustomProps {
  children: any;
  content: string;
  place: Placement;
  haveClick?: boolean;
}

const TippyCustom: FC<TippyCustomProps> = ({ children, content, place, haveClick = false }) => {
  return (
    <Tippy
      content={content}
      theme="dark"
      placement={place}
      trigger={haveClick === true ? "click" : "mouseenter"}
      zIndex={9999}
      interactive={haveClick}
      delay= {[100, 0]}
      animation={"scale"}
      animateFill
    >
      {children}
    </Tippy>
  );
}

export default TippyCustom;