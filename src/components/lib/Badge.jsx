/**
 *
 * @param {object} props
 * @param {number} props.size
 * @param {React.ReactNode} props.customBadge
 * @param {import("react").CSSProperties} props.customBadgeStyle
 * @returns
 */
const Badge = ({ size = 12, children, customBadge, customBadgeStyle = {} }) => {
  return (
    <div style={{ position: "relative" }}>
      {children}
      <div
        style={{
          position: "absolute",
          ...(!customBadge && {
            backgroundColor: "green",
            borderRadius: 100,
            width: size,
            height: size,
            border: "2px solid white",
            top: 5,
            right: 2,
          }),
          ...customBadgeStyle,
        }}
      >
        {customBadge && customBadge}
      </div>
    </div>
  );
};

export default Badge;
