import React from "react";
import ButtonIcon from "@/components/ButtonIcon";
import { PiPassword } from "react-icons/pi";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-full bg-white rounded-xl flex justify-center items-center">
      <div className="">
        <Link href="/dashbord/security/passowrd">
          <button className="w-[250px] py-2 text-[1.2rem] cursor-pointer block mx-auto bg-primary mt-2 rounded-md text-[white] mb-7">
            Change The Password
          </button>
        </Link>
        <Link href="/dashbord/security/email">
          <button className="w-[250px] py-2 text-[1.2rem] cursor-pointer block mx-auto bg-primary mt-2 rounded-md text-[white]">
            Change The Email
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
