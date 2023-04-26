export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute z-50 top-0 left-0 bg-transparent w-full h-full justify-center flex modal_style">
      {children}
    </div>
  );
};
