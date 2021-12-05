
import Review from '../Review';
import './style.css'
import './responsive.css'

function Deadline() {
    return (
      <div className="grid deadline">
            <div className="deadline-bg">
              <div className="grid wide">
                <div className="row">

                  <div className="col l-4 m-0 c-0"></div>
                  <div className="section col l-8 m-12 c-12">
                      <div className="content">
                          <div className="content-header">
                              <h2>Điểm khác biệt ở phòng khám chúng tôi</h2>
                              <p>Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                              </p>
                          </div>
                      </div>
                          <Review></Review>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
  
export default Deadline;