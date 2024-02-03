import { Fragment } from "react";

const RightArrowCircle = () => {
  return (
    <svg
      width={28}
      height={28}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ backgroundColor: "white", borderRadius: "1000px" }}
    >
      <path
        fill="#88b1fb"
        d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
      />
    </svg>
  );
};

const CheckCircle = () => {
  return (
    <svg
      width={28}
      height={28}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ backgroundColor: "white", borderRadius: "1000px" }}
    >
      <path
        fill="#32af85"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      />
    </svg>
  );
};

const XMarkCircle = () => {
  return (
    <svg
      width={28}
      height={28}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ backgroundColor: "white", borderRadius: "1000px" }}
    >
      <path
        fill="#f82c17"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>
  );
};

const icons = {
  rejected: <XMarkCircle />,
  reviewed: <RightArrowCircle />,
  processed: <RightArrowCircle />,
  approved: <CheckCircle />,
  paid: <CheckCircle />,
};

/**
 *
 * @param {object} props
 * @param {keyof icons} props.statusMsg
 * @returns
 */
const IconApprove = ({ statusMsg }) => {
  if (!statusMsg && !icons[statusMsg]) return <Fragment />;

  return icons[statusMsg];
};

export default IconApprove;
