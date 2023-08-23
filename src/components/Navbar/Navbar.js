import { AiFillGithub } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";


export default function Navbar() {
  return (
    <nav className="navbar">
        <ul>
          <li>
            <a href="#" target="_blank">
              <AiFillGithub />
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <SiFrontendmentor />
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
    </nav>
  )
}