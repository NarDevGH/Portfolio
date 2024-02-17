import './ProjectCardStyles.css'


export default function ProjectCard(){

    return(
        <div className="portfolio__item">
            <picture>
              <source type="image/jpeg" src='https://i.imgur.com/qnbIYuV.png' />
              <img className="portfolio__img" alt="portfolio item" />
            </picture>
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">Avo-Store</h3>
              <p className="portfolio__description--text">
                Web Application: Next.js, Tailwind.
              </p>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  className="button"
                  href="https://github.com/jgestradam/Avo-store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>
    )
}