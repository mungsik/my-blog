import Link from "next/link";
import navlinks from "./../data/navlinks";
import { useState } from "react";
import { DropNavContainer, NavContainer } from "./Nav.style";

const Links = ({ setIsDropMenuOpen }) => {
  return (
    <>
      {navlinks.map((link) => (
        <Link href={link.link} key={link.title} passHref>
          <a onClick={() => setIsDropMenuOpen(false)}>{link.title}</a>
        </Link>
      ))}
    </>
  );
};

const Nav = () => {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Links setIsDropMenuOpen={setIsDropMenuOpen} />
        <svg
          onClick={() => setIsDropMenuOpen(!isDropMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z" />
        </svg>
      </NavContainer>
      <DropNavContainer visible={isDropMenuOpen}>
        <Links setIsDropMenuOpen={setIsDropMenuOpen} />
      </DropNavContainer>
    </>
  );
};

export default Nav;

// const Nav = () => {
//   const router = useRouter()
//   console.log(router)
//   return (
//     <nav>
//       {navlinks.map((nav) => (
//         <Link href={nav.link} key={nav.title}>
//           <a className="mr-5 font-Jalnan hover:text-gray-400 ">{nav.title}</a>
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default Nav;
