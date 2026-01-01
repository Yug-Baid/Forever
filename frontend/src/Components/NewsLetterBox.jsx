
const NewsLetterBox = () => {
  
  const onSubmit = (e)=>{
    e.preventDefalut();
  }

  return (
        <div className='text-center py-15'>
            <h2 className='text-2xl font-bold mb-3'>Subscribe now & get 20% off</h2>
            <p className='text-gray-400 mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form onSubmit={onSubmit}>
                <div className='flex flex-row justify-center items-center'>        
                <input type="email" placeholder='Enter your email' className='p-4 sm:w-1/3 w-1/2op border outline-none border-r-0' required />
                <button className='bg-black text-white p-[19px] border-none outline-none text-sm '>SUBSCRIBE</button>
                        </div>
            </form>
        </div>
  )
}

export default NewsLetterBox