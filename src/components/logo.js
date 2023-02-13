/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import Image from "./image";

export default function Logo({ src, width, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    >
      <img style={{ width: width, height: "auto" }} src={src} alt="LOGO" />
    </Link>
  );
}
