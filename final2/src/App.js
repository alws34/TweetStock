import './App.css';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import NewsPage from './Components/NewsPage';
import FavStocksPage from './Components/FavStocksPage';
import PopularTweets from './Components/PopularTweets';
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/FavStocksPage" element={<FavStocksPage />} />
        <Route path="/PopularTweets" element={<PopularTweets />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes> */}

      {/* <Route path="/Stock" element={<Stock />}/> */}
      {/* </Routes> */}
      <HomePage/>
      {/* <SignIn /> */}
      {/* <NewsPage/> */}
      {/* <About /> */}
      {/* <FavStocksPage/> */}
      {/* <PopularTweets/> */}
    </div >
  );
}

export default App;
