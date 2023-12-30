export default function Header() {
  return (
    <header className="bg-header text-main-txt h-16">
      <nav className="flex h-full">
        <ul className="flex w-full flex-row items-center justify-evenly">
          <li>
            <a href="" className="bg-main-blue rounded-lg p-3">
              LINK
            </a>
          </li>
          <li>
            <a href="" className="bg-main-blue rounded-lg p-3">
              LINK 2
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
