import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  content: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonIcon({ icon: Icon, content, ...props }: Props) {
  return (
    <button
      {...props}
      className="cartButton after:-z-0 hover:text-white hover:after:w-[210px] after:[transition:0.3s] after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black  relative w-[220px] text-cente after:rounded-[20px] rounded-[20px] h-[50px] border-[1px] border-solid border-black py-2 mt-5 "
    >
      <Icon className="bg-black z-20 text-white border-[1px] border-solid [transition:0.3s] border-black absolute top-1/2 left-[-4px] translate-y-[-50%] h-[56px] w-[56px]  p-3 rounded-full" />
      <p className="relative z-20">{content}</p>{" "}
    </button>
  );
}

export default ButtonIcon;
