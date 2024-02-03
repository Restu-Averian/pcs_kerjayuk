import { Avatar, Box, Card, Flex, Stack } from "@chakra-ui/react";
import "../../style/cardmember.scss";

const UserProfile = () => {
  return (
    <Stack direction="row">
      <Box>
        <Avatar name="Tabay" />
      </Box>
      <Box>
        <p>Tabay</p>
        <em className="placeholder">UI / UX Desginer</em>
      </Box>
    </Stack>
  );
};

const MemberSince = () => {
  return (
    <Stack textAlign="right">
      <Box>
        <p className="placeholder">Member Since</p>
      </Box>
      <Box>
        <p>01 Juni 2021</p>
      </Box>
    </Stack>
  );
};

const Location = () => {
  return (
    <Stack direction="column">
      <Box>
        <p className="placeholder">Location</p>
      </Box>
      <Box>
        <p>Kantor Sahid</p>
      </Box>
    </Stack>
  );
};

const CreditMember = () => {
  return (
    <Card padding="10px 20px" className="gradient_bg_color">
      <Stack>
        <Flex justifyContent="space-between">
          <UserProfile />
          <MemberSince />
        </Flex>
        <Flex justifyContent="space-between" alignItems="end">
          <Location />
          <em className="placeholder">ICO</em>
        </Flex>
      </Stack>
    </Card>
  );
};
export default CreditMember;
