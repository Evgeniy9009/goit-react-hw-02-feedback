import PropTypes from "prop-types"
import css from "components/Section/Section.module.css"

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={css.titleText}>{title}</h2>
            {children}
        </section>
    )
}

export default Section

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired
}

