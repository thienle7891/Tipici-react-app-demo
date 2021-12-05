
import './style.css'
import './responsive.css'
function Review() {

    const reviewList = [
        { 
            title: 'Tư vấn miễn phí',
            image: 'http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c1.png'
        },
        { 
            title: 'Giá cả phải chăng',
            image: 'http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c2.png'
        },
        { 
            title: 'Bác sĩ chuyên môn giỏi',
            image: 'http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c3.png'
        },
        { 
            title: 'Nhân viên chuyên nghiệp',
            image: 'http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c4.png'
        },
        { 
            title: 'Phục vụ 24/7',
            image: 'http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c5.png'
        },
        { 
            title: 'Hơn 5000 khách hàng hài lòng',
            image: 'http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c6.png'
        },

    ]

    return (
      <div className="review row">
            {reviewList.map((reviewItem, index) => (
                <div className="review-item col l-6 m-6 c-12"    
                    key={index}>
                    <span className="review-image">
                        <img 
                            width='70px' 
                            height='70px' 
                            src={reviewItem.image}/>
                    </span>
                    <h3 className='review-title'>
                        {reviewItem.title}
                    </h3>
                </div>
            ))}
      </div>
    );
  }
  
  export default Review;