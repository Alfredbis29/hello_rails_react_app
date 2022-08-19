import React,{useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { fetchGreetingApi } from './redux/greetings/greetings'

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greetingsReducer);
  useEffect(() => {
    dispatch(fetchGreetingApi());
  } , [dispatch]);
  return (
    <div>Greetings: {greeting}</div>
  )
}

export default Greetings