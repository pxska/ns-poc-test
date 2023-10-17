export default function App() {
  return (
    <div className="p-12 flex flex-col h-full">
      <nav className="flex-initial">
        <ul className="flex gap-4">
          <li>
            <a
              className="py-3 px-4 bg-neutral-900 rounded-full leading-6"
              href="#">
              Projects
            </a>
          </li>
          <li>
            <a
              className="py-3 px-4 bg-neutral-900 rounded-full leading-6"
              href="#">
              Archive
            </a>
          </li>
          <li>
            <a
              className="py-3 px-4 bg-neutral-900 rounded-full leading-6"
              href="#">
              Information
            </a>
          </li>
        </ul>
      </nav>

      <main className="uppercase flex-auto flex items-center justify-center flex-col text-7xl">
        <div className="w-[600px]">
          <div className="w-full flex justify-between">
            <span>Nathan</span>
            <span>Smith</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Design</span>
            <span>&</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Art</span>
            <span>Direction</span>
          </div>
          <div className="w-full flex justify-between">
            <span>+44</span>
            <span>7533</span>
            <span>063</span>
            <span>596</span>
          </div>
          <div className="w-full flex justify-between">
            <span>&rarr;Email</span>
            <span>&rarr;Insta</span>
          </div>
        </div>
      </main>

      <footer className="flex-[0_1_40px] flex items-center gap-24">
        <div className="flex-initial">
          <div className="flex gap-2">
            &rarr;<span>mail@nathansmith.design</span>
          </div>
          <div className="flex gap-2">
            &rarr;<span>Enquiries</span>
          </div>
        </div>
        <div className="flex-auto">
          <div className="flex gap-2">
            &rarr;<span>Instagram: @nathanpsmith_</span>
          </div>
          <div className="flex gap-2">
            &rarr;<span>Chat</span>
          </div>
        </div>

        <div>&copy; Nathan Smith 2022</div>
      </footer>
    </div>
  );
}
