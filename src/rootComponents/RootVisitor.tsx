import { FC, useMemo, useState } from 'react'
import { FOODS } from './food';
import Food from '../Visitor/Concrete/Food';
import Luxury from '../Visitor/Concrete/Luxury';
import Services from '../Visitor/Concrete/Services';
import TaxVisitor from '../Visitor/Concrete/TaxVisitor';

const RootVisitor: FC<{}> = ({ }) => {
    const [item,setItem] = useState<Food | Luxury | Services | null>(null)
    return (<>
        <div className='card'>
            <div className='card-body'>
                {
                    <>
                    <div className='row'>
                        {FOODS?.map((food) => (
                            <div key={food?.type} className='col-4'>
                                <h3>{food?.type}</h3>
                                <ul className="list-group list-group-flush">
                                    {food.children.map((foodItem) => {
                                        return <li 
                                        onClick={() => {
                                            setItem(foodItem)
                                        }}
                                        key={foodItem.name} className={`list-group-item ${item === foodItem ? 'active': ''}`}>{foodItem?.name}</li>
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {
                        item ?
                        <div className='row mt-4'>
                            <div className='col-6'>
                                <label>{item.name}</label><br/>
                                <div>
                                    price: {item.price} rs,
                                    tax: {item.accept(new TaxVisitor())} rs
                                </div>
                            </div>
                    </div>
                        :null
                    }
                  
                    </>
                }
            </div>

        </div>

    </>)
}

export default RootVisitor;