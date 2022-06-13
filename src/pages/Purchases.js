import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getpurchases } from '../store/slices/Purchase.slice';

const Purchases = () => {
    const dispatch = useDispatch()
    
    

    //const purchases = useSelector(state => state.purchases)


    useEffect(()=>{
        dispatch (getpurchases())
    },[dispatch])
    
    
    return (
        <div>
            <h1>purchase</h1>
        </div>
    );
};

export default Purchases;