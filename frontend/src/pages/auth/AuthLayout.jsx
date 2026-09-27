import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import "../../routes/Auth.css";

function AuthLayout({ audience, mode }) {
  const isPartner = audience === "partner";
  const isRegister = mode === "register";
  const audienceLabel = isPartner ? "Food partners" : "Personal";
  const basePath = isPartner ? "/food-partner" : "/user";
  const modePath = isRegister ? "/register" : "/login";

  return (
    <main className="auth-page">
      <aside className="auth-visual" aria-label="Foodview introduction">
        <img
          className="auth-visual__image"
          src={heroImage}
          alt="A freshly prepared meal"
        />
        <div className="auth-visual__shade" />
        <Link className="auth-brand" to={basePath + "/login"}>
          <span className="auth-brand__mark" aria-hidden="true">
            f
          </span>
          <span>foodview</span>
        </Link>
        <div className="auth-visual__copy">
          <span className="auth-kicker">GOOD FOOD, CLOSER</span>
          <h1>
            {isPartner
              ? "Make every meal count."
              : "A little more good in every day."}
          </h1>
          <p>
            {isPartner
              ? "Bring your food to more people who are ready to discover it."
              : "Find the meals and local makers worth coming back to."}
          </p>
        </div>
        <span className="auth-visual__credit">
          Good things are growing here.
        </span>
      </aside>

      <section className="auth-panel" aria-labelledby="auth-title">
        <div className="auth-panel__topline">
          <Link className="auth-mobile-brand" to={basePath + "/login"}>
            <span className="auth-brand__mark" aria-hidden="true">
              f
            </span>
            <span>foodview</span>
          </Link>
          <span className="auth-panel__prompt">
            {isRegister ? "Already have an account?" : "New to foodview?"}{" "}
            <Link to={basePath + (isRegister ? "/login" : "/register")}>
              {isRegister ? "Sign in" : "Create account"}
            </Link>
          </span>
        </div>

        <div className="auth-content">
          <nav className="auth-audience" aria-label="Account type">
            <Link
              className={!isPartner ? "is-active" : ""}
              to={"/user" + modePath}
              aria-current={!isPartner ? "page" : undefined}
            >
              For you
            </Link>
            <Link
              className={isPartner ? "is-active" : ""}
              to={"/food-partner" + modePath}
              aria-current={isPartner ? "page" : undefined}
            >
              Food partner
            </Link>
          </nav>

          <div className="auth-heading">
            <span className="auth-kicker">{audienceLabel.toUpperCase()}</span>
            <h2 id="auth-title">
              {isRegister ? "Create your account" : "Welcome back"}
            </h2>
            <p>
              {isRegister
                ? isPartner
                  ? "Set up your partner profile to get started."
                  : "A good meal is just around the corner."
                : "Sign in to pick up where you left off."}
            </p>
          </div>

          <nav className="auth-mode" aria-label="Sign in or register">
            <Link
              className={!isRegister ? "is-active" : ""}
              to={basePath + "/login"}
              aria-current={!isRegister ? "page" : undefined}
            >
              Sign in
            </Link>
            <Link
              className={isRegister ? "is-active" : ""}
              to={basePath + "/register"}
              aria-current={isRegister ? "page" : undefined}
            >
              Create account
            </Link>
          </nav>

          <div className="auth-fields">
            {isRegister && (
              <>
                <label className="auth-field">
                  <span>{isPartner ? "Business name" : "Full name"}</span>
                  <input
                    autoComplete={isPartner ? "organization" : "name"}
                    placeholder={isPartner ? "Your business name" : "Your name"}
                  />
                </label>
                {isPartner && (
                  <label className="auth-field">
                    <span>Contact name</span>
                    <input
                      autoComplete="name"
                      placeholder="Person we can reach"
                    />
                  </label>
                )}
              </>
            )}
            <label className="auth-field">
              <span>Email address</span>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="auth-field">
              <span>Password</span>
              <input
                type="password"
                autoComplete={isRegister ? "new-password" : "current-password"}
                placeholder="At least 8 characters"
              />
            </label>
          </div>

          {!isRegister && (
            <div className="auth-options">
              <label className="auth-checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <button className="auth-text-button" type="button">
                Forgot password?
              </button>
            </div>
          )}

          <button className="auth-submit" type="button">
            {isRegister ? "Create account" : "Sign in"}
            <span aria-hidden="true">&#8594;</span>
          </button>

          {isRegister ? (
            <p className="auth-terms">
              By creating an account, you agree to our <a href="#terms">Terms</a>{" "}
              and <a href="#privacy">Privacy Policy</a>.
            </p>
          ) : (
            <p className="auth-help">
              Having trouble signing in?{" "}
              <a href="mailto:hello@foodview.example">Get in touch</a>
            </p>
          )}
        </div>

        <footer className="auth-footer">
          © 2026 foodview <span aria-hidden="true">·</span> Made for good food
        </footer>
      </section>
    </main>
  );
}

export default AuthLayout;