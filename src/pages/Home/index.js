import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import data from '../../data/initial_data.json';
import categoriesRepository from '../../repositories/categories';

function Home() {

  useEffect(() => {
    async function fetchData() {
      const response = await categoriesRepository.getAllWithVideos();
      console.log(response);
    }
    fetchData();
}, []);

  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={data.categories[0].videos[0].name}
        url={data.categories[0].videos[0].url}
        videoDescription={"Software Engineering"}
      />

      <Carousel
        ignoreFirstVideo
        category={data.categories[0]}
      />

      <Carousel
        category={data.categories[1]}
      />

      <Carousel
        category={data.categories[2]}
      />

      <Carousel
        category={data.categories[3]}
      />

      <Footer></Footer>
    </div>
  );
}

export default Home;
