import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SubMenu = ({ path, name }: { path: string; name: string }) => {
  const [isActive, setActive] = useState(false);
  // const location = useLocation();
  const router = useRouter();

  useEffect(() => {
    if (router.asPath == path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [router]);

  return (
    <Link
      href={path}
      className={`
        py-2 px-2    rounded-r-lg transition-all
        ${isActive ? "text-blue-700 bg-sky-100" : "hover:text-blue-700 "} 
    `}
    >
      <span>{name}</span>
    </Link>
  );
};

export default SubMenu;
