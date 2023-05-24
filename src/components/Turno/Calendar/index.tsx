import CalendarUI from "@/components/Calendar/Calendar";

export const Calendar = () => {
  return (
    <section className="px-2 hidden w-[50vw]   lg:col-span-4 md:col-span-2 lg md:flex flex-col ">
      <CalendarUI />
      <br />
    </section>
  );
};
