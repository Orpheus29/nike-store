import { ReviewCard } from '../components';
import { reviews } from '../constants';

const CustomerRewiews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl capitalize font-bold'>
        what our <span className='text-coral-red'>customers</span> say?
      </h3>
      <p className='m-auto mt-4 info-text max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
      {/* <div className='mt-11 flex flex-wrap gap-4'>
          <Button
            label='Shop now'
            iconURL={arrowRight}
          />

          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div> */}
    </section>
  );
};

export default CustomerRewiews;
