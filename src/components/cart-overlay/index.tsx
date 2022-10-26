import {
  CartOverlayContainer,
  ProductDetails,
  CartOverlayHeader,
  ImageContainer,
  CartOverlayDetails,
} from "../../styles/components/cart-overlay";
import CloseIcon from "../../assets/close-icon.svg";
import Image from "next/image";
import camiseta1 from "../../../public/camisetas/1.png";
import { ProductContainer } from "../../styles/pages/product";

interface CartOverlayProps {
  visible: boolean;
  setVisible: () => void;
}

export const CartOverlay = ({ visible, setVisible }: CartOverlayProps) => {
  return (
    visible && (
      <CartOverlayContainer>
        <CartOverlayHeader>
          <Image src={CloseIcon} alt="" onClick={setVisible} />
        </CartOverlayHeader>
        <h1>Sacola de compras</h1>
        <ProductContainer>
          <ImageContainer>
            <Image src={camiseta1} alt="" />
          </ImageContainer>
          <ProductDetails>
            <p>Camiseta beyond the limits</p>
            <span>R$ 79.90</span>
            <button>Remover</button>
          </ProductDetails>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <Image src={camiseta1} alt="" />
          </ImageContainer>
          <ProductDetails>
            <p>Camiseta explorer</p>
            <span>R$ 62.90</span>
            <button>Remover</button>
          </ProductDetails>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <Image src={camiseta1} alt="" />
          </ImageContainer>
          <ProductDetails>
            <p>Camiseta explorer 2.0</p>
            <span>R$ 89.90</span>
            <button>Remover</button>
          </ProductDetails>
        </ProductContainer>
        <CartOverlayDetails></CartOverlayDetails>
      </CartOverlayContainer>
    )
  );
};
