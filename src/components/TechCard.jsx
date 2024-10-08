import PropTypes from "prop-types";

const TechCard = ({ title, logo }) => {
  return (
    <div className="flex flex-col items-center p-4 m-4 w-56 h-44 rounded-lg shadow-lg bg-base100">
      <img src={logo} alt={title} width={100} className="my-auto" />
      <p className="text-xl font-semibold">{title}</p>
    </div>
  );
};
TechCard.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default TechCard;
