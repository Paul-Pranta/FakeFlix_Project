

import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));


  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c9d0582d75msh2c059df1979decdp1144d7jsn48eb75767eff',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);


  return (
    <div>

      <section className={`${styles.movieSection}`}>
        <div className={styles.container}>

          <h1>TV Series And Movies</h1>

          <div className={styles.card_section}>

            {
              main_data.map((curEle) => {

                return <MovieCard key={curEle.id} {...curEle} />

              })
            }

          </div>

        </div>

      </section>

    </div>
  )



}

export default Movie