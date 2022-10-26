import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
  justifyContent: "center",
});

export const Header = styled("header", {
  display: "flex",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  justifyContent: "space-between",
  position: "relative",

  img: {
    "&:hover": {
      filter: "brightness(1.5)",
    },
    position: "relative",
  },

  a: {
    textDecoration: "none",
    position: "relative",

    span: {
      position: "absolute",
      top: "-15px",
      right: "-5px",
      padding: "5px 10px",
      borderRadius: "50%",
      background: "$green500",
      fontWeight: "bold",
      fontSize: "$sm",
      color: "$gray100",

      "&:hover": {
        background: "$green300",
      },
    },
  },
});
