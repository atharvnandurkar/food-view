import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import "../../routes/Auth.css";

function ChooseRegister() {
  return (
    <main className="auth-page">
      <aside className="auth-visual" aria-label="Foodview introduction">
        <img
          className="auth-visual__image"
          src={heroImage}
          alt="A freshly prepared meal"
        />
        <div className="auth-visual__shade" />
        <Link className="auth-brand" to="/">
          <span className="auth-brand__mark" aria-hidden="true">
            f
          </span>
          <span>foodview</span>
        </Link>
        <div className="auth-visual__copy">
          <span className="auth-kicker">GOOD FOOD, CLOSER</span>
          <h1>Find your place at the table.</h1>
          <p>Discover good food, or bring your own to the people looking for it.</p>
        </div>
        <span className="auth-visual__credit">
          Good things are growing here.
        </span>
      </aside>

      <section className="auth-panel" aria-labelledby="auth-title">
        <div className="auth-panel__topline">
          <Link className="auth-mobile-brand" to="/">
            <span className="auth-brand__mark" aria-hidden="true">
              f
            </span>
            <span>foodview</span>
          </Link>
          <span className="auth-panel__prompt">
            Already have an account? <Link to="/user/login">Sign in</Link>
          </span>
        </div>

        <div className="auth-content">
          <div className="auth-heading">
            <span className="auth-kicker">JOIN FOODVIEW</span>
            <h2 id="auth-title">Choose your account</h2>
            <p>How would you like to use foodview?</p>
          </div>

          <div className="auth-choice-list">
            <Link className="auth-choice" to="/user/register">
              <span className="auth-choice__copy">
                <strong>For myself</strong>
                <span>Find local meals and food makers.</span>
              </span>
              <span className="auth-choice__arrow" aria-hidden="true">
                &#8594;
              </span>
            </Link>
            <Link className="auth-choice" to="/food-partner/register">
              <span className="auth-choice__copy">
                <strong>For my food business</strong>
                <span>Share your menu with more people.</span>
              </span>
              <span className="auth-choice__arrow" aria-hidden="true">
                &#8594;
              </span>
            </Link>
          </div>
        </div>

        <footer className="auth-footer">
          © 2026 foodview <span aria-hidden="true">·</span> Made for good food
        </footer>
      </section>
    </main>
  );
}

export default ChooseRegister;