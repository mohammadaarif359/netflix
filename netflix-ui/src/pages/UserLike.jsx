import {
    onAuthStateChanged
  } from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config"
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLikedMovies } from '../store';
import { styled } from "styled-components";
import Nav from "../components/Nav";
import Card from "../components/Card";

const UserLike = () => {
    const movies = useSelector((state) => state.netflix.movies);
    console.log('like moives',movies)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);
  
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
      else navigate("/login");
    });
  
    useEffect(() => {
      if (email) {
        dispatch(getUsersLikedMovies(email));
      }
    }, [email]);
  
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

    return (
        <Container>
          <Nav isScrolled={isScrolled} />
          <div className="content flex column">
            <h1>My List</h1>
            <div className="grid flex">
              {movies && movies.map((movie, index) => {
                return (
                  <Card
                    movieData={movie}
                    index={index}
                    key={movie.id}
                    isLiked={true}
                  />
                );
              })}
            </div>
          </div>
        </Container>
    );
}

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;

export default UserLike