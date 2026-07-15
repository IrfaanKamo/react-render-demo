import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  title?: string
  url?: string
}

const BrowserWindow = ({
  children,
  title = "Example App",
  url = "https://example.com",
}: Props) => (
  <div className="flex flex-col h-2/3 w-3/4 bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700">
    {/* Browser Chrome */}
    <div className="bg-gray-800 border-b border-gray-700">
      {/* Title Bar */}
      <div className="bg-linear-to-r from-gray-700 to-gray-800 px-4 py-2 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-xs flex-1 text-center">{title}</span>
      </div>

      {/* Address Bar */}
      <div className="px-4 py-3 bg-gray-800">
        <div className="bg-gray-700 rounded px-3 py-2 flex items-center gap-2">
          <span className="text-gray-500 text-sm">🔒</span>
          <input
            type="text"
            value={url}
            readOnly
            className="bg-transparent text-gray-300 text-sm flex-1 outline-none"
          />
        </div>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-1 bg-white overflow-auto text-slate-900 relative p-3">
      {children}
    </div>
  </div>
)

export default BrowserWindow
