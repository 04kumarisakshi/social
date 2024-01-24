

function Leftbar() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
   
    <div className="mt-6 flex flex-1 flex-col justify-between">
      <nav className="-mx-3 space-y-6 ">
        <div className="space-y-3 ">
          <label className="px-3 text-xs font-semibold uppercase text-gray-900">analytics</label>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
            <span className="mx-2 text-sm font-medium">Sales</span>
          </a>
        </div>
        <div className="space-y-3 ">
          <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
        
            <span className="mx-2 text-sm font-medium">Blogs</span>
          </a>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
          
            <span className="mx-2 text-sm font-medium">Notifications</span>
          </a>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
           
            <span className="mx-2 text-sm font-medium">Checklists</span>
          </a>
        </div>

        <div className="space-y-3 ">
          <label className="px-3 text-xs font-semibold uppercase text-gray-900">
            Customization
          </label>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
    
            <span className="mx-2 text-sm font-medium">Themes</span>
          </a>
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="#"
          >
            
            <span className="mx-2 text-sm font-medium">Setting</span>
          </a>
        </div>
      </nav>
    </div>
  </aside>
  )
}

export default Leftbar