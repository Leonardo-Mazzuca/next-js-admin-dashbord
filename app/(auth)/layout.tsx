import ThemeToggler from "@/components/theme-toggler"



const AuthLayout = ({children}:{children:React.ReactNode}) => {

  return (

    <div className="flex justify-center items-center h-screen w-full relative">
        <div className="absolute bottom-5 right-0 text-white">
          <ThemeToggler />
        </div>
        {children}
    </div>
  )

}

export default AuthLayout