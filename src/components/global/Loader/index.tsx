"use client"

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#FCFCFA] via-[#F8F5EE] to-[#FCFCFA]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#FF4500]/20 border-t-[#FF4500] rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[#FF6347] rounded-full animate-spin animate-reverse"></div>
      </div>
    </div>
  )
}

export default Loader
