import React, { Component } from 'react'
import {render} from 'react-dom'
import Library from './Library'

let bookList = [
    {"title":"White Teeth", "author":"Zadie Smùith", "pages": 260 },
    {"title":"White Teeth", "author":"Zadie Smùith", "pages": 260 },
    {"title":"White Teeth", "author":"Zadie Smùith", "pages": 260 }
] 



render(
    <Library books={bookList}/>,
    document.getElementById('root')
)