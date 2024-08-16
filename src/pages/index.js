import Layout from '@/componets/Layout';
import { useEffect, useState } from 'react';
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { IoMdClock } from "react-icons/io";
import Card from '@/componets/Card';
// import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const initialTime = 700; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);
  // // Uncomment the useEffect block to use it
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
      if (time < 10) {
        setTime(700)
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  const [products, setProducts] = useState([{
    "_id": {
      "$oid": "66a52222108d28052e6948e3"
    },
    "Title": "OnePlus Buds 3 in Ear TWS Bluetooth Earbuds with Upto 49dB Smart Adaptive Noise Cancellation,Hi-Res Sound Quality,Sliding Volume Control,10mins for 7Hours Fast Charging with Upto 44Hrs Playback(Gray)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "6399",
    "images0": "https://m.media-amazon.com/images/I/51h7CQTRJ1L._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/518JdWAXvJL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/51wXDR0u4uL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61XHerhMdaL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71fXx1fB5BL._SL1500_.jpg",
    "disp_order": `<div data-observerid-b5f7d11e-2522-4654-8b5a-ef239fdfbd54="68e05f05-2610-46db-87dd-1f0f660a6553" style="height: 100%; width: 100%;"><div><div class="css-175oi2r r-knv0ih r-1ifxtd0"><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/0101823b6f3444149858101a8fb15548_18d62491daa_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/0101823b6f3444149858101a8fb15548_18d62491daa_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/0101823b6f3444149858101a8fb15548_18d62491daa_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/938edbb1eab04cae9af051b3cc3e7768_18d6249326e_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/938edbb1eab04cae9af051b3cc3e7768_18d6249326e_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/938edbb1eab04cae9af051b3cc3e7768_18d6249326e_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/9c7a980aa64b4f70afd095b56f93dee9_18d62493cc8_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/9c7a980aa64b4f70afd095b56f93dee9_18d62493cc8_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/9c7a980aa64b4f70afd095b56f93dee9_18d62493cc8_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/56620609ede14413881bc4b8101fd5fd_18d62494e8f_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/56620609ede14413881bc4b8101fd5fd_18d62494e8f_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/56620609ede14413881bc4b8101fd5fd_18d62494e8f_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/a2fd8247533d4428896289150597e348_18d62495b51_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/a2fd8247533d4428896289150597e348_18d62495b51_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/a2fd8247533d4428896289150597e348_18d62495b51_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/940bf2e2dfbf48a3819edcd7af163b32_18d62498d5e_6.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/940bf2e2dfbf48a3819edcd7af163b32_18d62498d5e_6.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/940bf2e2dfbf48a3819edcd7af163b32_18d62498d5e_6.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/d1d801767206472e91743af1812c09de_18d62498bce_7.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/d1d801767206472e91743af1812c09de_18d62498bce_7.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/d1d801767206472e91743af1812c09de_18d62498bce_7.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/a80d7c175c6c45fd9bdae54000660d06_18d623996e7_8.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/a80d7c175c6c45fd9bdae54000660d06_18d623996e7_8.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/a80d7c175c6c45fd9bdae54000660d06_18d623996e7_8.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/cfcc88759b7e428c8290167c22b212f8_18d6249a5bd_9.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/cfcc88759b7e428c8290167c22b212f8_18d6249a5bd_9.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/cfcc88759b7e428c8290167c22b212f8_18d6249a5bd_9.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/a51e34c71a12439095b01e6079fdfc5b_18d6249b59d_10.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/a51e34c71a12439095b01e6079fdfc5b_18d6249b59d_10.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/a51e34c71a12439095b01e6079fdfc5b_18d6249b59d_10.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/d7e6ec29d4c94fbc831ca9b0655a0db3_18d6249d07e_11.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/d7e6ec29d4c94fbc831ca9b0655a0db3_18d6249d07e_11.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/d7e6ec29d4c94fbc831ca9b0655a0db3_18d6249d07e_11.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/050c565f8a3b4ab4aaec63ea55927e73_18d6249ead4_12.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/050c565f8a3b4ab4aaec63ea55927e73_18d6249ead4_12.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/050c565f8a3b4ab4aaec63ea55927e73_18d6249ead4_12.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/7591014dfa3b47e5a5b6c368fadbd102_18d6249f810_13.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/7591014dfa3b47e5a5b6c368fadbd102_18d6249f810_13.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/7591014dfa3b47e5a5b6c368fadbd102_18d6249f810_13.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 144px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-img/6cd293c2672f4743bc62342edc857cc3_18d634a1f4d_14.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/144/cms-rpd-img/6cd293c2672f4743bc62342edc857cc3_18d634a1f4d_14.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/288/cms-rpd-img/6cd293c2672f4743bc62342edc857cc3_18d634a1f4d_14.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div><div class="css-175oi2r" style="height: 1px; background-color: rgb(234, 234, 234);"></div></div></div>`,
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a5238e108d28052e6948e4"
    },
    "Title": "OnePlus Buds Z2 Bluetooth Truly Wireless in Ear Earbuds with mic, Active Noise Cancellation, 10 Minutes Flash Charge & Upto 38 Hours Battery [Matte Black]\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "5559",
    "images0": "https://m.media-amazon.com/images/I/51YiSywGQtL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/51DX0wmdilL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/51zkP67Yu8L._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/51Ij5BR+3gL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/51sKmA8b+cL._SL1500_.jpg",
    "disp_order": `<div data-observerid-49308685-822a-4bbe-aa6f-74c2198587fc="f378784d-7151-4014-8476-788c43446f70" style="height: 100%; width: 100%;"><div><div class="css-175oi2r r-knv0ih r-1ifxtd0"><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/f562aa44588e4560afdea13162f07a36_17e58976e6a_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/f562aa44588e4560afdea13162f07a36_17e58976e6a_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/f562aa44588e4560afdea13162f07a36_17e58976e6a_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/19fa5f00823a4b6684e065cc7f9a6a16_17e5897a921_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/19fa5f00823a4b6684e065cc7f9a6a16_17e5897a921_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/19fa5f00823a4b6684e065cc7f9a6a16_17e5897a921_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/38adbd4ed3c53992819573f89cf8059a_17e58983f59_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/38adbd4ed3c53992819573f89cf8059a_17e58983f59_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/38adbd4ed3c53992819573f89cf8059a_17e58983f59_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 128px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-images/f457fffe5fa0413b83263c6f6e6c6c43_17e589878df_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/128/cms-rpd-images/f457fffe5fa0413b83263c6f6e6c6c43_17e589878df_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/256/cms-rpd-images/f457fffe5fa0413b83263c6f6e6c6c43_17e589878df_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/0cb9bb680f7e49b7ab5d6ffd4651a080_17e5898a18a_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/0cb9bb680f7e49b7ab5d6ffd4651a080_17e5898a18a_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/0cb9bb680f7e49b7ab5d6ffd4651a080_17e5898a18a_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/3dd4ac3311c74cebbf9774196d77a0bf_17e589b2787_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/3dd4ac3311c74cebbf9774196d77a0bf_17e589b2787_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/3dd4ac3311c74cebbf9774196d77a0bf_17e589b2787_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/e1502d30acc9498bae8f5e38e5524d55_17e589b520a_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/e1502d30acc9498bae8f5e38e5524d55_17e589b520a_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/e1502d30acc9498bae8f5e38e5524d55_17e589b520a_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/74511d134235485fb4b6e9e814412fb2_17e589ba0c6_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/74511d134235485fb4b6e9e814412fb2_17e589ba0c6_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/74511d134235485fb4b6e9e814412fb2_17e589ba0c6_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/b4a7fd877e4342fe805cc783efde5e7c_17e589bcc4b_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/b4a7fd877e4342fe805cc783efde5e7c_17e589bcc4b_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/b4a7fd877e4342fe805cc783efde5e7c_17e589bcc4b_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/6f44d90f68e547d184c8c43f8e2de2dc_17e589e4abb_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/6f44d90f68e547d184c8c43f8e2de2dc_17e589e4abb_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/6f44d90f68e547d184c8c43f8e2de2dc_17e589e4abb_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/3b741769da7a45cf8209efdda1e89032_17e589e7c00_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/3b741769da7a45cf8209efdda1e89032_17e589e7c00_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/3b741769da7a45cf8209efdda1e89032_17e589e7c00_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/9f58d0126b61470583a194704793e2dc_17e589ec7f1_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/9f58d0126b61470583a194704793e2dc_17e589ec7f1_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/9f58d0126b61470583a194704793e2dc_17e589ec7f1_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/c9013ae9fa3f4fa8923a82c6167559ad_17e589ef0f2_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/c9013ae9fa3f4fa8923a82c6167559ad_17e589ef0f2_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/c9013ae9fa3f4fa8923a82c6167559ad_17e589ef0f2_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/49b1c836b8264b5da80d7c9be00ba7fa_17e589f17ea_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/49b1c836b8264b5da80d7c9be00ba7fa_17e589f17ea_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/49b1c836b8264b5da80d7c9be00ba7fa_17e589f17ea_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/eea4a0dcbd7d493c8482f1d627d4c223_17e589f3c39_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/eea4a0dcbd7d493c8482f1d627d4c223_17e589f3c39_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/eea4a0dcbd7d493c8482f1d627d4c223_17e589f3c39_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/729b1964802e4e7295c6927eaf62c849_17e589f64af_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/729b1964802e4e7295c6927eaf62c849_17e589f64af_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/729b1964802e4e7295c6927eaf62c849_17e589f64af_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/4a0113640f08484c8f39359e3a7fa2ff_17e589f89d3_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/4a0113640f08484c8f39359e3a7fa2ff_17e589f89d3_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/4a0113640f08484c8f39359e3a7fa2ff_17e589f89d3_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/18261293d2eb4b12b873581df01911d3_17e589fba08_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/18261293d2eb4b12b873581df01911d3_17e589fba08_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/18261293d2eb4b12b873581df01911d3_17e589fba08_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 128px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-images/b4ed88dd435c434b82e0d9e922dd54e9_17e589fe0a7_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/128/cms-rpd-images/b4ed88dd435c434b82e0d9e922dd54e9_17e589fe0a7_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/256/cms-rpd-images/b4ed88dd435c434b82e0d9e922dd54e9_17e589fe0a7_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/d6526c47788e4500a67942b5e2667792_17e58a0158c_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/d6526c47788e4500a67942b5e2667792_17e58a0158c_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/d6526c47788e4500a67942b5e2667792_17e58a0158c_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/3bc70ba2f70841bba73e75920d266aff_17e58a04347_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/3bc70ba2f70841bba73e75920d266aff_17e58a04347_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/3bc70ba2f70841bba73e75920d266aff_17e58a04347_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/b82ecf691c0d41d1a9300de73d4cf78a_17e58a073b6_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/b82ecf691c0d41d1a9300de73d4cf78a_17e58a073b6_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/b82ecf691c0d41d1a9300de73d4cf78a_17e58a073b6_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/6182ea3d40c043678975fa63f0a19abd_17e58a0bff2_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/6182ea3d40c043678975fa63f0a19abd_17e58a0bff2_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/6182ea3d40c043678975fa63f0a19abd_17e58a0bff2_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 128px;"><img src="https://rukminim2.flixcart.com/image/600/300/cms-rpd-images/9bb209c110f14c69b2c05b35f20b54fc_17e58a11766_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/128/cms-rpd-images/9bb209c110f14c69b2c05b35f20b54fc_17e58a11766_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/256/cms-rpd-images/9bb209c110f14c69b2c05b35f20b54fc_17e58a11766_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/42afcbc036084a98aae4ab2df06dd0fa_17e58a14785_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/42afcbc036084a98aae4ab2df06dd0fa_17e58a14785_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/42afcbc036084a98aae4ab2df06dd0fa_17e58a14785_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/02360185ed594f4ea259ec031968377d_17e58a179c9_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/02360185ed594f4ea259ec031968377d_17e58a179c9_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/02360185ed594f4ea259ec031968377d_17e58a179c9_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/42b4f3e980394271a89b9ee31fe5921c_17e58a1a490_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/42b4f3e980394271a89b9ee31fe5921c_17e58a1a490_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/42b4f3e980394271a89b9ee31fe5921c_17e58a1a490_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 64px;"><img src="https://rukminim2.flixcart.com/image/600/150/cms-rpd-images/a93d4c36ce0f45a3955f3b9d4d53e977_17e58a1cf7b_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/64/cms-rpd-images/a93d4c36ce0f45a3955f3b9d4d53e977_17e58a1cf7b_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/128/cms-rpd-images/a93d4c36ce0f45a3955f3b9d4d53e977_17e58a1cf7b_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/69d1337af7c24913b391ef530f123513_17e58a1f6c8_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/69d1337af7c24913b391ef530f123513_17e58a1f6c8_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/69d1337af7c24913b391ef530f123513_17e58a1f6c8_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r r-eqz5dr"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 204px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-images/d077b70cda934c24964772735c9f805b_17e58a22aa2_image.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/204/cms-rpd-images/d077b70cda934c24964772735c9f805b_17e58a22aa2_image.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/408/cms-rpd-images/d077b70cda934c24964772735c9f805b_17e58a22aa2_image.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div><div class="css-175oi2r" style="height: 1px; background-color: rgb(234, 234, 234);"></div></div></div>      `,
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a5241e108d28052e6948e5"
    },
    "Title": "realme Buds T300 Truly Wireless in-Ear Earbuds with 30dB ANC, 360° Spatial Audio Effect, 12.4mm Dynamic Bass Boost Driver with Dolby Atmos Support, Upto...\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "1399",
    "images0": "https://m.media-amazon.com/images/I/51PzaL2D0sL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71xtnSu+lhL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71jbCnynKjL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71C5xCWehoL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/6127HXUu4hL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/1b9a58003bab4eef85ba8026a39f5721_18a64f9ca91_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/1b9a58003bab4eef85ba8026a39f5721_18a64f9ca91_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/1b9a58003bab4eef85ba8026a39f5721_18a64f9ca91_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/23cc437bbef54c0a59191bc3f08fd406_18a64f9dd4d_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/23cc437bbef54c0a59191bc3f08fd406_18a64f9dd4d_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/23cc437bbef54c0a59191bc3f08fd406_18a64f9dd4d_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/0af175daea9d4e73ace20c1fe86160ad_18a64f9f203_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/0af175daea9d4e73ace20c1fe86160ad_18a64f9f203_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/0af175daea9d4e73ace20c1fe86160ad_18a64f9f203_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/2a7c259616464bc3920df3c83517009c_18a64fa063c_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/2a7c259616464bc3920df3c83517009c_18a64fa063c_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/2a7c259616464bc3920df3c83517009c_18a64fa063c_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/ae22c3aa195a4f84b554d6f709dca8a1_18a64fa1945_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/ae22c3aa195a4f84b554d6f709dca8a1_18a64fa1945_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/ae22c3aa195a4f84b554d6f709dca8a1_18a64fa1945_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a524c9108d28052e6948e6"
    },
    "Title": "JBL Tune 235NC in Ear Wireless ANC Earbuds (TWS), Massive 40Hrs Playtime with Speed Charge, Customizable Bass with Headphones App, 4 Mics for Perfect Calls,...\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/51ePBbIYSgL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71yidOtFy4L._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71QfQYUFBNL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/81-aG6BL5qL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61m9XucAejL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a5252f108d28052e6948e7"
    },
    "Title": "amazon basics True Wireless in-Ear Earbuds with Mic, Low-Latency Gaming Mode, Touch Control, IPX5 Water-Resistance, Bluetooth 5.3, Up to 60 Hours Play Time, Voice Assistance and Fast Charging (White)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "249",
    "mrp": "2399",
    "images0": "https://m.media-amazon.com/images/I/51OAqmmwY9L._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71EDgHgSvIL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61gJbl5z-7L._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61DWB4V2FrL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71r-GKuLYZL._SL1500_.jpg",
    "disp_order": "...",
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a525ef108d28052e6948ea"
    },
    "Title": "Samsung Galaxy Buds2 Pro, with Innovative AI features, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (Graphite)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "399",
    "mrp": "5959",
    "images0": "https://m.media-amazon.com/images/I/61Qqg+T8nsL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71YCCEPBguL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61lEskbCaoL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/81ZnkXiV6EL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/81EcW9I7uDL._SL1500_.jpg",
    "disp_order": `<div class="_2xg8tL _325BrU" style="width: 640px; height: 679px; transform: translate3d(0px, 0px, 0px);"><div class="_2Ir5S7" style="width: 320px;"><div><div style="height: 679px; overflow-y: auto;"><div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Key Features</h4><ul class="_2dA5hr"><li class="_26e3Bd">With Mic:Yes</li><li class="_26e3Bd">Connector type: No</li><li class="_26e3Bd">Bluetooth version: 5.3</li><li class="_26e3Bd">Wireless range: 10 m</li><li class="_26e3Bd">Battery life: 96 hr | Charging time: 1.5</li></ul></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">General</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Model Name</td><td class="_12tFmc">Buds 2 Pro (OG) Plus Bluetooth Earphone 96 hrs Battery Life</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Color</td><td class="_12tFmc">Matte Black</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Type</td><td class="_12tFmc">True Wireless</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Inline Remote</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Sales Package</td><td class="_12tFmc">2 EARBUDS, 1 Charging Case,1 USB Charging Cable, 1 USER MANUAL</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Connectivity</td><td class="_12tFmc">Bluetooth</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Design</td><td class="_12tFmc">Earbud</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Accessories Included</td><td class="_12tFmc">Charging Case, USB Charging Cable, User Manual</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Compatible Devices</td><td class="_12tFmc">Mobile, Laptop, Audio Player, Gaming Console, Tablet</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Net Quantity</td><td class="_12tFmc">1</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Product Details</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Sweat Proof</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Foldable/Collapsible</td><td class="_12tFmc">No</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Deep Bass</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Water Resistant</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Monaural</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Designed For</td><td class="_12tFmc">Smartphones, Laptops, Smart TVs, Tablets</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">System Requirements</td><td class="_12tFmc">Android, IOS, Support EARBUDS wireless connection via Bluetooth; Support playback, into the headphone to play music when there is no phone, Built-in rechargeable battery</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Carrier Frequency</td><td class="_12tFmc">2.4GHz-2.4835GHz</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Connector Size</td><td class="_12tFmc">10 mm</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Driver Type</td><td class="_12tFmc">10mm Dynamic Bass Boost Driver - Powerful &amp; Rhythmic Bass</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Indicators</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Controls</td><td class="_12tFmc">Power On/Off, Play, Touch, Answer call Volume + - with charging pods Double Tap: Play Music: Next Track. Call: Answer/Hang up the Call. Touch and Hold: The Left Earbud for 1s: Volume Down. The Right Earbud for 1s: Volume up. Enter Pairing Mode. When Camera is Open, Double Tap either Earbud to take Photos. Camera Control: Take a Photo. Triple Tap: Previous Track.</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Technology Used</td><td class="_12tFmc">5.3</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Other Features</td><td class="_12tFmc">Presents Bigger Bluetooth Wireless Headphones at Lowest Price. Mobile phone to enjoy music;, [long play] - up to 12 hours of play time, up to 24 hours of continuous talk time with case. and up to 120 hours of standby time. Mic: Yes, Bluetooth, Wireless Stereo, version: V5.3, Wireless, range: 10 m, Battery life: 96 hr with case. Charging time: 1.5 hr. About 4-6 hours of talk time on 20 mint charge.</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Driver Units</td><td class="_12tFmc">10 mm</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">With Microphone</td><td class="_12tFmc">Yes</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Sound Features</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Sensitivity</td><td class="_12tFmc">95 dBmW</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Maximum Power Input</td><td class="_12tFmc">110 mW</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Other Sound Features</td><td class="_12tFmc">HIFI Sound Quality , Restore sound quality</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Connectivity Features</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Wireless Type</td><td class="_12tFmc">Bluetooth</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Wireless Range</td><td class="_12tFmc">10 m</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Bluetooth Version</td><td class="_12tFmc">5.3</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Bluetooth Range</td><td class="_12tFmc">10 m</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Power Source</td><td class="_12tFmc">Battery,</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Transmitter Power Source</td><td class="_12tFmc">USB Charger</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Power Requirement</td><td class="_12tFmc">5V DC</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Power Supply</td><td class="_12tFmc">5V DC</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Battery Output</td><td class="_12tFmc">37 V</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Battery Type</td><td class="_12tFmc">LITHIUM POLYMER &amp; Rechargeable Battery</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Battery Life</td><td class="_12tFmc">96 hr</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Battery Capacity</td><td class="_12tFmc">460 mAh</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Charging Time</td><td class="_12tFmc">1.5</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Play Time</td><td class="_12tFmc">12 hr</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Standby Time</td><td class="_12tFmc">120 hr</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Other Power Features</td><td class="_12tFmc">Sensitivity-95 dBmW, Impedance- 32 ohm, Bluetooth Profiles- A2DP, Headphone Battery- Lithium Polymer, Battery Output- 3.7 V.</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Dimensions</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Weight</td><td class="_12tFmc">41</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Warranty</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Domestic Warranty</td><td class="_12tFmc">6 Months</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Warranty Summary</td><td class="_12tFmc">7 Days Replacement</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Warranty Service Type</td><td class="_12tFmc">If any problem you have 7 day Return policy. After 7 days problem solve by contact : 9330445691 whatsup massage Or email:haroonecommerce@gmail.com.</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Covered in Warranty</td><td class="_12tFmc">Manufacturig Defects Only</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Not Covered in Warranty</td><td class="_12tFmc">Water Damage, Broken or Tampered Defects.</td></tr></tbody></table></div></div></div></div></div></div><div class="_2Ir5S7" style="width: 320px;"><div><div style="height: 679px; overflow-y: auto;"><div><div class="_2USkzH"><div class="mL8CBX"></div><div class="mL8CBX"><div><h3 class="_2J01_-">Warranty</h3><p>7 Days Replacement</p><div class="_3Kji89"><h5 class="DsPFWI">Covered In Warranty</h5>Manufacturig Defects Only</div><div class="_3Kji89"><h5 class="DsPFWI">Not Covered In Warranty</h5>Water Damage, Broken or Tampered Defects.</div></div></div><div class="mL8CBX"><div><table class="o23xQx"><tbody><tr class="_3F40XH"><td class="F3dIIY">Generic Name</td><td class="_3P8gDE">Headphones</td></tr><tr class="_3F40XH"><td class="F3dIIY">Country of Origin</td><td class="_3P8gDE">India</td></tr></tbody></table><div class="_34o8zJ"><div class="_1UeH_O">Manufacturer's Details</div><ul class="_2qYadD"><li class="xkWlam">HAROON 70, Rabindra Sarani KOLKATA 700073</li></ul></div><div class="_34o8zJ"><div class="_1UeH_O">Packer's Details</div><ul class="_2qYadD"><li class="xkWlam">HAROON 70, Rabindra Sarani KOLKATA 700073</li></ul></div></div></div></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a526bd108d28052e6948eb"
    },
    "Title": "Boult Audio UFO Truly Wireless in Ear Earbuds with 48H Playtime, Built-in App Support, 45ms Low Latency Gaming, 4 Mics ENC, Breathing LEDs, 13mm Bass Drivers Ear buds TWS, Made in India (White Opal)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "249",
    "mrp": "1399",
    "images0": "https://m.media-amazon.com/images/I/71aBAPCVc8L._SX522_.jpg",
    "images1": "https://m.media-amazon.com/images/I/81S+AlEgnpL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71RZBYBP+FL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/81BnpuKPiXL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/81v0WXrqbAL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/cc66531c5ef34ca8ba527b92feeb694d_18a5ff67550_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/cc66531c5ef34ca8ba527b92feeb694d_18a5ff67550_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/cc66531c5ef34ca8ba527b92feeb694d_18a5ff67550_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/d26626285f5941be88f64a4e58ada574_18a5ff68b53_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/d26626285f5941be88f64a4e58ada574_18a5ff68b53_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/d26626285f5941be88f64a4e58ada574_18a5ff68b53_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/00b27665dd074400ba8a1fc0b565602c_18a5ff69f00_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/00b27665dd074400ba8a1fc0b565602c_18a5ff69f00_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/00b27665dd074400ba8a1fc0b565602c_18a5ff69f00_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/ebdf82b6f987492090a8a79ce1a1bdb9_18a5ff6b26f_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/ebdf82b6f987492090a8a79ce1a1bdb9_18a5ff6b26f_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/ebdf82b6f987492090a8a79ce1a1bdb9_18a5ff6b26f_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/c13798fd3ca84d50981f8018737b0083_18a5ff6c581_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/c13798fd3ca84d50981f8018737b0083_18a5ff6c581_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/c13798fd3ca84d50981f8018737b0083_18a5ff6c581_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52787108d28052e6948ec"
    },
    "Title": "Sennheiser MOMENTUM Sport Earbuds with Sport Sound Tuning and Adaptive ANC, Secure Fit, 24-Hour Battery Life, Fitness Tracker for Body Performance Data\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "399",
    "mrp": "2590",
    "images0": "https://m.media-amazon.com/images/I/41FKmsv1QOL._SL1080_.jpg",
    "images1": "https://m.media-amazon.com/images/I/41wplXr59zL._SL1080_.jpg",
    "images2": "https://m.media-amazon.com/images/I/41ocjfROTYL._SL1080_.jpg",
    "images3": "https://m.media-amazon.com/images/I/41cvQiFdncL._SL1080_.jpg",
    "images4": "https://m.media-amazon.com/images/I/41NyAXO8rHL._SL1080_.jpg",
    "disp_order": `<div class="css-175oi2r r-14lw9ot r-13awgt0 r-eqz5dr r-xd6kpl r-1qhn6m8 r-i023vh r-tskmnb"><div class="css-175oi2r r-13awgt0 r-eqz5dr"><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Model Name</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Momentum Sport</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Color</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Graphite</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Headphone Type</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">True Wireless</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Inline Remote</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Sales Package</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Earbuds, Charging Case, USB C Charging Cable, Silicone Eartip Sets (in size S/M/L), Silicone Earfin Sets (in size N/S/M/L), Finger Lanyard</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Connectivity</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Bluetooth</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Headphone Design</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Earbud</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Compatible Devices</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Laptop, Mobile, Tablet</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Sweat Proof</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Foldable/Collapsible</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Deep Bass</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Water Resistant</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Monaural</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Series</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Momentum</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Controls</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Touch</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Cord Type</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">NA</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">With Microphone</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Audio Codec</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">SBC, AAC, aptX, aptX adaptive</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Wireless Type</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Bluetooth</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Bluetooth Version</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">5.2</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Battery Life</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">24 Hr</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Battery Capacity</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">820 mAh</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Charging Time</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">1.5</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Play Time</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">24 Hr</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Width</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">135 mm</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Height</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">96 Hr</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Depth</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">42 mm</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Weight</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">91 g</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Domestic Warranty</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">2 Year</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Warranty Summary</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">2 Years</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Covered in Warranty</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Manufacturing Defects</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Not Covered in Warranty</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Physical damages and wear and tears are not covered under warranty.</div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a527eb108d28052e6948ed"
    },
    "Title": "OPPO Enco Air 2 Pro Bluetooth Truly Wireless in Ear Earbuds with Mic - White\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "249",
    "mrp": "2399",
    "images0": "https://m.media-amazon.com/images/I/51ImQ50gdHL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71VWpFr62oL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71G3o4K3zUL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61RSz8Om95L._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61lrYln7YUL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Bamboo-Fibre Diaphragm </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 185px;"><img src="https://rukminim2.flixcart.com/image/600/400/cms-rpd-img/1e2778b0c7f14caa8caf4aecbe4500d9_189257e2ffb_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/185/cms-rpd-img/1e2778b0c7f14caa8caf4aecbe4500d9_189257e2ffb_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/370/cms-rpd-img/1e2778b0c7f14caa8caf4aecbe4500d9_189257e2ffb_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">The OPPO Enco Air3 Pro Wireless Noise Cancelling has a lightweight bamboo-fibre diaphragm dome to enhance the detailing of high-frequency sound over 40 kHz with...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Optimised Chambers </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 185px;"><img src="https://rukminim2.flixcart.com/image/600/400/cms-rpd-img/4ae63270cd834490afff4e1e5de272fd_189257e1769_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/185/cms-rpd-img/4ae63270cd834490afff4e1e5de272fd_189257e1769_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/370/cms-rpd-img/4ae63270cd834490afff4e1e5de272fd_189257e1769_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">The front and rear chamber bass duct offers deep and powerful bass so that you can listen to every beat with more precision and enjoy them to the core.</span></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">LDAC Hi-Res Mode </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 185px;"><img src="https://rukminim2.flixcart.com/image/600/400/cms-rpd-img/55cc1d07b2e74041b03806595fb5f5c3_189257de125_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/185/cms-rpd-img/55cc1d07b2e74041b03806595fb5f5c3_189257de125_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/370/cms-rpd-img/55cc1d07b2e74041b03806595fb5f5c3_189257de125_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">The Bluetooth chip of these earbuds uses LDAC for quick Hi-Res audio transmission. It has a transmission rate of up to 590 kbps and supports 24-bit/96 kHz audio...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Immersive Surround Sound </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 185px;"><img src="https://rukminim2.flixcart.com/image/600/400/cms-rpd-img/c55f93e6f17644b8886003aa647059e5_189257dcbbc_6.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/185/cms-rpd-img/c55f93e6f17644b8886003aa647059e5_189257dcbbc_6.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/370/cms-rpd-img/c55f93e6f17644b8886003aa647059e5_189257dcbbc_6.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">You can listen to 360-degree surround sound audio on these earbuds and have a theatre-like audio experience by being anywhere, thanks to the OPPO Alive Audio Im...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Noise Cancellation </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 185px;"><img src="https://rukminim2.flixcart.com/image/600/400/cms-rpd-img/98c73d225cdf447f918d17cf688c6122_189257da9b8_7.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/185/cms-rpd-img/98c73d225cdf447f918d17cf688c6122_189257da9b8_7.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/370/cms-rpd-img/98c73d225cdf447f918d17cf688c6122_189257da9b8_7.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">These earbuds identify a wide range of noise scenes and using its Smart Adaptive Active Noise Cancellation, cancels out the unwanted noise from the background s...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52581108d28052e6948e9"
    },
    "Title": "JBL New Launch Live Beam 3,Hi-Res Audio True Anc Tws,Smart Case with Touch Display,48H Playtime,Wireless Charging,6 Mic,Multipoint Connection,Ip55 Proof,in...\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "399",
    "mrp": "14559",
    "images0": "https://m.media-amazon.com/images/I/61WhNisADUL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/81l8Er2I1ML._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/81i06qL84VL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71o2MX50WyL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/710VDwLwxyL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a528d7108d28052e6948ee"
    },
    "Title": "Noise Buds VS401 in-Ear Truly Wireless Earbuds with 50H of Playtime, Low Latency(up-to 50ms), Quad Mic with ENC, Instacharge(10 min=200 min),10mm Driver, BT v5.3(Calm Beige)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "249",
    "mrp": "1159",
    "images0": "https://m.media-amazon.com/images/I/51tK8nyBaOL._SX522_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71jSEKgCuRL._SX522_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61qamLwBGgL._SX522_.jpg",
    "images3": "https://m.media-amazon.com/images/I/615nBH0Or2L._SX522_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61g+PuJ+9ML._SX522_.jpg",
    "disp_order": `<div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/c44432ea2f594ec8bebf59e48044dd2b_1887a6a1148_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/c44432ea2f594ec8bebf59e48044dd2b_1887a6a1148_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/c44432ea2f594ec8bebf59e48044dd2b_1887a6a1148_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/f5d5924f057e471a8f9fe835f4e9f1bc_1887a6ae105_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/f5d5924f057e471a8f9fe835f4e9f1bc_1887a6ae105_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/f5d5924f057e471a8f9fe835f4e9f1bc_1887a6ae105_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/79548b635ead4106b6759e69cb6235aa_1887a6af60b_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/79548b635ead4106b6759e69cb6235aa_1887a6af60b_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/79548b635ead4106b6759e69cb6235aa_1887a6af60b_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/09a7fb8db52a4ffaac67d28bd6e4ee9c_1887a6b0834_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/09a7fb8db52a4ffaac67d28bd6e4ee9c_1887a6b0834_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/09a7fb8db52a4ffaac67d28bd6e4ee9c_1887a6b0834_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/7752b227a3564d1388a26bb04e1dd456_1887a6b18d8_6.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/7752b227a3564d1388a26bb04e1dd456_1887a6b18d8_6.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/7752b227a3564d1388a26bb04e1dd456_1887a6b18d8_6.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52925908d28052e6948ef"
    },
    "Title": "pTron Bassbuds Duo in-Ear Wireless Earbuds, Immersive Sound, 32Hrs Playtime, Clear Calls TWS Earbuds, Bluetooth V5.1 Headphones, Type-C Fast Charging, Voice...\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "149",
    "mrp": "559",
    "images0": "https://m.media-amazon.com/images/I/51ZWPav5jgL._SL1200_.jpg",
    "images1": "https://m.media-amazon.com/images/I/510vlIx8OcL._SL1200_.jpg",
    "images2": "https://m.media-amazon.com/images/I/710j2flxb4L._SL1200_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61d2F6bOz6L._SL1200_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71dybxsf8cL._SL1200_.jpg",
    "disp_order": `<div class="css-175oi2r" style="padding-right: 16px; padding-left: 16px; padding-bottom: 16px;"><div class="css-175oi2r" style="flex: 1 1 0%;"><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">With Mic:Yes</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">Connector type: No</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">Bluetooth version: 5.1</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">Charging time: 1 Hour (Earbuds), 1.5 Hours (Charging Case)</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">1) BeLoudBeProud - Large 13mm Dynamic Drivers for Stereo Sound Experience with Deep Bass | Built-in Dual Mic for Stereo Calls &amp; Stereo/Mono Bud Use</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">2) 32 Hours of Total Playtime with Portable Charging Case | Integrated Music &amp; Call Controls &amp; Voice Assistant Support</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">3) True Wireless Earbuds with Bluetooth 5.1 for Quick-pairing, 10M Seamless Wireless Range, Auto-Reconnect &amp; Wide Compatibility | Ergo-fit &amp; Lightweight Earphones with Touch Controls, Passive Noise Cancellation &amp; IPX4 Water &amp; Sweat Resistance</div></div></div><div class="css-175oi2r" style="margin-top: 8px;"></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a529ed108d28052e6948f0"
    },
    "Title": "Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Magico Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1759",
    "images0": "https://m.media-amazon.com/images/I/51UhwaQXCpL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/51tdhnb9hBL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/51LkC94UraL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61VyK3V84ML._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/41IyaPgXxJL._SL1500_.jpg",
    "disp_order": `<div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Key Features</h4><ul class="_2dA5hr"><li class="_26e3Bd">With Mic:Yes</li><li class="_26e3Bd">Bluetooth version: 5</li><li class="_26e3Bd">Battery life: 20 hrs</li></ul></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">General</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Model Name</td><td class="_12tFmc">Bullets Wireless Z2</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Color</td><td class="_12tFmc">Jazz Green</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Type</td><td class="_12tFmc">In the Ear</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Inline Remote</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Sales Package</td><td class="_12tFmc">1 Headphone, Type C Cable, User Guide, Membership Card, Additional Ear Tips</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Connectivity</td><td class="_12tFmc">Bluetooth</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Headphone Design</td><td class="_12tFmc">Behind the Neck</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Compatible Devices</td><td class="_12tFmc">Laptop, Mobile, Tablet</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Product Details</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Deep Bass</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Water Resistant</td><td class="_12tFmc">Yes</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">With Microphone</td><td class="_12tFmc">Yes</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Connectivity Features</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Bluetooth Version</td><td class="_12tFmc">5</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Battery Life</td><td class="_12tFmc">20 hrs</td></tr></tbody></table></div></div><div class="_1oXveY"><div class="_3ZZQVl"><h4 class="MMQoqJ">Warranty</h4><table width="100%" class="mkCYMS"><tbody><tr class="czcmah"><td class="_12tFmc" width="35%">Domestic Warranty</td><td class="_12tFmc">1 Year</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Warranty Summary</td><td class="_12tFmc">1 Year Warranty on Product</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Warranty Service Type</td><td class="_12tFmc">Contact : Ph : 1800 102 8411 / Mail : onepluscare@oneplus.com</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Covered in Warranty</td><td class="_12tFmc">Manufacturing Defects</td></tr><tr class="czcmah"><td class="_12tFmc" width="35%">Not Covered in Warranty</td><td class="_12tFmc">Physical Damages</td></tr></tbody></table></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52a2c108d28052e6948f1"
    },
    "Title": "boAt Rockerz 255 Pro+ Bluetooth in Ear Neckband with Upto 60 Hours Playback, ASAP Charge, IPX7, Dual Pairing and Bluetooth v5.2(Active Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1759",
    "images0": "https://m.media-amazon.com/images/I/61+SW9nDTEL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71NgO+zee+L._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61f+UOa3yfL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61ZGGIBcp7L._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61nLLDml3OL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r r-14lw9ot r-13awgt0 r-eqz5dr r-xd6kpl r-1qhn6m8 r-i023vh r-tskmnb"><div class="css-175oi2r"><div class="css-175oi2r r-13awgt0 r-eqz5dr"><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Model Name</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Rockerz 255 Pro+/Rockerz 258 Pro+</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Color</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Navy Blue</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Headphone Type</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">In the Ear</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Inline Remote</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Sales Package</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">1 Headphone, Type-C Charging Cable, Additional Earbuds, User Manual, Warranty Card</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Connectivity</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Bluetooth</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Headphone Design</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Behind the Neck</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Compatible Devices</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Laptop, Tablet, Mobile</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Sweat Proof</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Deep Bass</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Water Resistant</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">With Microphone</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Yes</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Bluetooth Version</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">5.2</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Bluetooth Range</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">10 m</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Battery Life</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">60 hrs</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Play Time</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">60 Hours</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Domestic Warranty</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">1 Year</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Warranty Summary</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">1 Year Warranty from the Date of Purchase</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Warranty Service Type</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Reach Out to us at info@imaginemarketingindia.com/+912249461882/support.boat-lifestyle.com. Alternatively You Can Activate Your Warranty by Giving a Missed Call on 9223032222</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Covered in Warranty</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Manufacturing Defects</div></div></div><div class="css-175oi2r r-13awgt0 r-18u37iz r-1l7z4oj"><div dir="auto" class="css-1rynq56 r-1h7g6bg r-dta0w2 r-1et8rh5 r-1b43r93 r-1rsjblm r-1kb76zh">Not Covered in Warranty</div><div class="css-175oi2r r-dta0w2"><div dir="auto" class="css-1rynq56 r-op4f77 r-dta0w2 r-1vgyyaa r-1b43r93 r-1rsjblm">Physical Damage</div></div></div></div></div><div class="css-175oi2r"><div dir="auto" class="css-1rynq56 r-op4f77 r-13awgt0 r-1vgyyaa r-ubezar r-1rsjblm r-135wba7 r-xd6kpl">Details</div><div><div class="css-175oi2r"><div dir="auto" class="css-1rynq56 r-1f5deap r-13awgt0 r-1et8rh5 r-1b43r93 r-135wba7 r-1l7z4oj"><span class="css-1qaijid">boAt Rockerz 255 Pro+ is a power-packed in-ear wireless neckband headphone that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with Bluetooth V5.0 for ...</span> <span class="css-1qaijid r-1dupt2p r-1vgyyaa r-1b43r93">more</span></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52a8a108d28052e6948f2"
    },
    "Title": "pTron Tangent Flex Bluetooth 5.3 Wireless In-Ear Headphone with Mic, 38H Playtime, 13mm Driver, Dual Device Pairing Wireless Neckband, Type-C Charge, Magnetic Buds & IPX5 Water Resistant(Forest Green)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1759",
    "images0": "https://m.media-amazon.com/images/I/51wqqtHjD4L._SL1200_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61s6HNKX86L._SL1200_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61l6Mk2akIL._SL1200_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61HOI8eY7DL._SL1200_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61naTABdcRL._SL1200_.jpg",
    "disp_order": "...",
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52ae8108d28052e6948f3"
    },
    "Title": "Realme Buds Wireless 3 in-Ear Bluetooth Headphones,30dB ANC,Spatial Audio,13.6mm Dynamic Bass Driver,Upto 40 HrsPlayback,Fast Charging,45ms Low Latency for Gaming,Dual Device Connection-Vitality White\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1759",
    "images0": "https://m.media-amazon.com/images/I/61c575GViJL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/81NSHGg6foL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61K5VwRdatL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/81tEfjDeBlL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71ZYVaqQhyL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Cinema-like Audio </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/cdff6a0c7fe24b368c55327b2ab6ce48_189480de85f_11.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/cdff6a0c7fe24b368c55327b2ab6ce48_189480de85f_11.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/cdff6a0c7fe24b368c55327b2ab6ce48_189480de85f_11.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">Offering an up to 360-degree spatial audio effect, the realme Buds Wireless 3 Neckband offers an engrossing, theatre-like sound experience where the sound surro...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Active Noise Cancellation </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/aa23476690214b9caef5fd2b008b2d25_189480dc59a_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/aa23476690214b9caef5fd2b008b2d25_189480dc59a_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/aa23476690214b9caef5fd2b008b2d25_189480dc59a_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">Featuring sophisticated Active Noise Cancellation (ANC) technology, this neckband immerses you in a personalised auditory experience. And, you can enjoy excepti...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Large Dynamic Bass Driver </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/0d84ee269ae24953bc10b2167a4ecad3_189480da935_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/0d84ee269ae24953bc10b2167a4ecad3_189480da935_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/0d84ee269ae24953bc10b2167a4ecad3_189480da935_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">Sporting up to a 13.6 mm large dynamic bass driver, this neckband features a sophisticated design. Additionally, featuring a titanised diaphragm, this neckband ...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Long-lasting Playback </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/d133fcbe49af4edd95b8070791af9a9b_189480d93a1_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/d133fcbe49af4edd95b8070791af9a9b_189480d93a1_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/d133fcbe49af4edd95b8070791af9a9b_189480d93a1_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">This neckband provides a battery life of up to 40 hours, which means that you can listen to music for up to five hours every day for a whole week without having...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div dir="auto" class="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-5oul0u r-14gqq1x" style="background-color: rgba(0, 0, 0, 0);">Smooth Performance </div><div style="display: flex; position: relative; margin-bottom: 12px; margin-top: 8px; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/3934d387b0934e5f859adcf895a56ebd_189480d3a54_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/3934d387b0934e5f859adcf895a56ebd_189480d3a54_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/3934d387b0934e5f859adcf895a56ebd_189480d3a54_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div><div><div dir="auto" class="css-1rynq56" style="color: rgb(17, 17, 18); margin-bottom: 8px; margin-top: 4px; font-size: 14px; line-height: 20px; font-weight: 400; font-family: inter_regular; letter-spacing: -0.01px;"><span class="css-1qaijid" style="color: rgb(17, 17, 18);">Thanks to its low latency of just up to 45 ms, this neckband delivers a fast response time. So, you can immerse yourself in a gaming session without any delay, ...</span> <span class="css-1qaijid" style="color: rgb(42, 85, 229); font-size: 14px; line-height: 20px; font-weight: 600; font-family: inter_semi_bold; letter-spacing: -0.01px;">Read More</span></div></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52b16108d28052e6948f4"
    },
    "Title": "JBL Tune 215BT, 16 Hrs Playtime with Quick Charge, in Ear Bluetooth Wireless Earphones with Mic, 12.5mm Premium Earbuds with Pure Bass, BT 5.0, Dual Pairing, Type C & Voice Assistant Support (White)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1,559",
    "images0": "https://m.media-amazon.com/images/I/51ind0AlUVL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/51aLI-tVeZL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/51UQJANPbYL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61TOcbycHBL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/511sSyFEiUL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/9e8806237f914cae83ea21bb344f2577_190da032863_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/cff5607d5ca74da9a6e0a96448c91621_190da0339eb_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/cff5607d5ca74da9a6e0a96448c91621_190da0339eb_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/cff5607d5ca74da9a6e0a96448c91621_190da0339eb_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/773254fa26b249808e06a3319e13f9af_190da034828_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/773254fa26b249808e06a3319e13f9af_190da034828_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/773254fa26b249808e06a3319e13f9af_190da034828_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/482cba5444e046a8951b1d87c7f10e2b_190da03550b_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/482cba5444e046a8951b1d87c7f10e2b_190da03550b_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/482cba5444e046a8951b1d87c7f10e2b_190da03550b_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 216px;"><img src="https://rukminim2.flixcart.com/image/600/450/cms-rpd-img/fcc90465a78845e1a2f3c78595ea453f_190da03627f_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/216/cms-rpd-img/fcc90465a78845e1a2f3c78595ea453f_190da03627f_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/432/cms-rpd-img/fcc90465a78845e1a2f3c78595ea453f_190da03627f_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52b79108d28052e6948f5"
    },
    "Title": "boAt Rockerz 245 pro Bluetooth in Ear Neckband with Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Oceana Grey)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "859",
    "images0": "https://m.media-amazon.com/images/I/6114J7x91wL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61LuE-NaEEL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/610rivpbrjL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/618-3yos0gL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71dQDQYikAL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/164d930b8bc44507b5cdaa7cb81eb649_190ee52c025_1.png?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/164d930b8bc44507b5cdaa7cb81eb649_190ee52c025_1.png?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/164d930b8bc44507b5cdaa7cb81eb649_190ee52c025_1.png?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/eeb90b363b7740c48f1044247d7088ee_190ee52ccb0_2.png?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/eeb90b363b7740c48f1044247d7088ee_190ee52ccb0_2.png?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/eeb90b363b7740c48f1044247d7088ee_190ee52ccb0_2.png?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/7660879103794f659563f7c01a325595_190ee52dffe_3.png?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/7660879103794f659563f7c01a325595_190ee52dffe_3.png?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/7660879103794f659563f7c01a325595_190ee52dffe_3.png?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/612b97d43d1e4b5b8487675ae65fc901_190ee52fb31_4.png?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/612b97d43d1e4b5b8487675ae65fc901_190ee52fb31_4.png?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/612b97d43d1e4b5b8487675ae65fc901_190ee52fb31_4.png?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/4dc252306ece4ab8a14bcbd031702634_190ee53131a_5.png?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/4dc252306ece4ab8a14bcbd031702634_190ee53131a_5.png?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/4dc252306ece4ab8a14bcbd031702634_190ee53131a_5.png?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52bab108d28052e6948f6"
    },
    "Title": "JBL Tune 215BT, 16 Hrs Playtime with Quick Charge, in Ear Bluetooth Wireless Earphones with Mic, 12.5mm Premium Earbuds with Pure Bass, BT 5.0, Dual Pairing, Type C & Voice Assistant Support (Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "859",
    "images0": "https://m.media-amazon.com/images/I/61WjkBfSzyL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71qWja8O+wL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71y+DdYMUQL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71mYBfKtztL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/710qFPVljUL._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="wvj509-m6x78j-pp11yt-kcvbna" data-cel-widget="m-aplus">
<style type="text/css">
/**
* Premium-module 12: Nav - Carousel
*/
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-container {
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-image-carousel-container {
/* Match the aspect ratio of the mobile image uploaded via the editor (600px x 450px) */
padding-top: calc(450 / 600 * 100%); /* 75% */
height: 0;
}
/* Override AUI styles. It poorly attempts to measure the slide heights before waiting until images load. */
.aplus-v2.mobile .premium-aplus-module-12 .a-carousel-viewport {
position: absolute;
width: 100%;
height: 100% !important;
top: 0;
left: 0;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-card-image img {
width: 100%;
height: auto;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-card {
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-card-details {
padding-bottom: 10px;
}
/* nav */
.aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn {
display: block;
margin: 10px auto;
cursor: pointer;
border-radius: 30px;
border: 1px solid #808080;
line-height: 2.5em;
width: 230px;
background-color: #fff;
color: #000;
white-space: nowrap;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn .aplus-carousel-label {
font-weight: bold;
padding-left: initial;
padding-right: 10px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-actions {
text-align: inherit;
}
html[dir="rtl"] .aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn .aplus-carousel-label {
padding-right: 0px;
padding-left: 10px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-icon {
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%,-50%);
-moz-transform: translate(-50%,-50%);
-o-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-slider-circles {
text-align: center;
padding-bottom: 10px;
position: absolute;
bottom: 20px;
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-slider-circles .slider-circle {
height: 10px;
width: 10px;
display: inline-block;
border-radius: 10px;
background-color: #4d4d4d;
margin-left: 5px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-slider-circles .slider-circle:first-of-type {
margin-left: 0;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-pagination-wrapper {
padding-top: 10px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn.aplus-active {
background-color: #000;
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-text {
text-align: inherit;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-text.aplus-hidden {
display: none;
}
/**
* Right nav styles
*/
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail {
padding: 10px;
background-color: #262626;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail h1,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail h5,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ol,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ul,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-headline-top.regimen {
position: absolute;
top: 0;
left: 0;
width: 100%;
background-color: #000;
opacity: 0.5;
text-align: center;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-headline-top.regimen .aplus-headline {
color: #fff;
line-height: 12px;
font-size: 8px;
padding-top: 2px;
padding-bottom: 2px;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-goto-btn {
text-align: inherit;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-carousel-actions .aplus-carousel-index {
display: inline-block;
font-weight: bold;
width: 32px;
line-height: 26px;
color: #000;
text-align: center;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-carousel-actions .aplus-active .aplus-carousel-index {
color: #fff;
}
/**
* Top nav styles
*/
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-carousel-index {
display: none;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-carousel-actions {
text-align: center;
padding: 0;
display: flex;
flex-flow: nowrap;
align-items: center;
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-horizontal-scroll-container {
display: block;
margin: 24px 0px 0px;
width: 100%;
overflow-x: scroll;
-webkit-overflow-scrolling: touch;
background-color: rgba(0, 0, 0, 0.8);
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn {
color: #fff;
padding-left: 10px;
margin: 10px;
background-color: transparent;
border: none;
padding: 6px 0px 10px;
line-height: inherit;
width: 30vw;
flex: 0 0 30vw;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn.aplus-active {
background-color: transparent;
border: none;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn .aplus-carousel-label {
display: inline-block;
white-space: pre-line;
padding: 0px;
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn.aplus-active .aplus-carousel-label:after {
content: '';
display: block;
position: absolute;
width: 100%;
height: 3px;
bottom: -0.5em;
left: 0;
background-color: currentColor;
}
/* Mobile landscape */
@media screen and (min-width: 480px) and (orientation: landscape) {
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn {
width: 18vw;
flex: 0 0 18vw;
}
}
</style>
<style type="text/css">
/**
* Premium-module 11: FAQs
*/
.aplus-v2.mobile .premium-aplus-module-11 {
background: #fff;
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-11.aplus-secondary-color {
background: #000;
}
.aplus-v2.mobile .premium-aplus-module-11 .aplus-question,
.aplus-v2.mobile .premium-aplus-module-11 .aplus-answer {
display: block;
width: 100%;
margin: 0;
}
.aplus-v2.mobile .premium-aplus-module-11 .aplus-question {
background: #fff;
position: relative;
min-height: 40px;
padding-bottom: 5px;
}
.aplus-v2.mobile .premium-aplus-module-11 .aplus-answer {
opacity: 0;
height: 0;
transform: translateY(-100%);
}
.aplus-v2.mobile .premium-aplus-module-11 .aplus-active .aplus-answer {
opacity: 1;
height: auto;
min-height: 40px;
transform: translateY(0);
transition: opacity 0.1s linear 0.1s;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-block {
position: relative;
padding-left: 60px;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 40px;
cursor: pointer;
border: 2px solid #E6E6E6;
background: #fff;
border-radius: 3px;
margin-bottom: 10px;
}
html[dir="rtl"] .aplus-v2.mobile .premium-aplus-module-11 .faq-block {
padding-left: 40px;
padding-right: 60px;
}
.aplus-v2.mobile .premium-aplus-module-11.aplus-secondary-color .faq-block {
border: none;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-block::after,
.aplus-v2.mobile .premium-aplus-module-11 .faq-block::before {
width: 40px;
line-height: 40px;
font-size: 20px;
text-align: center;
border-radius: 3px;
display: inline-block;
font-weight: 500;
top: 10px;
left: 10px;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-block::after {
content: "Q";
background: #505050;
color: #fff;
position: absolute;
transition: background 0.1s linear;
}
html[dir="rtl"] .aplus-v2.mobile .premium-aplus-module-11 .faq-block::after {
right: 10px;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-block::before {
content: "A";
background: #F5A623;
color: #fff;
position: absolute;
}
html[dir="rtl"] .aplus-v2.mobile .premium-aplus-module-11 .faq-block::before {
right: 10px;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-block.aplus-active::after {
background: #404040;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-block.aplus-active::before {
padding-top: 40px;
transition: padding-top 0.1s linear;
}
.aplus-v2.mobile .premium-aplus-module-11 .faq-arrow {
position: absolute;
top: 25px;
right: 10px;
border: 10px solid transparent;
border-top-color: #4d4d4d;
}
html[dir="rtl"] .aplus-v2.mobile .premium-aplus-module-11 .faq-arrow {
right: auto;
left: 10px;
}
.aplus-v2.mobile .premium-aplus-module-11 .aplus-active .faq-arrow {
top: 15px;
border-top-color: transparent;
border-bottom-color: #7cb8cf;
}
.aplus-v2.mobile .premium-aplus-module-11.var-degree .faq-block::after {
background: #000;
}
</style>
<script type="application/javascript">
/**
* Common event handler for click and keydown events.
* @param {Event} event - The event object.
* @param {Function} handleClickOrEnter - Function to handle click or Enter key events.
* @param {Function} handleEsc - Function to handle Esc key events.
*/
// [TODO][AplusMantle-8064] Create common event handler util(key events, click events) in AplusModuleResources
function handleClickAndKeyEvents(event, handleClickOrEnterOrSpace) {
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
const SPACE_KEY_CODE = 32;
const isClick = event.type === 'click';
const isKeydown = event.type === 'keydown';
const isEnter = isKeydown && event.keyCode === ENTER_KEY_CODE;
const isSpace = isKeydown && event.keyCode === SPACE_KEY_CODE;
const isEsc = isKeydown && event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter || isSpace) {
handleClickOrEnterOrSpace();
} else if (isEsc) {
handleEsc(event);
}
}
/**
* Function to handle esc key event.
* @param {Event} event - The event object.
*/
function handleEsc(event) {
event.target.blur()  // force remove focus
}
</script>      <style type="text/css">
.aplus-v2.mobile .premium-aplus-module-2 .background-image {
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color {
background-color: #000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h1,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h5,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-module-2-topic {
padding-bottom: 10px;
}
.aplus-v2.mobile .premium-aplus-module-2 div[data-color='1'] {
color: #ffffff !important;
background-color: #000000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-heading {
padding-bottom: 20px;
}
</style>
<style type="text/css">
/**
* Premium-module 8: Mobile hero video
*/
.aplus-v2.mobile .premium-aplus-module-8 .premium-aplus-module-8-video {
position: relative;
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-8 .video-placeholder {
padding-bottom: 40.984%; /* Video or image required size 1464 : 600 = 40.9836 */
}
.aplus-v2.mobile .premium-aplus-module-8 .video-container {
position: absolute;
top: 0;
width: 100%;
height: 100%;
}
/*Override the default VSE video player size*/
.aplus-v2.mobile .premium-aplus-module-8 .video-js.vjs-fluid {
padding-top: 0;
}
</style>       <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.now('premium-module-11-faq').execute(function(init) {
if (init) {
return;
}
P.register('premium-module-11-faq', function() {
return function() {
P.when('A', 'jQuery', 'ready').execute(function(A, $){
function initFaq(module) {
const MODULE_CLASS_NAME = 'premium-aplus-module-11';
const FAQ_CONTAINER_CLASS_NAME = 'faqs-container';
const FAQ_BLOCK_CLASS_NAME = 'faq-block';
const moduleId = $(module).data('faq-block');
const $faqBlocks = $('.aplus-v2 .' + MODULE_CLASS_NAME + ' .' + FAQ_CONTAINER_CLASS_NAME + '.' + moduleId + ' .' + FAQ_BLOCK_CLASS_NAME);
/**
* Function to get the toggle Attribute value
* @param {attr} attribute - The Attribute object
*/
function getToggleAttributeValue(attr) {
return attr === "true" ? 'false': 'true';
}
/**
* Function to handle click or Enter or Space key events.
* @param {Element} element - The this object from which the event is dispatched
* @param {faqBlocks} faqBlocks - List of all the Question and Answer blocks.
*/
function handleClickOrEnterOrSpace(element, faqBlocks) {
const $element = $(element);
const isActive = $element.hasClass('aplus-active');
if (!isActive) {
faqBlocks.removeClass('aplus-active');  /* deactivate others */
faqBlocks.find('.faq-arrow').attr('aria-expanded', 'false');
faqBlocks.find('.answer').attr('aria-hidden', 'true');
}
$element.toggleClass('aplus-active');  /* activate the clicked block */
$element.find('.faq-arrow').attr('aria-expanded', function(_, attr) {
return getToggleAttributeValue(attr);
});
$element.find('.answer').attr('aria-hidden', function(_, attr) {
return getToggleAttributeValue(attr);
});
}
/* Using jQuery event namespace for preventing duplicate binding on twister refresh */
$faqBlocks.unbind('click keydown.premiumAplusModule11ClickHandler').bind('click keydown.premiumAplusModule11ClickHandler', function(event) {
handleClickAndKeyEvents(event, () => handleClickOrEnterOrSpace(this, $faqBlocks));
});
}
$(".aplus-v2 .premium-aplus-module-11 .faqs-container").each(function(index, module) {
initFaq(module);
});
});
};
});
});
}));</script>      <style type="text/css">
/**
* Premium module global mobile styles
*/
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: Arial, sans-serif;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2 .premium-aplus .aplus-tech-spec-table { word-break: initial; }
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: inherit;
}
/* type */
.aplus-v2 .premium-aplus .aplus-h1 { font-size: 22px; line-height: 1.2em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h2 { font-size: 18px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h3 { font-size: 15px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-p1 { font-size: 15px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p2 { font-size: 13px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p3 { font-size: 12px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-accent1 { font-size: 13px; line-height: 1.4em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-accent2 { font-size: 12px; line-height: 1.4em; font-weight: 500; }
/* spacing */
.aplus-v2 .aplus-container-1 { padding: 10px; }
.aplus-v2 .aplus-container-1-2 { padding: 10px 20px; }
.aplus-v2 .aplus-container-2 { padding: 20px; }
.aplus-v2 .aplus-container-3 { padding: 20px 0; }
/* AUI will add -1.4rem margin to carousels */
.a-container .aplus-v2 .premium-aplus .a-carousel-container {
margin-left: 0;
margin-right: 0;
}
/**
* Padding and margin in styles should be 10, 15, 20, or 30 px. Considering mini 10, small 15, medium 20, large 30.
*/
</style>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.now('premium-module-12-nav-carousel').execute(function(init) {
if (init) {
return;
}
P.register('premium-module-12-nav-carousel', function(){
return function() {
P.when('A', 'jQuery', 'a-carousel-framework', 'ready').execute(function (A, $, framework) {
function initiateCarousel(module) {
var MODULE_ID = $(module).data('module-id');
/**
* Carousel button element classname
* @const
*/
var GOTO_BTN_CLASS_NAME = "aplus-goto-btn-" + MODULE_ID;
/**
* Carousel button element active classname
* @const
*/
var GOTO_BTN_ACTIVE_CLASS_NAME = "aplus-active";
/**
* AUI name for aui carousel
* @const
*/
var CAROUSEL_NAME = "premium-aplus-12-carousel-" + MODULE_ID;
/**
* Module class name
* @const
*/
var MODULE_CLASS_NAME = ".aplus-v2 .premium-aplus-module-12";
/**
* Carousel text container class name
* @const
*/
var TEXT_CONTAINER_CLASS_NAME = MODULE_CLASS_NAME + " .aplus-carousel-text-container-" + MODULE_ID;
/**
* Carousel text hidden class name
* @const
*/
var TEXT_CONTAINER_HIDDEN = "aplus-hidden";
/**
* Carousel horizontal scroll container class name
* @const
*/
var HORIZONTAL_SCROLL_CONTAINER_CLASS_NAME = MODULE_CLASS_NAME + " .aplus-horizontal-scroll-container-" + MODULE_ID;
function showCarouselText(oldIndex, newIndex) {
var oldClass = TEXT_CONTAINER_CLASS_NAME + "-" + oldIndex;
var newClass= TEXT_CONTAINER_CLASS_NAME + "-" + newIndex;
$(oldClass).addClass(TEXT_CONTAINER_HIDDEN);
$(newClass).removeClass(TEXT_CONTAINER_HIDDEN);
}
function scrollToCarouselButton(scrollLeft) {
if ($(HORIZONTAL_SCROLL_CONTAINER_CLASS_NAME).length) {
$(HORIZONTAL_SCROLL_CONTAINER_CLASS_NAME).animate({scrollLeft}, 200);
}
}
/**
* Creates a CarouselButton class for provided carousel instance
* @param {object} carousel - AUI Carousel instance
* @returns {Class} - CarouselButton Class
*/
function CarouselButtonTemplate(carousel) {
/**
* Button for controlling the active slide
* @constructor
* @param {number} index - slide index
* @param {DOMElement} [elem] - optional DOM element to use as this objects DOM representation
*/
function CarouselButton(index, elem) {
var self = this;
this.index = index;
this.carousel = carousel;
/* create the button element */
this.elem = this.getElem(elem);
this.$elem = $(this.elem);  /* store jquery version */
this.elem.addEventListener('click', self.handleClick.bind(self));
/* add this object to the object manager */
CarouselButton.objects.byId[index] = this;
CarouselButton.objects.all.push(this);
}
/**
* Describe behavior for click events on this.elem
* @memberOf CarouselButton
*/
CarouselButton.prototype.handleClick = function(e) {
e.preventDefault();
this.carousel.gotoPage(this.index);
};
/**
* Enter active state
* @memberOf CarouselButton
*/
CarouselButton.prototype.activate = function() {
this.$elem.addClass(GOTO_BTN_ACTIVE_CLASS_NAME).attr('aria-selected', 'true');
};
/**
* Enter inactive state
* @memberOf CarouselButton
*/
CarouselButton.prototype.deactivate = function() {
this.$elem.removeClass(GOTO_BTN_ACTIVE_CLASS_NAME).attr('aria-selected', 'false');
};
/**
* Returns an existing or creates a new bound element for this object
* @memberOf CarouselButton
* @param {DOMElement} [elem] - optionally provide an existing element in the DOM to use
* @returns {DOMElement} - this objects DOM representation
*/
CarouselButton.prototype.getElem = function(elem) {
if (this.elem) return this.elem;
if (elem) return elem;
var createdElem = document.createElement('span');
createdElem.className = GOTO_BTN_CLASS_NAME;
return createdElem;
};
/** @const Object manager */
CarouselButton.objects = {
byId: {},
all: [],
};
return CarouselButton;
}
framework.onInit(CAROUSEL_NAME, function(carousel) {
/** @const {Class} */
var CarouselButton = CarouselButtonTemplate(carousel);
/* create carousel controls */
var $carouselBtns = $(safeClassSelector(GOTO_BTN_CLASS_NAME));
var btns = $carouselBtns.map(function(i, btnElem) {
return new CarouselButton(i + 1, btnElem);
});
/* activate first one */
CarouselButton.objects.byId[1].activate();
/* Listen to slide changes */
A.on("a:carousel:" + CAROUSEL_NAME + ":change:pageNumber", function (data) {
var newCarouselButton = CarouselButton.objects.byId[data.newValue];
var marginLeft = parseInt(getComputedStyle(newCarouselButton.elem).getPropertyValue('margin-left'));
var positionLeft = newCarouselButton.elem.offsetLeft - marginLeft;
newCarouselButton.activate();
CarouselButton.objects.byId[data.oldValue].deactivate();
scrollToCarouselButton(positionLeft);
showCarouselText(data.oldValue, data.newValue);
});
});
/**
* @returns {string} - css classname prefixed with module selector
*/
function safeClassSelector(className) {
return '.' + MODULE_CLASS_NAME + ' .' + className;
}
}
$('.aplus-v2 .premium-aplus-module-12 .aplus-carousel-container').each(function (index, module) {
initiateCarousel(module);
});
framework.createAll();
framework.initializeAll();
});
}
})
});
}));</script>                    <div class="celwidget aplus-module premium-module-2-fullbackground-image aplus-premium" cel_widget_id="aplus-m-premium-module-2-fullbackground-image" data-csa-c-id="w5ocoj-qzk66f-s042cs-4yt59m" data-cel-widget="aplus-m-premium-module-2-fullbackground-image">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-2">                                  <div class="a-section a-spacing-none">                             <img alt="JBL Tune 215BT, T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8de32a9f-d359-483d-80c7-2a32afa90d2c.__CR0,0,600,450_PT0_SX600_V1___.jpg" class="background-image" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8de32a9f-d359-483d-80c7-2a32afa90d2c.__CR0,0,600,450_PT0_SX600_V1___.jpg"><noscript><img alt="JBL Tune 215BT, T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8de32a9f-d359-483d-80c7-2a32afa90d2c.__CR0,0,600,450_PT0_SX600_V1___.jpg"/></noscript>   </div>  <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-8-hero-video aplus-premium" cel_widget_id="aplus-m-premium-module-8-hero-video" data-csa-c-id="dj9b3q-ybo6nq-b53n46-5s7ucz" data-cel-widget="aplus-m-premium-module-8-hero-video">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-8">                                  <div class="a-section a-spacing-none premium-aplus-module-8-video">  <div class="a-section a-spacing-none video-placeholder"></div>  <div class="a-section a-spacing-none video-container">                                     <div id="ff26ebfd-3be3-411c-a726-6a1d4e4189b7" style="width:100%; height:100%;">
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01cUckQOW-L.css?AUIClients/VSEPlayer"><link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/51NP-5Gx4JL._RC|11iRfIvA-aL.css_.css?AUIClients/Brila"><script type="a-state" data-a-state="{&quot;key&quot;:&quot;aplus-12046-player-ps&quot;}">{"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"clientPrefix":"aplus-12046","closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"000-7297567-4904535","refMarkers":"aplus-12046_ref","placementContext":"AplusWidget","marketplaceId":"A1F83G8C2ARO7P","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"4B48905909EA420FA5A2","customerId":"0","sessionType":1},"mimeType":"video/mp4","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.8","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","videoAsin":"hero-video","producerId":"vsemetrics_playercards","refMarkers":"aplus-12046_ref","placementContext":"AplusWidget","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.7"},"videoHeight":0,"videoWidth":0,"videoUrl":"https://m.media-amazon.com/images/S/aplus-media/vc/10bdf63e-e7d1-42d1-8682-bc1495de315d.mp4","metricsEmissionMethod":"nexus","imageUrl":"https://m.media-amazon.com/images/S/aplus-media/vc/5b42141d-3fbf-4359-bf7f-e39214334082.__CR0,147,1920,787_PT0_SX1464_V1___.jpg","awaConfig":{"useUpNextComponent":false,"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"initialVideo":"hero-video","shouldPreload":true,"enableClickBasedAttribution":false,"isChromelessPlayer":false,"closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"showPlayerPlayButton":false,"isVideoImmersivePlayer":false,"metricsEmissionMethod":"nexus","skipInitialFocus":false,"playerSkin":"none","disabledViewIds":["replayHint"],"includeEarnsComissionDisclosure":false,"customerId":"0","containerId":"aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3","requestMetadata":{"marketplaceId":"A1F83G8C2ARO7P","clientId":"VSE-IN","method":"AplusWidget","requestId":"4B48905909EA420FA5A2","pageAsin":"","sessionId":"000-7297567-4904535"},"shouldLoop":false,"shouldDisableControls":false,"alwaysSetInitialVideo":true,"showPlayerCloseButton":false,"clientPrefix":"","useAutoplayFallback":false,"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"000-7297567-4904535","refMarkers":"aplus-12046_ref","placementContext":"AplusWidget","marketplaceId":"A1F83G8C2ARO7P","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"4B48905909EA420FA5A2","customerId":"0","sessionType":1},"ospLinkCode":"","showPosterImage":true,"languageCode":"en","version":"","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.8","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","videoAsin":"hero-video","producerId":"vsemetrics_playercards","refMarkers":"aplus-12046_ref","placementContext":"AplusWidget","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.7"},"shouldStartMuted":false,"airyVersion":"VideoJS","languagePreferenceStrings":{},"enableInactiveFocus":true,"isReactFactory":false,"enableDelphiAttribution":false,"includeReportWidget":false,"shouldAutoplay":false},"needPlayerFactory":false,"isMobile":false}</script><div class="vse-airy-container vse-player-container none "><div id="aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3" class="vse-player" data-element-id="vse-player-container"><div id="aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container" style="width:100%; height:100%"><div disablepictureinpicture="true" playsinline="true" class="video-js brila-video-js vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v7 vjs-user-active vjs-fluid aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element-dimensions" id="aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element" tabindex="-1" lang="en" style="width:100%; height:100%;"><video id="aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element_html5_api" class="vjs-tech" playsinline="playsinline" disablepictureinpicture="true" tabindex="-1" preload="auto" poster="https://m.media-amazon.com/images/S/aplus-media/vc/5b42141d-3fbf-4359-bf7f-e39214334082.__CR0,147,1920,787_PT0_SX1464_V1___.jpg" src="https://m.media-amazon.com/images/S/aplus-media/vc/10bdf63e-e7d1-42d1-8682-bc1495de315d.mp4"></video><div class="vjs-poster" tabindex="-1" aria-disabled="false" style="background-image: url(&quot;https://m.media-amazon.com/images/S/aplus-media/vc/5b42141d-3fbf-4359-bf7f-e39214334082.__CR0,147,1920,787_PT0_SX1464_V1___.jpg&quot;);"></div><div class="vjs-text-track-display" aria-live="off" aria-atomic="true"><div style="position: absolute; inset: 0px; margin: 1.5%;"></div></div><div class="vjs-loading-spinner" dir="ltr"><span class="vjs-control-text">Video Player is loading.</span></div><button class="vjs-big-play-button" type="button" title="Play Video" aria-disabled="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Play Video</span></button><div class="vjs-control-bar" dir="ltr"><button class="vjs-play-control vjs-control vjs-button" type="button" title="Play" aria-disabled="false" aria-label="Play"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Play</span></button><div class="vjs-volume-panel vjs-control vjs-volume-panel-horizontal"><button class="vjs-mute-control vjs-control vjs-button vjs-vol-3" type="button" title="Mute" aria-disabled="false" aria-label="Mute"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Mute</span></button><div class="vjs-volume-control vjs-control vjs-volume-horizontal"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Volume Level" aria-live="polite" title="Volume Slider" aria-valuetext="100%"><div class="vjs-volume-level"><span class="vjs-control-text"></span></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Current Time&nbsp;</span><span class="vjs-current-time-display" aria-live="off" role="presentation">0:00</span></div><div class="vjs-time-control vjs-time-divider" aria-hidden="true"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Duration&nbsp;</span><span class="vjs-duration-display" aria-live="off" role="presentation">0:33</span></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="100" aria-label="Progress Bar" aria-valuetext="0:00 of 0:33"><div class="vjs-load-progress" style="width: 36.82%;"><span class="vjs-control-text"><span>Loaded</span>: <span class="vjs-control-text-loaded-percentage">36.82%</span></span><div data-start="0" data-end="12.381" style="left: 0%; width: 100%;"></div></div><div class="vjs-play-progress vjs-slider-bar" aria-hidden="true" style="width: 0%;"></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type&nbsp;</span>LIVE</div></div><button class="vjs-seek-to-live-control vjs-control" type="button" title="Seek to live, currently behind live" aria-disabled="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Seek to live, currently behind live</span><span class="vjs-seek-to-live-text" aria-hidden="true">LIVE</span></button><div class="vjs-remaining-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Remaining Time&nbsp;</span><span aria-hidden="true">-</span><span class="vjs-remaining-time-display" aria-live="off" role="presentation">0:33</span></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><div class="vjs-playback-rate-value" id="vjs-playback-rate-value-label-aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element_component_816">1x</div><button class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Playback Rate" aria-haspopup="true" aria-expanded="false" aria-describedby="vjs-playback-rate-value-label-aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element_component_816"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Playback Rate</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Chapters" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Chapters</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Descriptions" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Descriptions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">descriptions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Captions" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Captions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">captions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Audio Track" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Audio Track</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><button class="vjs-fullscreen-control vjs-control vjs-button" type="button" title="Fullscreen" aria-disabled="false" aria-label="Fullscreen"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element_component_1017_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-control-text" id="aplus-12046-player-71b5c317-0160-49f3-89b8-fd40083b39e3-container-element_component_1017_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div></div></div></div></div><script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/51v6HuvLjJL.js?AUIClients/VSEPlayer');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21L2L4uKEUL._RC|01x4giTy+uL.js,01r9LpT6pbL.js,41DFDIBs9mL.js,11QfrzttlqL.js,91qahXPBdEL.js,01ELLYeIOkL.js_.js?AUIClients/Brila');
</script>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("vse-ns-initVSEPlayerOnLoad"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('VSEPlayer').execute(function(vsePlayer){vsePlayer.initPlayer('aplus-12046-player-ps');});
//Please use below event to register FeedbackForm
P.when('A', 'VSEComponentAssets').execute('vse-ns-player-initialization', function(A, asset) {
A.trigger('vse:ns:player:aplus-12046:init', 'aplus-12046-player-ps');
});
}));</script></div>
</div> </div> <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-12-nav-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-12-nav-carousel" data-csa-c-id="8qr5bs-xe6rkp-jp4j0k-wz7dym" data-cel-widget="aplus-m-premium-module-12-nav-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-12 premium-aplus-module-12--top-nav">  <div class="aplus-horizontal-scroll-container aplus-horizontal-scroll-container-2">
<div id="aplus-carousel-actions-2" aria-label="tablist section" class="a-section aplus-carousel-actions aplus-container-2" role="tablist">      <span aria-selected="true" class="aplus-goto-btn aplus-goto-btn-2 aplus-active" role="tab"> <span class="aplus-carousel-index">1</span> <span class="aplus-accent2 aplus-carousel-label">Calls</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-2" role="tab"> <span class="aplus-carousel-index">2</span> <span class="aplus-accent2 aplus-carousel-label">Music</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-2" role="tab"> <span class="aplus-carousel-index">3</span> <span class="aplus-accent2 aplus-carousel-label">Movies</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-2" role="tab"> <span class="aplus-carousel-index">4</span> <span class="aplus-accent2 aplus-carousel-label">Stadium</span> </span>        </div> </div>
<div data-module-id="2" class="a-section a-spacing-none aplus-carousel-container">                                                    <div id="premium-aplus-12-carousel-2-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-12-carousel-2&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-image-carousel-container a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel6" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 1160px; transition: all 0ms ease 0s; transform: translateX(-290px) translateZ(0px);"><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="4" aria-posinset="4" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d0d1e9bb-1c33-48ab-ba1f-5924c3cf1b91.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="4" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL Tune 215BT, JBL T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f6fb0d60-ed77-432f-ab11-2b797fe9a9fd.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="4" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL Tune 215BT, JBL T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/eb497fff-d081-4577-a10f-0bfbf5423537.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="4" aria-posinset="3" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL Tune 215BT, JBL T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b80595f0-135b-4473-b802-2134305a6911.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-12-nav-carousel').execute(function(init){
init();
});
}));</script>    </div>
<div class="celwidget aplus-module premium-module-12-nav-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-12-nav-carousel" data-csa-c-id="klhy06-fa7jdy-58zkm8-2v0n1e" data-cel-widget="aplus-m-premium-module-12-nav-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-12 premium-aplus-module-12--top-nav">  <div class="aplus-horizontal-scroll-container aplus-horizontal-scroll-container-3">
<div id="aplus-carousel-actions-3" aria-label="tablist section" class="a-section aplus-carousel-actions aplus-container-2" role="tablist">      <span aria-selected="true" class="aplus-goto-btn aplus-goto-btn-3 aplus-active" role="tab"> <span class="aplus-carousel-index">1</span> <span class="aplus-accent2 aplus-carousel-label">Battery</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-3" role="tab"> <span class="aplus-carousel-index">2</span> <span class="aplus-accent2 aplus-carousel-label">16 Hr Playtime</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-3" role="tab"> <span class="aplus-carousel-index">3</span> <span class="aplus-accent2 aplus-carousel-label">Insta Charge</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-3" role="tab"> <span class="aplus-carousel-index">4</span> <span class="aplus-accent2 aplus-carousel-label">Type C cable</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-3" role="tab"> <span class="aplus-carousel-index">5</span> <span class="aplus-accent2 aplus-carousel-label">3 Button Remote</span> </span>   </div> </div>
<div data-module-id="3" class="a-section a-spacing-none aplus-carousel-container">                                                           <div id="premium-aplus-12-carousel-3-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-12-carousel-3&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-image-carousel-container a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel7" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 1450px; transition: all 0ms ease 0s; transform: translateX(-580px) translateZ(0px);"><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="5" aria-posinset="4" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL TUNE 215BT, JBL T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/21dfab83-f928-49e7-bdab-13dae5021016.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="5" aria-posinset="5" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/46260b62-b6a7-4be0-a9a4-1d68900bc77d.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="5" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8d13eef7-bc89-4095-b2c2-ff352b4e1520.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="5" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL TUNE 215BT, JBL T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4f4960da-6355-4b88-8c58-f21a44215576.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-card" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="5" aria-posinset="3" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL TUNE 215BT, JBL T215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b844a4a6-240c-4d61-a743-d96708bf3e7c.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-12-nav-carousel').execute(function(init){
init();
});
}));</script>    </div>
<div class="celwidget aplus-module premium-module-12-nav-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-12-nav-carousel" data-csa-c-id="tfdh5m-pqye12-sxtol8-j353aa" data-cel-widget="aplus-m-premium-module-12-nav-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-12 premium-aplus-module-12--top-nav">  <div class="aplus-horizontal-scroll-container aplus-horizontal-scroll-container-4">
<div id="aplus-carousel-actions-4" aria-label="tablist section" class="a-section aplus-carousel-actions aplus-container-2" role="tablist">      <span aria-selected="true" class="aplus-goto-btn aplus-goto-btn-4 aplus-active" role="tab"> <span class="aplus-carousel-index">1</span> <span class="aplus-accent2 aplus-carousel-label">Bluetooth</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-4" role="tab"> <span class="aplus-carousel-index">2</span> <span class="aplus-accent2 aplus-carousel-label">MultiPoint Connectivity</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-4" role="tab"> <span class="aplus-carousel-index">3</span> <span class="aplus-accent2 aplus-carousel-label">Voice Assistant</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-4" role="tab"> <span class="aplus-carousel-index">4</span> <span class="aplus-accent2 aplus-carousel-label">Ultralight</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-4" role="tab"> <span class="aplus-carousel-index">5</span> <span class="aplus-accent2 aplus-carousel-label">Crystal Clear Audio</span> </span>   </div> </div>
<div data-module-id="4" class="a-section a-spacing-none aplus-carousel-container">                                                           <div id="premium-aplus-12-carousel-4-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-12-carousel-4&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-image-carousel-container"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport"><ol class="a-carousel" role="list">      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/22f7c7e8-9436-42c6-be4c-b6f2f3faa477.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1efd2df6-9bae-4cc3-b48f-3e55e81059aa.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a512bdba-7045-4e1e-b45b-726081a9cd66.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/279d204f-efab-4bc9-a8b2-6db375279823.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="JBL 215BT, JBL TUNE 215BT" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/339ae854-f0a3-4697-9c60-e3d505b39139.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>   </ol></div> <span class="a-end aok-hidden"></span></div> </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-12-nav-carousel').execute(function(init){
init();
});
}));</script>    </div>
<div class="celwidget aplus-module premium-module-8-hero-video aplus-premium" cel_widget_id="aplus-m-premium-module-8-hero-video" data-csa-c-id="jvzmeh-qjl3d2-xrll1g-v1kbql" data-cel-widget="aplus-m-premium-module-8-hero-video">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-8">                                  <div class="a-section a-spacing-none premium-aplus-module-8-video">  <div class="a-section a-spacing-none video-placeholder"></div>  <div class="a-section a-spacing-none video-container">                                     <div id="f897ef84-8b18-4700-a667-7fff9bb42e4d" style="width:100%; height:100%;">
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01cUckQOW-L.css?AUIClients/VSEPlayer"><link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/51NP-5Gx4JL._RC|11iRfIvA-aL.css_.css?AUIClients/Brila"><script type="a-state" data-a-state="{&quot;key&quot;:&quot;aplus-12047-player-ps&quot;}">{"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"clientPrefix":"aplus-12047","closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"000-4307789-2902523","refMarkers":"aplus-12047_ref","placementContext":"AplusWidget","marketplaceId":"A1F83G8C2ARO7P","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"5F0BC4A394F04142A156","customerId":"0","sessionType":1},"mimeType":"video/mp4","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.8","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","videoAsin":"hero-video","producerId":"vsemetrics_playercards","refMarkers":"aplus-12047_ref","placementContext":"AplusWidget","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.7"},"videoHeight":0,"videoWidth":0,"videoUrl":"https://m.media-amazon.com/images/S/aplus-media/vc/5956b941-12d0-4311-bf73-700eb4930cde.mp4","metricsEmissionMethod":"nexus","imageUrl":"https://m.media-amazon.com/images/S/aplus-media/vc/f5f6a487-3f2e-3998-8120-12651bbcfa06.__CR0,147,1920,787_PT0_SX1464_V1___.jpg","awaConfig":{"useUpNextComponent":false,"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"initialVideo":"hero-video","shouldPreload":true,"enableClickBasedAttribution":false,"isChromelessPlayer":false,"closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"showPlayerPlayButton":false,"isVideoImmersivePlayer":false,"metricsEmissionMethod":"nexus","skipInitialFocus":false,"playerSkin":"none","disabledViewIds":["replayHint"],"includeEarnsComissionDisclosure":false,"customerId":"0","containerId":"aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5","requestMetadata":{"marketplaceId":"A1F83G8C2ARO7P","clientId":"VSE-IN","method":"AplusWidget","requestId":"5F0BC4A394F04142A156","pageAsin":"","sessionId":"000-4307789-2902523"},"shouldLoop":false,"shouldDisableControls":false,"alwaysSetInitialVideo":true,"showPlayerCloseButton":false,"clientPrefix":"","useAutoplayFallback":false,"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"000-4307789-2902523","refMarkers":"aplus-12047_ref","placementContext":"AplusWidget","marketplaceId":"A1F83G8C2ARO7P","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"5F0BC4A394F04142A156","customerId":"0","sessionType":1},"ospLinkCode":"","showPosterImage":true,"languageCode":"en","version":"","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.8","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","videoAsin":"hero-video","producerId":"vsemetrics_playercards","refMarkers":"aplus-12047_ref","placementContext":"AplusWidget","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.7"},"shouldStartMuted":false,"airyVersion":"VideoJS","languagePreferenceStrings":{},"enableInactiveFocus":true,"isReactFactory":false,"enableDelphiAttribution":false,"includeReportWidget":false,"shouldAutoplay":false},"needPlayerFactory":false,"isMobile":false}</script><div class="vse-airy-container vse-player-container none "><div id="aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5" class="vse-player" data-element-id="vse-player-container"><div id="aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container" style="width:100%; height:100%"><div disablepictureinpicture="true" playsinline="true" class="video-js brila-video-js vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v7 vjs-user-active vjs-fluid aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element-dimensions" id="aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element" tabindex="-1" lang="en" style="width:100%; height:100%;"><video id="aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element_html5_api" class="vjs-tech" playsinline="playsinline" disablepictureinpicture="true" tabindex="-1" preload="auto" poster="https://m.media-amazon.com/images/S/aplus-media/vc/f5f6a487-3f2e-3998-8120-12651bbcfa06.__CR0,147,1920,787_PT0_SX1464_V1___.jpg" src="https://m.media-amazon.com/images/S/aplus-media/vc/5956b941-12d0-4311-bf73-700eb4930cde.mp4"></video><div class="vjs-poster" tabindex="-1" aria-disabled="false" style="background-image: url(&quot;https://m.media-amazon.com/images/S/aplus-media/vc/f5f6a487-3f2e-3998-8120-12651bbcfa06.__CR0,147,1920,787_PT0_SX1464_V1___.jpg&quot;);"></div><div class="vjs-text-track-display" aria-live="off" aria-atomic="true"><div style="position: absolute; inset: 0px; margin: 1.5%;"></div></div><div class="vjs-loading-spinner" dir="ltr"><span class="vjs-control-text">Video Player is loading.</span></div><button class="vjs-big-play-button" type="button" title="Play Video" aria-disabled="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Play Video</span></button><div class="vjs-control-bar" dir="ltr"><button class="vjs-play-control vjs-control vjs-button" type="button" title="Play" aria-disabled="false" aria-label="Play"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Play</span></button><div class="vjs-volume-panel vjs-control vjs-volume-panel-horizontal"><button class="vjs-mute-control vjs-control vjs-button vjs-vol-3" type="button" title="Mute" aria-disabled="false" aria-label="Mute"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Mute</span></button><div class="vjs-volume-control vjs-control vjs-volume-horizontal"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Volume Level" aria-live="polite" title="Volume Slider" aria-valuetext="100%"><div class="vjs-volume-level"><span class="vjs-control-text"></span></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Current Time&nbsp;</span><span class="vjs-current-time-display" aria-live="off" role="presentation">0:00</span></div><div class="vjs-time-control vjs-time-divider" aria-hidden="true"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Duration&nbsp;</span><span class="vjs-duration-display" aria-live="off" role="presentation">0:18</span></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="100" aria-label="Progress Bar" aria-valuetext="0:00 of 0:18"><div class="vjs-load-progress" style="width: 79.19%;"><span class="vjs-control-text"><span>Loaded</span>: <span class="vjs-control-text-loaded-percentage">79.19%</span></span><div data-start="0" data-end="14.635" style="left: 0%; width: 100%;"></div></div><div class="vjs-play-progress vjs-slider-bar" aria-hidden="true" style="width: 0%;"></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type&nbsp;</span>LIVE</div></div><button class="vjs-seek-to-live-control vjs-control" type="button" title="Seek to live, currently behind live" aria-disabled="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Seek to live, currently behind live</span><span class="vjs-seek-to-live-text" aria-hidden="true">LIVE</span></button><div class="vjs-remaining-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Remaining Time&nbsp;</span><span aria-hidden="true">-</span><span class="vjs-remaining-time-display" aria-live="off" role="presentation">0:18</span></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><div class="vjs-playback-rate-value" id="vjs-playback-rate-value-label-aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element_component_1336">1x</div><button class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Playback Rate" aria-haspopup="true" aria-expanded="false" aria-describedby="vjs-playback-rate-value-label-aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element_component_1336"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Playback Rate</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Chapters" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Chapters</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Descriptions" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Descriptions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">descriptions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Captions" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Captions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">captions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Audio Track" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Audio Track</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><button class="vjs-fullscreen-control vjs-control vjs-button" type="button" title="Fullscreen" aria-disabled="false" aria-label="Fullscreen"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element_component_1537_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-control-text" id="aplus-12047-player-c76e1d8d-48b2-4f7b-a20d-48ecf35b5cd5-container-element_component_1537_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div></div></div></div></div><script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/51v6HuvLjJL.js?AUIClients/VSEPlayer');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21L2L4uKEUL._RC|01x4giTy+uL.js,01r9LpT6pbL.js,41DFDIBs9mL.js,11QfrzttlqL.js,91qahXPBdEL.js,01ELLYeIOkL.js_.js?AUIClients/Brila');
</script>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("vse-ns-initVSEPlayerOnLoad"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('VSEPlayer').execute(function(vsePlayer){vsePlayer.initPlayer('aplus-12047-player-ps');});
//Please use below event to register FeedbackForm
P.when('A', 'VSEComponentAssets').execute('vse-ns-player-initialization', function(A, asset) {
A.trigger('vse:ns:player:aplus-12047:init', 'aplus-12047-player-ps');
});
}));</script></div>
</div> </div> <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-11-faq aplus-premium" cel_widget_id="aplus-m-premium-module-11-faq" data-csa-c-id="14sylg-xtt2ot-6napm5-x003lf" data-cel-widget="aplus-m-premium-module-11-faq">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-11"> <div data-faq-block="6" class="a-section a-spacing-none aplus-container-2 faqs-container 6">      <div class="faq-block">
<p class="aplus-question aplus-p1"> Does the JBL TUNE 215BT come with different sized ear bud sleeves in the box? </p>    <span id="faq-0" class="answer" aria-hidden="true"></span>                                  <p class="aplus-answer aplus-p2"> With its universal fit, ergonomic design non-slip bionic shape earbud, the JBL TUNE 215BT does not require additional ear bud sleeves. The semi in ear cavity is made of skin friendly material that makes a comfortable in ear seating. </p>   
<span class="faq-arrow" role="button" tabindex="0" aria-labelledby="" aria-controls="faq-0" aria-expanded="false"></span>
</div>
<div class="faq-block">
<p class="aplus-question aplus-p1"> How to comfortably seat the earphones for long duration usage? </p>    <span id="faq-1" class="answer" aria-hidden="true"></span>                                  <p class="aplus-answer aplus-p2"> Place the buds in the ear and gently twist seat by rotating 2 – 5 degrees to comfortably seat and rest the earbuds in your ear. </p>   
<span class="faq-arrow" role="button" tabindex="0" aria-labelledby="" aria-controls="faq-1" aria-expanded="false"></span>
</div>
<div class="faq-block">
<p class="aplus-question aplus-p1"> How to Switch ON your TUNE 215BT and pair with your mobile device? </p>    <span id="faq-2" class="answer" aria-hidden="true"></span>                                  <p class="aplus-answer aplus-p2"> Long press the Power button on the remote for about 2 sec. The earbud would turn ON and enter bluetooth pairing mode. Turn ON bluetooth on your mobile device and connect with JBLTUNE 215BT visible on your mobile screen. </p>   
<span class="faq-arrow" role="button" tabindex="0" aria-labelledby="" aria-controls="faq-2" aria-expanded="false"></span>
</div>
</div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-11-faq').execute(function(init){
init();
});
}));</script>     </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52c5e108d28052e6948f7"
    },
    "Title": "pTron Tangent Impulse Safebeats Open-Ear Wireless Headphones with Mic, 10H Playtime, Designed for Ear Health & Comfort, Bluetooth V5.3, Dual Device Pairing & Type-C Fast Charging (Active Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "859",
    "images0": "https://m.media-amazon.com/images/I/51T4O+hXKmL._SL1200_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61EvpHHtzmL._SL1200_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61LMhvYFtTL._SL1200_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61-oKxN5gjL._SL1200_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61zJldN3JFL._SL1200_.jpg",
    "disp_order": "...",
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52cac108d28052e6948f8"
    },
    "Title": "boAt Rockerz 425 Bluetooth Wireless Over Ear Headphones with Mic Signature Sound, Beast Mode for Gaming, Enx Tech, ASAP Charge, 25H Playtime, Bluetooth V5.2 (Active Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/61XvYOrqVeL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61-KLUL0mJL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71SuWxoMewL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61UMXr-+bEL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71H0gjLshjL._SL1500_.jpg",
    "disp_order": `<div class="a-cardui feature" data-a-card-type="basic" name="a-cardui-deck-autoname-19-card0" data-cel-widget="">  <h3>From the manufacturer</h3>                                     <div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="gr3liw-6k6sw4-bxzpby-thj3gz" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="34790t-287x02-6dyoyf-9yx3zv" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="boat rockerz 425" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/05ade5ac-52dc-4141-ac83-8b1ef0ae0741.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/05ade5ac-52dc-4141-ac83-8b1ef0ae0741.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="boat rockerz 425" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/05ade5ac-52dc-4141-ac83-8b1ef0ae0741.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="poonjk-u50v1j-phxwrt-w12mv" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="rockerz 425" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a8dd5932-f3f4-4ec9-bbae-fefffa654135.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a8dd5932-f3f4-4ec9-bbae-fefffa654135.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="rockerz 425" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a8dd5932-f3f4-4ec9-bbae-fefffa654135.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="wah7dy-d0gzat-oxsyrc-lcodqf" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="boat rockerz headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2206bfd9-0355-49d6-9f67-74022be04958.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2206bfd9-0355-49d6-9f67-74022be04958.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="boat rockerz headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2206bfd9-0355-49d6-9f67-74022be04958.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="pnez6c-moo873-e0z1j2-czivl0" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="boat headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/de43bd24-7d36-4f05-9a14-4e53ec32abd1.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/de43bd24-7d36-4f05-9a14-4e53ec32abd1.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="boat headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/de43bd24-7d36-4f05-9a14-4e53ec32abd1.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="xpoa-oucsgi-h852a8-80dxiw" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="boat earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e96b204c-9156-406e-a01e-cdb43fff4581.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e96b204c-9156-406e-a01e-cdb43fff4581.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="boat earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e96b204c-9156-406e-a01e-cdb43fff4581.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
