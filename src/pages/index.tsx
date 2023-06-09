import { HomeContainer, Product } from "@/styles/pages/home";
import { GetStaticProps } from "next";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import 'keen-slider/keen-slider.min.css';

interface IProduct {
  id: string;
  name: string;
  image_url: string;
  price: string;
}

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider" >
      {products.map((product) => {
        return (
          <Product prefetch={false} href={`/product/${product.id}`} key={product.id} className="keen-slider__slide">
            <Image src={product.image_url} width={520} height={480} alt="" placeholder="blur" blurDataURL={product.image_url} />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      image_url: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
