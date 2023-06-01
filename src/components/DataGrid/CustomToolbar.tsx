import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

export const CustomToolbar = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className=" w-full flex flex-col  sm:flex-row justify-between p-1 px-2 items-center">
      <div className="w-full sm:w-1/2 flex items-center bg-slate-100 px-2 rounded-lg">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </span>
        <input
          className=" p-2 rounded-sm w-full outline-none bg-inherit"
          placeholder="Buscar "
          onChange={onChange}
        />
      </div>
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    </div>
  );
};
