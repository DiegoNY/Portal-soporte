import cn from "@/utils/cn";
import ItemMenu from "./itemMenu";
import ItemSubMenu from "./itemSubMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";

const Menu = () => {
  const Items = [
    {
      text: "Inicio",
      route: "",
      icono: (
        <svg
          width="100%"
          height="100%"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
          className="ScIconSVG-sc-1q25cff-1 dSicFr"
        >
          <g>
            <path d="M7 10h2v4H7v-4zM13 6h-2v8h2V6z"></path>
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm12 2H4v12h12V4z"
              clip-rule="evenodd"
            ></path>
          </g>
        </svg>
      ),
      submenu: [
        {
          text: "Asignacion semana turno",
          route: "/home/turno",
        },
        {
          text: "Registro de Incidencias",
          route: "/home/incidencias/registro",
        },
        {
          text: "Incidencias Resueltas",
          route: "/home/incidencias/resueltas",
        },
        {
          text: "Visitas Tecnicas Terminadas",
          route: "/reports/box",
        },
      ],
    },
    {
      text: "Mi Buzon",
      icono: (
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
          <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5"></path>
          <path d="M12 11v-8h4l2 2l-2 2h-4"></path>
          <path d="M6 15h1"></path>
        </svg>
      ),
      submenu: [
        {
          text: "Incidencias Asignadas",
          route: "/products",
        },
        {
          text: "Incidencias Resueltas",
          route: "/reports/box",
        },
      ],
    },
    {
      text: "Empresas",
      icono: (
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
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
        </svg>
      ),
      submenu: [
        {
          text: "Grupos Empresas",
          route: "/products",
        },
        {
          text: "Empresas",
          route: "/reports/box",
        },
        {
          text: "Sucursales Empresas",
          route: "/reports/box",
        },
      ],
    },
    {
      text: "Personal - Tecnicos",
      icono: (
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
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      ),
    },
    {
      text: "Reportes",
      icono: (
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
          <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M7 3v4h4"></path>
          <path d="M9 17l0 4"></path>
          <path d="M17 14l0 7"></path>
          <path d="M13 13l0 8"></path>
          <path d="M21 12l0 9"></path>
        </svg>
      ),
      submenu: [
        {
          text: "Por Cliente",
          route: "/products",
        },
        {
          text: "Por Personal",
          route: "/reports/box",
        },
        {
          text: "Turno Semanal - Apoyo",
          route: "/reports/box",
        },
        {
          text: "Reporte Detallado por Personal",
          route: "/reports/box",
        },
        {
          text: "Reporte Materiales  Orden",
          route: "/reports/box",
        },
      ],
    },
    {
      text: "Otros",
      icono: (
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
          <path d="M11 11h2v2h-2z"></path>
          <path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z"></path>
          <path d="M11 19h2v2h-2z"></path>
          <path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z"></path>
          <path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z"></path>
          <path d="M11 3h2v2h-2z"></path>
          <path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z"></path>
        </svg>
      ),
      submenu: [
        {
          text: "Material - Productos",
          route: "/products",
        },
        {
          text: "Categorias Problemas",
          route: "/reports/box",
        },
        {
          text: "Sub-categorias Problemas",
          route: "/reports/box",
        },
      ],
    },
  ];

  const navigation = useSelector((state: RootState) => state.navigation);

  return (
    <nav
      className={cn(
        navigation.main ? "flex fixed bg-white z-40 sm:static" : "hidden",
        " flex-none  w-56 lg:flex flex-col   items-center p-2  bg-white"
      )}
    >
      <div className="p-3  rounded-full my-3 bg-yellow-300">
        <svg version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="h-10">
          <g>
            <path
              fill-rule="evenodd"
              d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
              clip-rule="evenodd"
            ></path>
          </g>
        </svg>
      </div>
      <h1 className="text-[14px]  w-full px-2">Bienvenido (a) : </h1>
      <p className="text-[14px] text-center mb-1">
        70401296 - Bryan Polo Gomez
      </p>
      <div className="h-[62vh]  mt-4 gap-1.5 flex flex-col w-full text-sm overflow-y-scroll">
        {Items.map((item, index) => {
          if (item.submenu) {
            return (
              <ItemSubMenu
                key={index}
                name={item.text}
                submenu={item.submenu}
                icon={item.icono}
              />
            );
          }

          return (
            <ItemMenu
              key={index}
              name={item.text}
              path={item.route || ""}
              icon={item.icono}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Menu;
