import Star from "./Star";

function Comments({ name, rating, comment, date }) {
  return (
    <div className="p-4 flex flex-col gap-2 border rounded-xl bg-box-bg h-60">
      <span className="text-text-box font-bold text-lg">{name}</span>
      <div className="flex items-center justify-between">
        <Star rating={rating} />
        <span className="text-text-box-black">{date}</span>
      </div>
      <p className="text-text-box-black mt-4">{comment}</p>
    </div>
  );
}

export default Comments;
