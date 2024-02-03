import { Box, Container } from "@chakra-ui/react";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <Container maxW="md">
      <Box paddingBottom={100}>{children}</Box>
      <Footer />
    </Container>
  );
};
export default Layout;
