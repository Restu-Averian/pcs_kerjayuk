import { Box, Stack } from "@chakra-ui/react";
import Icon from "../lib/Icon";

const Footer = () => {
  return (
    <Stack
      direction="row"
      position="fixed"
      bottom={0}
      left={0}
      paddingY={5}
      bg="white"
      width="100%"
      boxShadow=" 0px 0px 7px 0px rgba(0,0,0,0.75)"
    >
      <Box margin="auto">
        <Icon name="home" isActive style={{ margin: "auto" }} />
        <p>Home</p>
      </Box>
      <Box margin="auto">
        <Icon name="attendance" isActive style={{ margin: "auto" }} />

        <p>Attendance</p>
      </Box>
    </Stack>
  );
};
export default Footer;
