import { styled } from "..";

export const CartOverlayContainer = styled("div", {
  position: "absolute",
  width: 480,
  top: 0,
  right: 0,
  // minLeft: 0,
  backgroundColor: "$gray800",
  padding: "0 3rem",
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
  height: 100,
  justifyContent: "flex-end",
  marginRight: "-28px",
  marginTop: "-10px",

  img: {
    cursor: "pointer",

    "&:hover": {
      filter: "brightness(1.5)",
    },
  },
});
export const CartOverlayFooter = styled("div", {
  bottom: "48px",
  position: "absolute",
  width: "80%",

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: "8px",
    padding: "1.25rem",
    lineHeight: 1.6,
    marginTop: "3rem",

    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$lg",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});

export const QuantityFooter = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "6rem",

  span: {
    fontSize: "$md",
    color: "$gray100",
    lineHeight: 1.6,
  },
});

export const TotalAmountFooter = styled("div", {
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "0.5rem",

  span: {
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$gray100",
    lineHeight: 1.6,
  },

  strong: {
    fontSize: "$2xl",
    color: "$gray100",
    lineHeight: 1.4,
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  gap: 2,
  flexDirection: "column",

  padding: "5px 0",

  p: {
    fontSize: "$lg",
    fontWeight: "normal",
    color: "$gray300",
    lineHeight: 1.6,
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
    },
  },
});

export const ProductContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "0.25fr 2fr",
  gap: "1rem",
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

export const ProductsContainer = styled("div", {
  marginTop: "3rem",
  position: "relative",
  display: "grid",
  maxHeight: "48vh",
  overflowY: "auto",
  gridTemplateRows: "repeat(auto-fill, 1fr)",
  gap: "1.5rem",
});
