import Head from 'next/head'

import Layout from '../layout/layout'
import Infoblock from '../components/Infoblock'
import SliderDetailProduct from '../components/SliderDetailProduct/SliderDetailProduct.js'


const sliderImg = [
  { img: "/images/photo-3.jpg", name: "Теплый" },
  { img: "/images/photo-2.jpg", name: "Дневной" },
  { img: "/images/photo-1.jpg", name: "Холодный" },
];


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="info">
        <SliderDetailProduct data={sliderImg} />
        <Infoblock />        
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Muller", sans-serif;
          font-weight: 500;
        }
        li {
          list-style: none;
        }
        ul {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}
