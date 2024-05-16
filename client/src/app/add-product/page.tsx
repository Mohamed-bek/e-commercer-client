"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { LuPencil } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import ButtonIcon from "@/components/ButtonIcon";

type Props = {};

function page({}: Props) {
  // const [productsImages, setProductsImages] = useState<string[]>([]);
  const [avatarProduct, setAvatarProduct] = useState<string | null>(null);
  const [Img1, setImg1] = useState<string | null>(null);
  const [Img2, setImg2] = useState<string | null>(null);
  const [Img3, setImg3] = useState<string | null>(null);

  const productAvatar = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string | null>>
  ) => {
    const selectedFile = (e.target.files as any)[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setState(imageUrl);
  };

  function addColor(): void {
    const colorInput = document.createElement("input");
    colorInput.classList.add("w-6", "h-6", "cursor-pointer");
    colorInput.type = "color";
    colorRef.current?.appendChild(colorInput);
    colorInput.click();
  }

  function addSize(): void {
    const textInput = document.createElement("input");
    textInput.classList.add(
      "w-[46px]",
      "h-9",
      "py-1",
      "text-center",
      "rounded-md",
      "bg-transparent",
      "border",
      "border-solid",
      "border-black",
      "cursor-pointer",
      "placeholder:text-[0.9rem]",
      "focus:outline-none"
    );
    textInput.type = "text";
    textInput.placeholder = "size";
    sizeRef.current?.appendChild(textInput);
    textInput.focus();
  }

  function addProduct() {
    colorRef.current
      ?.querySelectorAll("input[type=color]")
      .forEach((cl) => console.log((cl as HTMLInputElement).value));
  }

  return (
    <div className="addProduct w-full flex justify-center items-center h-[100vh]">
      <div className="cont">
        <h1 className="mb-1 text-[2.5rem]"> Add New Product </h1>
        <div className="Name pl-20 mb-2">
          <label className="mb-2 block text-[1.6rem]"> Product Name </label>
          <p className="flex items-center gap-1 pl-3 border border-black border-solid rounded-lg py-1 px-2 w-fit">
            <LuPencil
              onClick={(e) => {
                (e.target as any)
                  .closest("div")
                  .querySelector("input[type=text]")
                  .focus();
              }}
            />{" "}
            <input
              type="text"
              placeholder="Product Name"
              className=" bg-transparent w-fit focus:outline-none font-light text-[#696868] -order-1"
            />
          </p>
        </div>
        <div className="addProductForm w-full h-[70vh] border border-solid border-black rounded-xl relative pt-12 flex items-start">
          <div className="avatar w-[120px] h-[120px] bg-white absolute left-0 top-0 -translate-x-12 -translate-y-20 flex items-center justify-center rounded-lg">
            {!avatarProduct && (
              <div className="w-full h-full flex justify-center items-center bg-primary rounded-lg">
                <input
                  ref={productAvatar}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setAvatarProduct)}
                />
                <div className=" text-center">
                  <IoAdd
                    className="text-[4rem] text-white cursor-pointer block mx-auto mb-0"
                    onClick={(e) => {
                      console.log("helloo");
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("click");
                      productAvatar.current?.click();
                    }}
                  />
                </div>{" "}
              </div>
            )}
            {avatarProduct && (
              <div className="w-full h-full relative border border-solid border-black rounded-md">
                <img
                  className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={avatarProduct}
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="box1 w-1/2 pl-2">
            <label className="mb-2 block text-[1.6rem]"> Category </label>
            <select
              className="w-[200px] p-[4px] bg-transparent border border-solid border-black rounded-[8px] mb-6 focus:outline-none"
              name="Product Type"
              id="productType"
            >
              <option value="T-shirt">Tshirt</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <label className="mb-2 block text-[1.6rem]"> Description </label>
            <input
              className="bg-transparent w-4/5 h-[140px] rounded-lg border border-solid border-black focus:outline-none text-center placeholder:text-[1.2rem] mb-6"
              type="text"
              placeholder="Write Some Information About The Product"
              id=""
            />
            <label className="mb-2 block text-[1.6rem]"> Images </label>
            <div className="flex gap-2 items-center">
              <div className="w-[90px] h-[90px] bg-transparent flex items-center justify-center rounded-md">
                {!Img1 && (
                  <div className="bg-primary w-full h-full flex justify-center items-center rounded-md">
                    <input
                      type="file"
                      className=" hidden"
                      onChange={(e) => handleImageUpload(e, setImg1)}
                    />
                    <div className=" text-center">
                      <IoAdd
                        className="text-[4rem] text-white cursor-pointer block mx-auto mb-0"
                        onClick={(e) => {
                          (
                            (e.target as HTMLElement).closest("div")
                              ?.previousElementSibling as HTMLInputElement
                          ).click();
                        }}
                      />
                    </div>
                  </div>
                )}
                {Img1 && (
                  <div className="w-full h-full relative border border-solid border-black rounded-md">
                    <img
                      className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src={Img1}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="w-[90px] h-[90px] bg-transparent flex items-center justify-center rounded-md">
                {!Img2 && (
                  <div className="bg-primary w-full h-full flex justify-center items-center rounded-md">
                    <input
                      type="file"
                      className=" hidden"
                      onChange={(e) => handleImageUpload(e, setImg2)}
                    />
                    <div className=" text-center">
                      <IoAdd
                        className="text-[4rem] text-white cursor-pointer block mx-auto mb-0"
                        onClick={(e) => {
                          (
                            (e.target as HTMLElement).closest("div")
                              ?.previousElementSibling as HTMLInputElement
                          ).click();
                        }}
                      />
                    </div>
                  </div>
                )}
                {Img2 && (
                  <div className="w-full h-full relative border border-solid border-black rounded-md">
                    <img
                      className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src={Img2}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="w-[90px] h-[90px] bg-transparent flex items-center justify-center rounded-md">
                {!Img3 && (
                  <div className="bg-primary w-full h-full flex justify-center items-center rounded-md">
                    <input
                      type="file"
                      className=" hidden"
                      onChange={(e) => handleImageUpload(e, setImg3)}
                    />
                    <div className=" text-center">
                      <IoAdd
                        className="text-[4rem] text-white cursor-pointer block mx-auto mb-0"
                        onClick={(e) => {
                          (
                            (e.target as HTMLElement).closest("div")
                              ?.previousElementSibling as HTMLInputElement
                          ).click();
                        }}
                      />
                    </div>
                  </div>
                )}
                {Img3 && (
                  <div className="w-full h-full relative border border-solid border-black rounded-md">
                    <img
                      className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src={Img3}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="box2 px-2 w-1/2">
            <label className="mb-2 block text-[1.6rem]"> Colors </label>
            <div className="flex items-center gap-2 mb-5" ref={colorRef}>
              <input className="w-6 h-6 cursor-pointer" type="color" />
              <div
                className="p-1 border border-solid border-black rounded-full cursor-pointer order-last"
                onClick={() => addColor()}
              >
                <IoAdd className="text-[1.5rem] text-black block mx-auto mb-0" />
              </div>
            </div>
            <label className="mb-2 block text-[1.6rem]"> Sizes </label>
            <div className="flex items-center gap-2 mb-5" ref={sizeRef}>
              <input
                className="w-[46px] h-9 py-1 text-center rounded-md bg-transparent border border-solid border-black cursor-pointer placeholder:text-[0.9rem] focus:outline-none"
                placeholder="size"
                type="text"
              />
              <div
                className="p-1 border border-solid border-black rounded-full cursor-pointer order-last"
                onClick={() => addSize()}
              >
                <IoAdd className="text-[1.5rem] text-black block mx-auto mb-0" />
              </div>
            </div>
            <label className="mb-2 block text-[1.6rem]"> Quantity </label>
            <div className="flex items-center gap-2 mb-5">
              <input
                className="w-[70px] h-9 py-1 rounded-md text-center bg-transparent border border-solid border-black cursor-pointer placeholder:text-[0.9rem] focus:outline-none"
                placeholder="quantity"
                type="text"
              />
            </div>
            <label className="mb-2 block text-[1.6rem]"> Price </label>
            <div className="flex items-center mb-2 border border-solid border-black w-fit pr-3">
              <input
                className="w-[70px] h-9 py-1 rounded-md text-center bg-transparent  cursor-pointer placeholder:text-[0.9rem] focus:outline-none"
                placeholder="quantity"
                type="text"
              />
              <span> DA </span>
            </div>
            <div className="w-full text-center">
              <ButtonIcon content="Add Product" icon={IoAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
