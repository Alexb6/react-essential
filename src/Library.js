import React, { Component } from 'react'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'



// Simpler form of function component

// const Library = ({books}) => {
//     return (
//         <div>            
//             {books.map(
//                 (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>
//             )}
//         </div>
//     )
// }


class Library extends Component {

    static defaultProps = { // displays as the default book if the links breaks
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
        ]
    }

    state = { // same as inside the constructor, so we can get rid of the constructor
        open: true,
        freeBookmark: true,
        hiring: false,
        data: [],
        loading: false
    } 

    componentDidMount () {
        this.setState({loading: true})
        fetch('https://hplsupport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }
    /* constructor(props) {
        super(props)
        // this.state = {
        //     open: true
        // }
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this) // bind "this" to make this accessible in the context of the toggleOpenClosed method
    } */
    /* toggleOpenClosed() {
        // this.setState({
        //     open: !this.state.open
        // })
        this.setState(prevState => ({ // callback is the same as above
            open: !prevState.open
        }))
    } */

    toggleOpenClosed = () => { // arrow function will bind this to the method as well if we erase the constructor
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    
    render() {
        const books = this.props.books // or const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return(
                                <div>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} ></img>
                                </div>
                            )
                        })}
                    </div>
                }
                <h1>The library is {this.state.open ? 'open' : 'closed'} </h1>
                <button onClick={this.toggleOpenClosed} >Change</button>
                {books.map(
                    (book, i) => 
                    <Book 
                        key={i} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} 
                        freeBookmark={this.state.freeBookmark} />
                )}                
            </div>
        )
    }
}

export default Library