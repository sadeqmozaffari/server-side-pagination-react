const Card = ({ imageUrl, name, skills, mobile, email }) => {
  return (
    <div className="card text-center border-0 shadow-lg">
      <div className="card-body">
        <img
          className="d-inline-block rounded-circle mb-3"
          src={imageUrl}
          width="96"
          alt="img"
        />
        <h6>{name}</h6>
        <p className="fs-sm text-muted">{skills}</p>
        <p className="mt-4 mb-0 fs-sm fw-bold ">{mobile}</p>
        <p className="m-1 mb-0 fs-sm fw-bold ">{email}</p>
      </div>
    </div>
  );
};
export default Card;
