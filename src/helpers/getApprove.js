export const getApproveMsg = (status) => {
  let msg;
  switch (status) {
    case 0:
      msg = "rejected";
      break;
    case 1:
      msg = "reviewed";
      break;
    case 2:
      msg = "processed";
      break;
    case 3:
      msg = "approved";
      break;
    case 4:
      msg = "paid";
      break;
    default:
      msg = "";
      break;
  }
  return msg;
};
