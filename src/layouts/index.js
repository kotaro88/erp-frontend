
import LoginLayout from "./LoginLayout";
import Header from "./Header";
import Footer from "./Footer";

export default function(props) {
  if (props.location.pathname === '/login') {
    return <LoginLayout>{ props.children }</LoginLayout>
  }
  
  return (
    <>
      <Header />
      { props.children }
      <Footer />
    </>
  );
}