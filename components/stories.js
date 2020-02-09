import Link from 'next/link';

export default function Stories() {
  return(
    <div>
      <section className="stories background-blue">
        <div className="container">
          <h1>Listen to the inspiring stories</h1>
          <div className="row profiles">
            <div className="col-md-4 col-xl-3">
                <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href='#' className="story-teller">Jane's story</a>
            </div>
            <div className="col-md-4 offset-xl-1">
                <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">John's story</a>
            </div>
            <div className="col-md-4 offset-xl-1 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">Edward's story</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
              <div className="col">
                <Link href="story">
                  <a className="more-stories">See more <i className="fa fa-angle-right"></i></a>
                </Link>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}