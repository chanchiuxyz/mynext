
export default function AboutLayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <div>
        <div className="h-5 w-full bg-blue-900">
            <h1 className="text-2x1">About-Layout</h1>
        </div>
        {children}

    </div>
  )
}
