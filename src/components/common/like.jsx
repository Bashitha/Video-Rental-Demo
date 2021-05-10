const Like = ({ onLike, isLiked }) => {
  let classes = "fa fa-heart";
  if (!isLiked) classes += "-o";
  return (
    <i
      onClick={onLike}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
