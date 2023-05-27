import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import axios from 'axios';
import async from "hbs/lib/async";


const initialState ={
    movies:[],
    genresLoaded:false,
    genres:[],
};



export const getGenres= createAsyncThunk("Netflix/genres", async()=>{
    const {
        data:{genres},
    } = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    //console.log(data);
    return genres;
})

const createArrayFromRawData= async (array,moviesArray,genres)=>{
    array.forEach((movies)=>{
        const movieGenres=[];
        movie.genre_ids.forEach((genres)=>{
            const name= genres.find(({id})=>id===genre);
            if(name) movieGenres.push(name.name);
        });
        if(movie.backdrop_path){
            moviesArray.push({
                id:movie.id,
                name:movie?.original_name ? movie.original_name : movie.original_title,
                image:movie.backdrop_path,
                genres:movieGenres.slice(0,3),
            })
        }
    })
};

const getRawData= async (api,genres,paging) =>{
    const moviesArray=[]
    for(let i=1;moviesArray.length< 60 && i<10; i++)
    {
        const {data:results} = await axios.get(`${api}${paging?`&page=${i}` :""}`);
        createArrayFromRawData(results,moviesArray,genres);
        
        return moviesArray
    }
}

export const fetchMovies= createAsyncThunk("Netflix/trending", async({type},thunkApi)=>{
    const {
        netflix: {genres}
    }= thunkApi.getState();
    //return getRawData(`${TMDB_BASE_URL}/discover/$(type)?apikey=${API_KEY}&with_genres=${genres}`);
    return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?apikey=${API_KEY}`,genres,true);
})


const NetflixSlice= createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres=action.payload;
            state.genresLoaded=true;
        })
    },
});

export const store= configureStore({
    reducer:{
        netflix: NetflixSlice.reducer
    }
})
