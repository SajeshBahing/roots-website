import Header from "../components/header";
import Footer from "../components/footer";
import Stories from "../components/stories";

export default function About() {
  return (
    <div>
      <Header currentPage="about" />

      <section className="padding50">
        <div className="container">
          <h1 className="website-header">
            Our story
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>

          <a href="#" className="learn-more-button">
            Chat with us
          </a>
          </div>
      </section>

      <Stories />

      <Footer />
    </div>
  );
}