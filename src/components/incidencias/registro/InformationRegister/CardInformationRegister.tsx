import cn from "@/utils/cn";

export const CardInformationRegister = ({
  icon,
  title,
  amount,
  Class,
}: {
  icon: React.ReactNode;
  title: string;
  amount: number;
  Class?: string;
}) => {
  return (
    <div className={cn("px-1 py-1.5 text-center gap-1 ", Class)}>
      {" "}
      <h1 className="text-[14px] flex gap-0.5 w-full items-center justify-center">
        <span>{icon}</span>
        {title}
      </h1>
      <p className="text-2xl font-[500]">{amount} </p>
      <div className="flex text-[13px] items-center justify-center ">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M11.99 1.968c1.023 0 1.97 .521 2.512 1.359l.103 .172l7.1 12.25l.062 .126a3 3 0 0 1 -2.568 4.117l-.199 .008h-14l-.049 -.003l-.112 .002a3 3 0 0 1 -2.268 -1.226l-.109 -.16a3 3 0 0 1 -.32 -2.545l.072 -.194l.06 -.125l7.092 -12.233a3 3 0 0 1 2.625 -1.548z"
              stroke-width="0"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <p className="text-green-600">3% </p> Todos los dias
      </div>{" "}
    </div>
  );
};
