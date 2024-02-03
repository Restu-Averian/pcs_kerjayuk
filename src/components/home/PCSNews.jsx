import { Avatar, Box, Card, Flex, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const CardNews = () => {
  return (
    <Card padding={5} margin="0 10px">
      <Stack direction="column">
        <Box>
          <Flex justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <Avatar name="Ana Riswati" />
              <b style={{ color: "rgba(234, 38, 38, 1)" }}>Ana Riswati</b>
            </Stack>
            <Stack direction="column" textAlign="right">
              <p>Senin</p>
              <p>30 Mei 2022</p>
            </Stack>
          </Flex>
        </Box>
        <Box textAlign="left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          </p>
        </Box>
      </Stack>
    </Card>
  );
};
const PCSNews = () => {
  const dummArr = Array.from({ length: 5 });
  return (
    <Stack direction="column">
      <Box>
        <b>PCS News</b>
      </Box>

      <Carousel infiniteLoop emulateTouch showStatus={false}>
        {dummArr?.map((_, idx) => (
          <CardNews key={idx} />
        ))}
      </Carousel>
    </Stack>
  );
};
export default PCSNews;
