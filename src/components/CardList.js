import React from "react";
import Card from './Card.js';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('NOOOOOO');
    // }
    // const cardsArray = robots.map((user) => {
    //     return (
    //         <Card 
    //         key={user.id} 
    //         id={user.id} 
    //         name={user.name} 
    //         email={user.email}
    //         />
    //     );
    // })
    return (
        <>
            {
                robots.map((user) => {
                    return (
                        <Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email}
                        />
                    );
                })
            }
        </>
    )
}

export default CardList;