import { createSlice } from "@reduxjs/toolkit";
import { videos,articles, categories } from "./data";
const slice=createSlice({
    name:"ofppt",
    initialState:{
        mode:"principale",
        lvideos:videos
        ,larticles:articles,
        categorie:"",
        article:{
            image:"",
            titre:"",
            id:0,
            categorie:"",partie:[{soustitre:"",explication:""}]
        
        },
        articleb:false,
        
        },
        reducers:{
            setMode:(state,action)=>{
                state.mode=action.payload;
            }
            ,
            article:(state,action)=>{
                state.articleb=true;
                state.article=articles.find(e=>{
                    return e.id==action.payload;
                });

            },setarticles:(state,action)=>{
                state.categorie=action.payload;
            },
            filtrvideo:(state,action)=>{
                state.lvideos=videos.filter(e=>{
                    if(action.payload!="tout"){
                        return e.categorie==action.payload;
                    }else{
                        return true
                    }
                   
                })
            },
            filtrarticle:(state,action)=>{
                state.larticles=articles.filter(e=>{
                    if(action.payload!="tout"){
                        return e.categorie==action.payload;
                    }else{
                        return true
                    }
                })
            }
        }
});
const actions=slice.actions;
export {actions};
export default slice;