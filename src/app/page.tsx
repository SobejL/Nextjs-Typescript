import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/event-example">Event Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/theme-redux-example">Theme Redux Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/useContext">UseContext Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/useState-example">UseState Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/useRef">UseRef Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/typescript-generics">Typescript Generics</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/props-data-example">Props-Data-Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/children-prop-example">Children-Prop-Example</Link>
          </li>
          <li>
            <Link className='text-blue-500 hover:text-blue-700 font-bold' href="/combined-and-exclude">Combined-And-Exclude</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
