import { Box, Flex } from "@chakra-ui/react";
import Icon from "../lib/Icon";
import "../../style/header.scss";
import Badge from "../lib/Badge";
import { useNavigate } from "react-router-dom";
import Notification from "../../page/Notification";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [isOpenNotif, setIsOpenNotif] = useState(false);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    if (search?.get("notification")) {
      setIsOpenNotif(search?.get("notification"));
    }
  }, [window?.location?.search]);

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <h1 className="app_name">KerjaYuk</h1>

      <Box
        onClick={() => {
          navigate("?notification=open");
          setIsOpenNotif(true);
        }}
      >
        <Badge>
          <Icon name="notification" style={{ cursor: "pointer" }} />
        </Badge>
      </Box>

      <Notification
        isOpen={isOpenNotif}
        onClose={() => {
          setIsOpenNotif(false);
          navigate("/");
        }}
      />
    </Flex>
  );
};
export default Header;
