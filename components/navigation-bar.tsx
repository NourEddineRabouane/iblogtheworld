import { ModeToggle } from "./theme-toggle-btn";

export default function NavigationBar() {
  return (
    <>
      <nav className="flex justify-between px-4 py-2 ">
        <h1>Logo</h1>
        <div className="flex items-center  gap-3">
          <ul className="flex gap-2">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
