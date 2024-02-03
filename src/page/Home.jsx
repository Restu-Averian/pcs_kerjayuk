import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CreditMember from "../components/home/CreditMember";
import TodaysActivity from "../components/home/TodaysActivity";
import PCSNews from "../components/home/PCSNews";
import OnlineUsers from "../components/home/Online";
import Header from "../components/home/Header";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  const greetings = () => {
    const hours = new Date()?.getHours();

    let greetingMsg;

    if (hours >= 6 && hours <= 10) {
      greetingMsg = "Morning";
    } else if (hours > 10 && hours <= 16) {
      greetingMsg = "Afternoon";
    } else if (hours > 16 && hours <= 19) {
      greetingMsg = "Evening";
    } else {
      greetingMsg = "Night";
    }

    setGreeting(greetingMsg);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      greetings();
    }, 1000 * 60 * 60);

    greetings();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack spacing="30px" padding={2}>
      <Box>
        <Header />
      </Box>
      <Box>Hi, Good {greeting} ! </Box>
      <Box>
        <CreditMember />
      </Box>
      <Box>
        <TodaysActivity />
      </Box>
      <Box>
        <PCSNews />
      </Box>
      <Box>
        <OnlineUsers />
      </Box>
    </Stack>
  );
};
export default Home;
