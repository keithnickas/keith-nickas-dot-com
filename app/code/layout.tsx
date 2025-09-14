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
        separator={<span> &gt; </span>}
        activeClasses="text-white"
        containerClasses="flex"
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
      />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
