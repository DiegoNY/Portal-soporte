import { ChangeService } from "@/libs/redux/feature/ServiceOrder";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Input = ({ HandleChange, style, name, title, type }: any) => {
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState(" ");
  return (
    <div
      className={cn(
        style.width_content ? style.width_content : "w-[7.6vw]",
        " p-0.5 border-r relative",
        isFocus ? "border-4 border-double border-sky-200" : "",
        style
      )}
      onClick={() => {
        setFocus(true);
      }}
    >
      <h1
        className={cn(
          isFocus
            ? "text-[12px] translate-y-[-80%] text-sky-400 bg-white"
            : "font-[400] text-[14px]  ",
          "text-[#717171]  transition-all absolute "
        )}
      >
        {title}
      </h1>
      <input
        name={name}
        type={type}
        className={cn(
          style.width_input ? style.width_input : "w-[6.7vw]",
          "outline-none "
        )}
        onChange={(e) => {
          setValue(e.target.value);
          HandleChange(e);
        }}
        onBlur={() => {
          if (value.trim().length == 0) {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }}
      />
    </div>
  );
};

export const CustomerSignature = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isViewAddSignature, setViewSignature] = useState(false);

  const dispatch = useDispatch();
  const AddSignature = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png";
    input.addEventListener("change", () => {
      const signature = input.files?.[0];
      if (signature) {
        setSelectedImage(URL.createObjectURL(signature));
      }
      dispatch(ChangeService({ name: "signature_customer", value: signature }));
      return;
    });
    input.click();
  };
  return (
    <div className="w-1/2 flex gap-1 flex-col items-center">
      <div className="border border-sky-200 h-[16vh] w-[17vh]">
        {selectedImage ? (
          <Image src={selectedImage} height={100} width={100} alt="" />
        ) : (
          <span className="h-full w-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"></path>
            </svg>
          </span>
        )}
      </div>
      <button
        className="text-[14px] text-[#414141] flex  gap-1"
        onClick={AddSignature}
        onMouseEnter={() => setViewSignature(true)}
        onMouseLeave={() => setViewSignature(false)}
      >
        <h1 className={cn(isViewAddSignature ? "text-green-600" : "")}>
          Firma del cliente
        </h1>
        <span className={cn(isViewAddSignature ? "text-green-600" : "")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8h.01"></path>
            <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
            <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
          </svg>
        </span>
      </button>
      <h1 className="text-[14px]">REPSOL COMERCIAL SAC</h1>
      <div className="text-[14px] border flex flex-col sm:flex-row  rounded-sm ">
        <Input
          title="DNI"
          style={{
            width_content: "sm:w-[7.6vw] p-1",
            width_input: "sm:w-[6.7vw]",
          }}
        />
        <Input
          title="NOMBRES"
          style={{
            width_content: "sm:w-[12vw] p-1",
            width_input: "sm:w-[11vw]",
          }}
        />
      </div>
    </div>
  );
};
