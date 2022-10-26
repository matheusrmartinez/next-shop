import { styled } from "..";

export const CartOverlayContainer = styled("div", {
  position: "absolute",
  width: 480,
  right: 0,
  backgroundColor: "$gray800",
  padding: "0 1.5rem 3rem 3rem",
  zIndex: 99999,
  minHeight: "100vh",

  h1: {
    fontSize: "$xl",
    fontWeight: "bold",
    color: "$gray100",
  },
});
export const CartOverlayHeader = styled("header", {
  position: "relative",
  display: "flex",
  width: "100%",
  height: 100,
  justifyContent: "flex-end",

  img: {
    cursor: "pointer",
  },
});
export const CartOverlayDetails = styled("div", {});

export const ProductDetails = styled("div", {
  display: "flex",
  gap: 2,
  flexDirection: "column",

  padding: "5px 0",

  p: {
    fontSize: "$lg",
    fontWeight: "normal",
    color: "$gray300",
    lineHeight: 1.6
  },

  span: {
    fontSize: "$lg",
    fontWeight: "bold",
    lineHeight: 1.6,
  },

  button: {
    fontSize: "$md",
    lineHeight: 1.6,
    border: 0,
    color: "$green500",
    borderRadius: 0,
    backgroundColor: "transparent",
    textAlign: "left",
  
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "1.5rem",
  
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  
    "&:not(:disabled):hover": {
      color: "$green300",
    }
  }
});

export const ProductContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "0.25fr 2fr",
  gap: "1rem",
  backgroundColor: "blue",

  margin: "2rem auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  height: 120,
  maxWidth: 130,
  maxHeight: 125,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  backgroundColor: "green",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
