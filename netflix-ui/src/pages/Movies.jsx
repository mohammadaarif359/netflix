import {
    onAuthStateChanged
  } from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config"
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import { styled } from "styled-components";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Notavialable from "../components/Notavialable";
import SelectGenre from "../components/SelectGenre";

const Movies = () => {
  // scrolled state
  const [isScrolled, setIsScrolled] = useState(false)
  
  // get movies from netflix movies store
  const movies = useSelector((state) => state.netflix.movies);
   // get genres from netflix genres store
  const genres = useSelector((state) => state.netflix.genres);
  // get genresLoaded from netflix genresLoaded store
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    //if(currentUser) navigate("/");
  })

  console.log('movies components',movies)
  return (
    <Container>
        <div className="navbar">
            <Nav isScrolled={isScrolled}/>
        </div>
        <div className="data">
            <SelectGenre genres={genres} type="movie" />
            {movies ?
                <Slider movies={movies} /> :
                <Notavialable/> 
            }  
        </div>
    </Container>
  )
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default Movies