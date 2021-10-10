import React, { useEffect, useState } from 'react'
import api from './firebase';


export const electronics = [
    {
        id: 1,
        name: 'Fifa 19',
        price: 49.99,
        imagem: require('./src/assets/catergories/pizza.png'),
        quantidade:1
    },
    {
        id: 2,
        name: 'Amazon Echo',
        price: 199,
        imagem: require('./src/assets/catergories/burger.png'),
        quantidade:1
    },
    {
        id: 3,
        name: 'Bose QC 35 Headphones',
        price: 300,
        imagem: require('./src/assets/catergories/pizza.png'),
        quantidade:1
    }
]

export const books = [
    {
        id: 4,
        name: 'How to Kill a Mocking Bird',
        price: 10,
        "imagem":"http://localhost:3000/uploads\\1633188913323-895617344ak-47.png",
        quantidade:1
    },
    {
        id: 5,
        name: 'War of Art',
        price: 7,
        "imagem":"http://localhost:3000/uploads\\1633195124078-904318560ma4a4.png",
        quantidade:1
    },
    {
        id: 6,
        name: 'Relentless',
        price: 5.99,
        "imagem":"http://localhost:3000/uploads\\1633199368240-515161602USP S cortex.png",
        quantidade:1
    }
]

export const armas = [{
    
    "id":94,
    "imagem":"http://localhost:3000/uploads\\1633188913323-895617344ak-47.png",
    "name":"ak-47",
    "price":45.5,
    "quantidade":1
 },
 
 {
    
    "id":95,
    "imagem":"http://localhost:3000/uploads\\1633195124078-904318560ma4a4.png",
    "name":"M4A4",
    "price":255.9,
    "quantidade":1
 },
 {
    
    "id":100,
    "imagem":"http://localhost:3000/uploads\\1633199368240-515161602USP S cortex.png",
    "name":"USP-S CORTEX 2",
    "price":190,
    "quantidade":1
 },
 {
    
    "id":101,
    "imagem":"http://localhost:3000/uploads\\1633200414042-108288292USP.png",
    "name":"USP-S",
    "price":222,
    "quantidade":1
 }]
