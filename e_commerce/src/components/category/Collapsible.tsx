import {type ReactNode, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import useMeasure from "react-use-measure";

export default function ({title,children}:{title:string,children:ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  const [measureRef, { height }] = useMeasure();

  const styles = useSpring({
    config: config.stiff,
    from: {
      height: 0
    },
    to: {
      height: isOpen ? height : 0
    }
  });

  return (
    <div className="w-full">
      
      <button onClick={() => setIsOpen((val) => !val)} className="flex w-full items-center justify-between">
        <p>
        {title}
        </p>  
        {isOpen?<img src="/icons/DropDown.svg"/>:<img src="/icons/chevron_right.svg"/>}
      </button>

      <animated.div style={{ overflow: "hidden", ...styles }}>
        <div
          ref={measureRef}
          style={{
           
            padding: "12px"
          }}
        >

         {children}
        </div>
      </animated.div>
    </div>
  );
}
