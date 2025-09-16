import Footer from "@/components/ui/footer";
import Breadcrumbs from "../../components/ui/breadcrumbs";

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs
        homeElement={"Home"}
        separator={<span className="mx-2"> &gt; </span>}
        activeClasses="text-white"
        containerClasses="flex"
        listClasses="font-bold"
        capitalizeLinks
      />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
