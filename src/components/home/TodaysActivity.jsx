import { Box, Flex, Stack } from "@chakra-ui/react";
import Icon from "../lib/Icon";

const TodaysActivities = () => {
  return (
    <Stack direction="column">
      <Box>
        <b>Todays Activity</b>
      </Box>
      <Box>
        <Flex justifyContent="space-around" alignItems="center">
          <Stack direction="column" textAlign="center">
            <Box style={{ margin: "auto" }}>
              <Icon name="clock_check_in" />
            </Box>
            <Box>
              <b>08.30</b>
            </Box>
            <Box>Check In</Box>
          </Stack>
          <Stack direction="column" textAlign="center">
            <Box style={{ margin: "auto" }}>
              <Icon name="working_hours" />
            </Box>
            <Box>
              <b style={{ color: "rgba(234, 38, 38, 1)" }}>03:00:00</b>
            </Box>
            <Box>Working Hours</Box>
          </Stack>
          <Stack direction="column" textAlign="center">
            <Box style={{ margin: "auto" }}>
              <Icon name="clock_check_out" />
            </Box>
            <Box>--:--</Box>
            <Box>Check Out</Box>
          </Stack>
        </Flex>
      </Box>
    </Stack>
  );
};
export default TodaysActivities;
