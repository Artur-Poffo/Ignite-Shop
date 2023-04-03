import Image from "next/image"
import { useRouter } from "next/router"
import Logo from "../../assets/logo.svg"
import { Cart } from "../Cart"
import { HeaderContainer } from "./styles"

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Image src={Logo} alt="" />
      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}