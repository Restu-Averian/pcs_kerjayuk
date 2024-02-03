import { Container } from "@chakra-ui/react";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <Container maxW="md">
      {children}
      <Footer />
    </Container>
  );
};
export default Layout;