</div> </div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52d00108d28052e6948f9"
    },
    "Title": "ZEBRONICS THUNDER Bluetooth 5.3 Wireless Headphones with 60H Backup, Gaming Mode, Dual Pairing, ENC, AUX, Micro SD, Voice assistant, Comfortable Earcups, Call Function(Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/61s-3q6CYxL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71cESg5yp8L._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71nmhN4IOML._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71QzLouS1tL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71miGcKumbL._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r" style="margin-top: 8px; margin-bottom: 16px;"><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/21d07a0f58e946dcbd834132f0bfdcdd_18f7b9aaabe_ACCFBHDEHZFK6M2Y_1.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/21d07a0f58e946dcbd834132f0bfdcdd_18f7b9aaabe_ACCFBHDEHZFK6M2Y_1.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/21d07a0f58e946dcbd834132f0bfdcdd_18f7b9aaabe_ACCFBHDEHZFK6M2Y_1.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/5a6c7b69aac6432ca68e1a7aeafdde58_18f7b9b9f47_ACCFBHDEHZFK6M2Y_2.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/5a6c7b69aac6432ca68e1a7aeafdde58_18f7b9b9f47_ACCFBHDEHZFK6M2Y_2.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/5a6c7b69aac6432ca68e1a7aeafdde58_18f7b9b9f47_ACCFBHDEHZFK6M2Y_2.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/c27fba15446a399fa540be9d4097a190_18f7b9bc0d3_ACCFBHDEHZFK6M2Y_3.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/c27fba15446a399fa540be9d4097a190_18f7b9bc0d3_ACCFBHDEHZFK6M2Y_3.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/c27fba15446a399fa540be9d4097a190_18f7b9bc0d3_ACCFBHDEHZFK6M2Y_3.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/74c3bc4bbbf84884a1339a6306ebef65_18f7b9bb25a_ACCFBHDEHZFK6M2Y_4.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/74c3bc4bbbf84884a1339a6306ebef65_18f7b9bb25a_ACCFBHDEHZFK6M2Y_4.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/74c3bc4bbbf84884a1339a6306ebef65_18f7b9bb25a_ACCFBHDEHZFK6M2Y_4.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div><div class="css-175oi2r" style="flex-direction: column;"><div class="css-175oi2r"><div class="css-175oi2r" style="margin-right: 16px; margin-left: 16px;"><div style="display: flex; position: relative; width: 288px; height: 162px;"><img src="https://rukminim2.flixcart.com/image/600/350/cms-rpd-img/e6cb70f963ea4154add77b3b3263e444_18f7b9bc8ce_ACCFBHDEHZFK6M2Y_5.jpg.jpeg?q=90" loading="eager" alt="" srcset="https://rukminim2.flixcart.com/image/288/162/cms-rpd-img/e6cb70f963ea4154add77b3b3263e444_18f7b9bc8ce_ACCFBHDEHZFK6M2Y_5.jpg.jpeg?q=80 1x, https://rukminim2.flixcart.com/image/576/324/cms-rpd-img/e6cb70f963ea4154add77b3b3263e444_18f7b9bc8ce_ACCFBHDEHZFK6M2Y_5.jpg.jpeg?q=60 2x, " style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"><img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" loading="eager" alt="" style="width: 100%; height: 100%; margin: auto; position: absolute; inset: 0px; padding: inherit; object-fit: contain; opacity: 0;"></div></div></div></div></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52d55108d28052e6948fa"
    },
    "Title": "Noise Two Wireless On-Ear Headphones with 50 Hours Playtime, Low Latency(up to 40ms), 4 Play Modes, Dual Pairing, BT v5.3 (Bold Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/512sO2L0k6L._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/6123McrMDhL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/619TKUep4XL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71qT2vBIVwL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71QyfyboQ8L._SL1500_.jpg",
    "disp_order":`<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="3xah3h-1ko016-fay6iw-5hry2s" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="vf1sq3-v9arq4-cvn5b3-l3ca8q" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8d65c575-531d-48fa-84da-bf6690f04f4a.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8d65c575-531d-48fa-84da-bf6690f04f4a.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8d65c575-531d-48fa-84da-bf6690f04f4a.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="hk2ldm-mppwzo-v8lj5p-j0m6no" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2593f04f-1593-4902-903d-2cae5863e264.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2593f04f-1593-4902-903d-2cae5863e264.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2593f04f-1593-4902-903d-2cae5863e264.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="f1ri7v-bns241-g3zfik-qh0wps" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f3f6a14-cd19-437a-afa5-7bb2512b5c57.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f3f6a14-cd19-437a-afa5-7bb2512b5c57.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f3f6a14-cd19-437a-afa5-7bb2512b5c57.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="eo3djw-bh3hq1-337zfx-1015xf" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c21cc4d1-689f-4118-8fc2-65b2fbc0524d.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c21cc4d1-689f-4118-8fc2-65b2fbc0524d.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c21cc4d1-689f-4118-8fc2-65b2fbc0524d.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="insj2x-qt7kcg-1lh64u-w1acdn" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/cb934b25-8c6a-4753-a9b3-dc27f96185f2.__CR0,0,970,600_PT0_SX970_V1___.png" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/cb934b25-8c6a-4753-a9b3-dc27f96185f2.__CR0,0,970,600_PT0_SX970_V1___.png"><noscript><img alt="Noise Two" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/cb934b25-8c6a-4753-a9b3-dc27f96185f2.__CR0,0,970,600_PT0_SX970_V1___.png"/></noscript>   </div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52d7e108d28052e6948fb"
    },
    "Title": "Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/41BoLKMYjnL._SL1128_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61GGb6+4NFL._SL1388_.jpg",
    "images2": "https://m.media-amazon.com/images/I/512ZjLOlwNL._SL1080_.jpg",
    "images3": "https://m.media-amazon.com/images/I/519kPP4yJUL._SL1040_.jpg",
    "images4": "https://m.media-amazon.com/images/I/51aIxM8tSoL._SL1016_.jpg",
    "disp_order":`<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="ktdzf9-g7pqjh-mg7su6-3kxy5x" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2.mobile {
display:inherit;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2.mobile .aplus-standard .aplus-tech-spec-table { word-break: initial; }
.aplus-v2.mobile .aplus-standard.aplus-module {
min-width:inherit;
margin-bottom: 21px;
}
.aplus-v2.mobile .aplus-standard .apm-sidemodule {width:inherit}
.aplus-v2.mobile .aplus-standard .apm-fixed-width {width:inherit}
/* module-5 */
.aplus-v2.mobile .aplus-standard.module-5{overflow:auto}
.aplus-v2.mobile .aplus-standard .aplus-module-wrapper {
display: block;
}
.aplus-v2.mobile .aplus-standard img.apm-middle-image {
vertical-align: middle;
}
.aplus-v2.mobile .aplus-standard .apm-iconheader {
display: inline;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: left;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: center;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard th.apm-tablemodule-keyhead {
border-top: 1px solid #dddddd;
padding: 8px 14px 6px !important;
background-color: #f7f7f7;
font-weight: normal;
color: #626262;
float: none !important;
margin-right: 0;
text-align: center;
min-width: 110px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-keyhead {
border-right: 1px solid #dddddd;
}
.aplus-v2.mobile .aplus-standard tr.apm-tablemodule-keyvalue td {
padding-top: 8px !important;
padding-left: 14px;
padding-bottom: 8px;
border-top: 1px solid #dddddd;
border-bottom: 1px solid #dddddd;
min-width: 150px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-imagerows > td > img {
max-width: none !important;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-checked {
text-align: center;
}
.aplus-v2 .aplus-standard .apm-tablemodule-valuecell {
vertical-align: middle
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-valuecell.selected {
background-color: #fff5ec;
}
.aplus-v2 .add-to-cart {
line-height: 1rem;
font-weight: normal;
}
.aplus-v2 .apm-tablemodule-atc form {
margin-bottom: 0px;
}
/* moduel 13 text */
.aplus-v2 .aplus-standard .aplus-module-13 {
padding: 20px 0;
}
.aplus-v2 .aplus-standard .aplus-module-13 .aplus-13-heading-text {
padding-bottom: 15px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: left;
padding-bottom: 10px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: inherit;
padding-bottom: 10px;
}
html[dir='rtl'] .aplus-v2 .aplus-standard .apm-spacing ul {margin:0 18px 18px 0 !important;}
</style>
<div class="celwidget aplus-module module-2 aplus-standard" cel_widget_id="aplus-m-module-2" data-csa-c-id="zi5vt5-3e0266-sjdhav-exhb29" data-cel-widget="aplus-m-module-2">
<div class="aplus-module-wrapper apm-spacing apm-floatnone">
<div class="a-section a-text-center">                               <img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/6fd441cc-ca2a-414e-b871-9eaca460abca._SR300,300_.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/6fd441cc-ca2a-414e-b871-9eaca460abca._SR300,300_.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/6fd441cc-ca2a-414e-b871-9eaca460abca._SR300,300_.jpg"/></noscript>   </div>                                   <h3 class="a-spacing-mini"> Neodymium Dynamic Drivers Deliver Precise Sound </h3>                                    <p> Lightweight 30 mm neodymium dynamic driver units enable the headphones to deliver a punchy, rhythmic response to even the most demanding track. Combined with a highly sensitive diaphragm, you'll be able to turn the headphones up louder-without the need for an amp-and still enjoy clear, precise audio across the spectrum. </p>    </div>    </div>
<div class="celwidget aplus-module module-3 aplus-standard" cel_widget_id="aplus-m-module-3" data-csa-c-id="g36lgr-2n7do4-ayevo1-2gxdfy" data-cel-widget="aplus-m-module-3">
<div class="aplus-module-wrapper apm-spacing apm-floatnone">
<div class="apm-sidemodule">
<div class="a-section a-text-center">                               <img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/415fb018-a3c5-486d-9380-5de0d703e7dd._SR300,300_.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/415fb018-a3c5-486d-9380-5de0d703e7dd._SR300,300_.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/415fb018-a3c5-486d-9380-5de0d703e7dd._SR300,300_.jpg"/></noscript>   </div>                                   <h3 class="a-spacing-mini"> Swivel Folding Design Makes Travel Easy </h3>                                    <p> Take these headphones anywhere you go. The headphones’ swivelling earcup design enables easy storage when you’re not using them, and enhances portability when you’re travelling. The earcups swivel flat, so you can pack them into a suitcase or a bag without worrying about them taking up too much valuable space. </p>    </div>
</div>
</div>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="7ne07t-gp4wv2-s9gn0a-pj2m8d" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<p class="a-text-center">                               <img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/92d54ae7-4182-4034-8ffa-8ec3a3f5aaf2._SL300__.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/92d54ae7-4182-4034-8ffa-8ec3a3f5aaf2._SL300__.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/92d54ae7-4182-4034-8ffa-8ec3a3f5aaf2._SL300__.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Enfolding Closed-Back Design Seals in Sound </h4>                                  <p class="a-spacing-base"> The closed-back, enfolding design wraps around the ear, helping to seal in music and keep distractions out. Acoustics are reflected back towards your ears, so you hear even the subtlest of sounds. You'll also feel every beat, as the closed-back design helps to maximise the bass signatures in your music. </p>    <p></p> <p class="a-text-center">                               <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-spacing-mini a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/c82312d1-6021-48e3-9677-36e34175dbde._SL300__.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/c82312d1-6021-48e3-9677-36e34175dbde._SL300__.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Wide Frequency Range for Clear Highs and Lows </h4>                                  <p class="a-spacing-base"> The wideband frequency range-spanning 12 Hz to 22 kHz-delivers deep bass, rich mid-levels and soaring highs. Hear the detail in every track and stay in-tune with all your music. </p>    <p></p> <p class="a-text-center">                               <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-spacing-mini a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/ef56d8d8-1abc-4e1c-83d3-eedf97a5225c._SL300__.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/S/aplus-media/sota/ef56d8d8-1abc-4e1c-83d3-eedf97a5225c._SL300__.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Cushioned Earpads for Total Comfort </h4>                                  <p class="a-spacing-base"> Listen in total comfort. These headphones have a self-adjusting headband and soft cushioned earcups that cover the whole ear. Enjoy the long-lasting comfort you need for listening to your favourite albums back-to-back. </p>    <p></p> </div>
</div>    </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52ddc108d28052e6948fc"
    },
    "Title": "boAt Rockerz 550 Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation(Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/61gYxcIGjvL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/713vSnqDamL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/612c54zFjpL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71b+g2CJ79L._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/614IQrAtd+L._SL1500_.jpg",
    "disp_order":`<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="dsgpjv-rcl4ns-hxn9p4-c2eb5b" data-cel-widget="m-aplus">
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.now('premium-module-13-carousel-mobile').execute(function(init) {
if (init) {
return;
}
P.register('premium-module-13-carousel-mobile', function(){
return function() {
P.when('A', 'jQuery', 'a-carousel-framework', 'ready').execute(function (A, $, framework) {
function initiateCarousel(module) {
var moduleId = $(module).data('module-id');
var containerClass = '.aplus-v2 .premium-aplus-module-13 .aplus-card-description-wrapper-' + moduleId + '-';
var carouselName = 'premium-aplus-13-carousel-' + moduleId;
var controlClass = 'aplus-hidden';
/* If the carousel goes to a new page, make sure the right toggle button is selected */
A.on('a:carousel:'+carouselName+':change:pageNumber', function (data) {
var oldCompareClass = containerClass + data.oldValue;
var newCompareClass = containerClass + data.newValue;
$(oldCompareClass).addClass(controlClass);
$(newCompareClass).removeClass(controlClass);
});
}
$(".aplus-v2 .premium-aplus-module-13 .aplus-carousel-container").each(function(index, module) {
initiateCarousel(module);
});
framework.createAll();
framework.initializeAll();
});
}
});
});
}));</script>       <style type="text/css">
/**
* Premium-module 5: Comparision table - scroller
*/
.aplus-v2.mobile .premium-aplus-module-5.comparison-table h1 {
padding-bottom: 25px;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel {
width: 50%;
display: inline-block;
text-align: center;
vertical-align: top;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .aplus-comparison-selector {
padding: 0 20px 20px;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .aplus-comparison-grid {
padding-bottom: 12px;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel .content-container {
padding: 5px;
border-color: #000;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel .content-container.in-active {
border-color: #ddd;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel img {
padding-bottom: 10px;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel {
padding: 8px !important;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel .a-padding-base {
padding: 0 !important;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .comparison-panel .description {
min-height: 40px;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .aplus-inline {
display: inline-block;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .aplus-hide {
display: none;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .add-to-cart {
width: fit-content;
margin: 1rem auto;
}
.aplus-v2.mobile .premium-aplus-module-5.comparison-table .review {
padding-bottom: 6px;
}
</style>
<style type="text/css">
.aplus-v2.mobile .premium-aplus-module-2 .background-image {
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color {
background-color: #000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h1,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h5,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-module-2-topic {
padding-bottom: 10px;
}
.aplus-v2.mobile .premium-aplus-module-2 div[data-color='1'] {
color: #ffffff !important;
background-color: #000000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-heading {
padding-bottom: 20px;
}
</style>
<style type="text/css">
/**
* Premium-module 13: Carousel
*/
.aplus-v2.mobile .premium-aplus-module-13 .aplus-carousel-container {
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-carousel-element {
position: relative;
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-hidden {
display: none;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-card-description {
width: 100%;
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background {
background-color: #4D4D4D;
text-align: left;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background {
text-align: inherit;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background h1,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background h5,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ol,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ul,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-pagination-wrapper {
width: 100%;
text-align: center;
padding: 15px 0;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-card-link-button {
text-align: center;
padding-top: 20px;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-card-link-button.aplus-text-no-background {
padding-top: 0;
}
</style>
<style type="text/css">
/**
* Premium module global mobile styles
*/
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: Arial, sans-serif;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2 .premium-aplus .aplus-tech-spec-table { word-break: initial; }
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: inherit;
}
/* type */
.aplus-v2 .premium-aplus .aplus-h1 { font-size: 22px; line-height: 1.2em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h2 { font-size: 18px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h3 { font-size: 15px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-p1 { font-size: 15px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p2 { font-size: 13px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p3 { font-size: 12px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-accent1 { font-size: 13px; line-height: 1.4em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-accent2 { font-size: 12px; line-height: 1.4em; font-weight: 500; }
/* spacing */
.aplus-v2 .aplus-container-1 { padding: 10px; }
.aplus-v2 .aplus-container-1-2 { padding: 10px 20px; }
.aplus-v2 .aplus-container-2 { padding: 20px; }
.aplus-v2 .aplus-container-3 { padding: 20px 0; }
/* AUI will add -1.4rem margin to carousels */
.a-container .aplus-v2 .premium-aplus .a-carousel-container {
margin-left: 0;
margin-right: 0;
}
/**
* Padding and margin in styles should be 10, 15, 20, or 30 px. Considering mini 10, small 15, medium 20, large 30.
*/
</style>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.now('premium-module-5-comparison-table-scroller-mobile').execute(function(init){
if (init) {
return;
}
P.register('premium-module-5-comparison-table-scroller-mobile', function(){
return function() {
P.when('A', 'jQuery').execute(function(A, $) {
/**
* Premium comparison table: selector module
*/
function initCompTable(module) {
var comparisonId = $(module).data('comparison-id');
/* Cache selectors */
var
$productAttrs = $('.aplus-v2 .comparison-container.'+comparisonId+' .product-attr'),
$altAttrs = $('.aplus-v2 .comparison-container.'+comparisonId+' .attr-alt'),
$selector = $('.aplus-v2 .comparison-container.'+comparisonId+' #comparison-select-'+comparisonId);
/**
* Handle selector changes of state
* Using jQuery event namespace for preventing duplicate binding on twister refresh
*/
$selector.unbind('change.premiumAplusModule5Change')
.bind('change.premiumAplusModule5Change', function() {
$productAttrs.addClass('aplus-hide');
$altAttrs.addClass('aplus-hide');
$('.aplus-v2 .comparison-container.'+comparisonId+' .product-attr-' + $selector.val()).removeClass('aplus-hide');
$('.aplus-v2 .comparison-container.'+comparisonId+' #attr-alt-' + $selector.val()).removeClass('aplus-hide');
});
}
$('.aplus-v2 .premium-aplus-module-5 .comparison-container').each(function(index) {
initCompTable(this);
});
});
}
});
});
}));</script>                     <div class="celwidget aplus-module premium-module-13-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-13-carousel" data-csa-c-id="wbfagy-1g8uye-l554sc-1uyc8h" data-cel-widget="aplus-m-premium-module-13-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-13">                                  <div data-module-id="0" class="a-section a-spacing-none aplus-carousel-container">                                        <div id="premium-aplus-13-carousel-0-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-13-carousel-0&quot;,&quot;single_page_align&quot;:&quot;center&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-comparison-table-carousel a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel6" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 870px; transition: all 0ms ease 0s; transform: translateX(-290px) translateZ(0px);"><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="3" aria-posinset="3" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="bluetooth headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f39c1213-9f5e-4fb0-8402-00a78bed5091.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="3" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="rockerz 550" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8dc3e01f-5f42-4c90-9f0a-aae972baf734.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="3" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1d76e3e9-f900-45ce-a7d9-1ab3191e2820.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div>    <div class="a-section a-spacing-none aplus-pagination-wrapper">      <style type="text/css">
.aplus-mantle.aplus-module .aplus-pagination-dots {
margin: 0;
}
.aplus-mantle.aplus-module .aplus-pagination-dot {
display: inline-block;
list-style: none;
}
.aplus-mantle.aplus-module .aplus-carousel-nav {
text-align:center;
}
.aplus-mantle.aplus-module .carousel-slider-circle {
display: inline-block;
cursor: pointer;
height: 15px;
width: 15px;
border: 1px solid #000;
border-radius: 20px;
background-color: #fff;
margin-left: 5px;
}
.aplus-mantle.aplus-module .carousel-slider-circle.aplus-carousel-active {
background-color: #FFA500;
}
</style>
<script>
P.now("premium-aplus-13-carousel-0").execute(function(init) {
if (init) {
return;
}
P.register("premium-aplus-13-carousel-0", function(){
return function() {
P.when("A", "jQuery", "a-carousel-framework", "ready").execute(function (A, $, framework) {
var moduleId = "0";
var carouselName = "premium-aplus-13-carousel-0";
var paginationAction = "aplus-pagination-dot-action-" + moduleId;
var paginationGroup = "#aplus-pagination-group-" + moduleId + "-" + carouselName;
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
/* If the carousel goes to a new page */
A.on("a:carousel:"+carouselName+":change:pageNumber", function (data) {
A.$(paginationGroup+" .carousel-slider-circle").removeClass("aplus-carousel-active").attr('aria-selected', 'false')
.eq(data.newValue - 1).addClass("aplus-carousel-active").attr('aria-selected', 'true');
});
framework.onInit(carouselName, function (carousel) {
A.declarative(paginationAction, 'click keydown', function(event){
var isClick = event.type === 'click';
var isKeydown = event.type === 'keydown';
var isEnter = isKeydown && event.$event.keyCode === ENTER_KEY_CODE;
var isEsc = isKeydown  && event.$event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter) {
var data = event.data;
carousel.gotoPage(data.page);
} else if (isEsc) {
// force remove focus
event.$target.blur()
}
});
});
});
}
});
});
</script>
<div class="aplus-mantle aplus-module">
<div class="aplus-carousel-nav">
<ul id="aplus-pagination-group-0-premium-aplus-13-carousel-0" class="aplus-pagination-dots" aria-label="tablist-section" role="tablist">
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block aplus-carousel-active" aria-selected="true" data-action="aplus-pagination-dot-action-0" data-aplus-pagination-dot-action-0="{&quot;page&quot;: 1}" aria-label="slide-1" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-0" data-aplus-pagination-dot-action-0="{&quot;page&quot;: 2}" aria-label="slide-2" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-0" data-aplus-pagination-dot-action-0="{&quot;page&quot;: 3}" aria-label="slide-3" tabindex="0" role="tab"></span>
</li>
</ul>
</div>
</div>
</div>                                                                    <div class="a-section a-text-center">                                  </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-13-carousel-mobile').execute(function(init){
init();
});
P.when("premium-aplus-13-carousel-0").execute(function(init){init();});
}));</script>     </div>
<div class="celwidget aplus-module premium-module-2-fullbackground-image aplus-premium" cel_widget_id="aplus-m-premium-module-2-fullbackground-image" data-csa-c-id="fq3eek-b9ik7o-f03e4s-kifc5s" data-cel-widget="aplus-m-premium-module-2-fullbackground-image">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-2">                                  <div class="a-section a-spacing-none">                             <img alt="boat bluetooth headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c6e02d23-abe9-4095-8280-ec7c442224b3.__CR0,0,600,450_PT0_SX600_V1___.jpg" class="background-image" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c6e02d23-abe9-4095-8280-ec7c442224b3.__CR0,0,600,450_PT0_SX600_V1___.jpg"><noscript><img alt="boat bluetooth headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c6e02d23-abe9-4095-8280-ec7c442224b3.__CR0,0,600,450_PT0_SX600_V1___.jpg"/></noscript>   </div>  <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-13-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-13-carousel" data-csa-c-id="4ap5nk-iedte3-87r9em-jjhw3y" data-cel-widget="aplus-m-premium-module-13-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-13">                                  <div data-module-id="2" class="a-section a-spacing-none aplus-carousel-container">                                        <div id="premium-aplus-13-carousel-2-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-13-carousel-2&quot;,&quot;single_page_align&quot;:&quot;center&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-comparison-table-carousel a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel7" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 870px; transition: all 0ms ease 0s; transform: translateX(-290px) translateZ(0px);"><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="3" aria-posinset="3" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="boat headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/76443932-4035-4170-ab57-9df56d40f69d.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="3" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="boat 255" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/419e3070-7ee1-4cad-a0bd-9405f84e07f3.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="3" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/08fc71a2-ace0-47c3-a761-ebab2d5f3921.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div>    <div class="a-section a-spacing-none aplus-pagination-wrapper">      <style type="text/css">
.aplus-mantle.aplus-module .aplus-pagination-dots {
margin: 0;
}
.aplus-mantle.aplus-module .aplus-pagination-dot {
display: inline-block;
list-style: none;
}
.aplus-mantle.aplus-module .aplus-carousel-nav {
text-align:center;
}
.aplus-mantle.aplus-module .carousel-slider-circle {
display: inline-block;
cursor: pointer;
height: 15px;
width: 15px;
border: 1px solid #000;
border-radius: 20px;
background-color: #fff;
margin-left: 5px;
}
.aplus-mantle.aplus-module .carousel-slider-circle.aplus-carousel-active {
background-color: #FFA500;
}
</style>
<script>
P.now("premium-aplus-13-carousel-2").execute(function(init) {
if (init) {
return;
}
P.register("premium-aplus-13-carousel-2", function(){
return function() {
P.when("A", "jQuery", "a-carousel-framework", "ready").execute(function (A, $, framework) {
var moduleId = "2";
var carouselName = "premium-aplus-13-carousel-2";
var paginationAction = "aplus-pagination-dot-action-" + moduleId;
var paginationGroup = "#aplus-pagination-group-" + moduleId + "-" + carouselName;
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
/* If the carousel goes to a new page */
A.on("a:carousel:"+carouselName+":change:pageNumber", function (data) {
A.$(paginationGroup+" .carousel-slider-circle").removeClass("aplus-carousel-active").attr('aria-selected', 'false')
.eq(data.newValue - 1).addClass("aplus-carousel-active").attr('aria-selected', 'true');
});
framework.onInit(carouselName, function (carousel) {
A.declarative(paginationAction, 'click keydown', function(event){
var isClick = event.type === 'click';
var isKeydown = event.type === 'keydown';
var isEnter = isKeydown && event.$event.keyCode === ENTER_KEY_CODE;
var isEsc = isKeydown  && event.$event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter) {
var data = event.data;
carousel.gotoPage(data.page);
} else if (isEsc) {
// force remove focus
event.$target.blur()
}
});
});
});
}
});
});
</script>
<div class="aplus-mantle aplus-module">
<div class="aplus-carousel-nav">
<ul id="aplus-pagination-group-2-premium-aplus-13-carousel-2" class="aplus-pagination-dots" aria-label="tablist-section" role="tablist">
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block aplus-carousel-active" aria-selected="true" data-action="aplus-pagination-dot-action-2" data-aplus-pagination-dot-action-2="{&quot;page&quot;: 1}" aria-label="slide-1" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-2" data-aplus-pagination-dot-action-2="{&quot;page&quot;: 2}" aria-label="slide-2" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-2" data-aplus-pagination-dot-action-2="{&quot;page&quot;: 3}" aria-label="slide-3" tabindex="0" role="tab"></span>
</li>
</ul>
</div>
</div>
</div>                                                                    <div class="a-section a-text-center">                                  </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-13-carousel-mobile').execute(function(init){
init();
});
P.when("premium-aplus-13-carousel-2").execute(function(init){init();});
}));</script>     </div>
<div class="celwidget aplus-module premium-module-5-comparison-table-scroller aplus-premium" cel_widget_id="aplus-m-premium-module-5-comparison-table-scroller" data-csa-c-id="uqzwyd-wmqjwl-u6nv1s-mf7d64" data-cel-widget="aplus-m-premium-module-5-comparison-table-scroller">
<div class="premium-aplus premium-aplus-module-5 comparison-table">
<h1 class="a-text-center aplus-container-2 a-text-bold"> OUR HEADPHONES </h1>   <div data-comparison-id="comparison-table-container-3" class="a-section a-spacing-none comparison-container comparison-table-container-3"> <div class="aplus-comparison-selector">
<div role="dialog" aria-modal="true" aria-label="">
<span class="a-dropdown-container"><select name="" autocomplete="off" id="comparison-select-comparison-table-container-3" tabindex="0" data-action="a-dropdown-select" class="a-native-dropdown a-button-span12 a-spacing-small a-declarative"><option class="a-prompt" value="">Compare Products By</option>  <option value="0" selected=""> PLAYBACK TIME </option>  <option value="1"> DRIVERS </option>  <option value="2"> ACTIVE NOISE CANCELLATION </option>  <option value="3"> PHYSICAL NOISE ISOLATION </option>  <option value="4"> SOFT PADDED EARCUPS </option>  <option value="5"> ASAP CHARGE </option>  </select><span tabindex="-1" class="a-button a-button-dropdown a-spacing-small a-button-span12" aria-hidden="true" style="min-width: 0.142857%;" id="a-autoid-7"><span class="a-button-inner"><span class="a-button-text a-declarative" data-csa-c-func-deps="aui-da-a-dropdown-button" data-csa-c-type="widget" data-csa-interaction-events="click" data-action="a-dropdown-button" aria-hidden="true" id="a-autoid-7-announce" data-csa-c-id="k1kv5l-3mrnx5-oaspgc-l6y1u9"><span class="a-dropdown-prompt"> PLAYBACK TIME </span></span><i class="a-icon a-icon-dropdown"></i></span></span></span> </div>
</div>
<div class="aplus-comparison-grid">
<div class="a-section a-spacing-none comparison-panel"> <div class="a-box a-box-normal a-color-base-background content-container"><div class="a-box-inner a-padding-base">  <a class="a-link-normal a-text-normal" title="ROCKERZ 550" href="/dp/B08R7M1JM5?ref=emc_p_m_5_mob_i_atc">                             <img alt="ROCKERZ 550" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/24484e34-7cde-4855-a5f3-9aa3d35a5d07.__CR0,0,200,225_PT0_SX200_V1___.png">   <p class="a-spacing-mini product-name a-text-bold"> ROCKERZ 550 </p> </a>  <div class="description">
<span class="product-attr product-attr-0 aplus-inline ">
20 HOURS    </span>
<span class="product-attr product-attr-1 aplus-inline aplus-hide">
50MM    </span>
<span class="product-attr product-attr-2 aplus-inline aplus-hide">
✘      </span>
<span class="product-attr product-attr-3 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-4 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-5 aplus-inline aplus-hide">
✘      </span>
</div>
</div></div>      <span class="a-button a-button-base add-to-cart" id="a-autoid-8"><span class="a-button-inner"><a href="/dp/B08R7M1JM5?ref=emc_p_m_5_mob_i_atc" class="a-button-text" id="a-autoid-8-announce"> See Details </a></span></span>                        <style>
.aplus-v2 .aplus-review-right-padding {
padding-right: 0.1rem;
}
</style>
<div class="">
<div class="a-size-base">
<i class="a-icon a-icon-star-small a-star-small-4 a-spacing-none"><span class="a-icon-alt">4.1 out of 5 stars</span></i> </div>
<div class="a-size-small">63,458</div>
</div>   </div><div class="a-section a-spacing-none comparison-panel"> <div class="a-box a-box-normal a-color-base-background content-container in-active"><div class="a-box-inner a-padding-base">  <a class="a-link-normal a-text-normal" title="NIRVANAA 751ANC" href="/dp/B09MTRDQB5?ref=emc_p_m_5_mob_i_atc">                             <img alt="NIRVANAA 751ANC" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b2ab54ed-484b-4d2b-979f-c61e7d53bec5.__CR0,0,200,225_PT0_SX200_V1___.png">   <p class="a-spacing-mini product-name a-text-bold"> NIRVANAA 751ANC </p> </a>  <div class="description">
<span class="product-attr product-attr-0 aplus-inline ">
65 HOURS    </span>
<span class="product-attr product-attr-1 aplus-inline aplus-hide">
40MM    </span>
<span class="product-attr product-attr-2 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-3 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-4 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-5 aplus-inline aplus-hide">
✔       </span>
</div>
</div></div>                      <form method="post" action="/cart/add-to-cart/ref=emc_p_m_5_mob_i_atc_c"> <!-- sp:csrf --><input type="hidden" name="anti-csrftoken-a2z" value="hHlhKQeYWJwyAW2uva+5T3dpl3SM30f2F0RcYbQYb0PPAAAAAGalS0pmM2Q3N2IyMy01NWNmLTQwNDQtYTY0Yy00MjNiMGRhNzVmMDA="><!-- sp:end-csrf -->
<input type="hidden" name="items[0.base][asin]" value="B09MTRDQB5"> <input type="hidden" name="items[0.base][offerListingId]" value="iE3FYPscTNk%2BuHOac1vBDMivkJ4kSM2%2BRz40wJjnwAMV5h%2BNno3XUXjCj4GN7%2BE5YNH8nXJTnrGXUj4LZurWvZZG2rfeJEpzKs7LK7lxwm47C9IX7AsAY2OzOCyKnVYn9CO2afGF75WgNLJ9uZ58jbrsw371zy%2F9"> <input type="hidden" name="items[0.base][quantity]" value="1"> <input type="hidden" name="clientName" value="Aplus_BuyableModules_DetailPage"> <div class="add-to-cart">
<span class="a-button a-spacing-small a-button-primary a-button-icon" id="a-autoid-9"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input class="a-button-input" type="submit" aria-labelledby="a-autoid-9-announce"><span class="a-button-text" aria-hidden="true" id="a-autoid-9-announce"> Add to Cart </span></span></span> </div>
</form>                             <style>
.aplus-v2 .aplus-review-right-padding {
padding-right: 0.1rem;
}
</style>
<div class="">
<div class="a-size-base">
<i class="a-icon a-icon-star-small a-star-small-4 a-spacing-none"><span class="a-icon-alt">3.9 out of 5 stars</span></i> </div>
<div class="a-size-small">4,085</div>
</div>   <div>     <span class="a-price" data-a-size="medium_plus" data-a-color="base"><span class="a-offscreen">₹3,498.00</span><span aria-hidden="true"><span class="a-price-symbol">₹</span><span class="a-price-whole">3,498<span class="a-price-decimal">.</span></span><span class="a-price-fraction">00</span></span></span> </div>
</div><div class="a-section a-spacing-none comparison-panel"> <div class="a-box a-box-normal a-color-base-background content-container in-active"><div class="a-box-inner a-padding-base">  <a class="a-link-normal a-text-normal" title="ROCKERZ 450" href="/dp/B07PR1CL3S?ref=emc_p_m_5_mob_i_atc">                             <img alt="ROCKERZ 450" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f6f80b2a-0d62-46d3-9e9e-8908c746d393.__CR0,0,200,225_PT0_SX200_V1___.png">   <p class="a-spacing-mini product-name a-text-bold"> ROCKERZ 450 </p> </a>  <div class="description">
<span class="product-attr product-attr-0 aplus-inline ">
15 HOURS    </span>
<span class="product-attr product-attr-1 aplus-inline aplus-hide">
40MM    </span>
<span class="product-attr product-attr-2 aplus-inline aplus-hide">
✘      </span>
<span class="product-attr product-attr-3 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-4 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-5 aplus-inline aplus-hide">
✘      </span>
</div>
</div></div>                      <form method="post" action="/cart/add-to-cart/ref=emc_p_m_5_mob_i_atc_c"> <!-- sp:csrf --><input type="hidden" name="anti-csrftoken-a2z" value="hHlhKQeYWJwyAW2uva+5T3dpl3SM30f2F0RcYbQYb0PPAAAAAGalS0pmM2Q3N2IyMy01NWNmLTQwNDQtYTY0Yy00MjNiMGRhNzVmMDA="><!-- sp:end-csrf -->
<input type="hidden" name="items[0.base][asin]" value="B07PR1CL3S"> <input type="hidden" name="items[0.base][offerListingId]" value="MfwZdXx1dUaas39Z8lC8V7nZq8AsE7OrhBun0TP%2BRdZ2Tv7h4%2BElBGHxUZhbNQpLG%2BRWhLHlNKBZg7cC%2BGdTl%2FUCBIYiosJYYWkBCLrhecbHXyKJyLj9S0snHhTR8L1nuI6ftinbl0xi61KaC216E1%2BRPrWYoqiJ"> <input type="hidden" name="items[0.base][quantity]" value="1"> <input type="hidden" name="clientName" value="Aplus_BuyableModules_DetailPage"> <div class="add-to-cart">
<span class="a-button a-spacing-small a-button-primary a-button-icon" id="a-autoid-10"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input class="a-button-input" type="submit" aria-labelledby="a-autoid-10-announce"><span class="a-button-text" aria-hidden="true" id="a-autoid-10-announce"> Add to Cart </span></span></span> </div>
</form>                             <style>
.aplus-v2 .aplus-review-right-padding {
padding-right: 0.1rem;
}
</style>
<div class="">
<div class="a-size-base">
<i class="a-icon a-icon-star-small a-star-small-4 a-spacing-none"><span class="a-icon-alt">4.1 out of 5 stars</span></i> </div>
<div class="a-size-small">112,481</div>
</div>   <div>     <span class="a-price" data-a-size="medium_plus" data-a-color="base"><span class="a-offscreen">₹1,598.00</span><span aria-hidden="true"><span class="a-price-symbol">₹</span><span class="a-price-whole">1,598<span class="a-price-decimal">.</span></span><span class="a-price-fraction">00</span></span></span> </div>
</div><div class="a-section a-spacing-none comparison-panel"> <div class="a-box a-box-normal a-color-base-background content-container in-active"><div class="a-box-inner a-padding-base">  <a class="a-link-normal a-text-normal" title="ROCKERZ 400" href="/dp/B01J82IYLW?ref=emc_p_m_5_mob_i_atc">                             <img alt="ROCKERZ 400" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9ce156b3-30c2-4ab3-9403-d4aaeb4b3793.__CR0,0,200,225_PT0_SX200_V1___.png">   <p class="a-spacing-mini product-name a-text-bold"> ROCKERZ 400 </p> </a>  <div class="description">
<span class="product-attr product-attr-0 aplus-inline ">
8 HOURS    </span>
<span class="product-attr product-attr-1 aplus-inline aplus-hide">
40MM    </span>
<span class="product-attr product-attr-2 aplus-inline aplus-hide">
✘      </span>
<span class="product-attr product-attr-3 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-4 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-5 aplus-inline aplus-hide">
✘      </span>
</div>
</div></div>      <span class="a-button a-button-base add-to-cart" id="a-autoid-11"><span class="a-button-inner"><a href="/dp/B01J82IYLW?ref=emc_p_m_5_mob_i_atc" class="a-button-text" id="a-autoid-11-announce"> See Details </a></span></span>                        <style>
.aplus-v2 .aplus-review-right-padding {
padding-right: 0.1rem;
}
</style>
<div class="">
<div class="a-size-base">
<i class="a-icon a-icon-star-small a-star-small-4 a-spacing-none"><span class="a-icon-alt">4.1 out of 5 stars</span></i> </div>
<div class="a-size-small">102,399</div>
</div>   </div><div class="a-section a-spacing-none comparison-panel"> <div class="a-box a-box-normal a-color-base-background content-container in-active"><div class="a-box-inner a-padding-base">  <a class="a-link-normal a-text-normal" title="ROCKERZ 370" href="/dp/B0856HNMR7?ref=emc_p_m_5_mob_i_atc">                             <img alt="ROCKERZ 370" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1a0be149-01d1-4fe5-8455-136fe529aba8.__CR0,0,200,225_PT0_SX200_V1___.png">   <p class="a-spacing-mini product-name a-text-bold"> ROCKERZ 370 </p> </a>  <div class="description">
<span class="product-attr product-attr-0 aplus-inline ">
12 HOURS    </span>
<span class="product-attr product-attr-1 aplus-inline aplus-hide">
40MM    </span>
<span class="product-attr product-attr-2 aplus-inline aplus-hide">
✘      </span>
<span class="product-attr product-attr-3 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-4 aplus-inline aplus-hide">
✔       </span>
<span class="product-attr product-attr-5 aplus-inline aplus-hide">
✘      </span>
</div>
</div></div>      <span class="a-button a-button-base add-to-cart" id="a-autoid-12"><span class="a-button-inner"><a href="/dp/B0856HNMR7?ref=emc_p_m_5_mob_i_atc" class="a-button-text" id="a-autoid-12-announce"> See Details </a></span></span>                        <style>
.aplus-v2 .aplus-review-right-padding {
padding-right: 0.1rem;
}
</style>
<div class="">
<div class="a-size-base">
<i class="a-icon a-icon-star-small a-star-small-4 a-spacing-none"><span class="a-icon-alt">4.0 out of 5 stars</span></i> </div>
<div class="a-size-small">38,847</div>
</div>   </div> </div>
</div> </div>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-5-comparison-table-scroller-mobile').execute(function(init){init();})
}));</script>     </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a52e3f108d28052e6948fd"
    },
    "Title": "ZEBRONICS Duke 60hrs Playtime Bluetooth Wireless Over Ear Headphone with Mic (Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/61CTGoZ5woL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61sligQRuhL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/81nAZE0u7-L._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/81FLoOjFmcL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/81oPgtZQnuL._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="ecghek-fodj4h-s853xg-w0viak" data-cel-widget="m-aplus">
<style type="text/css">
/**
* Premium-module 12: Nav - Carousel
*/
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-container {
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-image-carousel-container {
/* Match the aspect ratio of the mobile image uploaded via the editor (600px x 450px) */
padding-top: calc(450 / 600 * 100%); /* 75% */
height: 0;
}
/* Override AUI styles. It poorly attempts to measure the slide heights before waiting until images load. */
.aplus-v2.mobile .premium-aplus-module-12 .a-carousel-viewport {
position: absolute;
width: 100%;
height: 100% !important;
top: 0;
left: 0;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-card-image img {
width: 100%;
height: auto;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-card {
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-card-details {
padding-bottom: 10px;
}
/* nav */
.aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn {
display: block;
margin: 10px auto;
cursor: pointer;
border-radius: 30px;
border: 1px solid #808080;
line-height: 2.5em;
width: 230px;
background-color: #fff;
color: #000;
white-space: nowrap;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn .aplus-carousel-label {
font-weight: bold;
padding-left: initial;
padding-right: 10px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-actions {
text-align: inherit;
}
html[dir="rtl"] .aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn .aplus-carousel-label {
padding-right: 0px;
padding-left: 10px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-icon {
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%,-50%);
-moz-transform: translate(-50%,-50%);
-o-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-slider-circles {
text-align: center;
padding-bottom: 10px;
position: absolute;
bottom: 20px;
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-slider-circles .slider-circle {
height: 10px;
width: 10px;
display: inline-block;
border-radius: 10px;
background-color: #4d4d4d;
margin-left: 5px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-slider-circles .slider-circle:first-of-type {
margin-left: 0;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-pagination-wrapper {
padding-top: 10px;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn.aplus-active {
background-color: #000;
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-text {
text-align: inherit;
}
.aplus-v2.mobile .premium-aplus-module-12 .aplus-carousel-text.aplus-hidden {
display: none;
}
/**
* Right nav styles
*/
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail {
padding: 10px;
background-color: #262626;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail h1,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail h5,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ol,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ul,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-card-detail ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-headline-top.regimen {
position: absolute;
top: 0;
left: 0;
width: 100%;
background-color: #000;
opacity: 0.5;
text-align: center;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-headline-top.regimen .aplus-headline {
color: #fff;
line-height: 12px;
font-size: 8px;
padding-top: 2px;
padding-bottom: 2px;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-goto-btn {
text-align: inherit;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-carousel-actions .aplus-carousel-index {
display: inline-block;
font-weight: bold;
width: 32px;
line-height: 26px;
color: #000;
text-align: center;
}
.aplus-v2.mobile .premium-aplus-module-12.right-nav .aplus-carousel-actions .aplus-active .aplus-carousel-index {
color: #fff;
}
/**
* Top nav styles
*/
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-carousel-index {
display: none;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-carousel-actions {
text-align: center;
padding: 0;
display: flex;
flex-flow: nowrap;
align-items: center;
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-horizontal-scroll-container {
display: block;
margin: 24px 0px 0px;
width: 100%;
overflow-x: scroll;
-webkit-overflow-scrolling: touch;
background-color: rgba(0, 0, 0, 0.8);
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn {
color: #fff;
padding-left: 10px;
margin: 10px;
background-color: transparent;
border: none;
padding: 6px 0px 10px;
line-height: inherit;
width: 30vw;
flex: 0 0 30vw;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn.aplus-active {
background-color: transparent;
border: none;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn .aplus-carousel-label {
display: inline-block;
white-space: pre-line;
padding: 0px;
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn.aplus-active .aplus-carousel-label:after {
content: '';
display: block;
position: absolute;
width: 100%;
height: 3px;
bottom: -0.5em;
left: 0;
background-color: currentColor;
}
/* Mobile landscape */
@media screen and (min-width: 480px) and (orientation: landscape) {
.aplus-v2.mobile .premium-aplus-module-12--top-nav .aplus-goto-btn {
width: 18vw;
flex: 0 0 18vw;
}
}
</style>
<style type="text/css">
/**
* Premium-module 8: Mobile hero video
*/
.aplus-v2.mobile .premium-aplus-module-8 .premium-aplus-module-8-video {
position: relative;
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-8 .video-placeholder {
padding-bottom: 40.984%; /* Video or image required size 1464 : 600 = 40.9836 */
}
.aplus-v2.mobile .premium-aplus-module-8 .video-container {
position: absolute;
top: 0;
width: 100%;
height: 100%;
}
/*Override the default VSE video player size*/
.aplus-v2.mobile .premium-aplus-module-8 .video-js.vjs-fluid {
padding-top: 0;
}
</style>      <style type="text/css">
.aplus-v2.mobile .premium-aplus-module-2 .background-image {
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color {
background-color: #000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h1,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h5,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-module-2-topic {
padding-bottom: 10px;
}
.aplus-v2.mobile .premium-aplus-module-2 div[data-color='1'] {
color: #ffffff !important;
background-color: #000000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-heading {
padding-bottom: 20px;
}
</style>
<style type="text/css">
.aplus-v2.mobile .premium-aplus-module-4 .column-image {
text-align: center;
}
.aplus-v2.mobile .premium-aplus-module-4 .column-description {
padding-top: 10px;
}
</style>      <style type="text/css">
/**
* Premium module global mobile styles
*/
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: Arial, sans-serif;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2 .premium-aplus .aplus-tech-spec-table { word-break: initial; }
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: inherit;
}
/* type */
.aplus-v2 .premium-aplus .aplus-h1 { font-size: 22px; line-height: 1.2em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h2 { font-size: 18px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h3 { font-size: 15px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-p1 { font-size: 15px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p2 { font-size: 13px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p3 { font-size: 12px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-accent1 { font-size: 13px; line-height: 1.4em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-accent2 { font-size: 12px; line-height: 1.4em; font-weight: 500; }
/* spacing */
.aplus-v2 .aplus-container-1 { padding: 10px; }
.aplus-v2 .aplus-container-1-2 { padding: 10px 20px; }
.aplus-v2 .aplus-container-2 { padding: 20px; }
.aplus-v2 .aplus-container-3 { padding: 20px 0; }
/* AUI will add -1.4rem margin to carousels */
.a-container .aplus-v2 .premium-aplus .a-carousel-container {
margin-left: 0;
margin-right: 0;
}
/**
* Padding and margin in styles should be 10, 15, 20, or 30 px. Considering mini 10, small 15, medium 20, large 30.
*/
</style>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.now('premium-module-12-nav-carousel').execute(function(init) {
if (init) {
return;
}
P.register('premium-module-12-nav-carousel', function(){
return function() {
P.when('A', 'jQuery', 'a-carousel-framework', 'ready').execute(function (A, $, framework) {
function initiateCarousel(module) {
var MODULE_ID = $(module).data('module-id');
/**
* Carousel button element classname
* @const
*/
var GOTO_BTN_CLASS_NAME = "aplus-goto-btn-" + MODULE_ID;
/**
* Carousel button element active classname
* @const
*/
var GOTO_BTN_ACTIVE_CLASS_NAME = "aplus-active";
/**
* AUI name for aui carousel
* @const
*/
var CAROUSEL_NAME = "premium-aplus-12-carousel-" + MODULE_ID;
/**
* Module class name
* @const
*/
var MODULE_CLASS_NAME = ".aplus-v2 .premium-aplus-module-12";
/**
* Carousel text container class name
* @const
*/
var TEXT_CONTAINER_CLASS_NAME = MODULE_CLASS_NAME + " .aplus-carousel-text-container-" + MODULE_ID;
/**
* Carousel text hidden class name
* @const
*/
var TEXT_CONTAINER_HIDDEN = "aplus-hidden";
/**
* Carousel horizontal scroll container class name
* @const
*/
var HORIZONTAL_SCROLL_CONTAINER_CLASS_NAME = MODULE_CLASS_NAME + " .aplus-horizontal-scroll-container-" + MODULE_ID;
function showCarouselText(oldIndex, newIndex) {
var oldClass = TEXT_CONTAINER_CLASS_NAME + "-" + oldIndex;
var newClass= TEXT_CONTAINER_CLASS_NAME + "-" + newIndex;
$(oldClass).addClass(TEXT_CONTAINER_HIDDEN);
$(newClass).removeClass(TEXT_CONTAINER_HIDDEN);
}
function scrollToCarouselButton(scrollLeft) {
if ($(HORIZONTAL_SCROLL_CONTAINER_CLASS_NAME).length) {
$(HORIZONTAL_SCROLL_CONTAINER_CLASS_NAME).animate({scrollLeft}, 200);
}
}
/**
* Creates a CarouselButton class for provided carousel instance
* @param {object} carousel - AUI Carousel instance
* @returns {Class} - CarouselButton Class
*/
function CarouselButtonTemplate(carousel) {
/**
* Button for controlling the active slide
* @constructor
* @param {number} index - slide index
* @param {DOMElement} [elem] - optional DOM element to use as this objects DOM representation
*/
function CarouselButton(index, elem) {
var self = this;
this.index = index;
this.carousel = carousel;
/* create the button element */
this.elem = this.getElem(elem);
this.$elem = $(this.elem);  /* store jquery version */
this.elem.addEventListener('click', self.handleClick.bind(self));
/* add this object to the object manager */
CarouselButton.objects.byId[index] = this;
CarouselButton.objects.all.push(this);
}
/**
* Describe behavior for click events on this.elem
* @memberOf CarouselButton
*/
CarouselButton.prototype.handleClick = function(e) {
e.preventDefault();
this.carousel.gotoPage(this.index);
};
/**
* Enter active state
* @memberOf CarouselButton
*/
CarouselButton.prototype.activate = function() {
this.$elem.addClass(GOTO_BTN_ACTIVE_CLASS_NAME).attr('aria-selected', 'true');
};
/**
* Enter inactive state
* @memberOf CarouselButton
*/
CarouselButton.prototype.deactivate = function() {
this.$elem.removeClass(GOTO_BTN_ACTIVE_CLASS_NAME).attr('aria-selected', 'false');
};
/**
* Returns an existing or creates a new bound element for this object
* @memberOf CarouselButton
* @param {DOMElement} [elem] - optionally provide an existing element in the DOM to use
* @returns {DOMElement} - this objects DOM representation
*/
CarouselButton.prototype.getElem = function(elem) {
if (this.elem) return this.elem;
if (elem) return elem;
var createdElem = document.createElement('span');
createdElem.className = GOTO_BTN_CLASS_NAME;
return createdElem;
};
/** @const Object manager */
CarouselButton.objects = {
byId: {},
all: [],
};
return CarouselButton;
}
framework.onInit(CAROUSEL_NAME, function(carousel) {
/** @const {Class} */
var CarouselButton = CarouselButtonTemplate(carousel);
/* create carousel controls */
var $carouselBtns = $(safeClassSelector(GOTO_BTN_CLASS_NAME));
var btns = $carouselBtns.map(function(i, btnElem) {
return new CarouselButton(i + 1, btnElem);
});
/* activate first one */
CarouselButton.objects.byId[1].activate();
/* Listen to slide changes */
A.on("a:carousel:" + CAROUSEL_NAME + ":change:pageNumber", function (data) {
var newCarouselButton = CarouselButton.objects.byId[data.newValue];
var marginLeft = parseInt(getComputedStyle(newCarouselButton.elem).getPropertyValue('margin-left'));
var positionLeft = newCarouselButton.elem.offsetLeft - marginLeft;
newCarouselButton.activate();
CarouselButton.objects.byId[data.oldValue].deactivate();
scrollToCarouselButton(positionLeft);
showCarouselText(data.oldValue, data.newValue);
});
});
/**
* @returns {string} - css classname prefixed with module selector
*/
function safeClassSelector(className) {
return '.' + MODULE_CLASS_NAME + ' .' + className;
}
}
$('.aplus-v2 .premium-aplus-module-12 .aplus-carousel-container').each(function (index, module) {
initiateCarousel(module);
});
framework.createAll();
framework.initializeAll();
});
}
})
});
}));</script>                    <div class="celwidget aplus-module premium-module-8-hero-video aplus-premium" cel_widget_id="aplus-m-premium-module-8-hero-video" data-csa-c-id="3qpr60-21xm2a-zd2j8q-5fyh95" data-cel-widget="aplus-m-premium-module-8-hero-video">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-8">                                  <div class="a-section a-spacing-none premium-aplus-module-8-video">  <div class="a-section a-spacing-none video-placeholder"></div>  <div class="a-section a-spacing-none video-container">                                     <div id="9c7ba46b-4a26-4a1a-a704-4d21cb7977ce" style="width:100%; height:100%;">
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01cUckQOW-L.css?AUIClients/VSEPlayer"><link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/51NP-5Gx4JL._RC|11iRfIvA-aL.css_.css?AUIClients/Brila"><script type="a-state" data-a-state="{&quot;key&quot;:&quot;aplus-12651-player-ps&quot;}">{"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"clientPrefix":"aplus-12651","closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"000-2765359-1917244","refMarkers":"aplus-12651_ref","placementContext":"AplusWidget","marketplaceId":"A1F83G8C2ARO7P","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"F949F82E83C04ACCAF25","customerId":"0","sessionType":1},"mimeType":"video/mp4","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.8","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","videoAsin":"hero-video","producerId":"vsemetrics_playercards","refMarkers":"aplus-12651_ref","placementContext":"AplusWidget","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.7"},"videoHeight":0,"videoWidth":0,"videoUrl":"https://m.media-amazon.com/images/S/aplus-media/vc/3259e8f0-2895-4ab7-9f34-ac313cb53532.mp4","metricsEmissionMethod":"nexus","imageUrl":"https://m.media-amazon.com/images/S/aplus-media/vc/73311644-45e4-4bab-bfca-90b043ed469f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg","awaConfig":{"useUpNextComponent":false,"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"initialVideo":"hero-video","shouldPreload":true,"enableClickBasedAttribution":false,"isChromelessPlayer":false,"closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"showPlayerPlayButton":false,"isVideoImmersivePlayer":false,"metricsEmissionMethod":"nexus","skipInitialFocus":false,"playerSkin":"none","disabledViewIds":["replayHint"],"includeEarnsComissionDisclosure":false,"customerId":"0","containerId":"aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab","requestMetadata":{"marketplaceId":"A1F83G8C2ARO7P","clientId":"VSE-IN","method":"AplusWidget","requestId":"F949F82E83C04ACCAF25","pageAsin":"","sessionId":"000-2765359-1917244"},"shouldLoop":false,"shouldDisableControls":false,"alwaysSetInitialVideo":true,"showPlayerCloseButton":false,"clientPrefix":"","useAutoplayFallback":false,"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"000-2765359-1917244","refMarkers":"aplus-12651_ref","placementContext":"AplusWidget","marketplaceId":"A1F83G8C2ARO7P","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"F949F82E83C04ACCAF25","customerId":"0","sessionType":1},"ospLinkCode":"","showPosterImage":true,"languageCode":"en","version":"","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.8","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","videoAsin":"hero-video","producerId":"vsemetrics_playercards","refMarkers":"aplus-12651_ref","placementContext":"AplusWidget","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.7"},"shouldStartMuted":false,"airyVersion":"VideoJS","languagePreferenceStrings":{},"enableInactiveFocus":true,"isReactFactory":false,"enableDelphiAttribution":false,"includeReportWidget":false,"shouldAutoplay":false},"needPlayerFactory":false,"isMobile":false}</script><div class="vse-airy-container vse-player-container none "><div id="aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab" class="vse-player" data-element-id="vse-player-container"><div id="aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container" style="width:100%; height:100%"><div disablepictureinpicture="true" playsinline="true" class="video-js brila-video-js vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v7 vjs-user-active vjs-fluid aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element-dimensions" id="aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element" tabindex="-1" lang="en" style="width:100%; height:100%;"><video id="aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element_html5_api" class="vjs-tech" playsinline="playsinline" disablepictureinpicture="true" tabindex="-1" preload="auto" poster="https://m.media-amazon.com/images/S/aplus-media/vc/73311644-45e4-4bab-bfca-90b043ed469f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" src="https://m.media-amazon.com/images/S/aplus-media/vc/3259e8f0-2895-4ab7-9f34-ac313cb53532.mp4"></video><div class="vjs-poster" tabindex="-1" aria-disabled="false" style="background-image: url(&quot;https://m.media-amazon.com/images/S/aplus-media/vc/73311644-45e4-4bab-bfca-90b043ed469f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg&quot;);"></div><div class="vjs-text-track-display" aria-live="off" aria-atomic="true"><div style="position: absolute; inset: 0px; margin: 1.5%;"></div></div><div class="vjs-loading-spinner" dir="ltr"><span class="vjs-control-text">Video Player is loading.</span></div><button class="vjs-big-play-button" type="button" title="Play Video" aria-disabled="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Play Video</span></button><div class="vjs-control-bar" dir="ltr"><button class="vjs-play-control vjs-control vjs-button" type="button" title="Play" aria-disabled="false" aria-label="Play"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Play</span></button><div class="vjs-volume-panel vjs-control vjs-volume-panel-horizontal"><button class="vjs-mute-control vjs-control vjs-button vjs-vol-3" type="button" title="Mute" aria-disabled="false" aria-label="Mute"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Mute</span></button><div class="vjs-volume-control vjs-control vjs-volume-horizontal"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Volume Level" aria-live="polite" title="Volume Slider" aria-valuetext="100%"><div class="vjs-volume-level"><span class="vjs-control-text"></span></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Current Time&nbsp;</span><span class="vjs-current-time-display" aria-live="off" role="presentation">0:00</span></div><div class="vjs-time-control vjs-time-divider" aria-hidden="true"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Duration&nbsp;</span><span class="vjs-duration-display" aria-live="off" role="presentation">0:59</span></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="100" aria-label="Progress Bar" aria-valuetext="0:00 of 0:59"><div class="vjs-load-progress" style="width: 25.07%;"><span class="vjs-control-text"><span>Loaded</span>: <span class="vjs-control-text-loaded-percentage">25.07%</span></span><div data-start="0" data-end="15.024" style="left: 0%; width: 100%;"></div></div><div class="vjs-play-progress vjs-slider-bar" aria-hidden="true" style="width: 0%;"></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type&nbsp;</span>LIVE</div></div><button class="vjs-seek-to-live-control vjs-control" type="button" title="Seek to live, currently behind live" aria-disabled="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Seek to live, currently behind live</span><span class="vjs-seek-to-live-text" aria-hidden="true">LIVE</span></button><div class="vjs-remaining-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Remaining Time&nbsp;</span><span aria-hidden="true">-</span><span class="vjs-remaining-time-display" aria-live="off" role="presentation">0:59</span></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><div class="vjs-playback-rate-value" id="vjs-playback-rate-value-label-aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element_component_816">1x</div><button class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Playback Rate" aria-haspopup="true" aria-expanded="false" aria-describedby="vjs-playback-rate-value-label-aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element_component_816"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Playback Rate</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Chapters" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Chapters</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Descriptions" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Descriptions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">descriptions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Captions" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Captions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">captions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Audio Track" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Audio Track</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><button class="vjs-fullscreen-control vjs-control vjs-button" type="button" title="Fullscreen" aria-disabled="false" aria-label="Fullscreen"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element_component_1017_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-control-text" id="aplus-12651-player-66ab862c-0c0a-4545-8ffe-d2f751ddd4ab-container-element_component_1017_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div></div></div></div></div><script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/51v6HuvLjJL.js?AUIClients/VSEPlayer');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21L2L4uKEUL._RC|01x4giTy+uL.js,01r9LpT6pbL.js,41DFDIBs9mL.js,11QfrzttlqL.js,91qahXPBdEL.js,01ELLYeIOkL.js_.js?AUIClients/Brila');
</script>
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("vse-ns-initVSEPlayerOnLoad"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('VSEPlayer').execute(function(vsePlayer){vsePlayer.initPlayer('aplus-12651-player-ps');});
//Please use below event to register FeedbackForm
P.when('A', 'VSEComponentAssets').execute('vse-ns-player-initialization', function(A, asset) {
A.trigger('vse:ns:player:aplus-12651:init', 'aplus-12651-player-ps');
});
}));</script></div>
</div> </div> <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-2-fullbackground-text aplus-premium" cel_widget_id="aplus-m-premium-module-2-fullbackground-text" data-csa-c-id="lvdayj-k3zxlj-6fsqfw-h21f7f" data-cel-widget="aplus-m-premium-module-2-fullbackground-text">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-2">                                  <div class="a-section a-spacing-none">                             <img alt="img 2" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/768c2cbb-6276-45b1-a388-bf858221aa47.__CR0,0,600,450_PT0_SX600_V1___.jpg" class="background-image" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/768c2cbb-6276-45b1-a388-bf858221aa47.__CR0,0,600,450_PT0_SX600_V1___.jpg"><noscript><img alt="img 2" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/768c2cbb-6276-45b1-a388-bf858221aa47.__CR0,0,600,450_PT0_SX600_V1___.jpg"/></noscript>   </div>  <div class="a-section a-spacing-none aplus-container-2 secondary-color"> <div class="a-section a-spacing-none aplus-module-2-topic">                               <span class="aplus-accent1 a-text-bold">   Longer playtime  </span>  </div>                                                                     <p class="aplus-p1"> Enjoy your favourite tunes for up to 60* hours with this headphone's long-lasting battery. </p>    </div>  <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-2-fullbackground-text aplus-premium" cel_widget_id="aplus-m-premium-module-2-fullbackground-text" data-csa-c-id="nra8ld-ge3fiy-5bb5dn-98o92m" data-cel-widget="aplus-m-premium-module-2-fullbackground-text">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-2">                                  <div class="a-section a-spacing-none">                             <img alt="img 3" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1cadf62d-3a2d-4c0a-a4c5-466b7c79277a.__CR332,0,800,600_PT0_SX600_V1___.jpg" class="background-image" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1cadf62d-3a2d-4c0a-a4c5-466b7c79277a.__CR332,0,800,600_PT0_SX600_V1___.jpg"><noscript><img alt="img 3" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1cadf62d-3a2d-4c0a-a4c5-466b7c79277a.__CR332,0,800,600_PT0_SX600_V1___.jpg"/></noscript>   </div>  <div class="a-section a-spacing-none aplus-container-2 secondary-color"> <div class="a-section a-spacing-none aplus-module-2-topic">                               <span class="aplus-accent1 a-text-bold"> Immersive gaming  </span>  </div>                                                                     <p class="aplus-p1"> For an immersive gaming experience, the ZEB-Duke headphones feature a dedicated gaming mode. </p>    </div>  <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-12-nav-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-12-nav-carousel" data-csa-c-id="naqqm6-c4apbm-hz8hvy-yfqbla" data-cel-widget="aplus-m-premium-module-12-nav-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-12 premium-aplus-module-12--top-nav">  <div class="aplus-horizontal-scroll-container aplus-horizontal-scroll-container-3">
<div id="aplus-carousel-actions-3" aria-label="tablist section" class="a-section aplus-carousel-actions aplus-container-2" role="tablist">      <span aria-selected="true" class="aplus-goto-btn aplus-goto-btn-3 aplus-active" role="tab"> <span class="aplus-carousel-index">1</span> <span class="aplus-accent2 aplus-carousel-label">Powerful drivers</span> </span>       <span aria-selected="false" class="aplus-goto-btn aplus-goto-btn-3" role="tab"> <span class="aplus-carousel-index">2</span> <span class="aplus-accent2 aplus-carousel-label">Comfortable listening </span> </span>                  </div> </div>
<div data-module-id="3" class="a-section a-spacing-none aplus-carousel-container">               <div class="a-section a-spacing-none aplus-carousel-text aplus-container-2 aplus-carousel-text-container-3-1"> <div class="a-section a-spacing-none a-text-center aplus-card-detail"> <div class="a-section a-spacing-none">                                                                                                        <p class="description aplus-p2"> Immerse yourself in a captivating experience from the deep bass produced by the 40mm drivers. </p>    </div> </div> </div>               <div class="a-section a-spacing-none aplus-carousel-text aplus-container-2 aplus-carousel-text-container-3-2 aplus-hidden"> <div class="a-section a-spacing-none a-text-center aplus-card-detail"> <div class="a-section a-spacing-none">                                                                                                        <p class="description aplus-p2"> For your comfort, the headphone features ergonomically designed soft ear cushions. </p>    </div> </div> </div>                <div id="premium-aplus-12-carousel-3-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-12-carousel-3&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-image-carousel-container"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport"><ol class="a-carousel" role="list">      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="img 4a" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/18bf3ade-4723-4e22-8b90-bef73284a464.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>      <li class="a-carousel-card aplus-carousel-card" role="listitem"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="img 4b" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3927e40a-337c-4f51-aba7-945c2c4ff353.__CR0,0,600,450_PT0_SX600_V1___.jpg">   </div> </li>               </ol></div> <span class="a-end aok-hidden"></span></div> </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-12-nav-carousel').execute(function(init){
init();
});
}));</script>    </div>
<div class="celwidget aplus-module premium-module-4-two-column-images aplus-premium" cel_widget_id="aplus-m-premium-module-4-two-column-images" data-csa-c-id="kwooa6-j5bn50-k4pm6n-gmv9uc" data-cel-widget="aplus-m-premium-module-4-two-column-images">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-4">                                  <div class="a-section a-spacing-none premium-aplus-two-column"> <div class="a-section a-spacing-none premium-aplus-column"> <div class="a-section a-spacing-none column-image">                             <img alt="img 5a" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3a63e15-3517-44c4-b322-76145b80073f.__CR0,0,650,350_PT0_SX650_V1___.jpg" class="" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3a63e15-3517-44c4-b322-76145b80073f.__CR0,0,650,350_PT0_SX650_V1___.jpg"><noscript><img alt="img 5a" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3a63e15-3517-44c4-b322-76145b80073f.__CR0,0,650,350_PT0_SX650_V1___.jpg"/></noscript>   </div> <div class="a-section a-spacing-none aplus-container-2">                                   <h1 class="aplus-h3 a-text-bold"> Noise cancellation  </h1>  <div class="a-section a-spacing-none column-description">                                   <p class="aplus-p3"> Direct all the focus to your gaming with the ENC feature in the ZEB-Duke headphones. </p>    </div> </div> </div><div class="a-section a-spacing-none premium-aplus-column"> <div class="a-section a-spacing-none column-image">                             <img alt="img 5b" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f8d7a00-ee5f-453c-8ef2-977ef96c8721.__CR0,0,650,350_PT0_SX650_V1___.jpg"><noscript><img alt="img 5b" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f8d7a00-ee5f-453c-8ef2-977ef96c8721.__CR0,0,650,350_PT0_SX650_V1___.jpg"/></noscript>   </div> <div class="a-section a-spacing-none aplus-container-2">                                   <h1 class="aplus-h3 a-text-bold">  Voice assistant  </h1>  <div class="a-section a-spacing-none column-description">                                   <p class="aplus-p3"> Easily control your content with voice commands using Google Assistant and Siri. </p>    </div> </div> </div> </div> </div>     </div>
<div class="celwidget aplus-module premium-module-4-two-column-images aplus-premium" cel_widget_id="aplus-m-premium-module-4-two-column-images" data-csa-c-id="rc2a77-vjccz3-m7fibd-b8nkz1" data-cel-widget="aplus-m-premium-module-4-two-column-images">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-4">                                  <div class="a-section a-spacing-none premium-aplus-two-column"> <div class="a-section a-spacing-none premium-aplus-column"> <div class="a-section a-spacing-none column-image">                             <img alt="img 6a" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/aa2bfa8d-2085-4e6e-9f0e-3f2d7b09bfa2.__CR0,0,650,350_PT0_SX650_V1___.jpg"><noscript><img alt="img 6a" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/aa2bfa8d-2085-4e6e-9f0e-3f2d7b09bfa2.__CR0,0,650,350_PT0_SX650_V1___.jpg"/></noscript>   </div> <div class="a-section a-spacing-none aplus-container-2">                                   <h1 class="aplus-h3 a-text-bold"> Dual Pairing  </h1>  <div class="a-section a-spacing-none column-description">                                   <p class="aplus-p3"> The headphones' dual-pairing feature allows simultaneous connectivity and smooth device switching. </p>    </div> </div> </div><div class="a-section a-spacing-none premium-aplus-column"> <div class="a-section a-spacing-none column-image">                             <img alt="img 6b" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/81cfe01b-d605-4b68-b173-6ba68e157d85.__CR0,0,650,350_PT0_SX650_V1___.jpg"><noscript><img alt="img 6b" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/81cfe01b-d605-4b68-b173-6ba68e157d85.__CR0,0,650,350_PT0_SX650_V1___.jpg"/></noscript>   </div> <div class="a-section a-spacing-none aplus-container-2">                                   <h1 class="aplus-h3 a-text-bold"> Connectivity  </h1>  <div class="a-section a-spacing-none column-description">                                   <p class="aplus-p3"> Enable a wired connection with the AUX function that comes with the headphones. </p>    </div> </div> </div> </div> </div>     </div>
<div class="celwidget aplus-module premium-module-2-fullbackground-text aplus-premium" cel_widget_id="aplus-m-premium-module-2-fullbackground-text" data-csa-c-id="2fnm5e-y5vsy2-7ljis2-kn4nro" data-cel-widget="aplus-m-premium-module-2-fullbackground-text">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-2">                                  <div class="a-section a-spacing-none">                             <img alt="img 7" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="background-image a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e2a55408-88c9-46d0-9e51-a1306ae59894.__CR0,0,600,450_PT0_SX600_V1___.jpg"><noscript><img alt="img 7" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e2a55408-88c9-46d0-9e51-a1306ae59894.__CR0,0,600,450_PT0_SX600_V1___.jpg"/></noscript>   </div>  <div class="a-section a-spacing-none aplus-container-2 secondary-color"> <div class="a-section a-spacing-none aplus-module-2-topic">                               <span class="aplus-accent1 a-text-bold"> Colorful LED’s  </span>  </div>                                                                     <p class="aplus-p1"> Bask in a cooler outlook while gaming with the vivid LED lights on the headphones. </p>    </div>  <div class="a-section a-text-center">                                  </div> </div>     </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a5319d108d28052e6948fe"
    },
    "Title": "boAt Rockerz 551ANC Hybrid Active Noise Cancellation Over EarHeadphones with Up to 100H Playtime, ASAP Charge, Ambient Sound Mode &Dual EQ Modes, ENx Technology(Sage Green)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "2559",
    "images0": "https://m.media-amazon.com/images/I/61WFLydWqpL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71rkaCdVijL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71dRlTRlDPL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/612QkoZnjYL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61z4ZDg3d0L._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="cjupkx-5zlwjv-5k7om3-n9z3h6" data-cel-widget="m-aplus">
<script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.now('premium-module-13-carousel-mobile').execute(function(init) {
if (init) {
return;
}
P.register('premium-module-13-carousel-mobile', function(){
return function() {
P.when('A', 'jQuery', 'a-carousel-framework', 'ready').execute(function (A, $, framework) {
function initiateCarousel(module) {
var moduleId = $(module).data('module-id');
var containerClass = '.aplus-v2 .premium-aplus-module-13 .aplus-card-description-wrapper-' + moduleId + '-';
var carouselName = 'premium-aplus-13-carousel-' + moduleId;
var controlClass = 'aplus-hidden';
/* If the carousel goes to a new page, make sure the right toggle button is selected */
A.on('a:carousel:'+carouselName+':change:pageNumber', function (data) {
var oldCompareClass = containerClass + data.oldValue;
var newCompareClass = containerClass + data.newValue;
$(oldCompareClass).addClass(controlClass);
$(newCompareClass).removeClass(controlClass);
});
}
$(".aplus-v2 .premium-aplus-module-13 .aplus-carousel-container").each(function(index, module) {
initiateCarousel(module);
});
framework.createAll();
framework.initializeAll();
});
}
});
});
}));</script>       <style type="text/css">
.aplus-v2.mobile .premium-aplus-module-2 .background-image {
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color {
background-color: #000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h1,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color h5,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-2 .aplus-container-2.secondary-color ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-module-2-topic {
padding-bottom: 10px;
}
.aplus-v2.mobile .premium-aplus-module-2 div[data-color='1'] {
color: #ffffff !important;
background-color: #000000;
}
.aplus-v2.mobile .premium-aplus-module-2 .aplus-heading {
padding-bottom: 20px;
}
</style>
<style type="text/css">
/**
* Premium-module 13: Carousel
*/
.aplus-v2.mobile .premium-aplus-module-13 .aplus-carousel-container {
position: relative;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-carousel-element {
position: relative;
width: 100%;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-hidden {
display: none;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-card-description {
width: 100%;
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background {
background-color: #4D4D4D;
text-align: left;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background {
text-align: inherit;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background h1,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background h5,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ol,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ul,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ol .a-list-item,
.aplus-v2.mobile .premium-aplus-module-13 .aplus-text-background ul .a-list-item {
color: #fff;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-pagination-wrapper {
width: 100%;
text-align: center;
padding: 15px 0;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-card-link-button {
text-align: center;
padding-top: 20px;
}
.aplus-v2.mobile .premium-aplus-module-13 .aplus-card-link-button.aplus-text-no-background {
padding-top: 0;
}
</style>
<style type="text/css">
/**
* Premium module global mobile styles
*/
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: Arial, sans-serif;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2 .premium-aplus .aplus-tech-spec-table { word-break: initial; }
.aplus-v2 .premium-aplus,
.aplus-v2 .premium-aplus .aplus-h1,
.aplus-v2 .premium-aplus .aplus-h2,
.aplus-v2 .premium-aplus .aplus-p1,
.aplus-v2 .premium-aplus .aplus-p2,
.aplus-v2 .premium-aplus .aplus-p3,
.aplus-v2 .premium-aplus .aplus-accent1,
.aplus-v2 .premium-aplus .aplus-accent2 {
font-family: inherit;
}
/* type */
.aplus-v2 .premium-aplus .aplus-h1 { font-size: 22px; line-height: 1.2em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h2 { font-size: 18px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-h3 { font-size: 15px; line-height: 1.3em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-p1 { font-size: 15px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p2 { font-size: 13px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-p3 { font-size: 12px; line-height: 1.4em; font-weight: 300; }
.aplus-v2 .premium-aplus .aplus-accent1 { font-size: 13px; line-height: 1.4em; font-weight: 500; }
.aplus-v2 .premium-aplus .aplus-accent2 { font-size: 12px; line-height: 1.4em; font-weight: 500; }
/* spacing */
.aplus-v2 .aplus-container-1 { padding: 10px; }
.aplus-v2 .aplus-container-1-2 { padding: 10px 20px; }
.aplus-v2 .aplus-container-2 { padding: 20px; }
.aplus-v2 .aplus-container-3 { padding: 20px 0; }
/* AUI will add -1.4rem margin to carousels */
.a-container .aplus-v2 .premium-aplus .a-carousel-container {
margin-left: 0;
margin-right: 0;
}
/**
* Padding and margin in styles should be 10, 15, 20, or 30 px. Considering mini 10, small 15, medium 20, large 30.
*/
</style>
<div class="celwidget aplus-module premium-module-2-fullbackground-image aplus-premium" cel_widget_id="aplus-m-premium-module-2-fullbackground-image" data-csa-c-id="cbge1z-vqgtdk-6k7w5v-5w28f3" data-cel-widget="aplus-m-premium-module-2-fullbackground-image">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-2">                                  <div class="a-section a-spacing-none">                             <img alt="boat headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0b19b07-3fb9-47ff-9a24-60126e53fb27.__CR0,0,600,450_PT0_SX600_V1___.png" class="background-image" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0b19b07-3fb9-47ff-9a24-60126e53fb27.__CR0,0,600,450_PT0_SX600_V1___.png"><noscript><img alt="boat headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0b19b07-3fb9-47ff-9a24-60126e53fb27.__CR0,0,600,450_PT0_SX600_V1___.png"/></noscript>   </div>  <div class="a-section a-text-center">                                  </div> </div>     </div>
<div class="celwidget aplus-module premium-module-13-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-13-carousel" data-csa-c-id="xrkh6x-7ox3pv-qeqn47-5e9bjj" data-cel-widget="aplus-m-premium-module-13-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-13">                                  <div data-module-id="1" class="a-section a-spacing-none aplus-carousel-container">                                    <div id="premium-aplus-13-carousel-1-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-13-carousel-1&quot;,&quot;single_page_align&quot;:&quot;center&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-comparison-table-carousel a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel6" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 580px;"><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="boat anc headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a030de8-798d-49a9-aefb-b6268e631f16.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="headphones anc" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ed94d494-0bab-4cb1-b209-424fb1c40b51.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div>    <div class="a-section a-spacing-none aplus-pagination-wrapper">      <style type="text/css">
.aplus-mantle.aplus-module .aplus-pagination-dots {
margin: 0;
}
.aplus-mantle.aplus-module .aplus-pagination-dot {
display: inline-block;
list-style: none;
}
.aplus-mantle.aplus-module .aplus-carousel-nav {
text-align:center;
}
.aplus-mantle.aplus-module .carousel-slider-circle {
display: inline-block;
cursor: pointer;
height: 15px;
width: 15px;
border: 1px solid #000;
border-radius: 20px;
background-color: #fff;
margin-left: 5px;
}
.aplus-mantle.aplus-module .carousel-slider-circle.aplus-carousel-active {
background-color: #FFA500;
}
</style>
<script>
P.now("premium-aplus-13-carousel-1").execute(function(init) {
if (init) {
return;
}
P.register("premium-aplus-13-carousel-1", function(){
return function() {
P.when("A", "jQuery", "a-carousel-framework", "ready").execute(function (A, $, framework) {
var moduleId = "1";
var carouselName = "premium-aplus-13-carousel-1";
var paginationAction = "aplus-pagination-dot-action-" + moduleId;
var paginationGroup = "#aplus-pagination-group-" + moduleId + "-" + carouselName;
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
/* If the carousel goes to a new page */
A.on("a:carousel:"+carouselName+":change:pageNumber", function (data) {
A.$(paginationGroup+" .carousel-slider-circle").removeClass("aplus-carousel-active").attr('aria-selected', 'false')
.eq(data.newValue - 1).addClass("aplus-carousel-active").attr('aria-selected', 'true');
});
framework.onInit(carouselName, function (carousel) {
A.declarative(paginationAction, 'click keydown', function(event){
var isClick = event.type === 'click';
var isKeydown = event.type === 'keydown';
var isEnter = isKeydown && event.$event.keyCode === ENTER_KEY_CODE;
var isEsc = isKeydown  && event.$event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter) {
var data = event.data;
carousel.gotoPage(data.page);
} else if (isEsc) {
// force remove focus
event.$target.blur()
}
});
});
});
}
});
});
</script>
<div class="aplus-mantle aplus-module">
<div class="aplus-carousel-nav">
<ul id="aplus-pagination-group-1-premium-aplus-13-carousel-1" class="aplus-pagination-dots" aria-label="tablist-section" role="tablist">
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block aplus-carousel-active" aria-selected="true" data-action="aplus-pagination-dot-action-1" data-aplus-pagination-dot-action-1="{&quot;page&quot;: 1}" aria-label="slide-1" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-1" data-aplus-pagination-dot-action-1="{&quot;page&quot;: 2}" aria-label="slide-2" tabindex="0" role="tab"></span>
</li>
</ul>
</div>
</div>
</div>                                                               <div class="a-section a-text-center">                                  </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-13-carousel-mobile').execute(function(init){
init();
});
P.when("premium-aplus-13-carousel-1").execute(function(init){init();});
}));</script>     </div>
<div class="celwidget aplus-module premium-module-13-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-13-carousel" data-csa-c-id="6waxco-yazfvl-ye252q-e32vs4" data-cel-widget="aplus-m-premium-module-13-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-13">                                  <div data-module-id="2" class="a-section a-spacing-none aplus-carousel-container">                                    <div id="premium-aplus-13-carousel-2-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-13-carousel-2&quot;,&quot;single_page_align&quot;:&quot;center&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-comparison-table-carousel a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel7" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 580px;"><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="bluetooth anc headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/abcecb9a-71be-48e1-88c5-8920a7c40b98.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="boat rockerz headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/81fe8012-f04f-4ef6-b860-bf3b12fddba4.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div>    <div class="a-section a-spacing-none aplus-pagination-wrapper">      <style type="text/css">
.aplus-mantle.aplus-module .aplus-pagination-dots {
margin: 0;
}
.aplus-mantle.aplus-module .aplus-pagination-dot {
display: inline-block;
list-style: none;
}
.aplus-mantle.aplus-module .aplus-carousel-nav {
text-align:center;
}
.aplus-mantle.aplus-module .carousel-slider-circle {
display: inline-block;
cursor: pointer;
height: 15px;
width: 15px;
border: 1px solid #000;
border-radius: 20px;
background-color: #fff;
margin-left: 5px;
}
.aplus-mantle.aplus-module .carousel-slider-circle.aplus-carousel-active {
background-color: #FFA500;
}
</style>
<script>
P.now("premium-aplus-13-carousel-2").execute(function(init) {
if (init) {
return;
}
P.register("premium-aplus-13-carousel-2", function(){
return function() {
P.when("A", "jQuery", "a-carousel-framework", "ready").execute(function (A, $, framework) {
var moduleId = "2";
var carouselName = "premium-aplus-13-carousel-2";
var paginationAction = "aplus-pagination-dot-action-" + moduleId;
var paginationGroup = "#aplus-pagination-group-" + moduleId + "-" + carouselName;
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
/* If the carousel goes to a new page */
A.on("a:carousel:"+carouselName+":change:pageNumber", function (data) {
A.$(paginationGroup+" .carousel-slider-circle").removeClass("aplus-carousel-active").attr('aria-selected', 'false')
.eq(data.newValue - 1).addClass("aplus-carousel-active").attr('aria-selected', 'true');
});
framework.onInit(carouselName, function (carousel) {
A.declarative(paginationAction, 'click keydown', function(event){
var isClick = event.type === 'click';
var isKeydown = event.type === 'keydown';
var isEnter = isKeydown && event.$event.keyCode === ENTER_KEY_CODE;
var isEsc = isKeydown  && event.$event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter) {
var data = event.data;
carousel.gotoPage(data.page);
} else if (isEsc) {
// force remove focus
event.$target.blur()
}
});
});
});
}
});
});
</script>
<div class="aplus-mantle aplus-module">
<div class="aplus-carousel-nav">
<ul id="aplus-pagination-group-2-premium-aplus-13-carousel-2" class="aplus-pagination-dots" aria-label="tablist-section" role="tablist">
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block aplus-carousel-active" aria-selected="true" data-action="aplus-pagination-dot-action-2" data-aplus-pagination-dot-action-2="{&quot;page&quot;: 1}" aria-label="slide-1" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-2" data-aplus-pagination-dot-action-2="{&quot;page&quot;: 2}" aria-label="slide-2" tabindex="0" role="tab"></span>
</li>
</ul>
</div>
</div>
</div>                                                               <div class="a-section a-text-center">                                  </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-13-carousel-mobile').execute(function(init){
init();
});
P.when("premium-aplus-13-carousel-2").execute(function(init){init();});
}));</script>     </div>
<div class="celwidget aplus-module premium-module-13-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-13-carousel" data-csa-c-id="2pmsn4-cdtexe-jiftfq-kben5k" data-cel-widget="aplus-m-premium-module-13-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-13">                                  <div data-module-id="3" class="a-section a-spacing-none aplus-carousel-container">                                    <div id="premium-aplus-13-carousel-3-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-13-carousel-3&quot;,&quot;single_page_align&quot;:&quot;center&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-comparison-table-carousel a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel8" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 580px;"><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="boat rockerz headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef8ebee8-bfdd-47f1-b93d-fd3da65d238b.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="boat earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/374ceab2-e492-4b1e-893e-4859056192d3.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div>    <div class="a-section a-spacing-none aplus-pagination-wrapper">      <style type="text/css">
.aplus-mantle.aplus-module .aplus-pagination-dots {
margin: 0;
}
.aplus-mantle.aplus-module .aplus-pagination-dot {
display: inline-block;
list-style: none;
}
.aplus-mantle.aplus-module .aplus-carousel-nav {
text-align:center;
}
.aplus-mantle.aplus-module .carousel-slider-circle {
display: inline-block;
cursor: pointer;
height: 15px;
width: 15px;
border: 1px solid #000;
border-radius: 20px;
background-color: #fff;
margin-left: 5px;
}
.aplus-mantle.aplus-module .carousel-slider-circle.aplus-carousel-active {
background-color: #FFA500;
}
</style>
<script>
P.now("premium-aplus-13-carousel-3").execute(function(init) {
if (init) {
return;
}
P.register("premium-aplus-13-carousel-3", function(){
return function() {
P.when("A", "jQuery", "a-carousel-framework", "ready").execute(function (A, $, framework) {
var moduleId = "3";
var carouselName = "premium-aplus-13-carousel-3";
var paginationAction = "aplus-pagination-dot-action-" + moduleId;
var paginationGroup = "#aplus-pagination-group-" + moduleId + "-" + carouselName;
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
/* If the carousel goes to a new page */
A.on("a:carousel:"+carouselName+":change:pageNumber", function (data) {
A.$(paginationGroup+" .carousel-slider-circle").removeClass("aplus-carousel-active").attr('aria-selected', 'false')
.eq(data.newValue - 1).addClass("aplus-carousel-active").attr('aria-selected', 'true');
});
framework.onInit(carouselName, function (carousel) {
A.declarative(paginationAction, 'click keydown', function(event){
var isClick = event.type === 'click';
var isKeydown = event.type === 'keydown';
var isEnter = isKeydown && event.$event.keyCode === ENTER_KEY_CODE;
var isEsc = isKeydown  && event.$event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter) {
var data = event.data;
carousel.gotoPage(data.page);
} else if (isEsc) {
// force remove focus
event.$target.blur()
}
});
});
});
}
});
});
</script>
<div class="aplus-mantle aplus-module">
<div class="aplus-carousel-nav">
<ul id="aplus-pagination-group-3-premium-aplus-13-carousel-3" class="aplus-pagination-dots" aria-label="tablist-section" role="tablist">
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block aplus-carousel-active" aria-selected="true" data-action="aplus-pagination-dot-action-3" data-aplus-pagination-dot-action-3="{&quot;page&quot;: 1}" aria-label="slide-1" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-3" data-aplus-pagination-dot-action-3="{&quot;page&quot;: 2}" aria-label="slide-2" tabindex="0" role="tab"></span>
</li>
</ul>
</div>
</div>
</div>                                                               <div class="a-section a-text-center">                                  </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-13-carousel-mobile').execute(function(init){
init();
});
P.when("premium-aplus-13-carousel-3").execute(function(init){init();});
}));</script>     </div>
<div class="celwidget aplus-module premium-module-13-carousel aplus-premium" cel_widget_id="aplus-m-premium-module-13-carousel" data-csa-c-id="j1087t-fh6d8q-7sumg1-dj322e" data-cel-widget="aplus-m-premium-module-13-carousel">
<div class="a-section a-spacing-none premium-aplus premium-aplus-module-13">                                  <div data-module-id="4" class="a-section a-spacing-none aplus-carousel-container">                                    <div id="premium-aplus-13-carousel-4-id" data-a-carousel-options="{&quot;minimum_gutter_width&quot;:0,&quot;maintain_state&quot;:false,&quot;name&quot;:&quot;premium-aplus-13-carousel-4&quot;,&quot;single_page_align&quot;:&quot;center&quot;,&quot;carousel_display_strategy&quot;:&quot;single&quot;}" data-a-transition-strategy="slideCircular" class="a-begin a-carousel-container a-carousel-display-stretchyGoodness a-carousel-transition-slideCircular aplus-comparison-table-carousel a-carousel-initialized"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">  <div class="a-carousel-viewport a-gesture a-gesture-horizontal" id="anonCarousel9" style="height: 218px;"><ol class="a-carousel" role="list" style="width: 580px;"><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="1" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="anc earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e0e2b84e-6fc4-480c-8e03-6ee85922823f.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li><li class="a-carousel-card aplus-carousel-element" role="listitem" style="margin-left: 0px; width: 290px;" aria-setsize="2" aria-posinset="2" aria-hidden="false"> <div class="a-section a-spacing-none aplus-card-image">                             <img alt="anc headphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d287d47-8ef6-4ab7-b142-b81e466520c8.__CR0,0,600,450_PT0_SX600_V1___.png">   </div> </li></ol></div> <span class="a-end aok-hidden"></span></div> </div>    <div class="a-section a-spacing-none aplus-pagination-wrapper">      <style type="text/css">
.aplus-mantle.aplus-module .aplus-pagination-dots {
margin: 0;
}
.aplus-mantle.aplus-module .aplus-pagination-dot {
display: inline-block;
list-style: none;
}
.aplus-mantle.aplus-module .aplus-carousel-nav {
text-align:center;
}
.aplus-mantle.aplus-module .carousel-slider-circle {
display: inline-block;
cursor: pointer;
height: 15px;
width: 15px;
border: 1px solid #000;
border-radius: 20px;
background-color: #fff;
margin-left: 5px;
}
.aplus-mantle.aplus-module .carousel-slider-circle.aplus-carousel-active {
background-color: #FFA500;
}
</style>
<script>
P.now("premium-aplus-13-carousel-4").execute(function(init) {
if (init) {
return;
}
P.register("premium-aplus-13-carousel-4", function(){
return function() {
P.when("A", "jQuery", "a-carousel-framework", "ready").execute(function (A, $, framework) {
var moduleId = "4";
var carouselName = "premium-aplus-13-carousel-4";
var paginationAction = "aplus-pagination-dot-action-" + moduleId;
var paginationGroup = "#aplus-pagination-group-" + moduleId + "-" + carouselName;
const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
/* If the carousel goes to a new page */
A.on("a:carousel:"+carouselName+":change:pageNumber", function (data) {
A.$(paginationGroup+" .carousel-slider-circle").removeClass("aplus-carousel-active").attr('aria-selected', 'false')
.eq(data.newValue - 1).addClass("aplus-carousel-active").attr('aria-selected', 'true');
});
framework.onInit(carouselName, function (carousel) {
A.declarative(paginationAction, 'click keydown', function(event){
var isClick = event.type === 'click';
var isKeydown = event.type === 'keydown';
var isEnter = isKeydown && event.$event.keyCode === ENTER_KEY_CODE;
var isEsc = isKeydown  && event.$event.keyCode === ESCAPE_KEY_CODE;
if (isClick || isEnter) {
var data = event.data;
carousel.gotoPage(data.page);
} else if (isEsc) {
// force remove focus
event.$target.blur()
}
});
});
});
}
});
});
</script>
<div class="aplus-mantle aplus-module">
<div class="aplus-carousel-nav">
<ul id="aplus-pagination-group-4-premium-aplus-13-carousel-4" class="aplus-pagination-dots" aria-label="tablist-section" role="tablist">
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block aplus-carousel-active" aria-selected="true" data-action="aplus-pagination-dot-action-4" data-aplus-pagination-dot-action-4="{&quot;page&quot;: 1}" aria-label="slide-1" tabindex="0" role="tab"></span>
</li>
<li class="aplus-pagination-dot aplus-display-inline-block" role="presentation">
<span class="a-declarative carousel-slider-circle aplus-display-inline-block " aria-selected="false" data-action="aplus-pagination-dot-action-4" data-aplus-pagination-dot-action-4="{&quot;page&quot;: 2}" aria-label="slide-2" tabindex="0" role="tab"></span>
</li>
</ul>
</div>
</div>
</div>                                                               <div class="a-section a-text-center">                                  </div> </div>  <script type="text/javascript">(function(f) {var _np=(window.P._namespace("PremiumAplusModule"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
P.when('premium-module-13-carousel-mobile').execute(function(init){
init();
});
P.when("premium-aplus-13-carousel-4").execute(function(init){init();});
}));</script>     </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a531e2108d28052e6948ff"
    },
    "Title": "OPPO Enco Air3 Pro True Wireless in Ear Earbuds with Industry first Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra low latency,Fast Charge,BT 5.3 (White)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "4559",
    "images0": "https://m.media-amazon.com/images/I/61hORBvpEzL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71yP0euGYAL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71WqxNCZlzL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71P8KLNV-QL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61hsLku5OPL._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="8sxaz7-32j4yf-llg1wy-ies1e2" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="zfeu5d-giqdqk-jykkc8-7otxvz" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Air3Pro Main KV" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0c7fac3e-d765-4e88-9632-07fa715346ae.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0c7fac3e-d765-4e88-9632-07fa715346ae.__CR0,0,970,600_PT0_SX970_V1___.jpg" style=""><noscript><img alt="Air3Pro Main KV" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0c7fac3e-d765-4e88-9632-07fa715346ae.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="9i6gvv-hevm6m-4gqmft-boo2dn" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Air3Pro Natural sound" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0a46fbf5-4263-4f94-9b13-bb7d62a39c4e.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0a46fbf5-4263-4f94-9b13-bb7d62a39c4e.__CR0,0,970,600_PT0_SX970_V1___.jpg" style=""><noscript><img alt="Air3Pro Natural sound" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0a46fbf5-4263-4f94-9b13-bb7d62a39c4e.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="e9fmcu-hg9xla-u51glb-2d0hfw" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Air 3PRO ANC" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/38e9b8e1-f306-4738-8787-bcc4b722a5b8.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/38e9b8e1-f306-4738-8787-bcc4b722a5b8.__CR0,0,970,600_PT0_SX970_V1___.jpg" style=""><noscript><img alt="Air 3PRO ANC" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/38e9b8e1-f306-4738-8787-bcc4b722a5b8.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="iaojf1-i6ww0j-fbdbhq-ypt4o8" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Oppo Surround Sound" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/446787dd-9e13-43be-94be-ab43fa7e6afb.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/446787dd-9e13-43be-94be-ab43fa7e6afb.__CR0,0,970,600_PT0_SX970_V1___.jpg" style=""><noscript><img alt="Oppo Surround Sound" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/446787dd-9e13-43be-94be-ab43fa7e6afb.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="lnj6dj-giaihc-azpwo5-dulyzd" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Oppo gaming Earbuds" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f4c7948a-a252-418d-a2cf-37e39824a958.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f4c7948a-a252-418d-a2cf-37e39824a958.__CR0,0,970,600_PT0_SX970_V1___.jpg" style=""><noscript><img alt="Oppo gaming Earbuds" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f4c7948a-a252-418d-a2cf-37e39824a958.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53270108d28052e694901"
    },
    "Title": "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "259",
    "mrp": "23790",
    "images0": "https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/51emillNpWL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/51+vJkbGtJL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/51aHwMRyg7L._SL1500_.jpg",
    "disp_order": `<div class="css-175oi2r" style="padding-right: 16px; padding-left: 16px; padding-bottom: 16px;"><div class="css-175oi2r" style="flex: 1 1 0%;"><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">With Mic:Yes</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">Connector type: No</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">Spatial audio with dynamic head tracking places sound all around you</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">Adaptive EQ automatically tunes music to your ears</div></div><div class="css-175oi2r" style="align-items: flex-start; flex-direction: row; padding-bottom: 4px;"><div dir="auto" class="css-1rynq56" style="padding-right: 6px; font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">•</div><div dir="auto" class="css-1rynq56" style="flex-wrap: wrap; color: rgb(0, 0, 0); font-size: 14px; font-family: Roboto, Helvetica, Arial, sans-serif;">All-new contoured design</div></div></div><div class="css-175oi2r" style="margin-top: 8px;"></div></div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53329108d28052e694902"
    },
    "Title": "realme Buds 2 Wired in Ear Earphones with Mic (Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "59",
    "mrp": "598",
    "images0": "https://m.media-amazon.com/images/I/61BYFuHb7lL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61LkxaLmJUL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61fgOqiCbVL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/61zxnNgXdYL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61016IRlhZL._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="gsyw5o-q04w1y-4968f6-5k2d1r" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2.mobile {
display:inherit;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2.mobile .aplus-standard .aplus-tech-spec-table { word-break: initial; }
.aplus-v2.mobile .aplus-standard.aplus-module {
min-width:inherit;
margin-bottom: 21px;
}
.aplus-v2.mobile .aplus-standard .apm-sidemodule {width:inherit}
.aplus-v2.mobile .aplus-standard .apm-fixed-width {width:inherit}
/* module-5 */
.aplus-v2.mobile .aplus-standard.module-5{overflow:auto}
.aplus-v2.mobile .aplus-standard .aplus-module-wrapper {
display: block;
}
.aplus-v2.mobile .aplus-standard img.apm-middle-image {
vertical-align: middle;
}
.aplus-v2.mobile .aplus-standard .apm-iconheader {
display: inline;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: left;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: center;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard th.apm-tablemodule-keyhead {
border-top: 1px solid #dddddd;
padding: 8px 14px 6px !important;
background-color: #f7f7f7;
font-weight: normal;
color: #626262;
float: none !important;
margin-right: 0;
text-align: center;
min-width: 110px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-keyhead {
border-right: 1px solid #dddddd;
}
.aplus-v2.mobile .aplus-standard tr.apm-tablemodule-keyvalue td {
padding-top: 8px !important;
padding-left: 14px;
padding-bottom: 8px;
border-top: 1px solid #dddddd;
border-bottom: 1px solid #dddddd;
min-width: 150px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-imagerows > td > img {
max-width: none !important;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-checked {
text-align: center;
}
.aplus-v2 .aplus-standard .apm-tablemodule-valuecell {
vertical-align: middle
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-valuecell.selected {
background-color: #fff5ec;
}
.aplus-v2 .add-to-cart {
line-height: 1rem;
font-weight: normal;
}
.aplus-v2 .apm-tablemodule-atc form {
margin-bottom: 0px;
}
/* moduel 13 text */
.aplus-v2 .aplus-standard .aplus-module-13 {
padding: 20px 0;
}
.aplus-v2 .aplus-standard .aplus-module-13 .aplus-13-heading-text {
padding-bottom: 15px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: left;
padding-bottom: 10px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: inherit;
padding-bottom: 10px;
}
html[dir='rtl'] .aplus-v2 .aplus-standard .apm-spacing ul {margin:0 18px 18px 0 !important;}
</style>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="ac34w3-uhhd1k-a9xoh2-plpn3c" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<h3 class="a-spacing-small">     </h3>  <p class="a-text-center">                               <img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/6f94cbde-5eac-4c50-8f6c-fdb6c6487e98.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/6f94cbde-5eac-4c50-8f6c-fdb6c6487e98.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/6f94cbde-5eac-4c50-8f6c-fdb6c6487e98.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Feel the Real Bass </h4>                                     <p class="a-spacing-base"> Enjoy the powerful 11.2mm bass boost driver which consist of multi-layer composite diaphragm, bringing you a deep and powerful, yet accurate bass response. </p>    <p></p> <p class="a-text-center">                               <img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/83fea509-f655-4d28-bd9f-3764d1777617.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/83fea509-f655-4d28-bd9f-3764d1777617.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/83fea509-f655-4d28-bd9f-3764d1777617.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> 3-Button Remote with Mic </h4>                                     <p class="a-spacing-base"> The inline remote features three tactile buttons and a mic, so you can control your music and videos, incoming calls, and even summon your voice assistant directly at the touch of a button. </p>    <p></p> <p class="a-text-center">                               <img alt="  " src="https://m.media-amazon.com/images/S/aplus-media/sota/cbd0f65c-8614-45c6-b716-17b76be9746d.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/cbd0f65c-8614-45c6-b716-17b76be9746d.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="  " src="https://m.media-amazon.com/images/S/aplus-media/sota/cbd0f65c-8614-45c6-b716-17b76be9746d.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Built-in Magnets </h4>                                     <p class="a-spacing-base"> The integrated magnets are designed to provide the ultimate solution for neatly storing your earphones. </p>    <p></p> </div>
</div>    </div>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="rsvfes-rqqnqu-t9h0bh-dv86ly" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<h3 class="a-spacing-small">   </h3>  <p class="a-text-center">                               <img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/b8604914-6766-4dc0-8ddd-4ec77adcfd14.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/b8604914-6766-4dc0-8ddd-4ec77adcfd14.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/b8604914-6766-4dc0-8ddd-4ec77adcfd14.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Tangle-Free Design </h4>                                     <p class="a-spacing-base"> A premium, reinforced braided jacket, and two evenly grooved TPU cables make for a design that won't tangle easily. </p>    <p></p> <p class="a-text-center">                               <img alt=" " src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-spacing-mini a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/0b902ff9-59ec-4a1c-8b8e-168a226ab467.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/0b902ff9-59ec-4a1c-8b8e-168a226ab467.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Cable Organizer </h4>                                     <p class="a-spacing-base"> A built-in adjustable cable strap is also featured to keep your earphones tidy. </p>    <p></p> <p class="a-text-center">                               <img alt=" " src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-spacing-mini a-lazy-loaded" data-src="https://m.media-amazon.com/images/S/aplus-media/sota/14e1258b-ba6d-47a9-8f57-e2cd65919891.__CR0,0,336,336_PT0_SX300_V1___.jpg"><noscript><img alt=" " src="https://m.media-amazon.com/images/S/aplus-media/sota/14e1258b-ba6d-47a9-8f57-e2cd65919891.__CR0,0,336,336_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Premium Design </h4>                                     <p class="a-spacing-base"> Add a touch of style to your music experience with the realme Buds 2. The matte, streamlined design looks elegant and attractive. </p>    <p></p> </div>
</div>    </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a5337a108d28052e694903"
    },
    "Title": "JBL C100SI Wired In Ear Headphones with Mic, JBL Pure Bass Sound, One Button Multi-function Remote, Premium Metallic Finish, Angled Buds for Comfort fit (Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "59",
    "mrp": "598",
    "images0": "https://m.media-amazon.com/images/I/51Q8DUDT2eL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/91kcPKEG-NL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/91iPKswDKVL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/91D78FlIBIL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/91ZEFiUZVXL._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="jvzg94-ie1xe4-lrzotk-vge2o4" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2.mobile {
display:inherit;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2.mobile .aplus-standard .aplus-tech-spec-table { word-break: initial; }
.aplus-v2.mobile .aplus-standard.aplus-module {
min-width:inherit;
margin-bottom: 21px;
}
.aplus-v2.mobile .aplus-standard .apm-sidemodule {width:inherit}
.aplus-v2.mobile .aplus-standard .apm-fixed-width {width:inherit}
/* module-5 */
.aplus-v2.mobile .aplus-standard.module-5{overflow:auto}
.aplus-v2.mobile .aplus-standard .aplus-module-wrapper {
display: block;
}
.aplus-v2.mobile .aplus-standard img.apm-middle-image {
vertical-align: middle;
}
.aplus-v2.mobile .aplus-standard .apm-iconheader {
display: inline;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: left;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: center;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard th.apm-tablemodule-keyhead {
border-top: 1px solid #dddddd;
padding: 8px 14px 6px !important;
background-color: #f7f7f7;
font-weight: normal;
color: #626262;
float: none !important;
margin-right: 0;
text-align: center;
min-width: 110px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-keyhead {
border-right: 1px solid #dddddd;
}
.aplus-v2.mobile .aplus-standard tr.apm-tablemodule-keyvalue td {
padding-top: 8px !important;
padding-left: 14px;
padding-bottom: 8px;
border-top: 1px solid #dddddd;
border-bottom: 1px solid #dddddd;
min-width: 150px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-imagerows > td > img {
max-width: none !important;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-checked {
text-align: center;
}
.aplus-v2 .aplus-standard .apm-tablemodule-valuecell {
vertical-align: middle
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-valuecell.selected {
background-color: #fff5ec;
}
.aplus-v2 .add-to-cart {
line-height: 1rem;
font-weight: normal;
}
.aplus-v2 .apm-tablemodule-atc form {
margin-bottom: 0px;
}
/* moduel 13 text */
.aplus-v2 .aplus-standard .aplus-module-13 {
padding: 20px 0;
}
.aplus-v2 .aplus-standard .aplus-module-13 .aplus-13-heading-text {
padding-bottom: 15px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: left;
padding-bottom: 10px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: inherit;
padding-bottom: 10px;
}
html[dir='rtl'] .aplus-v2 .aplus-standard .apm-spacing ul {margin:0 18px 18px 0 !important;}
</style>
<div class="celwidget aplus-module module-11 aplus-standard" cel_widget_id="aplus-m-module-11" data-csa-c-id="6b418z-gnewfr-skkgii-p84mpr" data-cel-widget="aplus-m-module-11">
<div class="aplus-module-wrapper">
<div class="a-section a-spacing-none a-text-center">                               <img alt="Celebrity" src="https://m.media-amazon.com/images/S/aplus-media/vc/ee21a32e-f3fc-4c3c-af6b-b2090ce5e7b2.__CR0,0,970,300_PT0_SX970_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/ee21a32e-f3fc-4c3c-af6b-b2090ce5e7b2.__CR0,0,970,300_PT0_SX970_V1___.jpg"><noscript><img alt="Celebrity" src="https://m.media-amazon.com/images/S/aplus-media/vc/ee21a32e-f3fc-4c3c-af6b-b2090ce5e7b2.__CR0,0,970,300_PT0_SX970_V1___.jpg"/></noscript>   </div>                                                                     </div>    </div>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="9sw3wh-yxt53e-9rhad-xz65u8" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<h3 class="a-spacing-small"> Features &amp; Benefits </h3>  <p class="a-text-center">                               <img alt="True JBL Bass" src="https://m.media-amazon.com/images/S/aplus-media/vc/bce52641-4084-420f-839f-a88a561355b7.__CR0,0,300,300_PT0_SX300_V1___.png" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/bce52641-4084-420f-839f-a88a561355b7.__CR0,0,300,300_PT0_SX300_V1___.png"><noscript><img alt="True JBL Bass" src="https://m.media-amazon.com/images/S/aplus-media/vc/bce52641-4084-420f-839f-a88a561355b7.__CR0,0,300,300_PT0_SX300_V1___.png"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> JBL Pure Bass </h4>                                  <p class="a-spacing-base"> Experience deepened notes with true JBL level bass response making everyday musical journey more appealing. </p>    <p></p> <p class="a-text-center">                               <img alt="Lightweight &amp; Comfortable" src="https://m.media-amazon.com/images/S/aplus-media/vc/73326d00-4b1b-47e8-814b-2374357fbfce.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/73326d00-4b1b-47e8-814b-2374357fbfce.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Lightweight &amp; Comfortable" src="https://m.media-amazon.com/images/S/aplus-media/vc/73326d00-4b1b-47e8-814b-2374357fbfce.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Lightweight &amp; Comfortable </h4>                                  <p class="a-spacing-base"> With three sizes of ear plugs and an angled fit which makes the earphones more comfortable to be worn for longer hours. Slip Proof : No </p>    <p></p> <p class="a-text-center">                               <img alt="Voice Assistant" src="https://m.media-amazon.com/images/S/aplus-media/vc/3fdb79f4-17c1-4354-8c58-f65c13d973f6.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/3fdb79f4-17c1-4354-8c58-f65c13d973f6.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Voice Assistant" src="https://m.media-amazon.com/images/S/aplus-media/vc/3fdb79f4-17c1-4354-8c58-f65c13d973f6.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Voice Assistant </h4>                                  <p class="a-spacing-base"> Compatible with Android devices. Activate Google Assistant with a long press and get it going. </p>    <p></p> </div>
</div>    </div>
<div class="celwidget aplus-module module-11 aplus-standard" cel_widget_id="aplus-m-module-11" data-csa-c-id="hyukqc-3zi3ko-huzxes-2yun4b" data-cel-widget="aplus-m-module-11">
<div class="aplus-module-wrapper">
<div class="a-section a-spacing-none a-text-center">                               <img alt="C100SI" src="https://m.media-amazon.com/images/S/aplus-media/vc/1f7b7edd-ac96-4365-bf26-697cd8a3a50d.__CR0,0,970,300_PT0_SX970_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/1f7b7edd-ac96-4365-bf26-697cd8a3a50d.__CR0,0,970,300_PT0_SX970_V1___.jpg"><noscript><img alt="C100SI" src="https://m.media-amazon.com/images/S/aplus-media/vc/1f7b7edd-ac96-4365-bf26-697cd8a3a50d.__CR0,0,970,300_PT0_SX970_V1___.jpg"/></noscript>   </div>                                                                     </div>    </div>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="j1pkpo-xoyope-qapoor-yz19de" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<h3 class="a-spacing-small"> Features &amp; Benefits </h3>  <p class="a-text-center">                               <img alt="Premium Metallic Finish" src="https://m.media-amazon.com/images/S/aplus-media/vc/45266ed2-52c8-40b0-ba5c-88e706d82adc.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/45266ed2-52c8-40b0-ba5c-88e706d82adc.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Premium Metallic Finish" src="https://m.media-amazon.com/images/S/aplus-media/vc/45266ed2-52c8-40b0-ba5c-88e706d82adc.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Premium Metallic Finish </h4>                                  <p class="a-spacing-base"> The premium finish pertaining to the color and material used in the product makes it stand out and is sure to turn lot of heads. </p>    <p></p> <p class="a-text-center">                               <img alt="1 button-remote" src="https://m.media-amazon.com/images/S/aplus-media/vc/ec889606-7657-4052-ad57-416a64de3b9e.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/ec889606-7657-4052-ad57-416a64de3b9e.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="1 button-remote" src="https://m.media-amazon.com/images/S/aplus-media/vc/ec889606-7657-4052-ad57-416a64de3b9e.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> One Button Remote Microphone </h4>                                  <p class="a-spacing-base"> One button universal remote with noise isolation microphone enables you to answer   and manage your calls effortlessly and without any hindrance. </p>    <p></p> <p class="a-text-center">                               <img alt="3.5mm gold plated jack" src="https://m.media-amazon.com/images/S/aplus-media/vc/f10eca68-dd01-4683-b80a-97dde4a24b8f.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/f10eca68-dd01-4683-b80a-97dde4a24b8f.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="3.5mm gold plated jack" src="https://m.media-amazon.com/images/S/aplus-media/vc/f10eca68-dd01-4683-b80a-97dde4a24b8f.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> 3.5mm Gold Plated Jack </h4>                                  <p class="a-spacing-base"> The 3.5mm gold plating on the jack provides an improved lossless connectivity and better data transfer. </p>    <p></p> </div>
</div>    </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a538dc108d28052e694905"
    },
    "Title": "boAt Bassheads 242 in Ear Wired Earphones with Mic(Active Black)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "59",
    "mrp": "598",
    "images0": "https://m.media-amazon.com/images/I/61+tzvHZi+L._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/71x2aS21oIL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71n0xfVFKZL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/714LRZpHubL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61YuKZ+GqML._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="ckvlne-3cmqmm-txkdjq-tcult1" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="6q5jjo-8br09t-fpsm10-c8b47r" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Bassheads " src="https://m.media-amazon.com/images/S/aplus-media/vc/b6e3e2b3-e249-434b-b019-2bfcc9ca8898.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/b6e3e2b3-e249-434b-b019-2bfcc9ca8898.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="Bassheads " src="https://m.media-amazon.com/images/S/aplus-media/vc/b6e3e2b3-e249-434b-b019-2bfcc9ca8898.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="urculw-pb6ci5-c97cge-20oyjm" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="boat bassheads" src="https://m.media-amazon.com/images/S/aplus-media/vc/d726a34f-190d-4ad5-8526-f32277960f9b.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/d726a34f-190d-4ad5-8526-f32277960f9b.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="boat bassheads" src="https://m.media-amazon.com/images/S/aplus-media/vc/d726a34f-190d-4ad5-8526-f32277960f9b.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="s7ebh9-nnbjpr-lndtdq-adqz1" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="wired earphones" src="https://m.media-amazon.com/images/S/aplus-media/vc/18951cde-e092-423d-9e6d-5562738d59da.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/18951cde-e092-423d-9e6d-5562738d59da.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="wired earphones" src="https://m.media-amazon.com/images/S/aplus-media/vc/18951cde-e092-423d-9e6d-5562738d59da.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="xdnzhq-p2s1bt-9yqghv-4k6bpx" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="wired earphones" src="https://m.media-amazon.com/images/S/aplus-media/vc/903c6467-f7a7-45ae-a6c8-6e3cf4fb900b.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media/vc/903c6467-f7a7-45ae-a6c8-6e3cf4fb900b.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="wired earphones" src="https://m.media-amazon.com/images/S/aplus-media/vc/903c6467-f7a7-45ae-a6c8-6e3cf4fb900b.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a539f9108d28052e694906"
    },
    "Title": "iQOO Wireless Sport | Bluetooth in-Ear Earphones with Mic | 11.2mm Driver | 80ms Low Latency | 18 hrs Battery | Comfort Fit\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "59",
    "mrp": "598",
    "images0": "https://m.media-amazon.com/images/I/41tcqZdH9FL._SX522_.jpg",
    "images1": "https://m.media-amazon.com/images/I/41HK-h0T+TL._SX522_.jpg",
    "images2": "https://m.media-amazon.com/images/I/41Q8cRpb5EL._SX522_.jpg",
    "images3": "https://m.media-amazon.com/images/I/411XJr64TfL._SX522_.jpg",
    "images4": "https://m.media-amazon.com/images/I/41hoUFIRqUL._SX522_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="27x3ig-ug5n44-anks5j-2nixs6" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2.mobile {
display:inherit;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2.mobile .aplus-standard .aplus-tech-spec-table { word-break: initial; }
.aplus-v2.mobile .aplus-standard.aplus-module {
min-width:inherit;
margin-bottom: 21px;
}
.aplus-v2.mobile .aplus-standard .apm-sidemodule {width:inherit}
.aplus-v2.mobile .aplus-standard .apm-fixed-width {width:inherit}
/* module-5 */
.aplus-v2.mobile .aplus-standard.module-5{overflow:auto}
.aplus-v2.mobile .aplus-standard .aplus-module-wrapper {
display: block;
}
.aplus-v2.mobile .aplus-standard img.apm-middle-image {
vertical-align: middle;
}
.aplus-v2.mobile .aplus-standard .apm-iconheader {
display: inline;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: left;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: center;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard th.apm-tablemodule-keyhead {
border-top: 1px solid #dddddd;
padding: 8px 14px 6px !important;
background-color: #f7f7f7;
font-weight: normal;
color: #626262;
float: none !important;
margin-right: 0;
text-align: center;
min-width: 110px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-keyhead {
border-right: 1px solid #dddddd;
}
.aplus-v2.mobile .aplus-standard tr.apm-tablemodule-keyvalue td {
padding-top: 8px !important;
padding-left: 14px;
padding-bottom: 8px;
border-top: 1px solid #dddddd;
border-bottom: 1px solid #dddddd;
min-width: 150px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-imagerows > td > img {
max-width: none !important;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-checked {
text-align: center;
}
.aplus-v2 .aplus-standard .apm-tablemodule-valuecell {
vertical-align: middle
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-valuecell.selected {
background-color: #fff5ec;
}
.aplus-v2 .add-to-cart {
line-height: 1rem;
font-weight: normal;
}
.aplus-v2 .apm-tablemodule-atc form {
margin-bottom: 0px;
}
/* moduel 13 text */
.aplus-v2 .aplus-standard .aplus-module-13 {
padding: 20px 0;
}
.aplus-v2 .aplus-standard .aplus-module-13 .aplus-13-heading-text {
padding-bottom: 15px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: left;
padding-bottom: 10px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: inherit;
padding-bottom: 10px;
}
html[dir='rtl'] .aplus-v2 .aplus-standard .apm-spacing ul {margin:0 18px 18px 0 !important;}
</style>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="wc75fs-lchlzx-33ybvd-9ugks8" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<p class="a-text-center">                               <img alt="Sound that Strikes a Chord" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d379245f-2f37-4797-958f-6d843d75eba8.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d379245f-2f37-4797-958f-6d843d75eba8.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Sound that Strikes a Chord" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d379245f-2f37-4797-958f-6d843d75eba8.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Sound That Strikes a Chord </h4>                                  <p class="a-spacing-base"> Large 11.2mm Bass Driver coupled with CCAW Voice Coils delivers the Full-Bodied Bass and brings out the details of the Mids &amp; Highs </p>    <p></p> <p class="a-text-center">                               <img alt="Battlefield " src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/394cb9f8-6137-4e70-a678-dd1c912953e6.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/394cb9f8-6137-4e70-a678-dd1c912953e6.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Battlefield " src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/394cb9f8-6137-4e70-a678-dd1c912953e6.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Dominate the Battlefield with the Extreme Low latency of 80ms  </h4>                                  <p class="a-spacing-base"> Our System-Level Full-Loop Optimization reduces the Latency to 80ms. Now,Never experience a delay In Audio. With teh absolute synchronization of Audio &amp; Visual, the upper hand is yours even in a fierce combat. </p>    <p></p> <p class="a-text-center">                               <img alt="Talk as You Please and Win with Ease" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/fb76dc4e-2546-490d-ba13-25a8d05b1f87.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/fb76dc4e-2546-490d-ba13-25a8d05b1f87.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Talk as You Please and Win with Ease" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/fb76dc4e-2546-490d-ba13-25a8d05b1f87.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Talk as you Please and win with Ease </h4>                                  <p class="a-spacing-base"> Highly sensitive microphones coupled with a Deep Noise-Cancelling Algorithm that Picks your Voice smoothly and filters out teh background Noise. </p>    <p></p> </div>
</div>    </div>
<div class="celwidget aplus-module module-9 aplus-standard" cel_widget_id="aplus-m-module-9" data-csa-c-id="fhs534-38nsu9-omspmz-def1vf" data-cel-widget="aplus-m-module-9">
<div class="aplus-module-wrapper">
<div class="">
<p class="a-text-center">                               <img alt="Powerful Battery" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d20ce3aa-98dd-4e45-9acf-a69bc72f0482.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d20ce3aa-98dd-4e45-9acf-a69bc72f0482.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Powerful Battery" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d20ce3aa-98dd-4e45-9acf-a69bc72f0482.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Powerful Battery FlashCharge </h4>                                  <p class="a-spacing-base"> With up to 18 hours of playing time, you have the perfect all-day companion for your commute, at the office and when hitting the gym </p>    <p></p> <p class="a-text-center">                               <img alt="IPX4 Water Resistance" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0b6f0670-4bc4-4a03-59e7-ced296c753f7.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0b6f0670-4bc4-4a03-59e7-ced296c753f7.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="IPX4 Water Resistance" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0b6f0670-4bc4-4a03-59e7-ced296c753f7.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> IPX4 Water Resistance for All-Weather Scenerio </h4>                                  <p class="a-spacing-base"> Enjoy your workout and trust this Neckband to handle Sweat and Light rain </p>    <p></p> <p class="a-text-center">                               <img alt="Comfortable Fit" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ee9bf4b4-b4a4-4587-8ba1-65390357313f.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ee9bf4b4-b4a4-4587-8ba1-65390357313f.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Comfortable Fit" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ee9bf4b4-b4a4-4587-8ba1-65390357313f.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   <br>
</p><h4 class="a-spacing-mini"> Comfortable Fit for Your Active Lifestyle </h4>                                  <p class="a-spacing-base"> Decked out in an intense black finish with a Dash of yellow, our High-performance Earphones are designed for impressive action </p>    <p></p> </div>
</div>    </div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53a3c108d28052e694907"
    },
    "Title": "Linsoul 7HZ Timeless 14.2mm Planar HiFi in-Ear Earphone with CNC Aluminum Shell, Detachable MMCX Cable (3.5mm)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "41,246",
    "images0": "https://m.media-amazon.com/images/I/61lZjoFUM+L._SX522_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61lbh3H5FRL._SX522_.jpg",
    "images2": "https://m.media-amazon.com/images/I/51TU+8wbh9L._SX522_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71NuO1kUUUL._SX522_.jpg",
    "images4": "https://m.media-amazon.com/images/I/811mX2OJuFL._SX522_.jpg",
    "disp_order": `<div class="a-cardui" data-a-card-type="fullBleed" name="a-cardui-deck-autoname-21-card0">  <div class="a-cardui-header"> <div class="a-section image-gallery-widget-title"> <div class="a-cardui-title"><h3 class="a-size-medium a-cardui-title-text"><span class="a-truncate" data-a-word-break="normal" data-a-max-rows="3" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 3.9em;" data-a-recalculate="false" data-a-updated="true"><span class="a-truncate-full a-offscreen">Product image gallery</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto;">Product image gallery</span></span></h3></div>    </div> </div>      <div class="a-cardui-body">            <div class="a-section a-spacing-base image-gallery-first-slot"> <div class="image-gallery-tint"></div>
<img alt="Linsoul 7HZ Timeless 14.2mm Planar HiFi in-Ear Earphone with CNC Aluminum Shell, Detachable MMCX Cable (3.5mm)" src="https://m.media-amazon.com/images/I/61lZjoFUM+L.jpg" class="product-image" width="1600" data-src="https://m.media-amazon.com/images/I/61lZjoFUM+L.jpg"><noscript><img alt="Linsoul 7HZ Timeless 14.2mm Planar HiFi in-Ear Earphone with CNC Aluminum Shell, Detachable MMCX Cable (3.5mm)" src="https://m.media-amazon.com/images/I/61lZjoFUM+L.jpg" width="1600"/></noscript>   </div>           <div class="a-section a-spacing-base a-padding-base image-gallery-slot"> <div class="image-gallery-tint"></div>
<img alt="" src="https://m.media-amazon.com/images/I/61FaHjiXIuL.jpg" class="product-image" width="1600" role="presentation" data-src="https://m.media-amazon.com/images/I/61FaHjiXIuL.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/I/61FaHjiXIuL.jpg" width="1600"/></noscript>   </div>           <div class="a-section a-spacing-base a-padding-base image-gallery-slot"> <div class="image-gallery-tint"></div>
<img alt="" src="https://m.media-amazon.com/images/I/61lbh3H5FRL.jpg" class="product-image" width="1600" role="presentation" data-src="https://m.media-amazon.com/images/I/61lbh3H5FRL.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/I/61lbh3H5FRL.jpg" width="1600"/></noscript>   </div>           <div class="a-section a-spacing-base a-padding-base image-gallery-slot"> <div class="image-gallery-tint"></div>
<img alt="" src="https://m.media-amazon.com/images/I/51TU+8wbh9L.jpg" class="product-image" width="1600" role="presentation" data-src="https://m.media-amazon.com/images/I/51TU+8wbh9L.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/I/51TU+8wbh9L.jpg" width="1600"/></noscript>   </div>           <div class="a-section a-spacing-base a-padding-base image-gallery-slot"> <div class="image-gallery-tint"></div>
<img alt="" src="https://m.media-amazon.com/images/I/71NuO1kUUUL.jpg" class="product-image" width="1600" role="presentation" data-src="https://m.media-amazon.com/images/I/71NuO1kUUUL.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/I/71NuO1kUUUL.jpg" width="1600"/></noscript>   </div>           <div class="a-section a-padding-base image-gallery-last-slot"> <div class="image-gallery-tint"></div>
<img alt="" src="https://m.media-amazon.com/images/I/811mX2OJuFL.jpg" class="product-image" width="1600" role="presentation" data-src="https://m.media-amazon.com/images/I/811mX2OJuFL.jpg"><noscript><img alt="" src="https://m.media-amazon.com/images/I/811mX2OJuFL.jpg" width="1600"/></noscript>   </div>  </div>    </div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53ae4108d28052e694908"
    },
    "Title": "Zebronics Zeb-Corolla In Ear Wired Earphone with Mic, 3.5mm Jack, 1.2 Meter Cable, Multi Function Button\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1059",
    "images0": "https://m.media-amazon.com/images/I/713g7tCij5L._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/51KYU-1DIUL._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/71eTkggvqJL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/711ug0qXmQL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/71B+ZdetG4L._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="l7hdbt-gh6jfs-v9uei8-35av7k" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<style type="text/css">
.aplus-v2.mobile {
display:inherit;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
}
/* Undo this for tech-specs because it breaks table layout */
.aplus-v2.mobile .aplus-standard .aplus-tech-spec-table { word-break: initial; }
.aplus-v2.mobile .aplus-standard.aplus-module {
min-width:inherit;
margin-bottom: 21px;
}
.aplus-v2.mobile .aplus-standard .apm-sidemodule {width:inherit}
.aplus-v2.mobile .aplus-standard .apm-fixed-width {width:inherit}
/* module-5 */
.aplus-v2.mobile .aplus-standard.module-5{overflow:auto}
.aplus-v2.mobile .aplus-standard .aplus-module-wrapper {
display: block;
}
.aplus-v2.mobile .aplus-standard img.apm-middle-image {
vertical-align: middle;
}
.aplus-v2.mobile .aplus-standard .apm-iconheader {
display: inline;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: left;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule {
text-align: center;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard th.apm-tablemodule-keyhead {
border-top: 1px solid #dddddd;
padding: 8px 14px 6px !important;
background-color: #f7f7f7;
font-weight: normal;
color: #626262;
float: none !important;
margin-right: 0;
text-align: center;
min-width: 110px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-keyhead {
border-right: 1px solid #dddddd;
}
.aplus-v2.mobile .aplus-standard tr.apm-tablemodule-keyvalue td {
padding-top: 8px !important;
padding-left: 14px;
padding-bottom: 8px;
border-top: 1px solid #dddddd;
border-bottom: 1px solid #dddddd;
min-width: 150px;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-image {
background-color: #FFFFFF;
padding: 0 !important;
text-align: center;
overflow: hidden;
vertical-align: bottom;
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-imagerows > td > img {
max-width: none !important;
}
.aplus-v2.mobile .aplus-standard table.apm-tablemodule-table th {
padding-bottom: 8px;
text-align: center;
}
.aplus-v2.mobile .aplus-standard .apm-checked {
text-align: center;
}
.aplus-v2 .aplus-standard .apm-tablemodule-valuecell {
vertical-align: middle
}
.aplus-v2.mobile .aplus-standard .apm-tablemodule-valuecell.selected {
background-color: #fff5ec;
}
.aplus-v2 .add-to-cart {
line-height: 1rem;
font-weight: normal;
}
.aplus-v2 .apm-tablemodule-atc form {
margin-bottom: 0px;
}
/* moduel 13 text */
.aplus-v2 .aplus-standard .aplus-module-13 {
padding: 20px 0;
}
.aplus-v2 .aplus-standard .aplus-module-13 .aplus-13-heading-text {
padding-bottom: 15px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: left;
padding-bottom: 10px;
}
.aplus-v2 .aplus-standard .aplus-module-13 p {
text-align: inherit;
padding-bottom: 10px;
}
html[dir='rtl'] .aplus-v2 .aplus-standard .apm-spacing ul {margin:0 18px 18px 0 !important;}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="i7dxu2-qytju1-40xwo5-wtxgdv" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="stereo earphone" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b4611989-a11d-4321-a780-2c205ff28aad.__CR0,0,970,600_PT0_SX970_V1___.jpeg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b4611989-a11d-4321-a780-2c205ff28aad.__CR0,0,970,600_PT0_SX970_V1___.jpeg"><noscript><img alt="stereo earphone" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b4611989-a11d-4321-a780-2c205ff28aad.__CR0,0,970,600_PT0_SX970_V1___.jpeg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module module-8 aplus-standard" cel_widget_id="aplus-m-module-8" data-csa-c-id="bmtzkv-ipdv46-ocxn5z-pdy15t" data-cel-widget="aplus-m-module-8">
<div class="aplus-module-wrapper">
<div>
<div class="a-text-center">
<img alt="Wired earphone" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/830f7710-e8ba-4e7f-b111-9a15a31a09cc.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/830f7710-e8ba-4e7f-b111-9a15a31a09cc.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Wired earphone" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/830f7710-e8ba-4e7f-b111-9a15a31a09cc.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   </div>
<div>
<h3 class="a-spacing-mini"> Specification </h3>                                                                   <p class="a-spacing-base"> </p><ul class="a-unordered-list a-vertical"><li><span class="a-list-item">Drive Size: 10mm</span></li><li><span class="a-list-item">Impedance: 16Ω</span></li><li><span class="a-list-item">Frequency response: 20Hz-20kHz</span></li><li><span class="a-list-item">Sensitivity: 105dB</span></li><li><span class="a-list-item">Connector: 3.5mm Jack</span></li><li><span class="a-list-item">Cable length: 1.2m</span></li></ul> <p></p>                                                                                                                                    </div>
</div>
<div>
<div>
<div class="a-box a-spacing-small a-color-alternate-background apm-listbox"><div class="a-box-inner">                             <ul class="a-unordered-list a-vertical">   <li><span class="a-list-item"> <span class="a-size-base"> In-line Microphone </span> </span></li>   <li><span class="a-list-item"> <span class="a-size-base"> Stylish Design </span> </span></li>   <li><span class="a-list-item"> <span class="a-size-base"> Strong and long lasting cable </span> </span></li>   <li><span class="a-list-item"> <span class="a-size-base"> Light Weight </span> </span></li>  </ul> </div></div>  </div>
</div>
</div>
</div>
<div class="celwidget aplus-module module-3 aplus-standard" cel_widget_id="aplus-m-module-3" data-csa-c-id="qlzjja-y4wdmq-wcvqq-l8dlyh" data-cel-widget="aplus-m-module-3">
<div class="aplus-module-wrapper apm-spacing apm-floatnone">
<div class="apm-sidemodule">
<div class="a-section a-text-center">                               <img alt="In ear design " src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4d3aa2eb-a92f-475a-965d-8e25f25ab2d6.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4d3aa2eb-a92f-475a-965d-8e25f25ab2d6.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="In ear design " src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4d3aa2eb-a92f-475a-965d-8e25f25ab2d6.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   </div>                                   <h3 class="a-spacing-mini"> Lightweight and comfortable </h3>                                    <p> ZEB-COROLLA is an in-ear design and also has flat &amp; tangle free cable. The earphone also comes with extra earbuds for prefect fit and prolong use </p>    </div>
</div>
</div>
<div class="celwidget aplus-module module-2 aplus-standard" cel_widget_id="aplus-m-module-2" data-csa-c-id="cgr60p-rl1vrb-2jtj76-o2bvr9" data-cel-widget="aplus-m-module-2">
<div class="aplus-module-wrapper apm-spacing apm-floatnone">
<div class="a-section a-text-center">                               <img alt="Multi function button " src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0e71b32-b3d2-438f-83c5-79732bc0fc51.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0e71b32-b3d2-438f-83c5-79732bc0fc51.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="Multi function button " src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0e71b32-b3d2-438f-83c5-79732bc0fc51.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   </div>                                   <h3 class="a-spacing-mini"> Multi-function button </h3>                                    <p> The earphone comes with a 10mm driver to provide good quality sound along with a deep bass factor. There is a Multifunction button as well which helps to play/pause the track &amp; answer/hang up a call. </p>    </div>    </div>
<div class="celwidget aplus-module module-3 aplus-standard" cel_widget_id="aplus-m-module-3" data-csa-c-id="29luwf-c3rqp6-3fif6n-qgb5yq" data-cel-widget="aplus-m-module-3">
<div class="aplus-module-wrapper apm-spacing apm-floatnone">
<div class="apm-sidemodule">
<div class="a-section a-text-center">                               <img alt="3.5 Mm jack" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/95a7d5b3-0fb9-41f5-bdc6-dcaeebefa396.__CR0,0,300,300_PT0_SX300_V1___.jpg" class="a-spacing-mini" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/95a7d5b3-0fb9-41f5-bdc6-dcaeebefa396.__CR0,0,300,300_PT0_SX300_V1___.jpg"><noscript><img alt="3.5 Mm jack" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/95a7d5b3-0fb9-41f5-bdc6-dcaeebefa396.__CR0,0,300,300_PT0_SX300_V1___.jpg"/></noscript>   </div>                                   <h3 class="a-spacing-mini"> High Quality 3.5mm Jack </h3>                                    <p> The earphone is compatible with most of mobile/tablet/PC. The 3.5mm jack provides improved connectivity and better lossless data transfer. </p>    </div>
</div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53b25108d28052e694909"
    },
    "Title": "ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Green)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1059",
    "images0": "https://m.media-amazon.com/images/I/61+0KSoFrOL._SL1500_.jpg",
    "images1": "https://m.media-amazon.com/images/I/61A6bLrcP6L._SL1500_.jpg",
    "images2": "https://m.media-amazon.com/images/I/61Y+UkIGVKL._SL1500_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71JHURKGUFL._SL1500_.jpg",
    "images4": "https://m.media-amazon.com/images/I/61h+2nZNCoL._SL1500_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="wmvm3d-wjxvw4-35w7br-5lbyl2" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="lwwme6-52m843-9cfjzu-on1i5l" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/598842d5-05ee-4b22-9627-9e0346d687e1.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/598842d5-05ee-4b22-9627-9e0346d687e1.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/598842d5-05ee-4b22-9627-9e0346d687e1.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="bbt7z7-kz2u7s-f3r1w7-10my9o" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6d1506a5-fdb1-4721-8ce9-eb7af7b11231.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6d1506a5-fdb1-4721-8ce9-eb7af7b11231.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6d1506a5-fdb1-4721-8ce9-eb7af7b11231.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="ajr1zu-utmxrg-de7sok-59l9jv" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8b48230e-f18d-41b6-a557-d8d20fcf118c.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8b48230e-f18d-41b6-a557-d8d20fcf118c.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8b48230e-f18d-41b6-a557-d8d20fcf118c.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="12zzr3-sb5xqr-oafrdw-i6n481" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8ad9e6ed-c111-4659-9434-ce464c20fc26.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8ad9e6ed-c111-4659-9434-ce464c20fc26.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="zeb bro, wired earphone,earphones,zebronics wired earphone, wired earphone with mic" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8ad9e6ed-c111-4659-9434-ce464c20fc26.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="11uris-hmgc1y-jn4rgq-cf100m" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="wired earphone,zeb bro, zebronics wired earphone,wired earphone with mic,earphone" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c9d2de73-ed4f-4985-86da-10de2369368f.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c9d2de73-ed4f-4985-86da-10de2369368f.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="wired earphone,zeb bro, zebronics wired earphone,wired earphone with mic,earphone" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c9d2de73-ed4f-4985-86da-10de2369368f.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53b65108d28052e69490a"
    },
    "Title": "Boult Audio BassBuds X1 in-Ear Wired Earphones with 10mm Extra Bass Driver and HD Sound with mic(Blue)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1059",
    "images0": "https://m.media-amazon.com/images/I/81GYTkbBuXL._SX679_.jpg",
    "images1": "https://m.media-amazon.com/images/I/817GKaz4m2L._SX679_.jpg",
    "images2": "https://m.media-amazon.com/images/I/81vHkArfp6L._SX679_.jpg",
    "images3": "https://m.media-amazon.com/images/I/81kIicxB4gL._SX679_.jpg",
    "images4": "https://m.media-amazon.com/images/I/819j8E38etL._SX679_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="rhc4zf-unu942-d9pqo4-dqbvoh" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="2smk7q-uzl846-t1xq8p-v83374" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9a368c8a-9d88-4ab3-b74f-e54944442e94.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9a368c8a-9d88-4ab3-b74f-e54944442e94.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9a368c8a-9d88-4ab3-b74f-e54944442e94.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="4f882a-9swgc8-hmonob-m89xt4" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/af5b86ee-e87d-4924-b4fb-bb12271f1e54.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/af5b86ee-e87d-4924-b4fb-bb12271f1e54.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/af5b86ee-e87d-4924-b4fb-bb12271f1e54.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="v048ht-r2vr24-eq0lmx-s8vb6q" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/02e19022-fd88-4620-a60e-58e02cf2c27b.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/02e19022-fd88-4620-a60e-58e02cf2c27b.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/02e19022-fd88-4620-a60e-58e02cf2c27b.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="k8wzzk-agpij4-ht80nu-kg9k60" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/69229029-d2a4-4639-a7e0-24fa8f78d665.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/69229029-d2a4-4639-a7e0-24fa8f78d665.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/69229029-d2a4-4639-a7e0-24fa8f78d665.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="bh9hkz-om5yfi-84k6co-wyxa57" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ade2d76-27b5-42ec-81c2-a0caf5abe51d.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ade2d76-27b5-42ec-81c2-a0caf5abe51d.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="X1, Boult Audio X1,X1 Wired , Wired Headphones, Boult Audio Headphones, Boult Earphones, earphones" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ade2d76-27b5-42ec-81c2-a0caf5abe51d.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66a53b91108d28052e69490b"
    },
    "Title": "Boult Audio Bassbuds Loop 2 Wired in Ear Earphones with Mic, 10mm Powerful Driver for Extra Bass with Customizable Ear Loop (Teal Blue)\n",
    "size": "Free Size",
    "storage": "",
    "selling_price": "159",
    "mrp": "1059",
    "images0": "https://m.media-amazon.com/images/I/71c8x9XD1dL._SX522_.jpg",
    "images1": "https://m.media-amazon.com/images/I/81Vc92UAoKL._SX522_.jpg",
    "images2": "https://m.media-amazon.com/images/I/81xeqjnj3yL._SX522_.jpg",
    "images3": "https://m.media-amazon.com/images/I/71RBhBD0l+L._SX522_.jpg",
    "images4": "https://m.media-amazon.com/images/I/81-kay2VqVL._SX522_.jpg",
    "disp_order": `<div class="aplus-v2 mobile celwidget" cel_widget_id="m-aplus" data-csa-c-id="yr8ptt-inzuo0-er1c1-vxvau5" data-cel-widget="m-aplus">
<style type="text/css">
.aplus-v2 .aplus-3p-center-content {
text-align: center;
width: 100%;
}
</style>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="28igae-srtrye-5wyjuy-72f8wn" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Loop 2, Vicky Styling Loop 2" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4a828eda-dd31-45b8-be59-24c91ceeccf3.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4a828eda-dd31-45b8-be59-24c91ceeccf3.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="Loop 2, Vicky Styling Loop 2" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4a828eda-dd31-45b8-be59-24c91ceeccf3.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="d843t4-x9g8e5-nszopy-3zmjl3" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="BoomX Rich Bass with 10mm Drivers" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4c21624e-532e-4e29-a78c-96be3fd74985.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4c21624e-532e-4e29-a78c-96be3fd74985.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="BoomX Rich Bass with 10mm Drivers" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4c21624e-532e-4e29-a78c-96be3fd74985.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="6md948-e9p4to-o078x2-a5xrwi" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Awesome Design" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/108b2bce-6152-4797-a2f4-42db53cb2ba5.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/108b2bce-6152-4797-a2f4-42db53cb2ba5.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="Awesome Design" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/108b2bce-6152-4797-a2f4-42db53cb2ba5.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="w6c9a3-25chi9-lcu4xf-1fgyg3" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Water Resistant" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a250f827-cbb0-42b7-bda4-3c06d78c4037.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a250f827-cbb0-42b7-bda4-3c06d78c4037.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="Water Resistant" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a250f827-cbb0-42b7-bda4-3c06d78c4037.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
<div class="celwidget aplus-module 3p-module-b aplus-standard" cel_widget_id="aplus-m-3p-module-b" data-csa-c-id="6buf5v-xftmp4-bu50fq-q2jajj" data-cel-widget="aplus-m-3p-module-b">
<div class="aplus-3p-center-content">
<img alt="Choose your Style" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/741eebe1-141a-489c-b8ca-b2e2f5ff3b75.__CR0,0,970,600_PT0_SX970_V1___.jpg" class="a-spacing-base" data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/741eebe1-141a-489c-b8ca-b2e2f5ff3b75.__CR0,0,970,600_PT0_SX970_V1___.jpg"><noscript><img alt="Choose your Style" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/741eebe1-141a-489c-b8ca-b2e2f5ff3b75.__CR0,0,970,600_PT0_SX970_V1___.jpg"/></noscript>   </div>
</div>
</div>`,
    "verients": "",
    "__v": 0
  }]);
  const [products1, setProducts1] = useState({ pixelId: "" });

  useEffect(() => {
    fetchProducts1();
  }, []);
  const fetchProducts1 = async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      };

      const response = await fetch('/api/upichange', {
        method: 'GET',
        headers: headersList,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("upi", data.upi.upi)
        setProducts1(data.pixelId);
      } else {
      }
    } catch (error) {
    }

  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Layout data={products1}>
        <div id="container" style={{ overflow: "hidden" }}>
          <div style={{ height: "100%" }} data-reactroot="">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    div {\n        font-size: 20px;\n        text-align: center;\n    }\n"
              }}
            />
            <div>
              <div className="_2dxSCm">
                <div className="_38U37R" style={{
                  backgroundColor: "#2874f0",
                }}>
                  <div>
                    <div className="_1FWdmb pt-2" style={{
                      backgroundColor: "#2874f0",
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                      <a className="_3NH1qf mx-4 my-2" style={{
                        display: "flex", width: "65%"
                      }}>
                        <svg fill="#FFF" height="36" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                        <a className="Z4_K_h mx-3" style={{ width: 85 }}>
                          <img
                            src="/uploads/Q18Ifxk.webp"
                            className="_31Y9yB"
                            style={{ width: 85 }}
                          />
                        </a>
                      </a>

                      <div className="_2WBW6z" />
                      <a href="#/mobile.html#" className="_3NH1qf">
                        <svg
                          width={16}
                          height={16}
                          className='mt-3'
                          viewBox="0 0 15 15"
                          xmlns="external452e452e452e452e452e.html?link=http://www.w3.org/2000/svg"
                        >
                          <g fill="#fff" fillRule="evenodd">
                            <path d="m5.189 13.04c0 .596-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.596.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                            <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.591h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                            <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                            <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                            <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                          </g>
                        </svg>
                        <span className="_2tVMo0">1</span>
                      </a>
                    </div>
                    <div>
                      <div className="_3QNhdh " id="guidSearch">
                        <div className="ORogdv ">
                          <div className="_1k9EoO ">
                            <div className="_2d36Hu">
                              <a href="#/mobile.html#search" className="search-div">
                                <input
                                  type=""
                                  className="_1eMB9R my-1"
                                  placeholder="Search for Products, Brands and More"
                                  defaultValue=""
                                  style={{
                                    width: "92%",
                                    fontSize: 14,
                                    padding: "7px 10px",
                                    margin: 3,
                                    border: "none",
                                    borderRadius: 5
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={"/uploads/top-bg.a2aad345a2d903ce5659.jpg"} className="img-fluid" />

                <img className="mobi-only w-100" src="https://rukminim2.flixcart.com/fk-p-flap/800/311/image/f2422da39d7c3f73.jpg" />
                <div className="_2rW-uM _3sgvr0 _1cVt6K _1CXxjX" >
                  <div className="_3LrtWH ">
                    <div className="_3QuZpZ dod-div">
                      <div className="dod-label"> Deals of the Day </div>
                      <div className="_1oETR8">
                        <div className="_1dZamR _2mmD4F">
                          <IoMdClock style={{ fontSize: 19 }} className='mx-2' />
                          <div id="test">
                            {Math.floor(time / 60)}:{time % 60}</div>
                        </div>
                      </div>
                    </div>
                    <div className="_3Nxu4r">
                      <button className="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
                    </div>
                  </div>
                </div>
                <img className="mobi-only w-100" src="https://rukminim2.flixcart.com/fk-p-flap/800/311/image/6c789488d8064b86.jpg" />
                <div className='row' style={{ background: "#f1f2f4" }}>
                  {products?.length > 0 ? (
                    products
                      .sort((a, b) => b.selling_price - a.selling_price)
                      .map((item, index) => (
                        <Card key={item.id} item={item} index={index} />
                      ))
                  ) : (
                    <img
                      className="mt-3"
                      src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
                      alt="Loading"
                    />
                  )}


                </div>
              </div>
            </div>
          </div>
          <footer className="seofooter" id="seofooter"></footer>
        </div >
      </Layout>

    </>

  );
}

export default Home;
