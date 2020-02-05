import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';

export default function Help() 
{
  return (
    <div>
      <Header currentPage="message" />
      
      <section className="padding50">
        <div className="container text-center" style={{minHeight: "300px"}}>
          <h1 className="website-header">
            Thank you for reaching out to us.
          </h1>
          <p>We will come back to you within 2 days.</p>

          <Link href="/">
            <a className="learn-more-button">
              back to home page
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}