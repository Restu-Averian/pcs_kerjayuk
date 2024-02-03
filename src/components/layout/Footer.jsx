import { Box, Stack } from "@chakra-ui/react";
import Icon from "../lib/Icon";

const Footer = () => {
  return (
    <Stack direction="row">
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
