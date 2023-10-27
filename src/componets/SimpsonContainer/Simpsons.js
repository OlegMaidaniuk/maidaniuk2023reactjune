import {Simpson} from "./Simpson";
const Simpsons = () => {
    const simpsons = [
        {id:1, name:'Homer', img:'https://media.slovoidilo.ua/media/publications/7/68115/68115-1_large.jpg'},
        {id:2, name:'Lisa', img:'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'},
        {id:3, name:'March', img:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
        {id:4, name:'Bart', img:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
        {id:5, name:'Maggi', img:'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
    ];
    return (
        <div>
            {simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};