// MainProfilePage.js
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';

const MainProfilePage = () => {
  // Replace this with actual data
  const profiles = [
    { name: 'Kenzie Anne', age: 32, image: 'https://www.porn-star.com/thumbs2/kenzie-anne.jpg' },
    { name: 'Alyx Star', age: 29, image: 'https://www.porn-star.com/thumbs2/alyx-star.jpg' },
    { name: 'Mina Von D', age: 26, image: 'https://www.porn-star.com/thumbs2/mina-von-d.jpg' },
    { name: 'Rae Lil Black', age: 22, image: 'https://www.porn-star.com/thumbs2/rae-lil-black.jpg' },
    { name: 'Lisa Ann', age: 49, image: 'https://www.porn-star.com/thumbs2/lisa-ann.jpg' },
    { name: 'Mia Melano', age: 49, image: 'https://www.porn-star.com/thumbs2/mia-melano.jpg' },
    { name: 'Bryce Adams', age: 29, image: 'https://i.dailymail.co.uk/1s/2023/10/03/12/76085939-12585765-Bryce_Adams_29_from_Florida_first_joined_the_adult_content_site_-a-14_1696333194052.jpg', insta: 'https://www.instagram.com/bryceadams/' },
    { name: 'Samantha Ava ', age: 25, image: 'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/365968165_793817696077415_4956801424568703032_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9hbBA3G9JSIAX-Hvvs9&_nc_ht=scontent.ftun15-1.fna&cb_e2o_trans=t&oh=00_AfCANMRzPk0p5ut4RVR_oocKQHaOilpEtS2jSatgSwYwCg&oe=65740170', insta: 'https://www.instagram.com/samanthaava/' },
    { name: 'Summer Brookes', age: 23, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGa0rxPx3NxRexpuXPBcVAPdsCgaJ_X3Wvht1Bjlf8BwdH_f9RalWEQvL1Tdmf0mk3tk&usqp=CAU', insta: 'https://www.instagram.com/summerbrookes/' },
    { name: 'Brandy', age: 27, image: 'https://pbs.twimg.com/media/F48uL_MXwAA6It_.jpg:large', insta: 'https://www.instagram.com/brandy/' },
    { name: 'Ana Vaxx', age: 26, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6Qt_JN-CLynW0dIM3SPsesohMZjc7O4P8A&usqp=CAU', insta: 'https://www.instagram.com/anavaxx/' },
  ];

  const { index } = useParams();
  const profile = profiles[index];

///// LOCKERRRRRRRRRRRRRRRRRRRRRRRRRRRRR

  useEffect(() => {
    // Dynamically include the script when the component mounts
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = 'aMPyo_tYj_JzLXJc={"it":4187218,"key":"a715e"};';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://d26h1wdc757l2w.cloudfront.net/c4777a8.js'; //////  URL 
    document.head.appendChild(script2);

    // Clean up the scripts when the component unmounts 
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Function to handle the click event
  const handleContentLockerClick = () => {
    const showContentLocker = document.querySelector(".showContentLocker");
    if (showContentLocker) {
      showContentLocker.innerText = "Wait a moment";
      console.log("ekjeke");
      // eslint-disable-next-line no-undef
      CPABuildLock();
    }
  };

  /////////////////////////////////

  return (
    <div className="main-profile-page">
      <img src={profile.image} alt={profile.name} />
      <h1>{profile.name}</h1>
      <p>Age: {profile.age}</p>
      <a href={profile.insta} target="_blank" rel="noopener noreferrer">Instagram</a>
      <p> Step into the Excitement: Start a Chat with Her Now!</p>
      <div class="arrow"> ⌵⌵⌵⌵⌵⌵⌵⌵ </div>
      <Link > 
        <button  className="showContentLocker" onClick={handleContentLockerClick} >Don't Keep Her Waiting: Click to Begin the Conversation!</button>
       
      </Link>
      <Footer />
    </div>
  );
};

export default MainProfilePage;
