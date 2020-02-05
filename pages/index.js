import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';
import Stories from "../components/stories";

export default function Index() {
  return (
    <div className="main-body">
      <Header />

      <section className="big-text">
        <div className="container">
          <h1>
            You can make a big difference by giving a small <br />opportunity
          </h1>
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>What</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
            </div>
            <div className="col-sm">
              <h1>Why</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
            </div>
            <div className="col-sm">
              <h1>How</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link href="/about">
                <a className="learn-more-button">Learn more about us</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Stories />

      <Footer />
    </div>
  );
}