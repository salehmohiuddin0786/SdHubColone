import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Regestrion() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <Header/>
    

    <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSd0z9wffmY77WoLgFZXn5HflaBRK2g-ewm8OEzP6Hmepx9XQw/viewform"> regestrion from</a>
    <Footer/>
    </>
  );
}
