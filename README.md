# Ignite Shop - Ignite Rocketseat
Fourth project in the updated React.js trail from Ignite

## Technologies 

Here are the technologies used in this project.

* React.js
* Next.js
* TypeScript
* axios
* Phosphor Icons
* Radix UI
* Stitches
* Stripe

## Services Used

* Github
* Stripe
* Vercel

## Getting started

* Clone the repository
  ```bash
    git clone https://github.com/Artur-Poffo/Ignite-Shop.git
  ```
* Create a Stripe Project
  * Create you account on [Stripe](https://stripe.com/br?ad_content=575905716902&utm_matchtype=e&utm_adposition=&utm_device=c)
  * In the developers section of your project copy the two API keys and paste them as environment variables in a `.env.local` file, your `.env.local` file should look like this:
    * ```
        # App
        NEXT_URL=http://localhost:3000 -> URL OF PROJECT

        # Stripe
        STRIPE_PUBLIC_KEY=<YOUR STRIPE PUBLIC KEY>
        STRIPE_SECRET_KEY=<YOUR STRIPE SECRET KEY>
      ```
* install dependencies.
  - `npm install` in root directory (you need installed node and npm for this)
* To run the project.
  - `npm run dev` on root directory

## How to use

### 1 - When you access for the first time, you will see the homepage with all products cards

![Home Page Print](https://raw.githubusercontent.com/Artur-Poffo/Ignite-Shop/main/public/readme/Home.png)

### 2 - Navigate between dynamic product routes

![Product Page](https://raw.githubusercontent.com/Artur-Poffo/Ignite-Shop/main/public/readme/Product.png)

### 3 - And add or remove items to cart

![Cart Image](https://raw.githubusercontent.com/Artur-Poffo/Ignite-Shop/main/public/readme/OpenCart.png)

### 4 - Confirm your purchase with Stripe and see the success screen, to test use a [Stripe API test card](https://stripe.com/docs/testing)

![Success Page Image](https://raw.githubusercontent.com/Artur-Poffo/Ignite-Shop/main/public/readme/Success.png)


## Features

The main features of the application are:
 - Add items to cart
 - List products that are in the cart
 - Show total value of cart items
 - Checkout Process with Stripe

## Links
  - Deploy on Vercel: <https://ignite-shop-green-zeta.vercel.app>
  - Repository: <https://github.com/Artur-Poffo/Ignite-Shop>

  ## Versioning

  1.0.0


  ## Authors

  * **Artur Poffo - Developer**

  [My LinkedIn](https://www.linkedin.com/in/arturpoffo/)
  
  [My Portfolio](https://mywebexperience.vercel.app/)
  
  Please follow github and join us!
  Thanks to visiting me and good coding!