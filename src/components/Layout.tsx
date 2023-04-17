const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {

    return (
        <div className="flex w-full flex-col min-h-screen ">
            {children}
        </div>
    )
}

export default Layout;