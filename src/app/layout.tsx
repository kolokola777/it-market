import type { LayoutProps } from "@/types/globals.type";
import "@/css/global.css"
import { Navigation } from "@/layouts/navigation.layout";
import Footer from "@/layouts/footer.layout";
import { Breadcrumbs } from "@/components/breadcrumbs";


const AppLayout = async ({ children }: LayoutProps) => {
  return (
    <html lang="ru" translate="no" className="scroll-smooth min-h-screen">
      <body className="min-h-screen flex flex-col justify-between">
        <Navigation />

        <main className="flex-1">
          <Breadcrumbs />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default AppLayout;
