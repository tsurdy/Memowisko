import React, { useState } from "react";
import "./App.css";
import Memes from "./components/Memes";
import Navbar from "./components/Navbar";
import CreateMeme from "./components/CreateMeme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


//stała tablica memów 
const memesArray = [
  {
    id: 1,
    name: "Mem",
    image:
      "https://www.blasty.pl/upload/images/large/2017/11/kiedy-twoj-mem_2017-11-06_18-51-41.jpg",
    likes: 17,
    dislikes: 13,
    favorite: false,
  },
  {
    id: 2,
    name: "Co ja pacze",
    image:
      "https://ocdn.eu/images/pulscms/N2M7MDA_/f2b8117455490e9bde8f7cadccc5e9f1.jpg",
    likes: 7,
    dislikes: 1,
    favorite: false,
  },
  {
    id: 3,
    name: "Kawa",
    image:
      "https://marketplace.canva.com/EAEuTVc_VxE/1/0/1600w/canva-kot-przed-kaw%C4%85-po-kawie-dwa-zdj%C4%99cia-i-tekst-mem-6CDVPvfSmvM.jpg",
    likes: 4,
    dislikes: 2,
    favorite: false,
  },
  {
    id: 4,
    name: "Einstein",
    image:
      "https://blog.platontv.pl/wp-content/uploads/2017/06/4b06123310_einstein_wiesz_ze_.jpg",
    likes: 11,
    dislikes: 0,
    favorite: true,
  },
  {
    id: 5,
    name: "Co?",
    image: "https://memy.pl/show/big/uploads/Post/12471/14420684169267.jpg",
    likes: 20,
    dislikes: 5,
    favorite: true,
  },
  {
    id: 6,
    name: "Skarpety",
    image: "https://memy.memsekcja.pl/images/gnDPzKN.420.mem.jpeg",
    likes: 0,
    dislikes: 0,
    favorite: false,
  },
];

export default function App() {
  //deklaracja stanu `memes` i funkcji `setMemes` z użyciem useState
  const [memes, setMemes] = useState(memesArray);

  //filtrowanie memów czy są regular czy hot
  const regularMemes = memes?.filter((meme) => meme.likes - meme.dislikes <= 5);
  const hotMemes = memes?.filter((meme) => meme.likes - meme.dislikes > 5);

  //funkcja do obsługi buttona like
  const handleLike = (memeId) => {
    //kopiowanie aktualnej tablicy memów
    const memesCopy = [...memes];
    memesCopy.map((meme) => {
      if (meme.id === memeId) {
        return { ...meme, likes: meme.likes++ };
      }

      return meme;
    });
    //ustawienie nowej tablicy 
    setMemes(memesCopy);
  };
  //funkcja do obsługi buttona dislike
  const handleDislike = (memeId) => {
    const memesCopy = [...memes];
    memesCopy.map((meme) => {
      if (meme.id === memeId) {
        return { ...meme, likes: meme.dislikes++ };
      }

      return meme;
    });

    setMemes(memesCopy);
  };
  //funkcja do dodanie nowego mema 
  const handleCreateMeme = (meme) => {
    const memesCopy = [...memes];
    memesCopy.push(meme);

    setMemes(memesCopy);
  };

  //funkcja do obsługi buttona "gwiazdki"  
  const handleFavoriteClick = (memeId) => {
    const indexMeme = memes.findIndex((meme) => memeId === meme.id);
    const updatedMemes = [...memes].map((meme, index) => {
      if (indexMeme === index) {
        //aktulzacja mema jeśli jest ulubiony 
        const updatedMeme = { ...meme, favorite: !meme.favorite };
        return updatedMeme;
      } else {
        return meme;
      }
    });

    setMemes(updatedMemes);
  };

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          {/* <RegularMemes memes={memes} /> */}
          <Route
            path="/regular"
            element={
              <Memes
                handleLike={handleLike}
                handleDislike={handleDislike}
                memes={regularMemes}
                handleFavoriteClick={handleFavoriteClick}
              />
            }
          />
          <Route
            path="/hot"
            element={
              <Memes
                handleLike={handleLike}
                handleDislike={handleDislike}
                memes={hotMemes}
                handleFavoriteClick={handleFavoriteClick}
              />
            }
          />
          <Route
            path="create-meme"
            element={
              <CreateMeme
                memesLength={memes.length}
                handleCreateMeme={handleCreateMeme}
              />
            }
          />
          <Route path="/" element={<Navigate to="/regular" />} />
          <Route
            path="*"
            element={
              <div>
                <h2>Page not found </h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
