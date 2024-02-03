import { Box, Flex, Stack } from "@chakra-ui/react";
import Drawer from "../components/lib/Drawer";
import Icon from "../components/lib/Icon";
import { notificationData } from "../constants";
import IconApprove from "../components/lib/IconApprove";
import { getApproveMsg } from "../helpers/getApprove";
import Badge from "../components/lib/Badge";

const Notification = ({ isOpen, onClose }) => {
  return (
    <Drawer
      size="full"
      isOpen={isOpen}
      header={
        <Flex gap={4} align="center">
          <Box
            onClick={() => {
              onClose();
            }}
          >
            <Icon name="arrow_left" />
          </Box>
          <Box>
            <b style={{ color: " rgba(234, 38, 38, 1)", fontSize: 24 }}>
              Notification
            </b>
          </Box>
        </Flex>
      }
      onClose={() => {
        onClose();
      }}
    >
      <Stack spacing={0} height="80vh" overflowY="scroll">
        {notificationData?.map((notif, idx) => {
          return (
            <Stack
              direction="row"
              spacing={5}
              key={idx}
              {...(!notif?.isRead && { bgColor: "#d4e4fc" })}
              padding={4}
            >
              <Box>
                <Badge
                  customBadge={
                    <IconApprove statusMsg={getApproveMsg(notif?.status)} />
                  }
                  customBadgeStyle={{
                    position: "absolute",
                    bottom: -15,
                    right: -10,
                  }}
                >
                  <Flex
                    width={50}
                    height={50}
                    borderRadius={10}
                    justifyContent="center"
                    alignItems="center"
                    background="
                  linear-gradient(142deg,
                    rgba(234, 38, 38, 1) 0%,
                      rgba(197, 16, 96, 1) 70%
                    )
                  "
                  >
                    <Icon name="money" />
                  </Flex>
                </Badge>
              </Box>

              <Box>
                <Stack>
                  <b>{notif?.title}</b>
                  <p>Your Submission get {getApproveMsg(notif?.status)} </p>
                </Stack>
              </Box>
              <Box>
                <small>{notif?.timestamp}</small>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Drawer>
  );
};

export default Notification;
