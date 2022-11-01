import usDateString from "./../lib/usDateString";

const MDXPost = ({ title, date, children }) => {
  return (
    <div className="w-full flex flex-col prose">
      <h1>{title}</h1>
      {date && (
        <span className="text-sm font-light mb-5">{usDateString(date)}</span>
      )}
      {children}
      {children.title}
    </div>
  );
};

export default MDXPost;
