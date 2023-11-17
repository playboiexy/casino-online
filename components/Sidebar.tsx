export const Sidebar = () => {
  return (
    <aside className="bg-slate-900 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Sidebar</h2>
        <ul className="mt-4">
          <li className="py-2">
            <a href="#" className="block hover:text-blue-500">
              Link 1
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:text-blue-500">
              Link 2
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:text-blue-500">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
