import { Avatar, AvatarGroup, Card, Stack } from "@chakra-ui/react";
import "../../style/online.scss";

const OnlineUsers = () => {
  const dummArr = Array.from({ length: 20 })?.map((_, idx) => ({
    name: `R${idx + 1}`,
  }));

  const slicedDummArr = dummArr?.slice(0, 10);

  return (
    <Stack direction="column">
      <b>Online</b>
      <Card padding={5} textAlign="center">
        <AvatarGroup spacing="-0.5rem">
          {slicedDummArr?.map((d, idx) => (
            <Stack key={idx}>
              <Avatar
                style={{ width: 34, height: 34 }}
                name={d?.name}
                showBorder
              />
              <b style={{ fontSize: 8 }}>Restu</b>
            </Stack>
          ))}

          {dummArr?.length > 10 && (
            <Stack>
              <Avatar
                style={{ width: 34, height: 34 }}
                className="extend"
                name="1 0"
              />
              <p style={{ fontSize: 8, visibility: "hidden" }}>--</p>
            </Stack>
          )}
        </AvatarGroup>
      </Card>
    </Stack>
  );
};
export default OnlineUsers;
