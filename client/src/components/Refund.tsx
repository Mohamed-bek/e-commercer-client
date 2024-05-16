import React, { useState } from "react";
import { IPurchase } from "./Purchases";
import { FiSend } from "react-icons/fi";

type Props = { refund: IPurchase | null };
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { IoMdClose } from "react-icons/io";

function Refund({ refund }: Props) {
  const [refundCause, setRefundCause] = useState<String[]>();
  const [details, setDetails] = useState("");
  const [refundCauses, setRefundCauses] = useState([
    {
      id: 0,
      refundCause: "refund cause 1",
    },
    {
      id: 1,
      refundCause: "refund cause 2",
    },
    {
      id: 2,
      refundCause: "refund cause 3",
    },
    {
      id: 3,
      refundCause: "refund cause 4",
    },
  ]);
  return (
    <div className="w-4/5 h-4/5 bg-white rounded-md border border-black border-solid p-4 ">
      <h1 className="text-[2rem] font-light mb-[16px] flex items-center gap-2">
        {" "}
        Demand a refund <HiOutlineReceiptRefund />{" "}
      </h1>
      {refund && (
        <div
          className={`flex justify-between items-center px-3 py-2 border border-black border-solid mb-5`}
        >
          <div className="flex gap-2 items-center w-[30%]">
            <img
              className="w-14 rounded-md"
              src={refund.img}
              alt="product img"
            />
            <p> {refund.name && refund.name} </p>
          </div>
          <div className="w-[30%] font-[200]"> {refund.sellerName} </div>
          <div className="w-[10%] font-[600]"> {refund.price}$ </div>
          <div className="w-[10%] font-[600]"> {refund.piece} </div>
          <div className="w-[15%] font-[200]">
            {" "}
            {refund.date.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}{" "}
          </div>
        </div>
      )}
      <form>
        <h2 className="text-[1.8rem] font-thin mb-3">
          {" "}
          Why you want a refund ?{" "}
        </h2>
        {refundCauses.map((refund) => (
          <div
            key={refund.id}
            className="flex items-center gap-2 py-1 px-2 text-[1.1rem] capitalize font-extralight"
          >
            <input
              className="cursor-pointer accent-primary"
              type="checkbox"
              name="refund"
              id={refund.id.toString()}
              onClick={() => {
                setRefundCause((prevRefundCauses) => {
                  if (prevRefundCauses) {
                    const index = prevRefundCauses.findIndex(
                      (st) => st === refund.refundCause
                    );
                    if (index !== -1) {
                      return prevRefundCauses.splice(index, 1);
                    } else {
                      return [...prevRefundCauses, refund.refundCause];
                    }
                  } else {
                    return [refund.refundCause];
                  }
                });
              }}
            />
            <label className=" cursor-pointer" htmlFor={refund.id.toString()}>
              {" "}
              {refund.refundCause}{" "}
            </label>
          </div>
        ))}
        <h2 className="text-[1.8rem] font-[100] mt-5"> Add More Details </h2>
        <input
          className="w-full min-h-[100px] border border-solid text-[black] border-[black] mt-3 py-2 px-4 focus:outline-none"
          type="text"
          name="moreDeatails"
          value={details}
          placeholder="Add more details , At Least 100 characters..."
          onChange={(e) => setDetails(e.target.value)}
        />
        <div>
          <ButtonIcon icon={FiSend} content="send" />
        </div>
      </form>
    </div>
  );
}

export default Refund;
