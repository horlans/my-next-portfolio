import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {};
type Inputs = {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
};
const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:samhorlans@gmail.com?subject=${data.Subject}&body= Hi Sam, I'm ${data.Name}. ${data.Message} (${data.Email})`;
  };
  return (
    <div
      className='h-screen flex 
  relative
   flex-col mx-auto justify-evenly items-center'
    >
      <div
        className='absolute top-24 
      text-xl tracking-[16px]
       text-gray-400 font-semibold  
        mb-4'
      >
        <h3 className='uppercase'>contact me</h3>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className=' flex space-x-2'>
            <input
              {...register('Name')}
              type='text'
              placeholder='Full Name'
              className='contact-input'
            />
            <input
              {...register('Email')}
              type='email'
              placeholder='Email'
              className='contact-input'
            />
          </div>
          <input
            {...register('Subject')}
            type='text'
            placeholder='Subject'
            className='contact-input'
          />
          <textarea
            {...register('Message')}
            name=''
            id=''
            cols={30}
            rows={5}
            placeholder='Message'
            className='contact-input'
          ></textarea>
          <button
            type='submit'
            className='bg-[#f8e48a] py-2
            hover:bg-[#f7ab0a] rounded-md
          text-black font-bold text-lg'
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
