import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && 'bg-[#ECEFF1] text-[#222222]'
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
