import React from 'react';
import './Search.css';

function Search(props) {
    return (
        <form onSubmit={event => props.handleSubmit(event)}>
            <div className='searchBox'>
                <label>Search</label>
                <input type='text' onChange={event => props.setSearchTerm(event.target.value)} required />
                <input type='submit' />
            </div>
            <div className='filterBox'>
                <label htmlFor='printType'>Print Type:</label>
                <select id='printType' onChange={event => props.setPrintType(event.target.value)}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>magazines</option>
                </select>
                <label htmlFor='bookType'>Book Type:</label>
                <select id='bookType' onChange={event => props.setState(event.target.value)}>
                    <option value='no-filter'>No Filter</option>
                    <option value='partial'>Partial</option>
                    <option value='full'>Full Text</option>
                    <option value='free-ebooks'>Free Ebooks</option>
                    <option value='paid-ebooks'>Paid Ebooks</option>
                    <option value='ebooks'>All Ebooks</option>
                </select>
            </div>
        </form>
    );
}



export default Search;