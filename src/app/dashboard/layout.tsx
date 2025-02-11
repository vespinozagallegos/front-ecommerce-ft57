import Link from "next/link"

// FUNCIÓN que permiite la NAVEGACIÓN entre SEGMENTOS (sin actualizar la página)
export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {   
    return (
      <section>
        <header className="flex justify-center
                            text-[#2b2b2b]">
          <div className="flex justify-around md:justify-between
                          mt-5
                          p-3 md:p-5
                          w-full md:w-1/2">
            <div className="bg-amber-300 rounded-xl
                            p-3 md:p-5">
              <Link href="/dashboard">Mis Datos</Link>
            </div>

            <div className="bg-amber-300 rounded-xl
                            p-3 md:p-5">
              <Link href="/dashboard/orders">Mis Compras</Link>
            </div>

          </div>
        </header>
        <main>{children}</main>
      </section>
    )
  }
  