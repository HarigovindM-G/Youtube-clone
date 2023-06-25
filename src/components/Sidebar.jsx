import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

// const selectedCategory='New';

export const Sidebar = (props) =>{
    const handleClick=({key})=>{
        props.selectCategory(key)
    }
    return(
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:"auto", md:"95%"},
        flexDirection:{sx:"row",md:"column"},
    }}
    >
        {categories.map((item)=>(
            <button
            className='category-btn'
            style={{
                background: item.name=== props.selectedCategory &&
                'red',color:"white"
            }}
            key={item.name}
            onClick={()=>handleClick({key:item.name})}
            >
                <span style={{color: item.name===props.selectedCategory?
                'white':"red", marginRight:"15px"
                }}>{item.icon}</span>
                <span style={{opacity:item.name===props.selectedCategory?
                '1':'0.8'}}>{item.name}</span>
            </button>
        ))}

    </Stack>
  )}
