
import Navbar from "../(pages)/(CommonComponents)/Navbar/Navbar";
import Footer from "../(pages)/(CommonComponents)/Footer/Footer";

export default function MainLayout({
    children  ,
} : Readonly <{
  children: React.ReactNode;
}>) {
    return (
    <>
        <Navbar />
        {children}
        <Footer/>
    </>
    )
}
