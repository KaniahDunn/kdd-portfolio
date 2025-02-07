function Card({ title, content }) {
    return (
      <div className='p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{content}</p>
      </div>
    );
  }
  
  export default Card;
  