import { commentsData } from "../commendata.js";
import Comments from "./Comments.jsx";
function Comment() {
  return (
    <div className=" mt-32 max-w-content mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {commentsData.map((com) => {
        return <Comments {...com} />;
      })}
    </div>
  );
}

export default Comment;
